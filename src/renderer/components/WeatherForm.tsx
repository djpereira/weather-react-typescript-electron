import * as React from 'react';

interface WeatherFormProps {
  onSearch: (location: string) => void;
}

export class WeatherForm extends React.Component<WeatherFormProps, void>{

  private locationField: HTMLInputElement;

  onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const location = this.locationField.value;
    if (location.length > 0) {
      this.locationField.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <input type="text" ref={ref => this.locationField = ref} placeholder="Enter city name" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

}