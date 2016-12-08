import * as React from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherMessage } from './WeatherMessage';
import * as WeatherAPI from '../api/openWeatherMap';

interface WeatherState {
  isLoading?: boolean,
  location?: string,
  temp?: number
}

export class Weather extends React.Component<void, WeatherState>{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  private handleSearch(location: string) {
    this.setState({
      isLoading: true
    });
    WeatherAPI.getTemp(location)
      .then(temp => {
        this.setState({
          location: location,
          temp: temp,
        });
      })
      .catch(reason => {
        alert(reason);
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  private renderMessage() {
    const { temp, location, isLoading } = this.state;
    if (isLoading) {
      return <h3>Fetching weather...</h3>;
    }
    else if (temp && location) {
      return <WeatherMessage location={location} temp={temp} />;
    }
  }

  render() {
    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={e=> this.handleSearch(e)} />
        {this.renderMessage()}
      </div>
    );
  };

}