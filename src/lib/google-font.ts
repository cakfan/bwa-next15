export async function loadGoogleFont(
  font: string,
  weight: number = 400,
  text: string = "",
): Promise<ArrayBuffer> {
  // Buat URL dengan weight dan text (text optional)
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`;

  // Fetch CSS dari Google Fonts
  const css = await (await fetch(url)).text();

  // Ambil URL font TTF dari @font-face src
  const resource = css.match(
    /src: url\(([^)]+)\) format\('(opentype|truetype)'\)/,
  );

  if (!resource) {
    throw new Error("failed to parse font CSS");
  }

  // Fetch binary font data
  const fontRes = await fetch(resource[1]);

  if (!fontRes.ok) {
    throw new Error(`failed to load font: ${fontRes.status}`);
  }

  return fontRes.arrayBuffer();
}
