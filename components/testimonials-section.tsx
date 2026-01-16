import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Nova.UI cut our development time in half. The type safety and animation system are incredible.",
    author: "Sarah Chen",
    role: "Lead Developer at TechFlow",
    avatar: "/professional-woman-developer.png",
  },
  {
    quote: "Finally, a design system that understands modern web development. Git submodule setup is genius.",
    author: "Marcus Rodriguez",
    role: "Frontend Architect at ScaleUp",
    avatar: "/professional-man-developer.png",
  },
  {
    quote: "The accessibility features saved us countless hours of compliance work. Highly recommended.",
    author: "Emily Watson",
    role: "UX Engineer at Inclusive Design Co",
    avatar: "/professional-woman-ux-designer.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Loved by developers</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what teams are saying about Nova.UI.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <blockquote className="text-foreground">
                  <p className="text-sm leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
