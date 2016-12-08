import * as React from 'react';

interface WeatherMessageProps {
  temp?: number,
  location?: string
}

export const WeatherMessage = (props: WeatherMessageProps) =>
  <div>
    <p>The temperature in {props.location} is {props.temp}°F</p>
  </div>;