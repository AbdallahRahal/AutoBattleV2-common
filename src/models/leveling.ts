// Tableau XP statique pour chaque niveau jusqu'au niveau 20
// [niveau] = XP nécessaire pour atteindre ce niveau
export const LEVEL_EXPERIENCE_TABLE: number[] = [
    0,    // Level 0 (optionnel)
    100,  // Level 1
    300,  // Level 2
    600,  // Level 3
    1000, // Level 4
    1500, // Level 5
    2100, // Level 6
    2800, // Level 7
    3600, // Level 8
    4500, // Level 9
    5500, // Level 10
    6600, // Level 11
    7800, // Level 12
    9100, // Level 13
    10500, // Level 14
    12000, // Level 15
    13600, // Level 16
    15300, // Level 17
    17100, // Level 18
    19000, // Level 19
    21000, // Level 20
];

// Obtenir l'expérience nécessaire pour atteindre un niveau spécifique
export function getXpForLevel(level: number): number {
    if (level <= 0) return 0;
    if (level >= LEVEL_EXPERIENCE_TABLE.length) {
        // Si au-dessus du tableau → retourne la dernière valeur
        return LEVEL_EXPERIENCE_TABLE[LEVEL_EXPERIENCE_TABLE.length - 1];
    }
    return LEVEL_EXPERIENCE_TABLE[level];
}

// Calculer combien d'xp il faut encore pour le prochain niveau
export function getXpToNextLevel(currentLevel: number, currentExperience: number): number {
    const nextLevelXp = getXpForLevel(currentLevel + 1);
    return Math.max(0, nextLevelXp - currentExperience);
}
