import { GenerateButton } from "@/components/generate-button"
import { VerificationForm } from "@/components/verification-form"
import { authenticator } from "otplib"
import { QRCodeSVG } from "qrcode.react"

export default function Home() {
  const secret = authenticator.generateSecret()

  const user = "user"
  const service = "next-otp service"

  const otpauth = authenticator.keyuri(user, service, secret)

  return (
    <main className="flex min-h-screen flex-col items-center  justify-center gap-8 p-24">
      <div className="flex items-center space-x-4">
        <span>secret {secret}</span>
        <GenerateButton />
      </div>

      <div className="flex flex-col items-center">
        {otpauth}
        <QRCodeSVG value={otpauth} />
        <span>
          Scan this QR Code image with Google Authenticator, Authy or any other
          compatible 2FA app.
        </span>
      </div>

      <div>
        <VerificationForm />
      </div>
    </main>
  )
}
