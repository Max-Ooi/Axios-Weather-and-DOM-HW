// Homework:
// Using a HTML/JS file in the browser-
// Use axios to get weather data from the API I showed at the start of the lesson
// Wrap the axios call in an async function
// Use await before the axios call
// Destructure the response to get the { data } part of the response
// Console.log the weather data (this will show you completed the above)
// 


const getWeatherData = async () =>{

const aPIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=50.7&lon=-2&appid=6fa44d494da5eda6143525a5b652003c`
const weatherData = await axios.get(aPIURL);

    weatherData.data.list.forEach(item => {
        console.log(new Date(item.dt*1000));
        console.log(item.weather[0].description);
        console.log(item.main.temp);
    });

    console.log(weatherData.data)
}

getWeatherData()
