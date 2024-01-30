"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type Props = {}

export const GenerateButton = (props: Props) => {
  const router = useRouter()

  return <Button onClick={() => router.refresh()}>GenerateButton</Button>
}
