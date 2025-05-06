import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

type FormInputFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  placeholder?: string;
  type?: string;
  className?: string;
};

export function FormInputField<T extends FieldValues>({
  name,
  control,
  placeholder,
  type = "text",
}: FormInputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              className="
    border border-gray-300 
    rounded-none 
    outline-none 
    focus:border-2 
    focus:border-black 
    focus:border-dashed
  "
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
