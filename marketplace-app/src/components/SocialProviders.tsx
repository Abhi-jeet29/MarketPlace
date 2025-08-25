import Image from "next/image";

type Props = {
  className?: string;
};

export default function SocialProviders({ className }: Props) {
  return (
    <div className={className}>
      <button
        type="button"
        className="h-12 w-full rounded-md border border-light-300 bg-light-100 flex items-center justify-center gap-3 hover:bg-light-200"
      >
        <Image src="/google.svg" alt="Google" width={18} height={18} />
        <span className="text-body-medium">Continue with Google</span>
      </button>
      <button
        type="button"
        className="h-12 w-full rounded-md border border-light-300 bg-light-100 flex items-center justify-center gap-3 mt-3 hover:bg-light-200"
      >
        <Image src="/apple.svg" alt="Apple" width={18} height={18} />
        <span className="text-body-medium">Continue with Apple</span>
      </button>
    </div>
  );
}
