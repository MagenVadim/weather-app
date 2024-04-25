import { WeatherService } from "../../services/WeatherServise";
import { AppDispatch } from "../store";

export const fetchCurrentWeater = 
    (payload: string) => async (dispatch:AppDispatch) => {
        const res = await WeatherService.getCurrentWeather(payload)
}