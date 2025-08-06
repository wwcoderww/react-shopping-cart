import type { ProductItemType } from "../../../types/ProductItemType";

type ItemInfoType = {
  item: ProductItemType;
};

export default function ItemInfo({ item }: ItemInfoType) {
  return (
    <div className="flex-1 flex flex-col border-l-2 border-r-2 justify-between">
      <div className="text-center text-4xl line-clamp-2 overflow-hidden p-1 font-[500]">
        {item.title}
      </div>
      <div className="text-5xl flex-1 text-green-400 font-semibold text-center">
        ${item.price.toFixed(2)}
      </div>
      <div className="py-1 px-2">
        <div className="line-clamp-3 text-lg px-1">{item.description}</div>
      </div>
    </div>
  );
}
