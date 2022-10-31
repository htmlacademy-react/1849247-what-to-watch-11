import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import Page404 from '../../pages/404-page/404-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../components/private-route/private-route';

type MainPageProps = {
  title: string;
  genre: string;
  year: number;
};

function App({ title, genre, year }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage title={title} genre={genre} year={year} />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Films}/:id`} element={<FilmPage />} />
        <Route path={`${AppRoute.Films}/:id${AppRoute.AddReview}`} element={<AddReviewPage />} />
        <Route path={AppRoute.Player}>
          <Route index element={<PlayerPage />} />
          <Route path=':id' element={<PlayerPage />} />
        </Route>
        <Route path={AppRoute.Page404} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
