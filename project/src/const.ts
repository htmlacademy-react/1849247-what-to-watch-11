export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  AddReview = 'review',
  Player = '/player',
  Page404 = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
