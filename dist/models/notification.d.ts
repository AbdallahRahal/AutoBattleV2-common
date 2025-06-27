import { Fight } from "./fight";
export type NotificationEvent = "fight-ended" | "fight-started" | "event-occurred" | "tournament-started" | "raid-started" | "tournament-changed";
export type NotificationPayloads = {
    "fight-started": {
        fight: Fight;
    };
    "fight-ended": {
        fight: Fight;
    };
    "event-occurred": {
        name: string;
    };
    "tournament-started": {
        playersNumber: number;
    };
    "raid-started": {
        teamsNumber: number;
    };
    "tournament-changed": {};
};
