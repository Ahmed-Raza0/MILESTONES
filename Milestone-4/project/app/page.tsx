import PageFooter from "@/components/PageFooter";
import Hero from "@/components/Hero";
import Link from "next/link";
import ProductList from "@/components/Products";
import Header from "@/components/Header";


export default async function Index() {
  return (
    <div>
      <Header/>
      <Link href="/sign-in">
      <Hero />
      <ProductList/>
      </Link>
      <PageFooter />
    </div>
  );
}
