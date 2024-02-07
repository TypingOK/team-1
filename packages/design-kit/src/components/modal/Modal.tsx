import { cn } from "@/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ReactNode } from "react";
import { Button } from "../button";

export const ModalRoot = DialogPrimitive.Root;
export const ModalDescription = DialogPrimitive.Description;
export const ModalTitle = DialogPrimitive.Title;
export const ModalClose = DialogPrimitive.Close;

const ModalTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Trigger className={cn(``, className)} {...props} ref={ref}>
      {children}
    </DialogPrimitive.Trigger>
  );
});

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="bg-background-100 z-[10001] opacity-30 data-[state=open]:animate-overlayShow fixed inset-0" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          `fixed z-[10002] top-[50%] left-[50%] max-h-[85vh] min-w-64 translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-neutral-0 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`,
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

const ModalButtons = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`absolute left-0 w-full flex justify-center`}>
      <ModalClose className="flex-1" asChild>
        <Button className="w-full rounded-r-none rounded-tl-none">취소</Button>
      </ModalClose>
      <ModalClose className="flex-1" asChild={true} {...props}>
        {children}
      </ModalClose>
    </div>
  );
};

export { ModalTrigger, ModalContent, ModalButtons };
