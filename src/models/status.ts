export enum StatusType {
    STUN = 'STUN',
    INVINCIBLE = 'INVINCIBLE',
}

export interface StatusSnapshot {
    type: StatusType;
    applicationTimestamp: number;
    expirationTimestamp: number;
}