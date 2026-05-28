import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Star } from 'lucide-react';

export const REVIEWS = [
  { name: "Rahul Sharma", role: "Founder, RS Fitness Studio", rating: "4.9", text: "Working with ANSH GROWTH PARTNER completely transformed our online presence. Their creativity, premium editing style, and marketing strategy helped our business look far more professional. The communication was smooth, delivery was fast, and the final results honestly exceeded expectations." },
  { name: "Priya Mehta", role: "Owner, Glow Beauty Lounge", rating: "5.0", text: "I was looking for someone who could handle branding, social media, and ads professionally — and they delivered everything perfectly. The website design and video editing quality felt premium and modern. Definitely one of the best teams I’ve worked with." },
  { name: "Aman Verma", role: "CEO, Urban Edge Clothing", rating: "4.8", text: "Most agencies only talk big, but ANSH GROWTH PARTNER actually focused on real business growth. Their AI content strategy and social media work helped us get better engagement and quality leads within weeks." },
  { name: "Neha Kapoor", role: "Founder, NK Interiors", rating: "4.9", text: "The website they created for our brand looked absolutely world-class. Smooth animations, modern UI, and premium feel — our customers genuinely loved the experience. It made our brand look much bigger and more trusted." },
  { name: "Arjun Singh", role: "Director, Singh Enterprises", rating: "4.6", text: "Very responsive team with strong creative skills. They handled our Meta Ads, content, and branding professionally. I especially loved how premium everything looked compared to typical agencies." },
  { name: "Simran Kaur", role: "Personal Brand Coach", rating: "5.0", text: "Their combination of AI tools, design creativity, and marketing knowledge is honestly impressive. The content quality, reels, and growth strategy helped us build a much stronger digital presence." },
  { name: "Mohit Jain", role: "Founder, MJ Tech Solutions", rating: "4.3", text: "From logo branding to complete website development, everything felt high-end and strategically planned. The attention to detail and premium experience made us trust them instantly." },
  { name: "Riya Malhotra", role: "Owner, RM Fashion Hub", rating: "4.7", text: "What I liked most was their modern approach. They understand trends, premium branding, and how to make businesses stand out online. Highly recommended for anyone serious about growth." }
];

export function Testimonials() {
  return (
    <div className="pt-24 pb-32 flex flex-col relative w-full">
      <AnimatedSection className="text-center pb-12 mt-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
          Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] to-brand-purple">Reviews</span>
        </h1>
        <p className="text-xl text-text-soft max-w-2xl mx-auto tracking-wide">
          Hear from the visionaries, founders, and leaders who trust us with their digital growth.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {REVIEWS.map((review, idx) => (
             <GlassCard key={idx} glowOnHover className="p-8 md:p-10 border-t-4 border-t-white bg-white/10 text-white shadow-[0_0_30px_rgba(255,0,110,0.15)] hover:bg-white/20 transition-colors duration-500">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-bold text-white">{review.name}</h3>
                   <p className="text-sm text-gray-300 uppercase tracking-widest mt-1 font-semibold">{review.role}</p>
                 </div>
                 <div className="flex items-center gap-1 bg-white/10 py-1 px-3 rounded-full border border-white/20">
                   <Star className="w-5 h-5 text-yellow-400 fill-current" />
                   <span className="font-bold text-white text-sm">{review.rating}</span>
                 </div>
               </div>
               <p className="text-white leading-relaxed italic text-lg md:text-xl">"{review.text}"</p>
             </GlassCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
