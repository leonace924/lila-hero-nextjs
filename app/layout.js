import { Raleway } from "next/font/google"
import { Header } from "@/components/header"
import "@/styles/globals.css"

const raleWay = Raleway({ subsets: ["latin"] })

export const metadata = {
  title: "lila.test",
  description: "New Hero section",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleWay.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
