/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { PartnerCircle } from './pages/PartnerCircle';
import { Contact } from './pages/Contact';
import { PaymentPolicy } from './pages/Pricing';
import { About } from './pages/About';
import { PlaceholderPage } from './pages/Placeholder';
import { Portfolio } from './pages/Portfolio';
import { Testimonials } from './pages/Testimonials';
import { CaseStudies } from './pages/CaseStudies';
import { Terms } from './pages/Terms';
import { AdminPanel } from './pages/AdminPanel';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="partner-program" element={<PartnerCircle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<PaymentPolicy />} />
          <Route path="about" element={<About />} />
          
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="terms" element={<Terms />} />
          <Route path="admin" element={<AdminPanel />} />
          
          <Route path="blog" element={<PlaceholderPage title="Growth Blog" />} />
          <Route path="faq" element={<PlaceholderPage title="FAQ" />} />
          <Route path="support" element={<PlaceholderPage title="Support" />} />
          <Route path="privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="terms" element={<PlaceholderPage title="Terms & Conditions" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
