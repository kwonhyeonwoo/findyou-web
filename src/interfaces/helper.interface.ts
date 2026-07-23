export enum MOVEMENT_ENUM {
  CAR = 'CAR',
  BICYCLE = 'BICYCLE',
  MOTORCYCLE = 'MOTORCYCLE',
  WALK = 'WALK',
}

export interface IHelperCardType {
  name: string;
  rating: string;
  profile: string;
  id: string;
  category: string;
}

export interface IBestHeleper {
  name: string;
  level: string;
  category: string;
  success: string;
}
