"use client";

import { createUserAction } from "@/actions/create-user";
import { useAction } from "next-safe-action/hooks";

export default function Home({ params }: { params: { locale: string } }) {
  const createUser = useAction(createUserAction);

  return (
    <div>
      <button onClick={() => createUser.execute({ name: "test" })}>
        Create User
      </button>
    </div>
  );
}
