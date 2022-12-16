import { ButtonFilling } from '../ButtonFilling/ButtonFilling';
import { FoodList } from './FoodsList/FoodsList';
import { ModalsHead } from './ModalsHead/ModalsHead';

export function ModalDailyCalorie() {
  return (
    <>
      <ModalsHead />
      <FoodList />
      <ButtonFilling />
    </>
  );
}
