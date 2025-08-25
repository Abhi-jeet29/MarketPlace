import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  description?: string;
  imageSrc: string; // path from public/
  alt?: string;
  price?: string | number;
  badgeText?: string;
  href?: string;
}

export default function Card({
  title,
  description,
  imageSrc,
  alt = "",
  price,
  badgeText,
  href = "#",
}: CardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-[--color-light-100] shadow-sm ring-1 ring-[--color-light-300] transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-[--color-light-200]">
        {badgeText && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[--color-light-100] px-3 py-1 text-[--color-orange] text-[length:--text-caption] font-[--text-caption--font-weight] shadow">
            {badgeText}
          </span>
        )}
        <Image
          src={imageSrc}
          alt={alt || title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-[length:--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight] text-[--color-dark-900] line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-[length:--text-body] leading-[--text-body--line-height] text-[--color-dark-700] line-clamp-3">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between pt-1">
          {price !== undefined ? (
            <span className="text-[--color-dark-900] text-xl font-semibold">
              {typeof price === "number" ? `$${price.toFixed(2)}` : price}
            </span>
          ) : (
            <span />
          )}
          <Link
            href={href}
            className="rounded-md bg-[--color-dark-900] px-4 py-2 text-[--color-light-100] text-[length:--text-body-medium] leading-[--text-body-medium--line-height] font-[--text-body-medium--font-weight] hover:bg-[--color-dark-700] transition-colors"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </article>
  );
}
