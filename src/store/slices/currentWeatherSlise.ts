
type CurrentWeather = {
    weather: any;
    isLoading: boolean;
    repsponse: Response;
}

type  Response = {
    status: number,
    message: string
}


const initialState = {
    weather:{},
    isLoading: false,
    repsponse:{
        status: 0,
        message: ''
    },
};