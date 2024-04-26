import axios, { AxiosResponse } from "axios"
import { Weather } from "../store/types/types"

export class WeatherService{
    static getCurrentWeather(city: string):Promise<AxiosResponse<Weather>>{
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edf86f640c92d472b5fa37085b1c297f`)
    }
}