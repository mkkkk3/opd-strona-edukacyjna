import Image from "next/image";
import Link from "next/link";

function NavSquare({ href, label, bg }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center"
      aria-label={`Przejdź do: ${label}`}
    >
      <div
        className={`
          w-10 h-10 rounded-md
          transition-transform duration-200 ease-out
          group-hover:scale-[1.2] group-focus-visible:scale-[1.2]
          ${bg}
        `}
      />

      <span
        className="
          pointer-events-none
          absolute left-1/2 top-full mt-2
          -translate-x-1/2 translate-y-1
          whitespace-nowrap rounded-md
          bg-page1 text-pageMenu text-xs font-semibold
          px-2 py-1 shadow-md
          opacity-0
          transition-all duration-200 ease-out
          group-hover:opacity-100 group-hover:translate-y-0
          group-focus-visible:opacity-100 group-focus-visible:translate-y-0
        "
      >
        {label}
      </span>
    </Link>
  );
}

function Footer() {
  return (
    <footer
      className="bg-grain bg-grainPageMenu font-outfit px-8 md:px-16 pt-8 font-typewriter"
      role="contentinfo"
      aria-labelledby="footer-brand"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_320px_360px] items-start">
        <div>
          <h2 id="footer-brand" className="text-5xl font-extrabold text-page1">
            OPD
          </h2>
          <p id="newsletter-desc" className="mt-6 text-lg text-page1">
            Optymalizacja Procesów Dyskretnych
          </p>
        </div>

        <Image
          src="/ball.gif"
          alt="Image"
          placeholder="blur"
          blurDataURL="/ball.gif"
          width={355}
          height={261}
          className="w-60 h-60 object-cover"
        />

        <div aria-labelledby="contacts-heading">
          <h3
            id="contacts-heading"
            className="text-xl font-semibold text-page1"
          >
            Zawartość
          </h3>

          <div
            className="mt-10 flex items-center gap-8"
            role="group"
            aria-label="Navigation shortcuts"
          >
            <NavSquare href="/" label="Strona Główna" bg="bg-page4" />
            <NavSquare href="/teoria" label="Teoria" bg="bg-page2" />
            <NavSquare href="/algorytmy" label="Algorytmy" bg="bg-page1" />
          </div>
        </div>
      </div>

      <div
        className="mt-8 border-t border-[#E9E9E9]"
        role="separator"
        aria-orientation="horizontal"
      />

      <div className="relative py-4">
        <p className="text-center text-page1">
          Optymalizacja Procesów Dyskretnych
        </p>
      </div>
    </footer>
  );
}

export default Footer;
