import { createSlice } from "@reduxjs/toolkit";

type CurrentWeather = {
    weather: any;
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
            fetchCurrentWeatherSuccess(state, action: any){
                state.weather = action;
            }
        }
    }
)