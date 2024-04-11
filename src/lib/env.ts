import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    GHITHUB_ID: z.string().url(),
    GHITHUB_SECRET: z.string().url(),
  },
  client: {},
  experimental__runtimeEnv: {},
});
