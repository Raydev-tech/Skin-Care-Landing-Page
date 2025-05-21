import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Droplet, Leaf, Droplets, ShieldCheck, Sparkles, Star, ChevronRight, ShoppingCart } from "lucide-react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out"});
  }, []);

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6" data-aos="flip-left">
              <div className="inline-flex items-center gap-2 rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 w-fit">
                <Droplet className="h-4 w-4" />
                New Formula
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Reveal Your Natural Radiance
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Our advanced skincare formula combines natural ingredients with cutting-edge science to give you glowing, healthy skin.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="bg-pink-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-pink-700 transition">
                  Shop Now
                </button>
                <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="PureSkin moisturizer product"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2" data-aos="fade-up">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose PureSkin?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our products are formulated with the highest quality ingredients to deliver exceptional results.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm" data-aos="flip-left">
              <Leaf className="h-10 w-10 text-pink-500" />
              <h3 className="text-xl font-bold">Natural</h3>
              <p className="text-sm text-center text-muted-foreground">
                Made with 100% natural and organic ingredients
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm" data-aos="flip-left" data-aos-delay="100">
              <Droplets className="h-10 w-10 text-pink-500" />
              <h3 className="text-xl font-bold">Hydrating</h3>
              <p className="text-sm text-center text-muted-foreground">Deep hydration that lasts all day long</p>
            </div>

            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm" data-aos="flip-left" data-aos-delay="200">
              <ShieldCheck className="h-10 w-10 text-pink-500" />
              <h3 className="text-xl font-bold">Safe</h3>
              <p className="text-sm text-center text-muted-foreground">Dermatologist tested and approved</p>
            </div>

            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm" data-aos="flip-left" data-aos-delay="300">
              <Sparkles className="h-10 w-10 text-pink-500" />
              <h3 className="text-xl font-bold">Effective</h3>
              <p className="text-sm text-center text-muted-foreground">Visible results in just 7 days</p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Best Sellers</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Discover our most loved products that have transformed thousands of skincare routines.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
      
      <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md" data-aos="flip-left" data-aos-delay="0">
        <img
          src="https://images.pexels.com/photos/7796379/pexels-photo-7796379.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=300"
          alt="Hydrating Serum"
          className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
          width={200}
          height={200}
        />
        <div className="p-4">
          <h3 className="font-semibold">Hydrating Serum</h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(124)</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">$39.99</span>
            <button className="h-8 px-3 gap-1 rounded text-sm font-semibold border border-transparent bg-transparent hover:bg-gray-100 transition">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md" data-aos="flip-left" data-aos-delay="100">
        <div className="absolute top-2 right-2 z-10 rounded-full bg-pink-600 px-2 py-1 text-xs font-medium text-white flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Best Seller
        </div>
        <img
          src="https://images.pexels.com/photos/11935645/pexels-photo-11935645.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=300"
          alt="Daily Moisturizer"
          className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
          width={200}
          height={200}
        />
        <div className="p-4">
          <h3 className="font-semibold">Daily Moisturizer</h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(249)</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">$45.99</span>
            <button className="h-8 px-3 gap-1 rounded text-sm font-semibold border border-transparent bg-transparent hover:bg-gray-100 transition">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md" data-aos="flip-left" data-aos-delay="200">
        <img
          src="https://images.pexels.com/photos/27850091/pexels-photo-27850091/free-photo-of-a-bowl-of-oatmeal-with-berries-and-milk.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=300"
          alt="Overnight Repair Cream"
          className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
          width={200}
          height={200}
        />
        <div className="p-4">
          <h3 className="font-semibold">Overnight Repair Cream</h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(187)</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">$52.99</span>
            <button className="h-8 px-3 gap-1 rounded text-sm font-semibold border border-transparent bg-transparent hover:bg-gray-100 transition">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md" data-aos="flip-left" data-aos-delay="300">
        <img
          src="https://images.pexels.com/photos/9496256/pexels-photo-9496256.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=300"
          alt="Brightening Eye Cream"
          className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
          width={200}
          height={200}
        />
        <div className="p-4">
          <h3 className="font-semibold">Brightening Eye Cream</h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(98)</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">$29.99</span>
            <button className="h-8 px-3 gap-1 rounded text-sm font-semibold border border-transparent bg-transparent hover:bg-gray-100 transition">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
        <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md" data-aos="flip-left" data-aos-delay="400">
            <img
            src="https://images.pexels.com/photos/32110926/pexels-photo-32110926/free-photo-of-spf-50-sunscreen-tubes-on-woven-mat-surface.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=300"
            alt="Sunscreen SPF 50"
            className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
            width={200}
            height={200}
            />
            <div className="p-4">
            <h3 className="font-semibold">Sunscreen SPF 50</h3>
            <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-1">(56)</span>
            </div>
            <div className="flex items-center justify-between mt-2">
                <span className="font-bold">$34.99</span>
                <button className="h-8 px-3 gap-1 rounded text-sm font-semibold border border-transparent bg-transparent hover:bg-gray-100 transition">
                <ShoppingCart />
                </button>
            </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md" data-aos="flip-left" data-aos-delay="500">
        <img
          src="https://images.pexels.com/photos/11635435/pexels-photo-11635435.jpeg?auto=compress&cs=tinysrgb&w=600?height=300&width=300"
          alt="Exfoliating Scrub"
          className="object-cover w-full aspect-square transition-transform group-hover:scale-105"
          width={200}
          height={200}
        />
        <div className="p-4">
          <h3 className="font-semibold">Exfoliating Scrub</h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(75)</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">$28.99</span>
            <button className="h-8 px-3 gap-1 rounded text-sm font-semibold border border-transparent bg-transparent hover:bg-gray-100 transition">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="inline-flex items-center gap-1 rounded border border-pink-600 px-6 py-3 text-lg font-semibold text-pink-600 hover:bg-pink-600 hover:text-white transition">
        View All Products <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  </div>
 </section>
 <section
  id="testimonials"
  className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-pink-50"
