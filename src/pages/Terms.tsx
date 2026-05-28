import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';

export function Terms() {
  return (
    <div className="pt-24 pb-32 flex flex-col relative w-full">
      <AnimatedSection className="text-center pb-12 mt-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
          Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Conditions</span>
        </h1>
        <p className="text-lg text-text-soft max-w-2xl mx-auto tracking-wide">
          Last Updated: May 2026
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0 max-w-4xl mx-auto w-full">
        <GlassCard className="p-8 md:p-12 text-gray-300 space-y-8 leading-relaxed">
          <p className="text-lg text-white font-medium">
            Welcome to ANSH GROWTH PARTNER.
            By accessing our website, services, content, marketing solutions, or digital platforms, you agree to the following Terms & Conditions. These terms are designed to create a transparent, professional, secure, and trustworthy experience for every client, partner, and visitor associated with our brand.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">1. ABOUT OUR BRAND</h2>
            <p className="mb-4">ANSH GROWTH PARTNER is a futuristic digital growth and marketing ecosystem focused on helping businesses grow through:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-brand-blue">
              <li><span className="text-gray-300">Digital Marketing</span></li>
              <li><span className="text-gray-300">Branding</span></li>
              <li><span className="text-gray-300">AI Content Creation</span></li>
              <li><span className="text-gray-300">Website Development</span></li>
              <li><span className="text-gray-300">Video Editing</span></li>
              <li><span className="text-gray-300">Performance Advertising</span></li>
              <li><span className="text-gray-300">Automation Systems</span></li>
              <li><span className="text-gray-300">Creative Strategy</span></li>
            </ul>
            <p>Our mission is to deliver premium-quality digital experiences with professionalism, transparency, creativity, and long-term business value.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">2. ACCEPTANCE OF TERMS</h2>
            <p className="mb-2">By using our website or purchasing any service, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>You have read these terms carefully</li>
              <li>You agree to follow all policies mentioned here</li>
              <li>You understand our workflow and payment structure</li>
              <li>You agree to communicate professionally and respectfully</li>
            </ul>
            <p className="mt-4">If you do not agree with any part of these Terms & Conditions, kindly discontinue using our services.</p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">3. SERVICE AGREEMENT</h2>
             <p className="mb-4">Every project at ANSH GROWTH PARTNER is handled with strategic planning, creative execution, and professional attention.</p>
             <p className="mb-2">We provide customized services according to:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>client goals</li>
               <li>business requirements</li>
               <li>project scope</li>
               <li>timeline</li>
               <li>creative direction</li>
             </ul>
             <p className="mb-2">Project timelines may vary depending on:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>project complexity</li>
               <li>revisions</li>
               <li>communication speed</li>
               <li>approval delays</li>
               <li>additional requirements</li>
             </ul>
             <p className="mb-2">We reserve the right to refuse projects that:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300">
               <li>involve illegal activity</li>
               <li>violate platform policies</li>
               <li>promote harmful content</li>
               <li>include unethical business practices</li>
             </ul>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">4. PAYMENT POLICY</h2>
             <p className="mb-4">To maintain transparency and workflow efficiency, we follow a structured payment system.</p>
             
             <h3 className="text-xl font-bold text-brand-purple mb-2">Project Payment Structure:</h3>
             
             <div className="space-y-4">
                 <div className="bg-white/5 p-4 rounded-lg">
                   <h4 className="font-bold text-white mb-2">For ₹0–₹1000 Projects:</h4>
                   <ul className="list-disc pl-5"><li>70% advance payment</li><li>30% before final delivery</li></ul>
                 </div>
                 
                 <div className="bg-white/5 p-4 rounded-lg">
                   <h4 className="font-bold text-white mb-2">For ₹1000–₹5000 Projects:</h4>
                   <ul className="list-disc pl-5"><li>50% advance payment</li><li>30% during project progress</li><li>20% before final delivery</li></ul>
                 </div>
                 
                 <div className="bg-white/5 p-4 rounded-lg">
                   <h4 className="font-bold text-white mb-2">For ₹5000+ Projects:</h4>
                   <ul className="list-disc pl-5"><li>40% advance payment</li><li>40% during work progress</li><li>20% before final delivery</li></ul>
                 </div>
             </div>

             <h3 className="text-xl font-bold text-brand-blue mb-2 mt-6">Important Payment Terms:</h3>
             <ul className="list-disc pl-6 space-y-1 text-gray-300">
               <li>Work begins only after advance confirmation</li>
               <li>Final files/assets are delivered after full payment clearance</li>
               <li>Delayed payments may affect project timelines</li>
               <li>Payments made are non-refundable once work has started</li>
             </ul>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">5. CLIENT RESPONSIBILITIES</h2>
             <p className="mb-2">To ensure smooth project completion, clients are responsible for:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>providing correct information</li>
               <li>sharing required assets/files</li>
               <li>giving timely approvals</li>
               <li>maintaining professional communication</li>
               <li>respecting project timelines</li>
             </ul>
             <p>Delays from the client side may impact delivery schedules.</p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">6. REVISIONS & MODIFICATIONS</h2>
             <p className="mb-4">We believe in delivering high-quality work with client satisfaction. Reasonable revisions are included depending on the selected service package.</p>
             <p className="mb-2">However, the following may require extra charges:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300">
               <li>excessive revisions</li>
               <li>complete redesign requests</li>
               <li>out-of-scope changes</li>
               <li>additional features after approval</li>
             </ul>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">7. INTELLECTUAL PROPERTY</h2>
             <p className="mb-4">After full payment completion, final approved deliverables become the client’s property.</p>
             <p className="mb-2">However, the following remain the intellectual property of ANSH GROWTH PARTNER unless otherwise agreed in writing:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>source files</li>
               <li>concepts</li>
               <li>templates</li>
               <li>frameworks</li>
               <li>strategies</li>
               <li>internal systems</li>
             </ul>
             <p>We reserve the right to showcase completed projects in our portfolio, marketing materials, and social platforms unless confidentiality is requested officially.</p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">8. CONFIDENTIALITY & PRIVACY</h2>
             <p className="mb-4">We respect client privacy and business confidentiality.</p>
             <p className="mb-2">Any sensitive business information shared with us:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>will remain protected</li>
               <li>will not be sold or misused</li>
               <li>will only be used for project purposes</li>
             </ul>
             <p>We are committed to maintaining trust, transparency, and professional ethics.</p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">9. RESULTS DISCLAIMER</h2>
             <p className="mb-4">While we use premium strategies, creative systems, AI-powered workflows, and marketing expertise to maximize results, we do NOT guarantee:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>instant business growth</li>
               <li>fixed sales numbers</li>
               <li>guaranteed followers</li>
               <li>guaranteed ad performance</li>
               <li>viral success</li>
             </ul>
             <p className="mb-2">Business results may vary depending on:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300">
               <li>market conditions</li>
               <li>competition</li>
               <li>audience behavior</li>
               <li>budget</li>
               <li>execution consistency</li>
             </ul>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">10. THIRD-PARTY PLATFORMS</h2>
             <p className="mb-2">Some services may involve third-party platforms such as Meta, Google, Instagram, YouTube, WhatsApp, hosting providers, or AI tools. We are not responsible for:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300">
               <li>platform outages</li>
               <li>account restrictions</li>
               <li>algorithm changes</li>
               <li>third-party policy changes</li>
             </ul>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">11. TERMINATION OF SERVICES</h2>
             <p className="mb-2">We reserve the right to suspend or terminate services if:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>abusive behavior occurs</li>
               <li>fake information is provided</li>
               <li>payment obligations are ignored</li>
               <li>unethical requests are made</li>
               <li>project communication becomes harmful</li>
             </ul>
             <p>Professional respect is expected from both sides.</p>
          </div>
          
          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">12. PARTNER PROGRAM TERMS</h2>
             <p className="mb-2">For users joining the "Ansh Partner Circle":</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>commissions are provided according to valid referral conditions</li>
               <li>fake referrals or fraudulent activities are strictly prohibited</li>
               <li>membership benefits may evolve over time</li>
               <li>community guidelines must be respected</li>
             </ul>
             <p>Violation of community standards may result in membership removal.</p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">13. LIMITATION OF LIABILITY</h2>
             <p className="mb-2">ANSH GROWTH PARTNER shall not be held responsible for:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300">
               <li>indirect business losses</li>
               <li>technical interruptions</li>
               <li>third-party failures</li>
               <li>platform-related issues</li>
               <li>unforeseen delays caused beyond our control</li>
             </ul>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">14. BRAND VALUES & ETHICS</h2>
             <p className="mb-2">At ANSH GROWTH PARTNER, we believe in:</p>
             <ul className="list-disc pl-6 space-y-1 text-gray-300 mb-4">
               <li>honest communication</li>
               <li>creative excellence</li>
               <li>long-term partnerships</li>
               <li>premium quality</li>
               <li>transparency</li>
               <li>innovation</li>
               <li>growth-driven execution</li>
             </ul>
             <p>We aim to build meaningful digital experiences that genuinely help businesses grow.</p>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">15. CONTACT INFORMATION</h2>
             <p className="mb-4">For any questions regarding these Terms & Conditions, contact us:</p>
             <div className="bg-white/5 p-6 rounded-xl space-y-2">
                 <p><strong className="text-white">Email:</strong> anshxtd4293@gmail.com</p>
                 <p><strong className="text-white">Phone / WhatsApp:</strong> +91 9693768406</p>
                 <p><strong className="text-white">Instagram:</strong> @anshgrowthpartner</p>
             </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
             <h3 className="text-xl font-display font-bold text-white mb-4">FINAL NOTE</h3>
             <p className="text-gray-300 max-w-2xl mx-auto">
               By working with ANSH GROWTH PARTNER, you become part of a modern growth ecosystem focused on creativity, innovation, trust, and premium digital transformation. 
             </p>
             <p className="text-brand-purple font-medium mt-4">We appreciate your trust and look forward to building something extraordinary together.</p>
          </div>

        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
