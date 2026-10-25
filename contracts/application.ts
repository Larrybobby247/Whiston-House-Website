import { z } from "zod";

export const applicationInput = z.object({
  fullName: z.string().trim().min(2, "Please enter your first and last name.").max(120),
  age: z.number().int().min(18, "Applicants must be at least 18.").max(80),
  hasPassport: z.enum(["yes", "no"]),
  currentOccupation: z.string().trim().min(2, "Please enter your current occupation.").max(120),
  role: z.enum(["nanny", "housekeeper", "driver"]),
  experienceYears: z.number().int().min(0).max(60),
  underContract: z.enum(["yes", "no"]),
  contractTimeRemaining: z.string().trim().max(120).optional(),
  currentSalary: z.string().trim().min(1, "Please enter your current salary.").max(80),
  gender: z.string().trim().min(1, "Please enter your gender.").max(60),
  country: z.string().trim().min(2, "Please enter your country.").max(80),
}).superRefine((value, ctx) => {
  if (value.underContract === "yes" && !value.contractTimeRemaining) {
    ctx.addIssue({
      code: "custom",
      path: ["contractTimeRemaining"],
      message: "Please enter the time remaining on your contract.",
    });
  }
});

export type ApplicationInput = z.infer<typeof applicationInput>;
