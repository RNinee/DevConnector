import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Spinner from '../layout/spinner';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector(state => state.auth);

  if (loading) return <Spinner />;

  return isAuthenticated ? children : <Navigate to='/login' />;
}

export default PrivateRoute;