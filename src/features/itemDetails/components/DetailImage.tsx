type DetailImageType = {
  image: string;
};

export default function DetailImage({ image }: DetailImageType) {
  return <img src={image} className="w-100 rounded-l-lg" />;
}
