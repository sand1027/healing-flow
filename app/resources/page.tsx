import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Headphones,
    Heart,
    Brain,
    Sparkles,
    Download,
} from "lucide-react";

const articles = [
    {
        title: "Understanding Anxiety: A Comprehensive Guide",
        excerpt:
            "Learn about the different types of anxiety disorders, their symptoms, and effective coping strategies.",
        category: "Mental Health",
        readTime: "8 min read",
    },
    {
        title: "The Power of Mindfulness in Daily Life",
        excerpt:
            "Discover how mindfulness practices can reduce stress and improve your overall wellbeing.",
        category: "Wellness",
        readTime: "6 min read",
    },
    {
        title: "Building Healthy Relationships",
        excerpt:
            "Essential communication skills and boundaries for maintaining strong, healthy relationships.",
        category: "Relationships",
        readTime: "10 min read",
    },
    {
        title: "Managing Depression: Hope and Healing",
        excerpt:
            "Understanding depression and practical steps you can take toward recovery and wellness.",
        category: "Mental Health",
        readTime: "12 min read",
    },
    {
        title: "Self-Care Isn't Selfish",
        excerpt:
            "Why prioritizing your mental health is essential and how to create a sustainable self-care routine.",
        category: "Wellness",
        readTime: "7 min read",
    },
    {
        title: "Navigating Life Transitions",
        excerpt:
            "Tools and strategies for managing major life changes with resilience and grace.",
        category: "Personal Growth",
        readTime: "9 min read",
    },
];

const tools = [
    {
        icon: Brain,
        title: "Mood Tracker",
        description:
            "Track your daily moods and identify patterns to better understand your mental health.",
    },
    {
        icon: Headphones,
        title: "Guided Meditations",
        description:
            "Access our library of calming guided meditations for stress relief and relaxation.",
    },
    {
        icon: Heart,
        title: "Breathing Exercises",
        description:
            "Simple breathing techniques to help manage anxiety and promote calmness.",
    },
    {
        icon: Sparkles,
        title: "Gratitude Journal",
        description:
            "Daily prompts to cultivate gratitude and positive thinking habits.",
    },
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Resources
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
                            Mental Health
                            <br />
                            <span className="font-normal">Resources</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                            Tools and resources to support your mental wellness journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Self-Help Tools - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mb-24">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Self-Help Tools
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Daily Wellness
                            <br />
                            Practice
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                        {tools.map((tool, index) => (
                            <div key={index} className="group space-y-6">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <tool.icon className="h-6 w-6 text-foreground/40 group-hover:text-foreground transition-colors duration-300" strokeWidth={1} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-normal tracking-wide">
                                        {tool.title}
                                    </h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                        {tool.description}
                                    </p>
                                </div>
                                <button className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground pb-1">
                                    ACCESS TOOL
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles & Blog - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mb-24">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                            Articles & Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Expert Advice,
                            <br />
                            Personal Growth
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {articles.map((article, index) => (
                            <div key={index} className="group space-y-6">
                                <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                                    <span className="text-foreground/40">
                                        {article.category}
                                    </span>
                                    <span className="text-foreground/40">
                                        {article.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-normal tracking-wide group-hover:text-foreground/60 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                    {article.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground pb-1">
                                    <BookOpen className="h-3 w-3" strokeWidth={1} />
                                    READ ARTICLE
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-24">
                        <button className="text-sm font-normal tracking-wide px-10 h-12 rounded-none bg-transparent border border-foreground/20 hover:border-foreground text-foreground transition-colors">
                            VIEW ALL ARTICLES
                        </button>
                    </div>
                </div>
            </section>

            {/* Crisis Resources - Minimal */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="border border-foreground/10 p-12 md:p-16">
                        <div className="max-w-3xl mx-auto text-center space-y-12">
                            <div>
                                <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
                                    Crisis Support
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                                    Need Immediate Support?
                                </h2>
                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    If you're experiencing a mental health crisis, please reach out for immediate help.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="space-y-3">
                                    <h3 className="text-sm font-normal tracking-wide">National Suicide Prevention</h3>
                                    <p className="text-3xl font-light text-foreground">988</p>
                                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                                        24/7 Crisis Support
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-normal tracking-wide">Crisis Text Line</h3>
                                    <p className="text-xl font-light text-foreground">
                                        Text "HELLO" to 741741
                                    </p>
                                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                                        Free 24/7 Support
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-normal tracking-wide">Emergency Services</h3>
                                    <p className="text-3xl font-light text-foreground">911</p>
                                    <p className="text-xs uppercase tracking-wider text-foreground/50">
                                        Immediate Emergency
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
