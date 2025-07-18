import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader easing="ease" showSpinner={false} color="var(--primary)" />
      {children}
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
