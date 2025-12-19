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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail, Phone, User, FileText, CheckCircle2, X } from "lucide-react";

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
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

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
    <>
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

              {/* Privacy Policy Link */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-sm text-[#ff9a00] hover:text-[#ff7a3c] font-medium underline transition-colors"
                >
                  View Privacy Policy
                </button>
              </div>
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

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-black">Privacy Policy</DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Last Updated: December 19, 2025
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 text-black">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p className="text-sm leading-relaxed">
                ADYA AI ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
              <p className="text-sm leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you fill out forms on our website, including: Name, Email address, Phone number, Business information, and Project details.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. How We Use Your Information</h3>
              <p className="text-sm leading-relaxed mb-2">We use your information to:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Provide and deliver our AI automation services</li>
                <li>Communicate with you regarding your inquiries and projects</li>
                <li>Send you SMS updates and notifications (only if you have explicitly opted in)</li>
                <li>Improve our website and customer service</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. SMS and Mobile Privacy (Strictly Enforced)</h3>
              <p className="text-sm leading-relaxed mb-2">
                We value your privacy and the security of your data.
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                <li>
                  <strong>Consent:</strong> We only send SMS text messages to individuals who have explicitly opted in via our website contact form.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to the short code. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.
                </li>
                <li>
                  <strong>Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at veer@adyaagency.com.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Disclosure of Information</h3>
              <p className="text-sm leading-relaxed mb-2">
                We do not sell, trade, or rent your personal identification information to others.
              </p>
              <p className="text-sm leading-relaxed font-semibold">
                IMPORTANT: No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">ADYA AI</p>
                <p>Email: veer@adyaagency.com</p>
              </div>
            </section>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button
              onClick={() => setShowPrivacyPolicy(false)}
              className="bg-[#ff9a00] hover:bg-[#ff7a3c] text-white px-6"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}