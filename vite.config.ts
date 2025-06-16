import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const buildDate = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = currentDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return JSON.stringify(formattedDate);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/etak-andemudel-react/",
  define: {
    __BUILD_DATE__: buildDate(),
  },
});
