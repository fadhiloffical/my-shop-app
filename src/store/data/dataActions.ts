import { AppDispatch } from '..';
import { dataSlice } from './dataSlice';

export const fetchData = () => async (dispatch: AppDispatch) => {
  dispatch(dataSlice.actions.setDataLoading());
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(dataSlice.actions.setDataSuccess(data));
  } catch (error:any) {
    dispatch(dataSlice.actions.setDataFailure(error.message));
  }
};
