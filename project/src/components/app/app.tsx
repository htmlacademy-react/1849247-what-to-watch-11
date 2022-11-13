import type { Film } from '../../types/films-type';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';

import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  promoFilm: Film;
  films: Film[];
};

function App({ promoFilm, films }: AppProps): JSX.Element {
  return (
    // МНЕ: Сделать ScrollToTop
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} films={films} />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        {/* ВОПРОС: Но скорее всего нужно будет вернуться сюда после redux.
        Проблема - передать конкретный фильм в компоненты FilmPage и AddReviewPage.
        Сейчас я передаю массив с фильмами, вычисляю id из url и ищу этот id в массиве в компоненте.
        Решение - поднять state с id до общего компонента или использовать глобальный state */}
        <Route path={`${AppRoute.Films}/:id`} >
          <Route index element={<FilmPage films={films} />} />
          {/* МНЕ: Попробовать использовать Outlet чтобы прорисовать содержимое табов в одном макете */}
        </Route>
        <Route path={`${AppRoute.Films}/:id/${AppRoute.AddReview}`} element={<AddReviewPage films={films} />} />
        <Route path={`${AppRoute.Player}/:id`} element={<PlayerPage films={films} />} />
        <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
