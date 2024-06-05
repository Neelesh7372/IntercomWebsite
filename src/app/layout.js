export const metadata = {
  title: "Intercom System",
  description: "Smart Intercom System for your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
