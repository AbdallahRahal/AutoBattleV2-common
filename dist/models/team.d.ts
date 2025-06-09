import { Character } from "./character";
export interface Team {
    id: string;
    name: string;
    member: Character[];
    joinCode: number;
}
