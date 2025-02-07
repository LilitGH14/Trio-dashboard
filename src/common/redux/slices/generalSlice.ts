import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  user: null,
  isLoading: false,
  error: null,
  cache: {},
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCacheData(state, action: PayloadAction<any>) {
      state.cache[action.payload.city] = {
        forecast: action.payload.forecast,
        currentWeather: action.payload.currentWeather,
      }
    },
    setLoading(state, action: PayloadAction<any>) {
      state.isLoading = action.payload
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload
    },
  },
})

export const {
  setUser,
  setLoading,
  setError,
  setCacheData,
} = generalSlice.actions

export default generalSlice
