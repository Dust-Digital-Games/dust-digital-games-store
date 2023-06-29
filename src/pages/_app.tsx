import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import PrivateLayout from '../../layouts/PublicLayout';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark"  enableSystem={false}>
      <PrivateLayout>
        <Component {...pageProps} />
      </PrivateLayout>
    </ThemeProvider>
  );
}
