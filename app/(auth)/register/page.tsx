"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  RegisterForm,
  formState,
} from "@/schema/register.schema";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/services/register.api";
import { useActionState, useEffect } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [action, formAction] = useActionState(handleRegister, formState);

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (action) {
      if (!action.success && action.message) {
        toast.error(action.message, {
          position: "top-center",
        });
      }

      if (action.success && action.message) {
        toast.success(action.message, {
          position: "top-center",
        });
        router.push("/login");
      }
    }
  }, [action]);

  return (
    <section className="py-20 max-w-2xl mx-auto">
      <h1 className="font-bold mb-8 text-3xl">Register</h1>
      <Form {...form}>
        <form action={formAction} className="space-y-8">
          {/* ================== Name Feild ================== */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage>{action.error?.name?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* ================== Email Feild ================== */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username@domain.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage>{action.error?.email?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* ================== Password Feild ================== */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="*********" {...field} type="password" />
                </FormControl>
                <FormMessage>{action.error?.password?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* ================== Confirm Password Feild ================== */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="*********" {...field} type="password" />
                </FormControl>
                <FormMessage>{action.error?.rePassword?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* ================== Phone Feild ================== */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="01XXXXXXXX" {...field} type="tel" />
                </FormControl>
                <FormMessage>{action.error?.phone?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
