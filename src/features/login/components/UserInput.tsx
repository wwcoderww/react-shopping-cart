type UserInputType = {
  dataName: string;
  labelName: string;
  inputType: string;
};

export function UserInput({
  dataName,
  labelName,
  inputType,
  ...register
}: UserInputType) {
  return (
    <div className="flex flex-col">
      <label htmlFor={dataName} className="text-2xl">
        {labelName}
      </label>
      <input
        type={inputType}
        className="bg-white text-xl px-1 py-[.1rem] text-black"
        {...register}
      />
    </div>
  );
}
