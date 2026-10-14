import { Icon } from "@/components/ui/Icon";
import { STUDIO_DASHBOARD } from "@/constants/mock/studioDashboard";

export function AdvisoryQueue() {
  return (
    <div className="lg:col-span-5 bg-surface-level-2 p-space-lg rounded-xl border border-gold-hairline flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-border-neutral">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-title-card text-title-card text-text-primary">Priority Jurist Advisory Queue</h2>
              <span className="bg-status-warning-bg text-status-warning font-label-code text-[11px] px-2 py-0.5 rounded-full border border-status-warning/20">
                3 Urgent
              </span>
            </div>
            <p className="font-body-muted text-body-muted text-text-muted">Statutory 4-hour response guarantee</p>
          </div>
          <Icon className="text-primary text-[20px]" name="forum" />
        </div>
        <div className="space-y-3">
          {STUDIO_DASHBOARD.queue.map((item) => (
            <div
              key={item.name}
              className="p-space-sm bg-surface-level-1 rounded-lg border border-border-neutral hover:border-gold-hairline transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-interactive text-xs text-text-primary font-semibold">{item.name}</span>
                <span className="font-label-code text-[10px] text-status-warning bg-status-warning-bg px-2 py-0.5 rounded">
                  {item.due}
                </span>
              </div>
              <p className="font-body-muted text-body-muted text-xs text-text-secondary line-clamp-2">{item.text}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="font-label-caps text-[10px] text-text-muted uppercase">{item.topic}</span>
                <button
                  className="bg-primary hover:bg-gold-hover text-on-primary font-label-interactive text-xs px-2.5 py-1 rounded flex items-center gap-1 transition-colors"
                  type="button"
                >
                  <span>Direct Reply</span>
                  <Icon className="text-[14px]" name="send" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md pt-space-xs border-t border-border-neutral/60 flex items-center justify-between text-xs text-text-muted">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-status-success" />
          <span>Chancery On-Duty: Mathias Schulze, RA</span>
        </span>
        <button className="text-primary font-label-interactive hover:underline" type="button">
          View All 14 Inquiries
        </button>
      </div>
    </div>
  );
}
