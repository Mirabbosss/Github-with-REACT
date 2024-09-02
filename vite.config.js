import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@containers": path.resolve(__dirname, "./src/components/containers"),
    "@ui": path.resolve(__dirname, "./src/components/ui"),
    "@layouts": path.resolve(__dirname, "./src/components/layouts"),
    "@form": path.resolve(__dirname, "./src/components/form"),
    "@images": path.resolve(__dirname, "./src/assets/images"),
    "@icons": path.resolve(__dirname, "./src/components/icons"),
    "@mocks": path.resolve(__dirname, "./src/mocks"),
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@layout": path.resolve(__dirname, "./src/layouts"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@router": path.resolve(__dirname, "./src/router"),
    "@service": path.resolve(__dirname, "./src/service"),
    "@context": path.resolve(__dirname, "./src/context"),
    "@reducer": path.resolve(__dirname, "./src/reducer"),
  },
},
})