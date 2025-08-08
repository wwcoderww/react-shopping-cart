import type { MouseEvent } from "react";

type LoginLinksType = {
  newUser: boolean;
  toggleUser(e: MouseEvent<HTMLDivElement>): void;
};

export function LoginLinks({ newUser, toggleUser }: LoginLinksType) {
  const message = newUser ? "login instead" : "create new account";

  return (
    <div className="h-[1.8lh]" onClick={toggleUser}>
      <button className="text-blue-100 text-lg hover:text-[1.15rem] hover:cursor-pointer">
        {message}
      </button>
    </div>
  );
}
