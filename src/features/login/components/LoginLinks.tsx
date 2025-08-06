import type { Dispatch, MouseEvent, SetStateAction } from "react";

type LoginLinksType = {
  newUser: boolean;
  setNewUser: Dispatch<SetStateAction<boolean>>;
};

export function LoginLinks({ newUser, setNewUser }: LoginLinksType) {
  const message = newUser ? "login instead" : "create new account";

  function changeUser(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    setNewUser((cur) => !cur);
  }

  return (
    <div className="h-[1.8lh]" onClick={changeUser}>
      <button className="text-blue-100 text-lg hover:text-[1.15rem] hover:cursor-pointer">
        {message}
      </button>
    </div>
  );
}
