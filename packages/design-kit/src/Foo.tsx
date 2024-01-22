import { cn } from "./utils";
import { Root } from "@radix-ui/react-label";

const Button = ({ className }: { className: string }) => {
  return (
    <div>
      <Root
        className={cn("w-full bg-primary-50", className)}
        htmlFor="firstName"
      >
        First name
      </Root>
      <input
        className="Input"
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
      />
    </div>
  );
};

export default Button;
