export default function (number) {
  if (!isFinite(number)) return 0;
  const currencyNum = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
  }).format(number);
  return currencyNum;
}
