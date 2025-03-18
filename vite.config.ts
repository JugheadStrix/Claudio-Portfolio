import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/Claudio-Portfolio/",
  plugins: [react()],
  server: {
    host: true, // Permet d'écouter sur toutes les adresses réseau
  },
});
