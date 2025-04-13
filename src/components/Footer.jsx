import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary py-6 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">
          Made with <FaHeart className="text-primary inline-block" /> by Marius
          Tanase
        </p>
      </div>
    </footer>
  );
}
