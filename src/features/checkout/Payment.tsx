import { useForm } from "react-hook-form";
import { CardInfo } from "./payment/CardInfo";
import { CustomerInfo } from "./payment/CustomerInfo";
import { SubmitButton } from "./payment/SubmitButton";

export function Payment() {
  const { register, getValues, handleSubmit } = useForm();

  function sucessFunction() {
    alert("Thanks");
    console.log(getValues());
  }

  return (
    <form
      onSubmit={handleSubmit(sucessFunction)}
      className="flex flex-col max-w-1/2 mx-auto"
    >
      <CustomerInfo register={register} />
      <CardInfo register={register} />
      <SubmitButton />
    </form>
  );
}
