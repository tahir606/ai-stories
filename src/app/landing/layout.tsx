export default function Layout({ children }: any) {
  return (
    <>
      <h3 className="text-center">AI Stories</h3>
      <main>{children}</main>
    </>
  );
}
