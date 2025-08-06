type DetailTitleType = {
  title: string;
};

export default function DetailTitle({ title }: DetailTitleType) {
  return (
    <div className="text-center text-5xl p-1 font-bold line-clamp-3">
      {title}
    </div>
  );
}
