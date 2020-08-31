const calculateBaseCharge = reading => {
  return baseRate(reading.month, reading.year) * reading.quantity;
};
const taxableChargeFn = (reading, baseCharge) => {
  return Math.max(0, baseCharge, taxThreshold(reading.year));
};

const reading = acquireReading();
const baseCharge = calculateBaseCharge(reading);
const taxableCharge = taxableChargeFn(reading, baseCharge);
