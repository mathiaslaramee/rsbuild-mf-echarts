import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import rspack from "@rspack/core";
import mfConfig from "./modulefederation.config";

export default defineConfig({
	server: {
		port: 3000,
	},
	tools: {
		rspack: {
			output: {
				publicPath: "auto",
			},
			plugins: [new rspack.container.ModuleFederationPlugin(mfConfig)],
		},
	},
	plugins: [pluginReact()],
});

