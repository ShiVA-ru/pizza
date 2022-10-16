import { CartItemType } from '../redux/cart/types';

export const calcTotalCount = (items: CartItemType[]) => {
  return items.reduce((sum: number, item: any) => item.count + sum, 0);
};
