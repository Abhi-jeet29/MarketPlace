import SocialProviders from "@/components/SocialProviders";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div>
      <h1 className="text-center text-[length:--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
        Welcome back
      </h1>
      <SocialProviders className="mt-4" />

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-light-300" />
        </div>
        <div className="relative flex justify-center text-caption">
          <span className="bg-light-100 px-3 text-dark-700">
            Or sign in with
          </span>
        </div>
      </div>

      <AuthForm title="Sign In" submitLabel="Sign In" mode="signin" />

      <p className="mt-4 text-caption text-dark-700 text-center">
        Don&apos;t have an account?{" "}
        <Link className="underline" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
