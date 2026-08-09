import { MOVEMENT_ENUM } from '@/interfaces/helper-postinterface';

export const MOVEMENT: { type: MOVEMENT_ENUM; text: string; img: string }[] = [
  {
    img: 'car',
    type: MOVEMENT_ENUM.CAR,
    text: '차량',
  },
  {
    img: 'bicycle',
    type: MOVEMENT_ENUM.BICYCLE,
    text: '자전거',
  },
  {
    img: 'motorcycle',
    type: MOVEMENT_ENUM.MOTORCYCLE,
    text: '오토바이',
  },
  {
    img: 'walk',
    type: MOVEMENT_ENUM.WALK,
    text: '도보',
  },
];
