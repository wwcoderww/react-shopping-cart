export default function (number: number) {
  if (!isFinite(number)) return 0;
  const currencyNum = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
  }).format(number);
  return currencyNum;
}
