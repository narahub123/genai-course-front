import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/genai-course-front/", // GitHub 저장소 이름 입력
  plugins: [react()],
});
