import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AddCategoryForm } from "./add-category-form";

export default function AddCategoryDialogue(props: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="sm:mx-6 text-center text-sm bg-gray-800 h-8 sm:h-9 px-2 sm:p-2 rounded-sm text-white hover:bg-red-500">
        Add Category
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Please enter a category name</AlertDialogTitle>
        <AddCategoryForm {...props} />

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
