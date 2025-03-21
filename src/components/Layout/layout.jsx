import { ProgressBar } from "../ProgressBar/progress-bar";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

export function Layout({ children }) {
  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
