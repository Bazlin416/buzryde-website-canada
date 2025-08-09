import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const testimonials = [
  {
    quote: "BuzRyde is my go-to for daily commutes—always on time and super friendly drivers. I’ve never had a bad experience.",
    author: "Amelia",
    location: "Toronto",
    role: "Rider",
    avatar: "/images/amelia-rider.jpg",
    rating: 5,
  },
  {
    quote: "As a driver, I love the transparency and fair earnings. The app makes it easy to find passengers without wasting time.",
    author: "Noah",
    location: "Vancouver",
    role: "Driver",
    avatar: "/images/noah-driver.jpg",
    rating: 5,
  },
  {
    quote: "Booking is lightning fast. I can confirm a ride in seconds, and the live tracking is a game-changer.",
    author: "Sofia",
    location: "Calgary",
    role: "Rider",
    avatar: "/images/sofia-rider.jpg",
    rating: 4,
  },
  {
    quote: "Customer support is top-notch. I once had a question and got help within minutes.",
    author: "Liam",
    location: "Ottawa",
    role: "Rider",
    avatar: "/images/liam-rider.jpg",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${brandTeal}15, ${brandGold}15, ${brandLight}10)`,
      }}
    >
      {/* Decorative glowing circles */}
      <div
        className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: `${brandGold}33` }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: `${brandTeal}33` }}
      ></div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold"
            style={{ color: brandTeal }}
          >
            Loved by Riders & Drivers
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: brandTeal, opacity: 0.8 }}
          >
            Real stories from the BuzRyde community across Canada. Your journey,
            our passion.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      backgroundColor: `${brandLight}dd`,
                      border: `1px solid ${brandGold}33`,
                    }}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex mb-3">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="h-4 w-4"
                            style={{ color: brandGold, fill: brandGold }}
                          />
                        ))}
                      </div>
                      {/* Quote */}
                      <p
                        className="text-base leading-relaxed flex-grow italic"
                        style={{ color: brandTeal }}
                      >
                        “{t.quote}”
                      </p>
                      {/* Author */}
                      <div className="flex items-center gap-3 mt-5">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className="h-10 w-10 rounded-full object-cover border"
                          style={{ borderColor: brandGold }}
                        />
                        <div>
                          <p
                            className="font-medium"
                            style={{ color: brandTeal }}
                          >
                            {t.author}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: brandTeal, opacity: 0.7 }}
                          >
                            {t.role} — {t.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="-left-8"
              style={{
                backgroundColor: brandTeal,
                color: brandLight,
                border: `1px solid ${brandGold}`,
              }}
            />
            <CarouselNext
              className="-right-8"
              style={{
                backgroundColor: brandTeal,
                color: brandLight,
                border: `1px solid ${brandGold}`,
              }}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

