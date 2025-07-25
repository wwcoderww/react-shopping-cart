import React from "react";
import { FormInput } from "./FormInput";

export function CardInfo() {
  return (
    <div>
      <FormInput data="cardNum" label="Card Number" />
      <FormInput data="expDate" label="Experation Date" />
      <FormInput data="cww" label="CWW" />
    </div>
  );
}
