import React from "react";
import { FormInput } from "./FormInput";

export function CustomerInfo() {
  return (
    <>
      <div className="flex justify-between">
        <FormInput data="firstName" label="First name" />
        <FormInput data="lastName" label="Last name" />
      </div>
      <FormInput data="country" label="Country" />
      <FormInput data="addyOne" label="Address line 1" />
      <FormInput data="addyTwo" label="Address line 2" />
      <div className="flex justify-between">
        <FormInput data="postal" label="Postal code" />
        <FormInput data="city" label="City" />
      </div>
      <div className="flex gap-2">
        <input type="checkbox" defaultChecked />
        <div>Billing same as shipping</div>
      </div>
    </>
  );
}
