import { Separator } from "@/components/ui/separator";
import { menuItems } from "@/static/navmenuItems";
import Link from "next/link";

function FooterTopBar() {
  return (
    <div>
      <div className="px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-10 gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-center md:text-left">
            <span className="text-red-600">NEXUS</span>
            <span className="text-white">NEWS</span>
          </div>

          {/* Menu */}
          <ul className="flex flex-col md:flex-row items-center gap-4">
            {menuItems.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-red-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator className="text-white bg-white w-full h-[1px]" />
    </div>
  );
}

export default FooterTopBar;
