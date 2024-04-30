import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliseReducer from "./slices/currentWeatherSlise"

const rootReducer = combineReducers({
    currentWeatherSliseReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];