"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

const NavMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <NavMenuDesktop /> : <NavMenuMobile />;
};

const NavMenuMobile = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Image src="/logo.png" alt="logo" width={200} height={80} />
      <div className="flex gap-4 justify-around items-center">
        <Button variant="ghost" className="py-4">
          <Search size={40} />
        </Button>
        <Button variant="ghost" className="py-4">
          <Bell size={40} />
        </Button>
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" className="py-4">
              <Menu size={40} />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col gap-4">
              <NavItem> Card by Category</NavItem>
              <NavItem>Card by Credit Score</NavItem>
              <NavItem>Card by Credit Issuer</NavItem>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

const NavMenuDesktop = () => {
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

export default NavMenu;
