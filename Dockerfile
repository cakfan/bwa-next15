# Gunakan image Bun yang sudah siap pakai
FROM oven/bun

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Copy semua file ke dalam container
COPY . .

# Install dependency
RUN bun install

# Build Next.js
RUN bun run build

# Jalankan aplikasi Next.js
CMD ["bun", "run", "start"]
