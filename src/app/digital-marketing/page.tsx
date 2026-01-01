import DigitalMarketingHero from "@/components/digital-marketing/hero";
import WhoIsThisFor from "@/components/digital-marketing/who-is-this-for";
import MarketingServices from "@/components/digital-marketing/services";
import MarketingResults from "@/components/digital-marketing/results";
import MarketingCTA from "@/components/digital-marketing/cta";
import TrustStrip from "@/components/digital-marketing/trust-strip";

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingHero />
      <TrustStrip />
      <WhoIsThisFor />
      <MarketingServices />
      <MarketingResults />
      <MarketingCTA />
    </>
  );
}
