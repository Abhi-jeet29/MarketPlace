import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-dvh grid grid-cols-1 md:grid-cols-2">
      <section className="hidden md:block bg-dark-900 text-light-100">
        <div className="h-full flex flex-col justify-between p-8 md:p-12">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </div>
          <div>
            <h1 className="text-heading-2 leading-[var(--text-heading-2--line-height)] font-bold">
              Just Do It
            </h1>
            <p className="mt-4 text-light-300 text-lead max-w-md">
              Join millions of athletes and fitness enthusiasts who trust us for
              their performance needs.
            </p>
          </div>
          <p className="text-footnote text-light-400">
            © 2024 Nike. All rights reserved.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-6 md:p-10 lg:p-16 bg-light-100">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <p className="text-caption text-dark-700">
              Already have an account?{" "}
              <Link className="underline" href="/sign-in">
                Sign In
              </Link>
            </p>
          </div>
          {children}
        </div>
      </section>
    </div>
  );
}
