import { Fight } from "./fight";

// Liste des events que le backend peut envoyer
export type NotificationEvent =
    | "fight-ended"
    | "fight-started"
    | "event-occurred"
    | "tournament-started"
    | "raid-started"
    | "tournament-changed";

// Type des données envoyées par chaque event
export type NotificationPayloads = {
    "fight-started": { fight: Fight };
    "fight-ended": { fight: Fight };
    "event-occurred": { name: string };
    "tournament-started": { playersNumber: number };
    "raid-started": { teamsNumber: number };
    "tournament-changed": {};
};