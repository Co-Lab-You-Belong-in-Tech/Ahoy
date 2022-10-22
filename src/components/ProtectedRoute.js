import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AUTH_STATUS from '../features/user/authStatus';

const ProtectedRoute = ({ to }) => {
  const { authStatus } = useSelector((state) => state.user);

  switch (authStatus) {
    case AUTH_STATUS.authenticated:
      return to;
    case AUTH_STATUS.unauthenticated:
      return <Navigate to="/users/sign-in" replace />;
    case AUTH_STATUS.failed:
      return (<>Failed to authenticate. Try again later!</>);
    default:
      return (<>Loading...</>);
  }
};

export default ProtectedRoute;
