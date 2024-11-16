import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import Hero from "@/components/Hero";
import Link from "next/link";
import ProductList from "@/components/Products";


export default async function Index() {
  return (
    <div>
      <PageHeader/>
      <Link href="/sign-in">
      <Hero />
      <ProductList/>
      </Link>
      <PageFooter />
    </div>
  );
}
