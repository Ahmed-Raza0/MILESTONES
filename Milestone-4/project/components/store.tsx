import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AuthLogo() {
  return (
    <>
      <Link href="/">
        <Button className="flex items-center bg-black gap-2" size={"sm"}>
          <span><Image src="/images/shop.png" alt=" Logo" width={50} height={50}
          className="rounded-full" /></span>
        </Button>
      </Link>
    </>
  );
}
