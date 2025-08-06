import { useState } from "react";
import ChangeEmail from "../ChangeEmail";
import ChangeName from "../ChangeName";
import ChangePassword from "../ChangePassword";
import ChangePhoto from "../ChangePhoto";

export default function AccountInformation() {
  const [photoType, setPhotoType] = useState<string>("upload");

  return (
    <div className="my-auto border-8 px-4 py-12 rounded-lg mx-auto border-white">
      <ChangeName />
      <ChangePhoto setPhotoType={setPhotoType} />
      <ChangeEmail />
      <ChangePassword />
    </div>
  );
}
