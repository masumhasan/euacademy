import { Icon } from "./Icon";

const SIZE_CLASSES = { 14: "text-[14px]", 16: "text-[16px]" } as const;

interface StarRatingProps {
  /** Rating out of 5; halves are rendered as half stars. */
  value: number;
  /** Pixel size of each star. */
  size?: keyof typeof SIZE_CLASSES;
}

export function StarRating({ value, size = 16 }: StarRatingProps) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5 && full < 5;
  const sizeClass = SIZE_CLASSES[size];
  return (
    <span aria-label={`${value} out of 5 stars`} className="flex text-primary" role="img">
      {Array.from({ length: full }, (_, i) => (
        <Icon key={i} className={sizeClass} filled name="star" />
      ))}
      {hasHalf && <Icon className={sizeClass} filled name="star_half" />}
    </span>
  );
}
