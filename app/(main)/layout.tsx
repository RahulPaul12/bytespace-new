import HeaderLayout from "@/components/layouts/HeaderLayout";
import FooterLayout from "@/components/layouts/FooterLayout";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  );
}
