const enrichReading = reading => {
  const result = _.cloneDeep(reading);
  result.baseCharge = baseRate(reading.month, reading.year) * reading.quantity;
  result.taxableCharge = Math.max(0, reading.baseCharge, taxThreshold(reading.year));
  return result;
};

const rawReading = acquireReading();
const reading = enrichReading(rawReading);
const baseCharge = reading.baseCharge;
const taxableCharge = reading.taxableCharge;
