import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  isLogin: boolean;
};

const UnAuthorized = ({ isLogin, children }: Props) => {
  return !isLogin ? children : <Navigate to='/' replace />;
};

export default UnAuthorized;
