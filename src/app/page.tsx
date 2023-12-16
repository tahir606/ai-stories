import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the landing route
  redirect("/landing");
}
