import { createServer } from "vite";
import react from "@vitejs/plugin-react";

export const dev = async () => {
  const server = await createServer({
    configFile: false,
    envFile: false,
    root: process.cwd(),
    server: {
      port: 9290,
    },
    plugins: [react()],
  });

  await server.listen();
  server.printUrls();
};
