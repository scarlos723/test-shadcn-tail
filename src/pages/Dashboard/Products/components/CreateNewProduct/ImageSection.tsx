import { Dropzone } from "@/components/Dropzone";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { useForm } from "node_modules/react-hook-form/dist/useForm";
import type { CreateProductFormData } from "./schema";
export const ImageSection = ({
  form,
}: {
  form: ReturnType<typeof useForm<CreateProductFormData>>;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium">Product Images</h3>
      <div className="">
        {/* Main Image - Required */}
        <FormField
          control={form.control}
          name="mainImage"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>
                Main Image <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Dropzone
                  value={field.value}
                  onChange={field.onChange}
                  maxSize={5 * 1024 * 1024}
                  maxFiles={1}
                  accept={{
                    "image/*": [".png", ".jpg", ".jpeg", ".webp"],
                  }}
                />
              </FormControl>
              <FormDescription>
                Upload the main product image (Required)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="font-medium mt-4">Additional Images (Optional)</p>
        <div className="grid grid-cols-2 gap-4 ">
          {/* Additional Image 1 - Optional */}
          <FormField
            control={form.control}
            name="additionalImage1"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Dropzone
                    value={field.value}
                    onChange={field.onChange}
                    maxSize={5 * 1024 * 1024}
                    maxFiles={1}
                    accept={{
                      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
                    }}
                  />
                </FormControl>
                <FormDescription>Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Image 2 - Optional */}
          <FormField
            control={form.control}
            name="additionalImage2"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Dropzone
                    value={field.value}
                    onChange={field.onChange}
                    maxSize={5 * 1024 * 1024}
                    maxFiles={1}
                    accept={{
                      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
                    }}
                  />
                </FormControl>
                <FormDescription>Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};
