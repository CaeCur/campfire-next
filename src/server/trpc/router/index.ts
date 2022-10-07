// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { campgroundRouter } from "./campground";

export const appRouter = t.router({
  example: exampleRouter,
  campground: campgroundRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
