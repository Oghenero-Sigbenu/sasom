import ContactForm from "./Landing/Contact";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import FixedNav from "./Common/FixedNav";

function Layout({ children, color }) {
  const pageLink = window.location.pathname;
  return (
    <div className="">
      {pageLink === "/" ? <Header color={color} /> : <FixedNav />}
      <div>{children}</div>
      <div className="">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
