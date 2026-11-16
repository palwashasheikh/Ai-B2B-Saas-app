// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://141a723515a4b4fb0305471bea9b04e0@o4512389794496512.ingest.de.sentry.io/4512391911440464",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
