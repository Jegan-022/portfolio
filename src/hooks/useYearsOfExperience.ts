import { useMemo } from "react";

interface ProjectWithDates {
  startDate?: string;
  endDate?: string;
  [key: string]: any;
}

export function useYearsOfExperience(projects: ProjectWithDates[]) {
  return useMemo(() => {
    if (!projects || projects.length === 0) return 0;

    let earliestDate = new Date();
    let latestDate = new Date(0);
    let hasValidDates = false;

    projects.forEach((p) => {
      if (p.startDate) {
        const start = new Date(p.startDate);
        if (!isNaN(start.getTime())) {
          hasValidDates = true;
          if (start < earliestDate) earliestDate = start;
          if (start > latestDate) latestDate = start;
        }
      }
      if (p.endDate) {
        const end = p.endDate.toLowerCase() === "present" ? new Date() : new Date(p.endDate);
        if (!isNaN(end.getTime())) {
          hasValidDates = true;
          if (end > latestDate) latestDate = end;
          if (end < earliestDate) earliestDate = end;
        }
      }
    });

    if (!hasValidDates) return 0;
    
    // Fallback if somehow earliest > latest
    if (earliestDate > latestDate) {
      const temp = earliestDate;
      earliestDate = latestDate;
      latestDate = temp;
    }

    const diffTime = Math.abs(latestDate.getTime() - earliestDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    
    return Math.max(1, Math.floor(diffYears));
  }, [projects]);
}
