export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserUpdate {
  email?: string;
  name?: string;
  password?: string;
}
