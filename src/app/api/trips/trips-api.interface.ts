export interface ITrip {
  _id: string;
  type: string;
  cost: number;
  countPlaces: number;
  country: string;
  image?: string;
  name: string;
  date: Date;
  updatedAt: Date;
  createdAt: Date;
}

export interface ITripCreate {
  name: string;
  countPlaces: number;
  cost: number;
  type: string;
  country: string;
  image: File;
  date: Date;
}
