type ItemImageType = {
  image: string;
};

export default function ItemImage({ image }: ItemImageType) {
  return <img src={image} alt={"Item Image"} className="w-52 h-inherit" />;
}
