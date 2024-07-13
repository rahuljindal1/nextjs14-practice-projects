"use client";

import { useState } from "react";
import { Card, Input } from "../../../components";
import styles from "./styles.module.css";
import { Temperature } from "./types";
import { TemperatureService } from "./services";
import { TemperatureTypeEnum } from "./enums";

const temperatureService = new TemperatureService();

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState<number | undefined>();
  const [fahrenheit, setFahrenheit] = useState<number | undefined>();
  const [kelvin, setKelvin] = useState<number | undefined>();
  const [changedTemperatureType, setChangedTemperatureType] = useState<
    TemperatureTypeEnum | undefined
  >();

  const temperatureConverter = () => {
    let temperature = changedTemperatureType
      ? temperatureService.convertTemperature({
          temperatureType: changedTemperatureType,
          celsius,
          fahrenheit,
          kelvin
        })
      : undefined;

    if (!temperature) {
      return;
    }

    setCelsius(temperature.celsius);
    setFahrenheit(temperature.fahrenheit);
    setKelvin(temperature.kelvin);
  };

  return (
    <div className={styles.mainContainer}>
      <Card>
        <div className={styles.title}>Temperature Converter</div>
        <Input
          label="Celsius"
          type="number"
          name="celsius"
          value={celsius}
          onBlur={temperatureConverter}
          onEnter={temperatureConverter}
          onChange={(e) => {
            setCelsius(Number(e.target.value));
            setChangedTemperatureType(TemperatureTypeEnum.Celsius);
          }}
        />
        <Input
          label="Fahrenheit"
          type="number"
          name="fahrenheit"
          value={fahrenheit}
          onBlur={temperatureConverter}
          onEnter={temperatureConverter}
          onChange={(e) => {
            setFahrenheit(Number(e.target.value));
            setChangedTemperatureType(TemperatureTypeEnum.Fahrenheit);
          }}
        />
        <Input
          label="Kelvin"
          type="number"
          name="kelvin"
          value={kelvin}
          onBlur={temperatureConverter}
          onEnter={temperatureConverter}
          onChange={(e) => {
            setKelvin(Number(e.target.value));
            setChangedTemperatureType(TemperatureTypeEnum.Kelvin);
          }}
        />
      </Card>
    </div>
  );
}
