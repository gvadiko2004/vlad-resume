import Logo from "../logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-3 items-center text-center sm:text-left sm:items-start">
          {/* Линия + логотип */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          {/* Текст */}
          <p className="text-secondary text-sm sm:text-base">
            © {currentYear} Vlad / WebiSen. Розробка сайтів під ключ: дизайн, верстка,
            WordPress, оптимізація швидкості та SEO.
          </p>

          <p className="text-secondary text-sm sm:text-base">
            Портфоліо та відгуки клієнтів —{" "}
            <a
              href="https://freelancehunt.com/freelancer/Vlari.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              профіль на Freelancehunt
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
