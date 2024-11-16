import Header from "@/components/Header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header/>
    <div className="w-full h-screen flex flex-col gap-6 items-center justify-center">{children}</div>
    </>
  );
}
