import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute({ authorizationStatus, children }: React.PropsWithChildren<PrivateRouteProps>): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element // Просто children вызывает ошибку. Пока написал children as JSX.Element. TODO: Почему?
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
