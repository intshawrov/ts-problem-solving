// A weather app tells the user what to do based on today's simple weather condition.


type Weather = 'sunny'| 'rainy' | 'cloudy';

const getWeatherAdvice = (weather:Weather): string =>{

    if(weather === 'sunny'){
        return "Wear sunscreen";
    }else if(weather === 'rainy'){
        return "Carry an umbrella";
    }

    return "Bring a light jacket"
}

console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));

