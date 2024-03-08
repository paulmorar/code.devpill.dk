import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function FourOhFour() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
        <div className="mt-16 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mb-8">
            404
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The page you are looking for doesn’t exist.
          </p>
          <div className="mt-10">
            <Link href="/">
              <Button>
                <HomeIcon className="mr-2 h-4 w-4" />
                Homebeacon
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
