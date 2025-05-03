// Liste des events que le backend peut envoyer
export type NotificationEvent =
    | "combat-started"
    | "inventory-updated"
    | "event-occurred";

// Type des données envoyées par chaque event
export type NotificationPayloads = {
    "combat-started": { combatId: string };
    "inventory-updated": {}; // Pas de données
    "event-occurred": { name: string };
};