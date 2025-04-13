import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Marius Tanase Portfolio</title>
        <meta
          name="description"
          content="Showcasing Marius Tanase's projects and expertise."
        />
      </Helmet>
      <div className="min-h-screen bg-secondary text-white">
        <Header />
        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
