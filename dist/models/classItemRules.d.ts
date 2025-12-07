import { ClassName } from "./character";
export interface ClassItemEquipRule {
    class: ClassName;
    minPoints: number;
    itemSpellId: number;
}
export declare const CLASS_PLAYED_THRESHOLD = 5;
export declare const classItemEquipRule: ClassItemEquipRule[];
