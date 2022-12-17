import {
  getConnectedStore,
  getConnectedActionHook,
  getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useProductState = getConnectedStore('product');
const useProductAction = getConnectedActionHook();
const useProductEmptyAction = getConnectedEmptyActionHook();

const productHooks = {
  useProductState,
  useProductAction,
  useProductEmptyAction,
};

export default productHooks;
