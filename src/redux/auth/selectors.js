export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectUserData = state => state.auth;

export const selectUserName = state => state.auth.user.name;
