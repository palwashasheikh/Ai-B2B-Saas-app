import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
};

export default withSentryConfig(nextConfig, {
  org: "kjhj",
  project: "echo-saas",

  silent: !process.env.CI,

  widenClientFileUpload: true,
});