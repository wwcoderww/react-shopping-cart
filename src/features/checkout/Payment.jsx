import { SubmitButton } from "./payment/SubmitButton";
import { CustomerInfo } from "./payment/CustomerInfo";
import { CardInfo } from "./payment/CardInfo";
import React from "react";
import { useForm } from "react-hook-form";
export function Payment() {
  const { register } = useForm();
  return (
    <form action="" className="flex flex-col max-w-1/2 mx-auto">
      <CustomerInfo />
      <CardInfo />
      <SubmitButton />
    </form>
  );
}
