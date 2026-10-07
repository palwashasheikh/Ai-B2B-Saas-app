"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { json } from "stream/consumers";
import { Button } from "@workspace/ui/components/button";



export default function Page() {


  const users = useQuery(api.users.getMany);

  const adduser = useMutation(api.users.add);
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="max-w-sm w-full mx-auto ">
          <Button onClick={() => adduser()}>Add</Button>
        <p>web app {JSON.stringify(users,null,2)}</p>
        </div>
      </div>
    </div>
  )
}
