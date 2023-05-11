import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const session = await getSession();
      if (!session) {
        router.push('/auth');
      }
    }
    fetchData();
  }, [router]);

  return (
    <main>
      <p>Secure stuff that requires login.</p>
      <button onClick={() => signOut()}>Log out</button>
    </main>
  );
}


//La sesion debería estar planteada como un custom hook con useContext