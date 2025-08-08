import type { ProductItemType } from "../../../types/ProductItemType";
import currency from "../../../utils/currency";

export function SummaryList({ cart }) {
  return (
    <ul>
      {cart?.map((item: ProductItemType) => (
        <li key={item.id} className="flex justify-between py-1">
          <div className="text-start">{item.title}</div>
          <div>
            {item.price.toFixed(2)} x {item.quantity} ={" "}
            {currency(item.price * item.quantity)}
          </div>
        </li>
      ))}
    </ul>
  );
}
