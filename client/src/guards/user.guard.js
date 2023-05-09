import { Navigate, Outlet } from 'react-router-dom';

import { getAuthToken } from '../services/auth.service';

export const UserGuard = () => {
  const { token, user } = getAuthToken();

  if (token && !user.isAdmin && user.isActive) {
    return <Outlet />;
  }

  if (token && user.isAdmin) {
    return <Navigate to={'/home_admin'} />;
  }

  return <Navigate to={'/'} />;
};
