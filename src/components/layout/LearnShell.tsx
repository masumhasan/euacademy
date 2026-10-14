import type { ReactNode } from "react";
import { AcademyNavbar } from "./AcademyNavbar";
import { LearnSidebar } from "./LearnSidebar";

/** Student learning chrome: navbar, fixed curriculum sidebar, content area. */
export function LearnShell({ courseSlug, children }: { courseSlug: string; children: ReactNode }) {
  return (
    <>
      <AcademyNavbar />
      <LearnSidebar courseSlug={courseSlug} />
      <div className="pl-80">
        <main className="relative pt-20 bg-surface-base min-h-screen px-gutter py-space-xl">
          <div className="flex flex-col w-full">{children}</div>
        </main>
      </div>
    </>
  );
}
