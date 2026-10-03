"use client";

import { motion } from "framer-motion";
import type { ContributionDay } from "@/lib/github";

function intensity(count: number): string {
  if (count <= 0) return "rgba(255,255,255,0.06)";
  if (count === 1) return "rgba(173,198,255,0.35)";
  if (count === 2) return "rgba(173,198,255,0.6)";
  return "rgba(173,198,255,0.9)";
}

type ContributionGridProps = {
  days: ContributionDay[];
  weeks: number;
};

/** GitHub-style contribution heatmap: `weeks` columns of 7 day cells. */
export function ContributionGrid({ days, weeks }: ContributionGridProps) {
  const columns: ContributionDay[][] = [];
  for (let i = 0; i < weeks; i += 1) {
    columns.push(days.slice(i * 7, i * 7 + 7));
  }

  return (
    <div className="flex gap-[3px]">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-[3px]">
          {column.map((day, dayIndex) => (
            <motion.span
              key={day.date}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (columnIndex * 7 + dayIndex) * 0.004 }}
              className="block h-2 w-2 rounded-[2px]"
              style={{ backgroundColor: intensity(day.count) }}
              title={`${day.date}: ${day.count} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
