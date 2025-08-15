type ItemTitleType = {
  title: string;
};

export default function ItemTitle({ title }: ItemTitleType) {
  return (
    <div className="text-2xl font-bold line-clamp-2 text-center border-b-3 p-1 h-[2.4lh] flex">
      <div className="m-auto">{title}</div>
    </div>
  );
}
