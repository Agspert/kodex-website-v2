import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email is compulsory.",
  }),
});

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Add hardcoded message for case study download
      const formData = {
        ...values,
        message: "Downloaded case study from website"
      };

      const res = await fetch(`https://mx6t4kr0pb7jvulx.agspert-ai.com/website/client/`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "ded58b72e40233050b2a86646bb51af1180009cad96bd1a07c85749a067a88b2"
        },
      });
      
      const data = await res.json();
      
      if (String(res.status)?.startsWith("2")) {
        form.reset();
        toast.success("Thank you for your interest!", {
          description: "Opening the case study now...",
        });
        
        // Open the case study after successful submission
        window.open("https://drive.google.com/file/d/1HOadQsphiGBCbugg2yocpB1gPN_PADUd/view?usp=sharing", "_blank");
        onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Case Study</DialogTitle>
          <DialogDescription>
            Please provide your contact information to access the case study.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 focus:outline-none focus:border-kodex-green"
                      placeholder="Enter your email here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-black text-white hover:bg-gray-800"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Download Case Study"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
