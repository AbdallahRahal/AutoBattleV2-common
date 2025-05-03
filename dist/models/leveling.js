"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXpToNextLevel = exports.getXpForLevel = exports.LEVEL_EXPERIENCE_TABLE = void 0;
// Tableau XP statique pour chaque niveau jusqu'au niveau 20
// [niveau] = XP nécessaire pour atteindre ce niveau
exports.LEVEL_EXPERIENCE_TABLE = [
    0, // Level 0 (optionnel)
    0, // Level 1 
    100, // Level 2
    300, // Level 3
    600, // Level 4
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
// Obtenir l'expérience nécessaire pour atteindre un niveau spécifique
function getXpForLevel(level) {
    if (level <= 0)
        return 0;
    if (level >= exports.LEVEL_EXPERIENCE_TABLE.length) {
        // Si au-dessus du tableau → retourne la dernière valeur
        return exports.LEVEL_EXPERIENCE_TABLE[exports.LEVEL_EXPERIENCE_TABLE.length - 1];
    }
    return exports.LEVEL_EXPERIENCE_TABLE[level];
}
exports.getXpForLevel = getXpForLevel;
// Calculer combien d'xp il faut encore pour le prochain niveau
function getXpToNextLevel(currentLevel, currentExperience) {
    const nextLevelXp = getXpForLevel(currentLevel + 1);
    return Math.max(0, nextLevelXp - currentExperience);
}
exports.getXpToNextLevel = getXpToNextLevel;
