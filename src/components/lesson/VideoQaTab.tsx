import { Icon } from "@/components/ui/Icon";
import type { VIDEO_LESSON } from "@/constants/mock/videoLesson";

export function VideoQaTab({ questions }: { questions: (typeof VIDEO_LESSON)["questions"] }) {
  return (
    <div className="flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-sm text-headline-sm text-text-primary">Questions &amp; Legal Answers (18)</h3>
        <button
          className="px-space-md py-2 rounded-lg bg-surface-elevated hover:bg-surface-bright text-text-primary font-label-interactive text-label-interactive"
          type="button"
        >
          Ask a Question on Lesson 1.2
        </button>
      </div>
      <div className="flex flex-col gap-space-sm">
        {questions.map((item) => (
          <div key={item.author} className="p-space-md rounded-lg bg-surface-level-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-label-code text-[11px] font-bold">
                  {item.initials}
                </span>
                <span className="font-title-card text-[0.875rem] text-text-primary">{item.author}</span>
                <span className="font-label-code text-[0.6875rem] text-text-muted">• {item.when}</span>
              </div>
              <span className="font-label-code text-[0.75rem] text-primary">Timestamp {item.timestamp}</span>
            </div>
            <p className="font-body-default text-[0.875rem] text-text-secondary">{item.question}</p>
            <div className="p-space-sm rounded bg-surface-elevated flex items-start gap-space-sm mt-1">
              <Icon className="text-primary text-[18px] flex-shrink-0 mt-0.5" name="verified" />
              <div className="flex flex-col">
                <span className="font-label-interactive text-[0.75rem] text-primary">{item.answerer}</span>
                <p className="font-body-muted text-[0.8125rem] text-on-surface">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
