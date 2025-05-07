"use client";
import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export default function AlertBox({
  triggerText = "",
  triggerStyle = "text-center text-sm bg-gray-800 h-8 sm:h-9 sm:p-2 rounded-sm text-white",
  title = "title ",
  triggerIcon,
  description = "",
  children,
  open,
  onOpenChange,
}: {
  triggerText?: string;
  triggerStyle?: string;
  title?: string;
  triggerIcon?: ReactNode;
  description?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?(open: boolean): void;
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger className={`${triggerStyle}`}>
        {triggerIcon} {`${triggerText}`}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>{`${title}`}</AlertDialogTitle>
        <p className="text-base font-normal text-gray-600 m-0">{`${description}`}</p>
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel
            className="border-red-500 text-red-500 
        hover:bg-red-500 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
