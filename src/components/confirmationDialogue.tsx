"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

type Props = {
  title?: string;
  triggerIcon?: React.ReactNode;
  description?: string;
  onConfirm?: () => any; // Function with no parameters
  triggerText?: string;
  triggerStyle?: string;
  children?: ReactNode;
};

export default function ConfirmationDialogue({
  title = "Are you sure?",
  triggerIcon,
  description = "This action cannot be undone.",
  onConfirm,
  triggerText,
  triggerStyle,
  children,
}: Props) {
   
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger className={`${triggerStyle}`}>
          {" "}
          {triggerText} {triggerIcon}
        </AlertDialogTrigger>
        <AlertDialogContent className="m-2">
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
            {children}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
