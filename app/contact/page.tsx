"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export default function ContactPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
        <div className="min-h-screen bg-background">
            {/* Hero Section - Full Screen */}
            <section className="min-h-screen flex items-center py-16 md:py-24 relative">
                <div className="container-custom w-full">
                    <div className="max-w-4xl">
                        <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 block font-light">
                            {t.contact}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-foreground">
                            {t.getInTouch}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
                            {t.readyToStart}
                        </p>
                    </div>
                </div>
                <ScrollIndicator />
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground">
                                {t.sendUsAMessage}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-xs uppercase tracking-wider text-foreground/60 font-light"
                                    >
                                        {t.fullName} *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="rounded-lg border-border/50 focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-xs uppercase tracking-wider text-foreground/60 font-light"
                                    >
                                        {t.emailAddress} *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="rounded-lg border-border/50 focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-xs uppercase tracking-wider text-foreground/60 font-light"
                                    >
                                        {t.phoneNumber}
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="rounded-lg border-border/50 focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-xs uppercase tracking-wider text-foreground/60 font-light"
                                    >
                                        {t.message} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder={t.tellUsHowWeCanHelp}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="flex min-h-[120px] w-full rounded-lg border border-border/50 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-foreground/40 focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 font-light"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-light px-8 h-12 rounded-full transition-all"
                                >
                                    {t.sendMessage}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-light mb-8 text-foreground">
                                    {t.contactInformation}
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-primary/10">
                                            <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.ourLocation}</h3>
                                            <p className="text-sm text-foreground/70 font-light">
                                                123 Wellness Street
                                                <br />
                                                San Francisco, CA 94102
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-primary/10">
                                            <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.phone}</h3>
                                            <p className="text-sm text-foreground/70 font-light">
                                                (123) 456-7890
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-primary/10">
                                            <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.email}</h3>
                                            <p className="text-sm text-foreground/70 font-light">
                                                hello@healingflow.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg bg-primary/10">
                                            <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-2 font-light">{t.officeHours}</h3>
                                            <p className="text-sm text-foreground/70 font-light">
                                                {t.mondayFriday}
                                                <br />
                                                {t.saturday}
                                                <br />
                                                {t.sunday}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
