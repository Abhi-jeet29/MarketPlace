import SocialProviders from "@/components/SocialProviders";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div>
      <h1 className="text-center text-[length:--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
        Join Today
      </h1>
      <SocialProviders className="mt-4" />

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-light-300" />
        </div>
        <div className="relative flex justify-center text-caption">
          <span className="bg-light-100 px-3 text-dark-700">
            Or sign up with
          </span>
        </div>
      </div>

      <AuthForm
        title="Create your account"
        submitLabel="Sign Up"
        mode="signup"
      />

      <p className="mt-4 text-caption text-dark-700 text-center">
        Already have an account?{" "}
        <Link className="underline" href="/sign-in">
          Sign In
        </Link>
      </p>
    </div>
  );
}
