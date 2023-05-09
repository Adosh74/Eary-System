import { Navigate, Outlet } from 'react-router-dom';

import { getAuthToken } from '../services/auth.service';

export const AdminGuard = () => {
  const { token, user } = getAuthToken();

  if (token && user.isAdmin) {
    return <Outlet />;
  }
  if (token && user.isActive) {
    return <Navigate to={'/home_user'} />;
  }
  return <Navigate to={'/'} />;
};
