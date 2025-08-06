import { logOut } from "../../../app/firebase/firebase";

export default function SignOutBtn() {
  return (
    <div className="flex">
      <button
        onClick={logOut}
        className="mx-auto border-2 p-2 bg-red-500 rounded-xl my-8 hover:cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}
