"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { TEXT_LESSON } from "@/constants/mock/textLesson";

type Audio = (typeof TEXT_LESSON)["audio"];

export function AudioPlayerCard({ audio }: { audio: Audio }) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(audio.speeds[0]);

  return (
    <div className="p-space-lg rounded-xl bg-surface-level-2 shadow-xl flex flex-col gap-space-md relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <button
            aria-label={playing ? "Pause audio" : "Play audio"}
            className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-gold-hover transition-all transform hover:scale-105 shadow-md flex-shrink-0"
            onClick={() => setPlaying((value) => !value)}
            type="button"
          >
            <Icon className="text-[26px]" filled name={playing ? "pause" : "play_arrow"} />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-title-card text-title-card text-text-primary font-bold">{audio.title}</span>
              <span className="font-label-code text-[11px] bg-primary/15 text-primary px-2 py-0.5 rounded font-medium">
                {audio.total} total
              </span>
            </div>
            <p className="font-body-muted text-body-muted text-text-secondary">{audio.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="inline-flex rounded-lg bg-surface-level-1 p-1">
            {audio.speeds.map((option) => (
              <button
                key={option}
                className={cn(
                  "px-2.5 py-1 font-label-code text-[11px] rounded transition-all",
                  option === speed
                    ? "bg-primary text-on-primary font-semibold"
                    : "text-on-surface-variant hover:text-text-primary",
                )}
                onClick={() => setSpeed(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="p-2 rounded-lg bg-surface-level-1 text-on-surface-variant hover:text-text-primary transition-colors"
            title="Audio Settings"
            type="button"
          >
            <Icon className="text-[18px]" name="volume_up" />
          </button>
        </div>
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="h-8 w-full flex items-end gap-1 px-1 opacity-70">
          {audio.bars.map((height, index) => (
            <span
              key={index}
              className={cn("w-1 rounded-t", index < audio.playedBars ? "bg-primary" : "bg-surface-bright")}
              style={{ height: `${height * 0.25}rem` }}
            />
          ))}
        </div>
        <div className="relative w-full h-2 bg-surface-level-1 rounded-full cursor-pointer group">
          <div className="h-full bg-primary rounded-full relative" style={{ width: `${audio.percent}%` }}>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-text-primary rounded-full shadow-md transform scale-0 group-hover:scale-100 transition-transform" />
          </div>
        </div>
        <div className="flex justify-between items-center font-label-code text-[11px] text-text-muted">
          <span>{audio.elapsed}</span>
          <span className="text-text-secondary">Chapter: &ldquo;{audio.chapter}&rdquo;</span>
          <span>{audio.total}</span>
        </div>
      </div>
    </div>
  );
}
