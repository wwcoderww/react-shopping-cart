import { useState } from "react";
import ChangeEmail from "./formFields/ChangeEmail";
import ChangeName from "./formFields/ChangeName";
import TempName from "./formFields/ChangeName";
import ChangePassword from "./formFields/ChangePassword";
import ChangePhoto from "./formFields/ChangePhoto";

export default function AccountInformation() {
  const [photoType, setPhotoType] = useState<string>("upload");

  return (
    <div className="my-auto border-8 px-4 py-12 rounded-lg mx-auto border-white">
      <ChangeName />
      {/* <ChangePhoto setPhotoType={setPhotoType} /> */}
      {/* <ChangeEmail /> */}
      <ChangePassword />
    </div>
  );
}
