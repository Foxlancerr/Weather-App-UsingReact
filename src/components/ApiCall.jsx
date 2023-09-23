// the following api will be used in here

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 11525331562d480f798a691bf0885648
let API_KEY = "11525331562d480f798a691bf0885648";
let BASE_URL = "https://api.openweathermap.org/data/2.5";


// api fething functions
let fetchApi = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};


// destruture the data or rearrange the data 
const formatCurrentData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    name,
    temp,
    feels_like,
    temp_max,
    temp_min,
    dt,
    humidity,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

const formatForcastHourlyData = (data)=>{
 console.log(data);
}

// return the data to the  main app.js file
const formatData = async (searchParams) => {
  const format = await fetchApi("weather", searchParams)
  .then(formatCurrentData);

  const{lat,lon}=formatData

  const formattedHourly = await fetchApi('onecall',{
    lat,lon,exclude:'current.minutly.alert',units:searchParams.units
  }).then(formatForcastHourlyData)
   
  return format;
};

export default formatData;
