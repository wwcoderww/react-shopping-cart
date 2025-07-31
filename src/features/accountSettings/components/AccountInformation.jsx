import React, { useState } from "react";
import ChangeName from "../ChangeName";
import ChangePhoto from "../ChangePhoto";
import ChangeEmail from "../ChangeEmail";
import ChangePassword from "../ChangePassword";

export default function AccountInformation() {
  const [photoType, setPhotoType] = useState("upload");

  return (
    <div className="my-auto border-8 px-4 py-12 rounded-lg mx-auto border-white">
      <ChangeName />
      <ChangePhoto setPhotoType={setPhotoType} />
      <ChangeEmail />
      <ChangePassword />
    </div>
  );
}
