"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, FileText, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessEmail: z.string().email("Please enter a valid business email"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
  smsConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive SMS messages to submit this form",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      smsConsent: false,
    },
  });

  const smsConsent = watch("smsConsent");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-[#ff9a00] rounded-3xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ff9a00] rounded-full mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">
              Thank You!
            </h3>
            <p className="text-lg text-black">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="overline mb-4" style={{ color: '#ff7a3c' }}>
            [ GET IN TOUCH ]
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-4">
            Contact <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>Us</span>
          </h2>
          <p className="text-lg text-black max-w-xl mx-auto">
            Have questions? Fill out the form below and our team will reach out to discuss your automation needs.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-black font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-[#ff9a00]" />
              Full Name *
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="John Doe"
              className="h-12 border-2 border-gray-200 focus:border-[#ff9a00] focus:ring-[#ff9a00] rounded-xl transition-all"
            />
            {errors.fullName && (
              <p className="text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Business Email */}
          <div className="space-y-2">
            <Label htmlFor="businessEmail" className="text-black font-medium flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#ff9a00]" />
              Business Email *
            </Label>
            <Input
              id="businessEmail"
              type="email"
              {...register("businessEmail")}
              placeholder="john@company.com"
              className="h-12 border-2 border-gray-200 focus:border-[#ff9a00] focus:ring-[#ff9a00] rounded-xl transition-all"
            />
            {errors.businessEmail && (
              <p className="text-sm text-red-600">{errors.businessEmail.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-black font-medium flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ff9a00]" />
              Phone Number *
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber")}
              placeholder="+1 (555) 123-4567"
              className="h-12 border-2 border-gray-200 focus:border-[#ff9a00] focus:ring-[#ff9a00] rounded-xl transition-all"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="projectDetails" className="text-black font-medium flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ff9a00]" />
              Project Details *
            </Label>
            <Textarea
              id="projectDetails"
              {...register("projectDetails")}
              placeholder="Tell us about your automation needs, current challenges, and what you're looking to achieve..."
              rows={6}
              className="border-2 border-gray-200 focus:border-[#ff9a00] focus:ring-[#ff9a00] rounded-xl transition-all resize-none"
            />
            {errors.projectDetails && (
              <p className="text-sm text-red-600">{errors.projectDetails.message}</p>
            )}
          </div>

          {/* SMS Consent Checkbox - CRITICAL FOR A2P 10DLC COMPLIANCE */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-xl">
              <Checkbox
                id="smsConsent"
                checked={smsConsent}
                onCheckedChange={(checked) => setValue("smsConsent", checked as boolean)}
                className="mt-1 data-[state=checked]:bg-[#ff9a00] data-[state=checked]:border-[#ff9a00]"
              />
              <div className="flex-1">
                <Label
                  htmlFor="smsConsent"
                  className="text-sm text-black leading-relaxed cursor-pointer font-normal"
                >
                  I agree to receive SMS text messages from ADYA AI regarding my inquiry and project updates. Message frequency varies. Data rates may apply. Reply STOP to opt out. *
                </Label>
              </div>
            </div>
            {errors.smsConsent && (
              <p className="text-sm text-red-600">{errors.smsConsent.message}</p>
            )}

            {/* Privacy Policy Links */}
            <p className="text-xs text-gray-600 text-center">
              Read our{" "}
              <a href="#" className="text-[#ff9a00] hover:underline font-medium">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#ff9a00] hover:underline font-medium">
                Terms
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#ff7a3c] to-[#ffce81] hover:from-[#ff9a00] hover:to-[#ff7a3c] text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Inquiry"
            )}
          </Button>
        </form>

        {/* Additional Compliance Notice */}
        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            By submitting this form, you acknowledge that ADYA AI will process your personal information in accordance with our Privacy Policy. Your phone number will only be used for SMS communications related to your inquiry if you have provided consent above.
          </p>
        </div>
      </div>
    </section>
  );
}