"use server";

import { action } from "@/actions/safe-action";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string(),
});

export const createUserAction = action(createUserSchema, async ({ name }) => {
  console.log("createUserAction", name);

  return 0;
});
