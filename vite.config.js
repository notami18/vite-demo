import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 8081;

  console.log(command, mode);

  const env = loadEnv(mode, process.cwd());

  console.log(env.VITE_NAME);

  if (mode === "development") {
    console.log("modo development");
    return {
      server: {
        port,
      },
    };
  } else {
    console.log("modo production");
    return {
      build: {
        lib: {
          entry: resolve(__dirname, "lib", "main.js"),
          name: "demo",
          fileName: (format) => `demo.${format}.js`
        },
        // rollupOptions: {
        //   input: {
        //     main: resolve(__dirname, 'index.html'),
        //     help: resolve(__dirname, 'help', 'help.html')
        //   },
        // }
      },
    };
  }
});

// export default defineConfig({
//   server: {
//     port: 8081,
//   },
// });
