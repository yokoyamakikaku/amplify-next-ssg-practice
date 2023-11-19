import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SSGの検証',
  description: 'Amplify を使ったSSGの検証',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
