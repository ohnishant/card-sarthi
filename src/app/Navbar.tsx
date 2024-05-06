import Image from "next/image";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex items-center h-28 justify-center">
      <div className="w-full px-14 items-center flex flex-row justify-between">
        <Image src="/logo.png" alt="logo" width={262} height={109} />
        <div className="flex h-10 gap-2">
          <NavItem> Card by Category</NavItem>
          <NavItem>Card by Credit Score</NavItem>
          <NavItem>Card by Credit Issuer</NavItem>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex">
      {children}
      <ChevronDown />
    </span>
  );
};

export default Navbar;
