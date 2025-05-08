// Tableau XP statique pour chaque niveau jusqu'au niveau 20
// [niveau] = XP nécessaire pour atteindre ce niveau
export const LEVEL_EXPERIENCE_TABLE: number[] = [
    0,    // Level 0 (optionnel)
    0,    // Level 1 
    100,  // Level 2
    200,  // Level 3 ITEM MAX LUNDI
    300,  // Level 4
    400, // Level 5 ITEM MAX MARDI
    500, // Level 6
    600, // Level 7 ITEM MAX MERCREDI
    700, // Level 8
    800, // Level 9 ITEM MAX JEUDI
    900, // Level 10
    1000, // Level 11 ITEM MAX VENDREDI
    1100, // Level 12
    1200, // Level 13 ITEM MAX SAMEDI
    1300, // Level 14
    1400, // Level 15 ITEM MAX Dimanche

];

export const totalXpCaps = [1400, 200, 400, 600, 800, 1000, 1200]; // Dimanche = Infinity


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
