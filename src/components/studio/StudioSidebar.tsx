"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { STUDIO_NAV } from "@/constants/studioNav";
import { cn } from "@/lib/cn";

export function StudioSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-level-1 z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Link className="h-16 px-space-md flex items-center gap-space-sm bg-surface-level-1" href={ROUTES.studio.dashboard}>
          <BrandLogo className="h-8" />
          <div className="flex flex-col">
            <span className="font-title-card text-title-card text-text-primary tracking-tight">EUVisaAdvice</span>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Academy Studio</span>
          </div>
        </Link>
        <div className="px-space-md py-space-xs">
          <div className="rounded-lg bg-surface-level-2 px-space-sm py-space-xs flex items-center justify-between">
            <div className="flex items-center gap-space-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              <span className="font-label-caps text-label-caps text-text-secondary uppercase tracking-wider">
                Chancery Desk
              </span>
            </div>
            <span className="font-label-code text-label-code text-primary bg-primary-container/20 px-space-2xs py-0.5 rounded">
              ADMIN
            </span>
          </div>
        </div>
        <nav className="flex-1 px-space-xs py-space-xs space-y-1">
          {STUDIO_NAV.map((item) => {
            const active = item.isActive(pathname);
            return (
              <Link
                key={item.label}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between px-space-sm py-2.5 rounded-lg transition-all",
                  active
                    ? "bg-primary-container text-on-primary-container font-headline-sm"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
                )}
                href={item.href}
              >
                <div className="flex items-center gap-space-sm">
                  <Icon className="text-[20px]" name={item.icon} />
                  <span className="font-label-interactive text-label-interactive">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-space-md bg-surface-level-2/60 space-y-space-sm">
        <div className="flex items-center gap-space-xs">
          <Icon className="text-primary text-[18px]" name="policy" />
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps text-text-secondary uppercase">Statutory Protocol</span>
            <span className="font-label-code text-label-code text-on-surface">EU 2024/1983</span>
          </div>
        </div>
        <Link
          className="w-full flex items-center justify-center gap-space-xs py-2 px-space-sm rounded-lg bg-surface-level-1 hover:bg-surface-elevated text-on-surface-variant hover:text-on-surface transition-colors font-label-interactive text-label-interactive"
          href={ROUTES.courses}
        >
          <Icon className="text-[16px]" name="visibility" />
          <span>Switch to Student View</span>
        </Link>
      </div>
    </aside>
  );
}
