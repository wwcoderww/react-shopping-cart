type DetailImageType = {
  image: string;
};

export default function DetailImage({ image }: DetailImageType) {
  return <img src={image} className="w-100 h-max-6/12 rounded-l-lg" />;
}
