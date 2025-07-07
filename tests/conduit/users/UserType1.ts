export type User = {
  username?: string;
  email?: string;
  token?: string;
};

export type UserRegistration = {
  username?: string;
  email?: string;
  password?: string;
};

export type UserResponse = {
  user: User;
};

export type UserRequest = {
  user: UserRegistration;
};
