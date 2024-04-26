import { WeatherService } from "../../services/WeatherServise";
import { currentWeatherSlise } from "../slices/currentWeatherSlise";
import { AppDispatch } from "../store";

export const fetchCurrentWeater = 
    (payload: string) => async (dispatch:AppDispatch) => {
        dispatch(currentWeatherSlise.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload)
}
