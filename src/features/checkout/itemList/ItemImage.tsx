type ItemImageType = {
  image: string;
};

export default function ItemImage({ image }: ItemImageType) {
  console.log(image);
  return <img src={image} alt={"Item Image"} className="w-52 h-inherit" />;
}
