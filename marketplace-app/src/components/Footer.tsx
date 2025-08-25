import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[--color-light-300] bg-[--color-dark-900] text-[--color-light-100]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-5">
        <div className="md:col-span-1">
          <Link href="#" className="inline-flex items-center" aria-label="Home">
            <Image src="/logo.svg" width={32} height={32} alt="Logo" />
          </Link>
        </div>

        <nav aria-label="Featured" className="space-y-3">
          <h4 className="text-[length:--text-heading-3] font-[--text-heading-3--font-weight]">
            Featured
          </h4>
          <ul className="space-y-2 text-[--color-light-400]">
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Air Force 1
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Huarache
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Air Max 90
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Air Max 95
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Shoes" className="space-y-3">
          <h4 className="text-[length:--text-heading-3] font-[--text-heading-3--font-weight]">
            Shoes
          </h4>
          <ul className="space-y-2 text-[--color-light-400]">
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                All Shoes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Custom Shoes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Jordan Shoes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Running Shoes
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Clothing" className="space-y-3">
          <h4 className="text-[length:--text-heading-3] font-[--text-heading-3--font-weight]">
            Clothing
          </h4>
          <ul className="space-y-2 text-[--color-light-400]">
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                All Clothing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Modest Wear
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Hoodies & Pullovers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Shirts & Tops
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Kids" className="space-y-3">
          <h4 className="text-[length:--text-heading-3] font-[--text-heading-3--font-weight]">
            Kids'
          </h4>
          <ul className="space-y-2 text-[--color-light-400]">
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Infant & Toddler Shoes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Kids' Shoes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Kids' Jordan Shoes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[--color-light-200]">
                Kids' Basketball Shoes
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-4 py-6 sm:flex-row sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            aria-label="X"
            href="#"
            className="rounded-full bg-white p-2 text-[--color-dark-900] hover:bg-[--color-light-300]"
          >
            <Image src="/x.svg" alt="X" width={18} height={18} />
          </Link>
          <Link
            aria-label="Facebook"
            href="#"
            className="rounded-full bg-white p-2 text-[--color-dark-900] hover:bg-[--color-light-300]"
          >
            <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
          </Link>
          <Link
            aria-label="Instagram"
            href="#"
            className="rounded-full bg-white p-2 text-[--color-dark-900] hover:bg-[--color-light-300]"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={18}
              height={18}
            />
          </Link>
        </div>
        <p className="text-[--color-light-400] text-center text-[length:--text-footnote] leading-[--text-footnote--line-height]">
          © {new Date().getFullYear()} MarketPlace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
