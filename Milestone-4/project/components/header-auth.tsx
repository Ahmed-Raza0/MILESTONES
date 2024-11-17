import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <div className="flex gap-4 items-center">
        <div>
          <Badge variant="default" className="font-normal pointer-events-none">
            Please update .env.local file with anon key and URL
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            disabled
            className="opacity-75 cursor-not-allowed pointer-events-none border-transparent"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="default"
            disabled
            className="opacity-75 cursor-not-allowed pointer-events-none bg-gray-400"
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    );
  }

  return user ? (
    <div className="flex flex-col md:flex-row lg: items-center gap-4 text-white">
      <span className="text-lg font-semibold text-[8px] md:text-[15px] sm:text-[10px] lg:text-[18px] xl:text-[20px] 2xl:text[25px] ">Hey, {user.email}!</span>
      <form action={signOutAction}>
        <Button
          type="submit"
          variant="outline"
          className="text-black hover:text-gray-600 bg-white hover:bg-white border-white transition duration-300"
        >
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button
        asChild
        size="sm"
        variant="outline"
        className="text-black bg-white border-white hover:bg-white hover:text-black transition duration-300"
      >
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button
        asChild
        size="sm"
        variant="default"
        className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:bg-gradient-to-l hover:from-purple-500 hover:to-indigo-600 transition duration-300"
      >
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
