type ItemImageType = {
  image: string;
};

export default function ItemImage({ image }: ItemImageType) {
  return (
    <img
      src={image}
      alt="Missing Image"
      className="block object-fit w-80 h-80 bg-gray-100"
    />
  );
}
