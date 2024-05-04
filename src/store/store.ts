import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliseReducer from "./slices/currentWeatherSlise"
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const rootReducer = combineReducers({
    currentWeatherSliseReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];