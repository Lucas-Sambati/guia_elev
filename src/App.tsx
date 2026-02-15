import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { InstallGuide } from "@/components/InstallGuide";
import { AccountSection } from "@/components/AccountSection";
import { FeaturesPreview } from "@/components/FeaturesPreview";
import { SupportSection } from "@/components/SupportSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <StepsSection />
        <InstallGuide />
        <AccountSection />
        <FeaturesPreview />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
