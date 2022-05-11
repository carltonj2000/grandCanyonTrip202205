export default {
  base: "/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        entryFileNames: "assets/[name].js",
      },
    },
  },
};
