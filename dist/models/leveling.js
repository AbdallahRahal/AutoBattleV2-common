"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXpToNextLevel = exports.getXpForLevel = exports.totalXpCaps = exports.LEVEL_EXPERIENCE_TABLE = void 0;
// Tableau XP statique pour chaque niveau jusqu'au niveau 20
// [niveau] = XP nécessaire pour atteindre ce niveau
exports.LEVEL_EXPERIENCE_TABLE = [
    0, // Level 0 (optionnel)
    0, // Level 1 
    100, // Level 2
    200, // Level 3 ITEM MAX LUNDI
    300, // Level 4
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
exports.totalXpCaps = [1400, 200, 400, 600, 800, 1000, 1200]; // Dimanche = Infinity
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
