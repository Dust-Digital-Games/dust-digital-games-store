import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import PrivateLayout from '../../layouts/PublicLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrivateLayout>
      <Component {...pageProps} />
    </PrivateLayout>
  );
}
