import "./globals.css";
import {inter} from '@/app/components/font'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