>
  <div className="container px-4 md:px-6">
    <div
      className="flex flex-col items-center justify-center space-y-4 text-center"
      data-aos="flip-left" data-aos-delay="0"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          What Our Customers Say
        </h2>
        <p className="mx-auto max-w-[700px] text-pink-700 md:text-xl">
          Join thousands of satisfied customers who have transformed their skin with PureSkin.
        </p>
      </div>
    </div>

    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
      {[  
        {
          name: "Sarah Johnson",
          role: "Verified Customer",
          image: "https://images.pexels.com/photos/27738917/pexels-photo-27738917/free-photo-of-a-woman-in-a-green-sequin-dress-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600?height=40&width=40",
          quote:
            "I've tried countless skincare products, but PureSkin is truly a game-changer. My skin has never looked better!",
        },
        {
          name: "Michael Chen",
          role: "Verified Customer",
          image: "https://images.pexels.com/photos/20274153/pexels-photo-20274153/free-photo-of-man-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=600?height=40&width=40",
          quote:
            "After just two weeks of using the Daily Moisturizer, my dry patches disappeared and my skin feels so hydrated!",
        },
        {
          name: "Emily Rodriguez",
          role: "Verified Customer",
          image: "https://images.pexels.com/photos/8148635/pexels-photo-8148635.jpeg?auto=compress&cs=tinysrgb&w=600?height=40&width=40",
          quote:
            "The Overnight Repair Cream has completely transformed my skin. I wake up looking refreshed and glowing every morning!",
        },
      ].map(({ name, role, image, quote }, i) => (
        <div
          key={i}
          className="flex flex-col justify-between space-y-4 rounded-lg border bg-white p-6 shadow-sm"
          data-aos="flip-left"
          data-aos-delay={i * 200} // stagger delay
        >
          <div className="space-y-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, starIdx) => (
                <svg
                  key={starIdx}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.785.57-1.838-.196-1.54-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.047 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-pink-700">{quote}</p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={image}
              alt={`${name} photo`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-pink-800">{name}</p>
              <p className="text-xs text-pink-600">{role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="w-full py-16 bg-white">
  <div className="container px-4 md:px-6 max-w-3xl mx-auto" data-aos="flip-left" data-aos-delay="0">
    <h2 className="mb-10 text-center text-3xl font-bold text-pink-700">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {[
        {
          question: "Are your products suitable for sensitive skin?",
          answer:
            "Yes, all PureSkin products are dermatologist-tested and formulated for sensitive skin types.",
        },
        {
          question: "How soon can I expect to see results?",
          answer:
            "Most users see noticeable improvements within 2-4 weeks of regular use.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship worldwide with tracking and reliable delivery services.",
        },
      ].map(({ question, answer }, i) => (
        <div key={i} className="border-b border-pink-200 pb-4">
          <h3 className="mb-2 font-semibold text-pink-800">{question}</h3>
          <p className="text-pink-600">{answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>


 <section
  className="w-full py-12 md:py-24 lg:py-32 bg-pink-600 text-white"
  data-aos="flip-left" data-aos-delay="0"
>
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Join Our Skincare Community
          </h2>
          <p className="text-white/90 md:text-xl">
            Subscribe to our newsletter for exclusive offers, skincare tips,
            and early access to new products.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // You can handle subscribe logic here
            alert("Subscribed!");
          }}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="rounded-md bg-white px-6 py-3 text-pink-600 font-semibold hover:bg-white/90 transition"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/80 max-w-sm">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  </div>
</section>
     
    </>
  );
};

export default HomePage;
