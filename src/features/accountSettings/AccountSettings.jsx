import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ChangeEmail from "./ChangeEmail";
import ChangeName from "./ChangeName";
import ChangePassword from "./ChangePassword";
import ChangePhoto from "./ChangePhoto";
import { SignOutBtn } from "./components/SignOutBtn";

export default function AccountSettings() {
  const [photoType, setPhotoType] = useState("upload");
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="mx-auto my-auto">
      <ChangeName />
      <ChangePhoto setPhotoType={setPhotoType} />
      <ChangeEmail />
      <ChangePassword />
      <SignOutBtn />
    </div>
  );
}
