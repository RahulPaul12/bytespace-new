import AuthHeader from "@/components/layouts/authHeader";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}