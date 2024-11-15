import Link from "next/link";
import { Button } from "./ui/button";

export default function AuthLogo() {
  return (
    <>
      <Link href="/">
        <Button className="flex items-center gap-2" size={"sm"}>
          <span>🚀</span>
          <span>Authentication</span>
        </Button>
      </Link>
    </>
  );
}
