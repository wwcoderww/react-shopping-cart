import type { ProductItemType } from "../../types/ProductItemType";
import { SummaryList } from "./summary/SummaryList";
import { PreTotal } from "./summary/SummaryPreTotal";
import { SummaryTotal } from "./summary/SummaryTotal";

type SummaryType = {
  cart: ProductItemType[];
};

export default function Summary({ cart }: SummaryType) {
  const subTotal = cart.reduce(
    (total: number, item: ProductItemType) =>
      total + item.price * item.quantity,
    0
  );
  const taxTotal = subTotal * 0.0825;
  const finalTotal = subTotal + taxTotal;

  return (
    <div className="flex flex-col text-end text-white p-8 text-2xl mt-6">
      <SummaryList cart={cart} />
      <PreTotal subTotal={subTotal} taxTotal={taxTotal} />
      <SummaryTotal finalTotal={finalTotal} />
    </div>
  );
}
