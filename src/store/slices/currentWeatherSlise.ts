import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type CurrentWeather = {
    weather: Weather;
    isLoading: boolean;
    response: {
        status: number,
        message: string
    };
}

const initialState = {
    weather:{},
    isLoading: false,
    repsponse:{
        status: 0,
        message: ''
    },
};

export const currentWeatherSlise = createSlice(
    {
        name:'current_weather',
        initialState,
        reducers:{
            fetchCurrentWeather(state){
                state.isLoading = true;
            },
            fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>){
                state.weather = action.payload.data;
                state.isLoading = false;
            }
        }
    }
)