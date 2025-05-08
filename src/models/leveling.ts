// Tableau XP statique pour chaque niveau jusqu'au niveau 20
// [niveau] = XP nécessaire pour atteindre ce niveau
export const LEVEL_EXPERIENCE_TABLE: number[] = [
    0,    // Level 0 (optionnel)
    0,    // Level 1 
    100,  // Level 2
    300,  // Level 3
    600,  // Level 4
    1000, // Level 5
    1500, // Level 6
    2100, // Level 7
    2800, // Level 8
    3600, // Level 9
    4500, // Level 10
    5500, // Level 11
    6600, // Level 12
    7800, // Level 13
    9100, // Level 14
    10500, // Level 15
    12000, // Level 16
    13600, // Level 17
    15300, // Level 18
    17100, // Level 19
    20000, // Level 20
];
export const totalXpCaps = [Infinity, 250, 800, 2100, 4500, 8000, 12000]; // Dimanche = Infinity

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
