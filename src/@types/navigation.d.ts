export type NotLoggedScreens = {
  login: undefined;
  register: undefined;
};

export type LoggedInScreens = {
  home: undefined;
  comments: { postId: number };
};
