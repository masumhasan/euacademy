import { StarRating } from "@/components/ui/StarRating";
import type { CourseReview } from "@/types/courseDetail";

export function ReviewsSection({ reviews, rating }: { reviews: CourseReview[]; rating: number }) {
  return (
    <section className="space-y-space-md">
      <div className="flex items-center justify-between border-b border-border-neutral pb-space-sm">
        <div>
          <h2 className="font-title-card text-title-card text-text-primary">Verified Applicant Outcomes</h2>
          <p className="font-body-muted text-body-muted text-text-secondary">
            {rating} / 5.0 cumulative feedback across 480 enrolled cross-border professionals
          </p>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 rounded bg-status-success-bg border border-status-success/30 text-status-success font-label-code text-[11px]">
          100% Consular Validation
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {reviews.map((review) => (
          <div
            key={review.author}
            className="p-space-md rounded-xl bg-surface-level-1 border border-border-neutral space-y-space-sm flex flex-col justify-between"
          >
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <StarRating size={14} value={5} />
                <span className="font-label-code text-[11px] text-text-muted">{review.context}</span>
              </div>
              <p className="font-body-default text-body-default text-on-surface-variant italic">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
            <div className="pt-2 border-t border-border-neutral/60 flex items-center justify-between font-label-code text-[12px]">
              <span className="text-text-primary font-medium">{review.author}</span>
              <span className="text-text-muted">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
