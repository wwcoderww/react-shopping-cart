import { SubmitButton } from "./payment/SubmitButton";
import { CustomerInfo } from "./payment/CustomerInfo";
import { CardInfo } from "./payment/CardInfo";
import React from "react";
import { useForm } from "react-hook-form";
export function Payment() {
  const { register, getValues, handleSubmit } = useForm();

  function sucessFunction() {
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
