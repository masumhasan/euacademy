import type { ReactNode } from "react";
import { StudioSidebar } from "./StudioSidebar";
import { StudioTopbar } from "./StudioTopbar";

/** Admin chrome: fixed left sidebar, fixed topbar, scrolling content. */
export function StudioShell({ children }: { children: ReactNode }) {
  return (
    <>
      <StudioSidebar />
      <div className="pl-[280px] min-h-screen flex flex-col">
        <StudioTopbar />
        <main className="w-full pt-16 bg-surface-base flex-1">{children}</main>
      </div>
    </>
  );
}
