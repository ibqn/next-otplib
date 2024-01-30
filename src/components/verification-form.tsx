"use client"

import { codeSchema, type CodeSchemaType } from "@/schema/code"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

type Props = {}

export const VerificationForm = (props: Props) => {
  const form = useForm<CodeSchemaType>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      code: "000000",
    },
  })

  return <div>VerificationForm</div>
}
