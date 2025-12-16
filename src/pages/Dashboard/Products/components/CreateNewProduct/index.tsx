import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImageSection } from "./ImageSection";
import { InputsSection } from "./InputsSection";
import { createProductSchema, type CreateProductFormData } from "./schema";

const categories = [
  "Electronics",
  "Clothing",
  "Food & Beverages",
  "Home & Garden",
  "Sports",
  "Books",
  "Toys",
  "Beauty",
  "Automotive",
  "Office Supplies",
];

const orderTypes = ["Online", "In-Store", "Wholesale", "Pre-Order"];

export const CreateNewProduct = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<CreateProductFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(createProductSchema) as any,
    defaultValues: {
      productName: "",
      category: "",
      billingPrice: 0,
      costPrice: 0,
      quantityInStock: 0,
      description: "",
      orderType: "",
      dateAdded: new Date(),
      timeAdded: format(new Date(), "HH:mm"),
      hasDiscount: false,
      discountType: "",
      discountValue: 0,
      hasExpireDate: false,
      expireDate: undefined,
      mainImage: [],
      additionalImage1: [],
      additionalImage2: [],
    },
  });

  const hasDiscount = form.watch("hasDiscount");
  const hasExpireDate = form.watch("hasExpireDate");

  const onSubmit = (data: CreateProductFormData) => {
    console.log(data);
    // Aquí puedes agregar la lógica para crear el producto
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create New Product</Button>
      </DialogTrigger>
      <DialogContent className="lg:min-w-[80vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Add a new product to your inventory. Fill in all the required
            information below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
              <InputsSection
                form={form}
                categories={categories}
                orderTypes={orderTypes}
                hasDiscount={hasDiscount}
                hasExpireDate={hasExpireDate}
              />
              <ImageSection form={form} />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(false);
                  form.reset();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Create Product</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
