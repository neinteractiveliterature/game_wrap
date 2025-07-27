/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "game-wrap",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Astro("GameWrap", {
      domain: {
        name: "gamewrap.interactiveliterature.org",
        dns: sst.cloudflare.dns(),
      },
    });
  },
});
