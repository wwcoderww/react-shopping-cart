type FormInputType = {
  data: string;
  label: string;
};

export function FormInput({ data, label, ...register }: FormInputType) {
  return (
    <div className="flex flex-col text-xl">
      <label htmlFor={data}>{label}</label>
      <input type="text" className="bg-white w-full rounded-sm" {...register} />
    </div>
  );
}
