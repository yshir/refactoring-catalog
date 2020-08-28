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

const readingsOutsideRange = (station, range) => {
  return station.readings.filter(r => !range.contains(r.temp));
};

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }

  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
const alerts = readingsOutsideRange(station, range);
