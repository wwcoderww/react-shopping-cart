import { createPortal } from "react-dom";
import BtnAddDel from "../../components/BtnAddDel";
import DetailCatagory from "./components/DetailCatagory";
import DetailDescription from "./components/DetailDescription";
import DetailImage from "./components/DetailImage";
import DetailPrice from "./components/DetailPrice";
import DetailRating from "./components/DetailRating";
import DetailTitle from "./components/DetailTitle";
import Modal from "./components/Modal";
import type { ProductItemType } from "../../types/ProductItemType";

type ItemDetailsType = {
  item: ProductItemType;
  openModal: boolean;
  closeModal(): void;
};

export default function ItemDetails({
  item,
  openModal,
  closeModal,
}: ItemDetailsType) {
  if (!openModal) return null;

  return createPortal(
    <Modal closeModal={closeModal}>
      <div className="flex p-1">
        <DetailImage image={item.image} />
        <div className="flex flex-col flex-1">
          <div className="p-4">
            <DetailTitle title={item.title} />
            <DetailCatagory catagory={item.category} />
          </div>
          <div className="flex py-4 border-t-2 pr-4 pl-2">
            <DetailPrice price={item.price} />
            <DetailRating rating={item.rating} />
          </div>
          <DetailDescription description={item.description} />
        </div>
        <BtnAddDel item={item} />
      </div>
    </Modal>,
    document.body
  );
}
