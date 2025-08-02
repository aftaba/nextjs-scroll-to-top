import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
  ],
  external: ["react", "react-dom"],
};

