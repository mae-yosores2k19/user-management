import { Header } from "@/components/Header";

export default function UsersListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="sticky left-0 right-0 top-0 z-50 drop-shadow-lg"
        id="main-header"
      >
        <Header />
      </div>
      {children}
    </>
  );
}
