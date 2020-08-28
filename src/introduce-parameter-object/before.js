const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2020-01-01 09:10' },
    { temp: 53, time: '2020-01-02 09:20' },
    { temp: 41, time: '2020-01-03 09:30' },
    { temp: 57, time: '2020-01-04 09:40' },
    { temp: 43, time: '2020-01-05 09:50' },
  ],
};

const readingsOutsideRange = (station, min, max) => {
  return station.readings.filter(r => r.temp < min || r.temp > max);
};

const alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
