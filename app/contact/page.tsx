"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const faqs = [
    {
        question: "How do I know if therapy is right for me?",
        answer:
            "Therapy can benefit anyone looking to improve their mental health, work through challenges, or achieve personal growth. If you're experiencing stress, anxiety, depression, relationship issues, or simply want to understand yourself better, therapy can help. We offer free consultations to discuss your needs.",
    },
    {
        question: "What should I expect in my first session?",
        answer:
            "Your first session is about getting to know each other. Your therapist will ask about your background, current challenges, and goals for therapy. This is also your opportunity to ask questions and ensure you feel comfortable. There's no pressure - it's a safe space to explore.",
    },
    {
        question: "How long does therapy typically last?",
        answer:
            "The duration varies based on your individual needs and goals. Some people benefit from short-term therapy (8-12 sessions), while others prefer ongoing support. We'll work together to create a plan that's right for you, and you can adjust as needed.",
    },
    {
        question: "Do you accept insurance?",
        answer:
            "Yes, we accept most major insurance plans. We also offer sliding scale fees for those without insurance or with financial constraints. Contact us to verify your specific insurance coverage.",
    },
    {
        question: "Are online sessions as effective as in-person?",
        answer:
            "Research shows that online therapy can be just as effective as in-person sessions for many concerns. Our secure video platform provides the same quality of care with added convenience and flexibility.",
    },
    {
        question: "Is everything I share confidential?",
        answer:
            "Yes, confidentiality is a cornerstone of therapy. Everything you share is protected by law and professional ethics. The only exceptions are if there's risk of harm to yourself or others, or if required by law.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - Minimal */}
            <section className="section-padding border-b border-foreground/10">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Contact
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
                            Get in
                            <br />
                            <span className="font-normal">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                            Ready to start your journey? We're here to answer your questions and help you take the first step.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info - Minimal */}
            <section className="section-padding border-b border-foreground/10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-3">
                                    <label
                                        htmlFor="name"
                                        className="text-xs uppercase tracking-wider text-foreground/60"
                                    >
                                        Full Name *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="rounded-none border-foreground/20 focus:border-foreground"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label
                                        htmlFor="email"
                                        className="text-xs uppercase tracking-wider text-foreground/60"
                                    >
                                        Email Address *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="rounded-none border-foreground/20 focus:border-foreground"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label
                                        htmlFor="phone"
                                        className="text-xs uppercase tracking-wider text-foreground/60"
                                    >
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="rounded-none border-foreground/20 focus:border-foreground"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label
                                        htmlFor="message"
                                        className="text-xs uppercase tracking-wider text-foreground/60"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us how we can help..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="flex min-h-[120px] w-full rounded-none border border-foreground/20 bg-background px-3 py-2 text-base ring-offset-background placeholder:text-foreground/40 focus-visible:outline-none focus-visible:border-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-light"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="text-sm font-normal tracking-wide px-10 h-12 rounded-none bg-foreground text-background hover:bg-foreground/90"
                                >
                                    SEND MESSAGE
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide">
                                    Contact Information
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-6 pb-8 border-b border-foreground/10">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-foreground/40" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2">Our Location</h3>
                                            <p className="text-base text-foreground/80 font-light">
                                                123 Wellness Street
                                                <br />
                                                San Francisco, CA 94102
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 pb-8 border-b border-foreground/10">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-foreground/40" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2">Phone</h3>
                                            <p className="text-base text-foreground/80 font-light">
                                                (123) 456-7890
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 pb-8 border-b border-foreground/10">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-foreground/40" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2">Email</h3>
                                            <p className="text-base text-foreground/80 font-light">
                                                hello@serenity.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-5 w-5 text-foreground/40" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2">Office Hours</h3>
                                            <p className="text-base text-foreground/80 font-light">
                                                Monday - Friday: 9:00 AM - 7:00 PM
                                                <br />
                                                Saturday: 10:00 AM - 4:00 PM
                                                <br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-16">
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                                FAQ
                            </span>
                            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                                Frequently Asked
                                <br />
                                Questions
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-6">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-foreground/10"
                                >
                                    <AccordionTrigger className="text-left font-normal tracking-wide hover:no-underline text-base py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-foreground/60 leading-relaxed font-light pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}
