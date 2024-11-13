// remote-app/vite.config.ts
import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_singleFetch: true,
				v3_lazyRouteDiscovery: true,
			},
		}),
		tsconfigPaths(),
		federation({
			name: "remoteApp",
			filename: "remoteEntry.js",
			exposes: {
				"./Button": "./app/components/Button",
				"./store": "./app/store",
			},
			shared: ["react", "react-dom", "jotai"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
	ssr: {
		noExternal: true,
	},
});
