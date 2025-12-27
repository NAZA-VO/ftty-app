// app/layout.js
import './globals.css';
import Providers from '../components/Providers'

export const metadata = {
  title: 'FTTY - Gaming Assets Crypto Marketplace',
  description: 'Purchase gaming assets with FTTY token - the future of gaming economy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}