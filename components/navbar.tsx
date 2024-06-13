"use client";
import { createUserAction } from "@/actions/create-user";
import { useAction } from "next-safe-action/hooks";

const Navbar = () => {
  const createUser = useAction(createUserAction);

  return (
    <div className="fixed z-50 w-full px-48">
      <div className="flex w-full items-center justify-between border-b border-white/5 px-8 py-4">
        <p className="text-base text-white">wagmi</p>
        <button onClick={() => createUser.execute({ name: "test" })}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default Navbar;
