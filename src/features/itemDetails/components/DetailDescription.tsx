type DetailDescriptionType = {
  description: string;
};

export default function DetailDescription({
  description,
}: DetailDescriptionType) {
  return (
    <div className="indent-2 p-1 my-auto text-2xl overflow-scroll px-6 max-h-[6lh] mb-2 ">
      {description}
    </div>
  );
}
