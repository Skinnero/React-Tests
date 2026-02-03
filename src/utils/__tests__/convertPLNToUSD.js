import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
});

describe('ConvertPLNtoUSD', () => {
  it('should return NaN when argument is a string type', () => {
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('-0.5')).toBeNaN();
    expect(convertPLNToUSD('asd')).toBeNaN();
    expect(convertPLNToUSD('')).toBeNaN();
  });
});

describe('ConvertPLNtoUSD', () => {
  it('should return NaN when no argument', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
});

describe('ConvertPLNtoUSD', () => {
  it('should return "Error" when argument is different type than int or string', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });
});

describe('ConvertPLNtoUSD', () => {
  it('should return 0 when value is lower than 0', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-5)).toBe('$0.00');
    expect(convertPLNToUSD(-123)).toBe('$0.00');
  });
});