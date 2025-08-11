import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import Drivers from "./pages/Drivers";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/download" element={<Download />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
