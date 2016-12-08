import * as axios from 'axios';

const openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=d6f85c83cddf33e40e90c0bd5f832478&units=imperial';

export function getTemp(location: string) {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${openWeatherMapUrl}&q=${encodedLocation}`;
  return axios.default.get(requestUrl)
    .then(response => {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }
      else {
        return response.data.main.temp;
      }
    })
    .catch(reason => {
      throw new Error(reason.response.data.message);
    });
}