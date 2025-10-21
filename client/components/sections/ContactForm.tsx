import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";

const phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?\(?[0-9]{1,6}\)?([-\s.]?[0-9]{1,6}){1,6}$/;

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(phoneRegex, {
    message: "Please enter a valid contact number.",
  }),
  message: z.string().min(1, {
    message: "Message can not be empty",
  }),
});

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      const res = await fetch(`https://mx6t4kr0pb7jvulx.agspert-ai.com/website/client/`, {
      // const res = await fetch(`http://localhost:8000/website/client/`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "ded58b72e40233050b2a86646bb51af1180009cad96bd1a07c85749a067a88b2"
        },
      });
      
      const data = await res.json();
      
      if (String(res.status)?.startsWith("2")) {
        form.reset();
        toast.success("We have received your request.", {
          description: "We will get back to you as soon as possible.",
        });
      } else if (String(res.status)?.startsWith("4")) {
        if (data?.detail) {
          toast.error(data?.detail, {
            description: "Please try again or contact support.",
          });
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm mb-2">Full name</FormLabel>
              <FormControl>
                <Input
                  className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 focus:outline-none focus:border-kodex-green"
                  placeholder="Enter your name here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm mb-2">Contact number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 focus:outline-none focus:border-kodex-green"
                  placeholder="Enter your contact number here"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only characters that are valid in phone numbers: +, -, ., space, (, ), and digits
                    const sanitized = value.replace(/[^0-9+\-.\s()]/g, '');
                    // Limit to maximum 20 characters
                    const limited = sanitized.slice(0, 20);
                    field.onChange(limited);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm mb-2">Your message for us</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-kodex-green"
                  placeholder="Enter your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white px-8 py-4 rounded-full font-bold border border-white shadow-lg shadow-white/40 hover:shadow-white/60 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
