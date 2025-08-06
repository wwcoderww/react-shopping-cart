type DetailCatagoryType = {
  catagory: string;
};

export default function DetailCatagory({ catagory }: DetailCatagoryType) {
  return <div className="capitalize mx-auto text-center pt-2">{catagory}</div>;
}
