import { applicationInput } from "@contracts/application";
import { applications } from "@db/schema";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";

export const applicationRouter = createRouter({
  submit: publicQuery.input(applicationInput).mutation(async ({ input }) => {
    const [result] = await getDb().insert(applications).values({
      ...input,
      contractTimeRemaining: input.underContract === "yes" ? input.contractTimeRemaining : null,
    }).$returningId();

    return {
      ok: true as const,
      reference: `WH-${String(result.id).padStart(5, "0")}`,
    };
  }),
});
