import "./globals.css";

export const metadata = {
  title: "RomeXity",
  description: "Luxury Redefined",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}