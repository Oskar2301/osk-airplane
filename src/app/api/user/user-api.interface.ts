export interface IUser {
  _id: string,
  name: string;
  email: string;
  avatarUrl?: string
  createdAt?: Date;
  updatedAt?: Date;
}
