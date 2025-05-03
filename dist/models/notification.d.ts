export type NotificationEvent = "combat-started" | "inventory-updated" | "event-occurred";
export type NotificationPayloads = {
    "combat-started": {
        combatId: string;
    };
    "inventory-updated": {};
    "event-occurred": {
        name: string;
    };
};
