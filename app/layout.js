// app/layout.js
import './globals.css';

export const metadata = {
  title: 'FTTY - Gaming Assets Crypto Marketplace',
  description: 'Purchase gaming assets with FTTY token - the future of gaming economy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}