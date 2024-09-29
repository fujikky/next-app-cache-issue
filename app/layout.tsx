// This fetchCache doesn’t work. Why?
export const fetchCache = "force-no-store";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
