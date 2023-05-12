import { ethers } from 'ethers';
import { signIn } from 'next-auth/react';

// Fix typescript errors for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Auth() {
  return (
    <main>
      <p>
        After clicking the button you will be prompted to connect your wallet with this site, then
        you will need to sign a nonce (random hex string) to prove you own the account.
      </p>
      <button onClick={onSignInWithCrypto}>Sign in with Metamask</button>
    </main>
  );
}

async function onSignInWithCrypto() {
  try {
    if (!window.ethereum) {
      window.alert('Please install MetaMask first.');
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const publicAddress = await signer.getAddress();

    const response = await fetch('/api/auth/crypto/generateNonce', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        publicAddress,
      }),
    });
    const responseData = await response.json();

    const signedNonce = await signer.signMessage(responseData.nonce);

    await signIn('crypto', {
      publicAddress,
      signedNonce,
      callbackUrl: '/',
    });
  } catch {
    window.alert('Error with signing, please try again.');
  }
}
