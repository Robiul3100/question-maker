import { useEffect } from 'react';
import { AppRoutes } from './routes';
import { useAuthStore } from './stores/authStore';
import { onAuthChange } from './lib/firebase';

export default function App() {
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  useEffect(() => {
    setLoading(true);
    const unsub = onAuthChange((user) => {
      setUser(
        user
          ? {
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
            }
          : null,
      );
      setLoading(false);
    });
    return () => unsub();
  }, [setUser, setLoading]);

  return <AppRoutes />;
}
