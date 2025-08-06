type DetailRatingType = {
  rating: {
    rate: number;
    count: number;
  };
};

export default function DetailRating({
  rating: { rate, count },
}: DetailRatingType) {
  return (
    <>
      <div className="text-2xl">
        ⭐<span className="text-2xl px-1">{rate}</span>({count})
      </div>
    </>
  );
}
