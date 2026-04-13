"use client";

import ButtonPrimary from "../ButtonPrimary";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().email({
    message: "Email is required. Please enter your valid email",
  }),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-14">
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full overflow-hidden ">
                <FormControl>
                  <Input className="p-6 text-[21px] placeholder:text-[21px] border-[#AFAFAF] rounded-[14px] focus:outline-transparent  h-[52px] xl:h-[60px] 2xl:h-[75px]" placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonPrimary className="rounded-[14px] h-[52px] xl:h-[60px] 2xl:h-[75px]" type="submit">
          Contact Me
          </ButtonPrimary> 
        </div>
      </form>
    </Form>
  );
}
