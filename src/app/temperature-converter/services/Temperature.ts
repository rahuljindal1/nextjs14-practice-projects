import { TemperatureTypeEnum } from "../enums";
import { Temperature } from "../types";

export class TemperatureService {
  public convertTemperature({
    temperatureType,
    celsius,
    fahrenheit,
    kelvin
  }: {
    temperatureType: TemperatureTypeEnum;
    celsius?: number;
    fahrenheit?: number;
    kelvin?: number;
  }): Temperature | undefined {
    let temperature: Temperature | undefined;
    if (temperatureType === TemperatureTypeEnum.Celsius) {
      temperature = this.fromCelsiusConverter(celsius);
    } else if (temperatureType === TemperatureTypeEnum.Fahrenheit) {
      temperature = this.fromFahrenheitConverter(fahrenheit);
    } else {
      temperature = this.fromKelvinConverter(kelvin);
    }

    return temperature;
  }

  private fromCelsiusConverter(celsius?: number): Temperature {
    celsius = celsius === undefined ? 0 : celsius;
    const fahrenheit = Number(Math.round((9 / 5) * celsius + 32).toFixed(2));
    const kelvin = Number((celsius + 273.15).toFixed(2));

    return {
      celsius,
      fahrenheit,
      kelvin
    };
  }

  private fromFahrenheitConverter(fahrenheit?: number): Temperature {
    fahrenheit = fahrenheit === undefined ? 0 : fahrenheit;
    const celsius = Number(Math.round((5 / 9) * (fahrenheit - 32)).toFixed(2));
    const kelvin = Number((celsius + 273.15).toFixed(2));

    return {
      celsius,
      fahrenheit,
      kelvin
    };
  }

  private fromKelvinConverter(kelvin?: number): Temperature {
    kelvin = kelvin === undefined ? 0 : kelvin;
    const celsius = Number((kelvin - 273.15).toFixed(2));
    const fahrenheit = Number(Math.round((9 / 5) * celsius + 32).toFixed(2));

    return {
      celsius,
      fahrenheit,
      kelvin
    };
  }
}
