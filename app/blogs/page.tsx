import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Understanding Anxiety: A Comprehensive Guide",
    excerpt: "Learn about the different types of anxiety, their symptoms, and effective coping strategies.",
    date: "March 15, 2024",
    category: "Mental Health",
    image: "/images/wellness-abstract.png",
  },
  {
    title: "The Power of Mindfulness in Daily Life",
    excerpt: "Discover how simple mindfulness practices can transform your mental well-being.",
    date: "March 10, 2024",
    category: "Wellness",
    image: "/images/abstract-peace.png",
  },
  {
    title: "Building Stronger Relationships Through Communication",
    excerpt: "Explore effective communication techniques that can strengthen your relationships.",
    date: "March 5, 2024",
    category: "Relationships",
    image: "/images/therapy-session.png",
  },
  {
    title: "Self-Care Strategies for Busy Professionals",
    excerpt: "Practical self-care tips that fit into even the busiest schedules.",
    date: "February 28, 2024",
    category: "Self-Care",
    image: "/images/hero-meditation.png",
  },
  {
    title: "Navigating Grief and Loss",
    excerpt: "A compassionate guide to understanding and processing grief.",
    date: "February 20, 2024",
    category: "Mental Health",
    image: "/images/wellness-abstract.png",
  },
  {
    title: "The Benefits of Group Therapy",
    excerpt: "Learn how group therapy can provide unique support and connection.",
    date: "February 15, 2024",
    category: "Therapy",
    image: "/images/abstract-peace.png",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-6 block">
              Blogs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Insights &amp;
              <br />
              <span className="font-normal">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
              Explore our collection of articles on mental health, wellness, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blogs/${index + 1}`}>
                <Card className="border-foreground/10 rounded-none hover:border-foreground/30 transition-colors cursor-pointer h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-foreground/50 uppercase tracking-wider">{post.category}</span>
                      <span className="text-foreground/40">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-light leading-tight">{post.title}</h3>
                    <p className="text-sm text-foreground/60 font-light leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

