import { Dropzone } from "@/components/Dropzone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { mockUserData } from "./data";
import { accountSettingsSchema, type AccountSettingsFormData } from "./schema";

export const AccountSettings = () => {
  const { t } = useTranslation();
  const [profileImagePreview, setProfileImagePreview] = useState<string>(
    mockUserData.profileImage || ""
  );

  const form = useForm<AccountSettingsFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(accountSettingsSchema) as any,
    defaultValues: {
      firstName: mockUserData.firstName,
      lastName: mockUserData.lastName,
      documentId: mockUserData.documentId,
      email: mockUserData.email,
      countryCode: mockUserData.countryCode,
      phoneNumber: mockUserData.phoneNumber,
      address: mockUserData.address,
      city: mockUserData.city,
    },
  });

  const onSubmit = (data: AccountSettingsFormData) => {
    console.log("Updated data:", data);
    toast.success(t("accountSettings.profileUpdated"), {
      description: t("accountSettings.profileUpdatedDesc"),
    });
  };

  const handleImageChange = (files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      form.setValue("profileImage", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>{t("accountSettings.title")}</CardTitle>
          <CardDescription>{t("accountSettings.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {t("accountSettings.firstName")}
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("accountSettings.lastName")}</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Document ID */}
                  <FormField
                    control={form.control}
                    name="documentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("accountSettings.documentId")}</FormLabel>
                        <FormControl>
                          <Input placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("accountSettings.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number with Country Code */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {t("accountSettings.countryCode")}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Code" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="+57">🇨🇴 +57</SelectItem>
                              <SelectItem value="+1">🇺🇸 +1</SelectItem>
                              <SelectItem value="+52">🇲🇽 +52</SelectItem>
                              <SelectItem value="+34">🇪🇸 +34</SelectItem>
                              <SelectItem value="+54">🇦🇷 +54</SelectItem>
                              <SelectItem value="+56">🇨🇱 +56</SelectItem>
                              <SelectItem value="+51">🇵🇪 +51</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {t("accountSettings.phoneNumber")}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="3001234567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("accountSettings.address")}</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St #45-67" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* City */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("accountSettings.city")}</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-4 sticky top-8">
                    <FormLabel>{t("accountSettings.profilePicture")}</FormLabel>
                    <div className="flex flex-col items-center gap-4">
                      {profileImagePreview && (
                        <div className="w-32 h-32">
                          <img
                            src={profileImagePreview}
                            alt="Profile preview"
                            className="w-full h-full rounded-full object-cover border-4 border-gray-200 shadow-md"
                          />
                        </div>
                      )}
                      <div className="w-full">
                        <Dropzone
                          onChange={handleImageChange}
                          accept={{
                            "image/*": [".png", ".jpg", ".jpeg", ".gif"],
                          }}
                          maxFiles={1}
                          maxSize={5 * 1024 * 1024} // 5MB
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="flex justify-end py-8 lg:pt-4 lg:pb-0 sticky bottom-0 bg-white/50 backdrop-blur-xs ">
                <Button type="submit" size="lg">
                  {t("accountSettings.update")}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
