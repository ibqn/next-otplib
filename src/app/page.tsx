import { authenticator } from "otplib"

export default function Home() {
  const secret = authenticator.generateSecret()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      secret {secret}
    </main>
  )
}
