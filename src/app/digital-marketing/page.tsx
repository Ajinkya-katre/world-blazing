import DigitalMarketingHero from "@/components/digital-marketing/hero";
import WhoIsThisFor from "@/components/digital-marketing/who-is-this-for";
import MarketingServices from "@/components/digital-marketing/services";
import MarketingResults from "@/components/digital-marketing/results";
import MarketingCTA from "@/components/digital-marketing/cta";
import TrustStrip from "@/components/digital-marketing/trust-strip";

export const metadata = {
  title: "Digital Marketing Course in Pune",
  description:
    "Join Digital Marketing training at World Blazing Computer Institute in Pune with hands-on practice in SEO, Google Ads, social media marketing and live projects.",
};


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
