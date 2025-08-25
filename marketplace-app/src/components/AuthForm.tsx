"use client";

import { useState } from "react";

type AuthFormProps = {
  title: string;
  submitLabel: string;
  mode: "signin" | "signup";
};

export default function AuthForm({ title, submitLabel, mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-light-100">
      <h2 className="text-heading-3 font-medium text-center mb-4">{title}</h2>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {mode === "signup" && (
          <div className="space-y-2">
            <label className="text-caption text-dark-700" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="h-12 w-full rounded-md border border-light-300 px-4 bg-light-100 focus:outline-none focus:ring-2 focus:ring-dark-900"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="text-caption text-dark-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="johndoe@gmail.com"
            className="h-12 w-full rounded-md border border-light-300 px-4 bg-light-100 focus:outline-none focus:ring-2 focus:ring-dark-900"
          />
        </div>

        <div className="space-y-2">
          <label className="text-caption text-dark-700" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              placeholder="minimum 8 characters"
              className="h-12 w-full rounded-md border border-light-300 px-4 bg-light-100 pr-10 focus:outline-none focus:ring-2 focus:ring-dark-900"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((s) => !s)}
              className="absolute inset-y-0 right-0 px-3 text-dark-700 hover:text-dark-900"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="h-12 w-full rounded-full bg-dark-900 text-light-100 font-medium hover:opacity-90 transition"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
