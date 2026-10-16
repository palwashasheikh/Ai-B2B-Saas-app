import { auth } from "@clerk/nextjs/server";

export default async function TestPage() {
  await auth.protect();

  return <h1>You are authenticated!</h1>;
}