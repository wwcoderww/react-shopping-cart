type UserInputType = {
  dataName: string;
  labelName: string;
  inputType: string;
  error: string | undefined;
};

export function UserInput({
  dataName,
  labelName,
  inputType,
  error,
  ...register
}: UserInputType) {
  const InputStyle = `bg-white text-xl px-1 py-[.1rem] text-black ${
    error && `border-red-500 border-2 outline-none`
  }`;

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={dataName} className="text-2xl">
          {labelName}
        </label>
        <input type={inputType} className={InputStyle} {...register} />
      </div>
      {error && <div className="text-red-400 text-center">{error}</div>}
    </div>
  );
}
