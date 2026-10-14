import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { BUILDER_TABS } from "@/constants/mock/curriculumBuilder";
import { ROUTES } from "@/constants/routes";

interface CurriculumHeaderProps {
  title: string;
  previewHref: string;
}

export function CurriculumHeader({ title, previewHref }: CurriculumHeaderProps) {
  return (
    <div className="bg-surface-level-1 px-space-lg py-space-md shadow-md">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pb-space-sm">
        <div className="flex flex-col gap-space-2xs min-w-0">
          <div className="flex items-center gap-space-xs text-text-muted font-body-muted text-body-muted">
            <Link className="hover:text-primary transition-colors" href={ROUTES.studio.courses}>
              Courses
            </Link>
            <Icon className="text-[14px]" name="chevron_right" />
            <span className="text-text-secondary truncate">{title}</span>
            <Icon className="text-[14px]" name="chevron_right" />
            <span className="text-primary font-label-code text-label-code uppercase tracking-wider">Curriculum Studio</span>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm pt-0.5">
            <h1 className="font-headline-md text-headline-md text-text-primary tracking-tight">{title}</h1>
            <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-label-code text-label-code flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live v2026.4
            </span>
            <span className="text-text-muted text-[13px] font-body-muted">8 Modules • 27 Lessons • 14 Juridical Assets</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs sm:gap-space-sm flex-wrap">
          <Link
            className="px-space-md py-2 rounded-lg bg-surface-level-2 hover:bg-surface-elevated text-on-surface hover:text-text-primary transition-all font-label-interactive text-label-interactive flex items-center gap-1.5 shadow-sm"
            href={previewHref}
          >
            <Icon className="text-[18px] text-text-secondary" name="open_in_new" />
            <span>Preview Student View</span>
          </Link>
          <button
            className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-text-secondary hover:text-text-primary transition-all font-label-interactive text-label-interactive flex items-center gap-1.5"
            type="button"
          >
            <Icon className="text-[18px]" name="save" />
            <span>Save Draft</span>
          </button>
          <button
            className="px-space-lg py-2 rounded-lg bg-primary hover:bg-gold-hover text-surface-base font-label-interactive text-label-interactive transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            type="button"
          >
            <Icon className="text-[18px]" filled name="verified" />
            <span>Publish Statutory Update</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-space-xs overflow-x-auto pt-space-xs -mb-space-md">
        {BUILDER_TABS.map((tab) => (
          <button
            key={tab.label}
            aria-current={tab.active ? "page" : undefined}
            className={cn(
              "px-space-md py-2.5 rounded-t-lg font-label-interactive text-label-interactive flex items-center gap-2",
              tab.active
                ? "bg-surface-base text-primary shadow-inner"
                : "text-text-muted hover:text-on-surface hover:bg-surface-container-high/40 transition-colors",
            )}
            type="button"
          >
            <Icon className="text-[18px]" name={tab.icon} />
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded font-label-code text-label-code",
                  tab.active ? "bg-primary/20 text-primary" : "bg-surface-container-high text-text-secondary",
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
