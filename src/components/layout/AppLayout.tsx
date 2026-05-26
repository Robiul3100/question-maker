import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

/**
 * Mobile-first wrapper used by all authenticated routes.
 * Constrains content to 428px and reserves space for the bottom nav.
 */
export function AppLayout() {
  return (
    <div className="app-shell pb-16">
      <Outlet />
      <BottomNav />
    </div>
  );
}
