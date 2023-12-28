import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  dark: boolean;
  initializing: boolean;
};

const initialState: Props = {
  dark: false,
  initializing: true,
};

export const asyncInitTheme: any = createAsyncThunk(
  'asyncInitTheme',
  async () => {
    const dark = await AsyncStorage.getItem('dark');
    return Boolean(dark);
  },
);

const ThemeSlice = createSlice({
  name: 'ThemeSlice',
  initialState,
  reducers: {
    setDark: (state, { payload }) => {
      state.dark = payload;
      console.log(payload);
      AsyncStorage.setItem('dark', String(payload));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(asyncInitTheme.pending, state => {
        state.initializing = true;
      })
      .addCase(asyncInitTheme.fulfilled, (state, { payload }) => {
        state.initializing = false;
        state.dark = payload;
      })
      .addCase(asyncInitTheme.rejected, state => {
        state.initializing = false;
      });
  },
});

export default ThemeSlice;

const actions = ThemeSlice.actions;

export function useThemeMode() {
  const theme: Props = useSelector((state: any) => state.theme);

  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(actions.setDark(!theme.dark));
  };

  return { ...theme, toggleDarkMode };
}
