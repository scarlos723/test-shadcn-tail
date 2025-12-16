import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { useForm } from "node_modules/react-hook-form/dist/useForm";
import type { CreateProductFormData } from "./schema";
export const Discount = (props: {
  form: ReturnType<typeof useForm<CreateProductFormData>>;
  hasDiscount: boolean;
  discountTypes: string[];
}) => {
  const { form, hasDiscount, discountTypes } = props;
  return (
    <>
      {/* Discount Switch */}
      <FormField
        control={form.control}
        name="hasDiscount"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Discount</FormLabel>
              <FormDescription>
                Enable to add discount information for this product
              </FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Conditional Discount Fields */}
      {hasDiscount && (
        <div className="grid grid-cols-2 gap-x-20 gap-y-4 rounded-lg border p-4 bg-muted/50">
          <h3 className="col-span-2 font-medium">Discount Information</h3>

          {/* Discount Type */}
          <FormField
            control={form.control}
            name="discountType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select discount type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {discountTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Discount Value */}
          <FormField
            control={form.control}
            name="discountValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount Value</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </>
  );
};
