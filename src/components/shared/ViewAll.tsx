import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ViewAll() {
  return (
    <Link
      href={`/`}
      className="flex items-center text-red-500 text-sm font-medium hover:underline"
    >
      View All <ArrowRight className="h-4 w-4 ml-1" />
    </Link>
  );
}

export default ViewAll;
