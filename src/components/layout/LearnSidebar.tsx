"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { LEARN_SIDEBAR } from "@/constants/learnSidebar";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";

const ITEM_BASE =
  "flex items-center gap-space-sm px-space-md py-space-sm transition-all font-body-muted text-body-muted border-l-[3px]";
const ITEM_IDLE =
  "text-on-surface-variant hover:bg-surface-level-2 hover:text-on-surface border-transparent";
const ITEM_ACTIVE = "border-primary-container bg-gold-subtle-fill text-text-primary";

export function LearnSidebar({ courseSlug }: { courseSlug: string }) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-20 bottom-0 w-80 bg-surface-level-1 border-r border-border-neutral z-40 flex flex-col overflow-y-auto">
      <div className="p-space-md border-b border-border-neutral">
        <div className="flex items-center justify-between mb-space-xs">
          <span className="font-label-caps text-label-caps text-primary uppercase">Curriculum Navigator</span>
          <span className="font-label-code text-[0.75rem] text-text-muted">{LEARN_SIDEBAR.progress}% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-border-neutral rounded-full overflow-hidden">
          <div className="h-full bg-primary-container rounded-full" style={{ width: `${LEARN_SIDEBAR.progress}%` }} />
        </div>
      </div>
      <nav className="flex-1 py-space-sm space-y-1">
        {LEARN_SIDEBAR.items.map((item) => {
          const href = item.href(courseSlug);
          const active = pathname === href;
          return (
            <Link
              key={item.label}
              aria-current={active ? "page" : undefined}
              className={cn(ITEM_BASE, active ? ITEM_ACTIVE : ITEM_IDLE)}
              href={href}
            >
              <Icon className="text-[18px] text-text-muted" name={item.icon} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-space-md border-t border-border-neutral bg-surface-level-2">
        <Link className="flex items-center gap-space-sm" href={ROUTES.myLearning}>
          <Icon className="text-primary text-[20px]" name="verified" />
          <div>
            <p className="font-label-interactive text-[0.8125rem] text-text-primary">Accredited Track</p>
            <p className="font-body-muted text-[0.75rem] text-text-muted">Certificate ID: EU-2025-DE-819</p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
