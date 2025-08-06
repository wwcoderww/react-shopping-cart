import type { HookFormType } from "../../../types/HookFormType";
import { FormInput } from "./FormInput";

export function CustomerInfo({ register }: HookFormType) {
  return (
    <>
      <div className="flex justify-between gap-4">
        <FormInput
          data="firstName"
          label="First name"
          {...register("firstName")}
        />
        <FormInput
          data="lastName"
          label="Last name"
          {...register("lastName")}
        />
      </div>
      <FormInput data="country" label="Country" {...register("country")} />
      <FormInput
        data="addyOne"
        label="Address line 1"
        {...register("addyOne")}
      />
      <FormInput
        data="addyTwo"
        label="Address line 2"
        {...register("addyTwo")}
      />
      <div className="flex justify-between gap-4">
        <FormInput data="postal" label="Postal code" {...register("postal")} />
        <FormInput data="city" label="City" {...register("city")} />
      </div>
      <div className="flex gap-2">
        <input type="checkbox" defaultChecked />
        <div>Billing same as shipping</div>
      </div>
    </>
  );
}
