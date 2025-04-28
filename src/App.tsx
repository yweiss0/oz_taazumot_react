
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NationalProblem from "./pages/NationalProblem";
import NatureTherapy from "./pages/NatureTherapy";
import Gallery from "./pages/Gallery";
import Help from "./pages/Help";
import Organization from "./pages/Organization";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/national-problem" element={<Layout><NationalProblem /></Layout>} />
          <Route path="/nature-therapy" element={<Layout><NatureTherapy /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/help" element={<Layout><Help /></Layout>} />
          <Route path="/organization" element={<Layout><Organization /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/donate" element={<Layout><Donate /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
