import React from 'react';
import squeeze from 'squeeze-js';

const icons = {
  'clear-day': 'sunny',
  'clear-night': 'night',
  'partly-cloudy-day': 'partlycloudy',
  'partly-cloudy-night': 'cloudy',
  cloudy: 'cloudy',
  rain: 'pouring',
  sleet: 'snowy-rainy',
  snow: 'snowy',
  wind: 'windy',
  fog: 'fog'
};

export default class Weather extends React.Component {
  render() {
    const { sensors } = this.props;

    const icon = icons[squeeze(sensors, _ => _.dark_sky_icon.state)];
    const currentTemp = Math.round(squeeze(sensors, _ => _.dark_sky_temperature.state));
    const highTemp = Math.round(squeeze(sensors, _ => _.dark_sky_daily_high_temperature.state));
    const lowTemp = Math.round(squeeze(sensors, _ => _.dark_sky_daily_low_temperature.state));
    const precipChance = squeeze(sensors, _ => _.dark_sky_precip_probability.state);

    return (
      <div>
        <p>
          <i className={`mdi mdi-weather-${icon}`} /> {currentTemp}&deg;
        </p>
        <p>HIGH {highTemp}&deg;</p>
        <p>LOW {lowTemp}&deg;</p>
        <p>RAIN {precipChance}%</p>
      </div>
    );
  }
}
