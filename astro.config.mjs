import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const  SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://alexdominguez18.github.io";
const SCRIPT = process.env.npm_lifecycle_event || "";
const isBuild =  SCRIPT.includes("astro build");

let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

export default defineConfig({
  server: { port: SERVER_PORT },
  integrations: [tailwind()],
  site: BASE_URL,
});