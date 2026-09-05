import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Painel Pix Nomad",
  description: "Aplicativo de painel automático com integração Pix para Nomad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}