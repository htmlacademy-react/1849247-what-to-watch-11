import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import PrivateRoute from '../../components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FilmType } from '../../types/films-type';

type AppProps = {
  promoFilm: FilmType;
  films: FilmType[];
};

function App({ promoFilm, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage promoFilm={promoFilm} films={films} />}
        />

        <Route path={AppRoute.SignIn} element={<SignInPage />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />

        <Route path={`${AppRoute.Films}/:id`} >
          <Route index element={<FilmPage films={films} />} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage films={films} />} />
        </Route>

        <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage films={films} />} />
        <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
