import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { thunk } from "redux-thunk";
import generalSlice from "./slices/generalSlice.ts";
import departmentsSlice from "../../modules/Departments/store/departmentsSlice.ts";

const storage = createWebStorage("local");
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["general","departments"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    general: generalSlice.reducer,
    departments: departmentsSlice.reducer,
  })
);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppPersistor = Persistor;

export const persistor = persistStore(store);

export default store;
