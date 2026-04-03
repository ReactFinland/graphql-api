import { Interval } from "./Interval";
import { Location } from "./Location";
import SessionType from "./SessionType";

export interface Schedule {
  day: string;
  location?: Location;
  description?: string;
  intervals: Interval[];
}

export function resolveSessions(
  schedules: Schedule[],
  sessionTypes: SessionType[]
) {
  const sessions = schedules.flatMap(({ intervals }) =>
    intervals.flatMap(({ sessions }) =>
      sessions
        .flatMap((session) => [session].concat(session.sessions || []))
        .filter(({ type }) => sessionTypes.includes(type))
    )
  );

  return Array.from(new Set(sessions));
}
