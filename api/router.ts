import { createRouter, publicQuery } from "./middleware";
import { applicationRouter } from "./applicationRouter";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  application: applicationRouter,
});

export type AppRouter = typeof appRouter;
