import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
