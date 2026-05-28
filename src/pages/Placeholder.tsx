import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="pt-32 pb-32 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <AnimatedSection>
         <h1 className="text-5xl font-display font-bold mb-4">{title}</h1>
         <p className="text-text-soft">This premium page is currently under construction. Please check back soon.</p>
      </AnimatedSection>
    </div>
  );
}
