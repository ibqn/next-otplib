import { z } from "zod"

export const codeSchema = z.object({
  code: z.string().length(6),
})

export type CodeSchemaType = z.infer<typeof codeSchema>
