import { WeatherService } from "../../services/WeatherServise";
import { currentWeatherSlise } from "../slices/currentWeatherSlise";
import { AppDispatch } from "../store";

export const fetchCurrentWeater = 
    (payload: string) => async (dispatch:AppDispatch) => {
        try{
            dispatch(currentWeatherSlise.actions.fetchCurrentWeather());
            const res = await WeatherService.getCurrentWeather(payload);
            if(res.status===200){
                dispatch(currentWeatherSlise.actions.fetchCurrentWeatherSuccess(res));
            } else {
                dispatch(currentWeatherSlise.actions.fetchCurrentWeatherError(res));
            }
        } catch (error){
            console.log(error)
        }
       
}
