import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  loading: boolean;
  data: any[];
  error: string | null;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDataLoading: (state) => {
      state.loading = true;
    },
    setDataSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});
