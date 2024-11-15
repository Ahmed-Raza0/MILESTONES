import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import PageHero from "@/components/PageHero";


export default async function Index() {
  return (
    <div>
      <PageHeader/>
      <PageHero />
      <PageFooter />
    </div>
  );
}
