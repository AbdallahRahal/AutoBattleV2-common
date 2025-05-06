import { Fight } from "./fight";
export type NotificationEvent = "fight-ended" | "fight-started" | "event-occurred";
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
};
