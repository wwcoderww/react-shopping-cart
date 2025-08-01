import React from "react";
import { FormInput } from "./FormInput";

export function CardInfo({ register }) {
  return (
    <div>
      <FormInput data="cardNum" label="Card Number" {...register("cardNum")} />
      <FormInput
        data="expDate"
        label="Experation Date"
        {...register("expDate")}
      />
      <FormInput data="cww" label="CWW" {...register("cww")} />
    </div>
  );
}
