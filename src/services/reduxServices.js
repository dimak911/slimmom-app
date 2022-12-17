//React
import { useCallback } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';

const getConnectedStore = key => () => useSelector(state => state[key]);

const getConnectedActionHook = () => action => {
  const dispatch = useDispatch();

  return useCallback(payload => dispatch(action(payload)), [dispatch, action]);
};

const getConnectedEmptyActionHook = () => action => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(action()), [dispatch, action]);
};

export {
  getConnectedStore,
  getConnectedActionHook,
  getConnectedEmptyActionHook,
};
