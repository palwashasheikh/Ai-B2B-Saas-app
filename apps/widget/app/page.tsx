"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { json } from "stream/consumers";



export default function Page() {


  const users = useQuery(api.users.getMany);
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="max-w-sm w-full mx-auto ">
        <p>widget app {JSON.stringify(users,null,2)}</p>
        </div>
      </div>
    </div>
  )
}
