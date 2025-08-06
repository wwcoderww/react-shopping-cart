type DetailPriceType = {
  price: number;
};

export default function DetailPrice({ price }: DetailPriceType) {
  return (
    <div className="text-5xl flex-1 text-green-400 font-semibold">
      ${price.toFixed(2)}
    </div>
  );
}
