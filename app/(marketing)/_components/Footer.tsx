import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background dark:bg-[#1f1f1f] z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button size="sm" variant="ghost">
          Privacy Policy
        </Button>
        <Button size="sm" variant="ghost">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
