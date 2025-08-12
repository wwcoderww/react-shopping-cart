import { useState } from "react";
import ChangeEmail from "./accountInformation/formFields/ChangeEmail";
import ChangeName from "./accountInformation/formFields/ChangeName";
import ChangePassword from "./accountInformation/formFields/ChangePassword";
import ChangePhoto from "./accountInformation/formFields/ChangePhoto";

export default function AccountInformation() {
  const [photoType, setPhotoType] = useState<string>("upload");

  return (
    <div className="xl:my-auto border-8 px-4 sm:py-6 rounded-lg mx-auto border-white my-12 shadow-sm shadow-black overflow-scroll">
      <ChangeName />
      {/* <ChangePhoto setPhotoType={setPhotoType} /> */}
      <ChangeEmail />
      <ChangePassword />
    </div>
  );
}
