/**
 * Source de vérité unique pour toutes les variables de balance des sorts.
 *
 * Convention de nommage : NOM_DU_SORT_NOM_DE_LA_VARIABLE (UPPER_SNAKE_CASE).
 *
 * Ce fichier doit être l'unique source de toutes les valeurs numériques
 * utilisées dans :
 * - autobattle-fightsystem (impls de sorts/auras)
 * - autobattle-front (itemDescriptions.config.ts)
 *
 * Toute modification de balance doit se faire ICI uniquement.
 *
 * Conventions :
 * - Pourcentages stockés sous forme entière (ex : 50 pour 50%) sauf si
 *   la valeur est un ratio dans le moteur (préfixé `_RATIO`, ex : 0.5).
 * - Durées en tours = `_TURNS`.
 * - Stacks/cumuls = `_STACKS`.
 * - Cooldowns = `_COOLDOWN` / `_INITIAL_COOLDOWN`.
 */

// ============================================================================
// SORTS ACTIFS (1-53)
// ============================================================================

// 1 - Boule de Feu
export const BOULE_DE_FEU_COOLDOWN = 2;
export const BOULE_DE_FEU_INITIAL_COOLDOWN = 0;
export const BOULE_DE_FEU_INSTANT_DAMAGE = 20;
export const BOULE_DE_FEU_BRULURE_APPLY_COUNT = 1;

// 2 - Exécution
export const EXECUTION_COOLDOWN = 1;
export const EXECUTION_INITIAL_COOLDOWN = 0;
export const EXECUTION_DAMAGE = 57;
export const EXECUTION_LOW_HP_THRESHOLD_PERCENT = 50;

// 3 - Lames Jumelles
export const LAMES_JUMELLES_COOLDOWN = 2;
export const LAMES_JUMELLES_INITIAL_COOLDOWN = 0;
export const LAMES_JUMELLES_DAMAGE = 42;
export const LAMES_JUMELLES_TARGETS_COUNT = 2;
export const LAMES_JUMELLES_MAX_SAME_TARGET_HITS = 2;

// 4 - Rupture
// Saignement aura (pas de cooldown direct, passif sur crit)
export const RUPTURE_SAIGNEMENT_DAMAGE_PER_TURN = 20;
export const RUPTURE_SAIGNEMENT_TURNS = 2;

// 5 - Rage
export const RAGE_MIN_BONUS_DAMAGE = 20;
export const RAGE_MAX_BONUS_DAMAGE = 35;

// 8 - Marquage
export const MARQUAGE_COOLDOWN = 3;
export const MARQUAGE_INITIAL_COOLDOWN = 0;
export const MARQUAGE_CHARGES = 4;

// 9 - Châtiment Lumineux
export const CHATIMENT_LUMINEUX_COOLDOWN = 2;
export const CHATIMENT_LUMINEUX_INITIAL_COOLDOWN = 1;
export const CHATIMENT_LUMINEUX_DAMAGE = 72;
export const CHATIMENT_LUMINEUX_HEAL_DAMAGE_PERCENT = 60;

// 10 - Fracture
export const FRACTURE_COOLDOWN = 2;
export const FRACTURE_INITIAL_COOLDOWN = 0;
export const FRACTURE_DAMAGE = 115;
export const FRACTURE_FRAGILITE_STACKS = 20;

// 11 - Carré d'As
export const CARRE_D_AS_COOLDOWN = 1;
export const CARRE_D_AS_INITIAL_COOLDOWN = 0;
export const CARRE_D_AS_DAMAGE_OPTION_1 = 10;
export const CARRE_D_AS_DAMAGE_OPTION_2 = 20;
export const CARRE_D_AS_DAMAGE_OPTION_3 = 30;
export const CARRE_D_AS_DAMAGE_OPTION_4 = 40;
export const CARRE_D_AS_RECAST_THRESHOLD = 40;

// 12 - Réflexe
export const REFLEXE_HEAL = 15;
export const REFLEXE_DAMAGE = 28;

// 14 - Brûlure Sacrée
export const BRULURE_SACREE_CONVERT_PERCENT = 70;

// 15 - Impact
export const IMPACT_COOLDOWN = 3;
export const IMPACT_INITIAL_COOLDOWN = 0;
export const IMPACT_DAMAGE = 80;
export const IMPACT_RESISTANCE_RATIO_PERCENT = 80;
export const IMPACT_STUN_TURNS = 1;
export const IMPACT_STUN_CHANCE_RATIO_PERCENT = 75;

// 16 - Invocation : Archer
export const INVOCATION_ARCHER_COOLDOWN = 4;
export const INVOCATION_ARCHER_INITIAL_COOLDOWN = 0;
export const INVOCATION_ARCHER_DURATION_TURNS = 3;
export const INVOCATION_ARCHER_ATTAQUE_DAMAGE = 32;
export const INVOCATION_ARCHER_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_ARCHER_ATTAQUE_INITIAL_COOLDOWN = 0;
export const INVOCATION_ARCHER_CRIT_CHANCE_BONUS_PERCENT = 2;
export const INVOCATION_ARCHER_CRIT_POWER_BONUS_PERCENT = 2;

// 17 - Invocation : Golem
export const INVOCATION_GOLEM_COOLDOWN = 4;
export const INVOCATION_GOLEM_INITIAL_COOLDOWN = 0;
export const INVOCATION_GOLEM_HEAL_ON_INVOK = 13;
export const INVOCATION_GOLEM_DAMAGE_INTERCEPT_PERCENT = 50;
export const INVOCATION_GOLEM_HP_COPY_PERCENT = 20;
export const INVOCATION_GOLEM_RESISTANCE_PERCENT = 15;
export const INVOCATION_GOLEM_ATTAQUE_DAMAGE = 70;
export const INVOCATION_GOLEM_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_GOLEM_ATTAQUE_INITIAL_COOLDOWN = 0;

// 18 - Invocation : Shaman
export const INVOCATION_SHAMAN_COOLDOWN = 4;
export const INVOCATION_SHAMAN_INITIAL_COOLDOWN = 0;
export const INVOCATION_SHAMAN_DURATION_TURNS = 3;
export const INVOCATION_SHAMAN_HASTE_COPY_PERCENT = 50;
export const INVOCATION_SHAMAN_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_SHAMAN_ATTAQUE_INITIAL_COOLDOWN = 0;

// 19 - Offrande
export const OFFRANDE_COOLDOWN = 2;
export const OFFRANDE_INITIAL_COOLDOWN = 0;
export const OFFRANDE_SACRIFICE_PER_INVOCATION_PERCENT = 3;

// 20 - Croissance Chaotique
export const CROISSANCE_CHAOTIQUE_RANDOM_MULTIPLIER_BONUS_PERCENT = 2;

// 21 - Invocation : Guerrier
export const INVOCATION_GUERRIER_COOLDOWN = 4;
export const INVOCATION_GUERRIER_INITIAL_COOLDOWN = 0;
export const INVOCATION_GUERRIER_DURATION_TURNS = 3;
export const INVOCATION_GUERRIER_ATTAQUE_DAMAGE = 35;
export const INVOCATION_GUERRIER_ATTAQUE_MARQUAGE_CHANCE_PERCENT = 25;
export const INVOCATION_GUERRIER_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_GUERRIER_ATTAQUE_INITIAL_COOLDOWN = 0;

// 22 - Réplique Forgée
// (Pas de variable numérique : équipe une copie de l'arme au rang 0)

// 23 - Drain Spirituel
export const DRAIN_SPIRITUEL_COOLDOWN = 4;
export const DRAIN_SPIRITUEL_INITIAL_COOLDOWN = 0;
export const DRAIN_SPIRITUEL_DAMAGE = 115;
export const DRAIN_SPIRITUEL_POWER_STEAL_PERCENT = 12;
export const DRAIN_SPIRITUEL_POWER_STEAL_TURNS = 2;

// 24 - Spoliation
export const SPOLIATION_COOLDOWN = 2;
export const SPOLIATION_INITIAL_COOLDOWN = 0;
export const SPOLIATION_DAMAGE = 100;
export const SPOLIATION_FRAGILITE_STACKS = 12;
export const SPOLIATION_RESISTANCE_GAIN = 5;
export const SPOLIATION_RESISTANCE_TURNS = 2;

// 25 - Détournement
export const DETOURNEMENT_HEAL_REDIRECT_PERCENT = 15;
export const DETOURNEMENT_DAMAGE_REFLECT_PERCENT = 15;

// 26 - Sceau Sanguin
export const SCEAU_SANGUIN_COOLDOWN = 1;
export const SCEAU_SANGUIN_INITIAL_COOLDOWN = 1;
export const SCEAU_SANGUIN_DAMAGE = 82;
export const SCEAU_SANGUIN_2_THRESHOLD = 2;
export const SCEAU_SANGUIN_2_POWER_BONUS = 2;
export const SCEAU_SANGUIN_4_THRESHOLD = 4;
export const SCEAU_SANGUIN_4_HEAL_PERCENT = 2;
export const SCEAU_SANGUIN_6_THRESHOLD = 6;
export const SCEAU_SANGUIN_6_STUN_TURNS = 1;

// 27 - Marque Mortelle
export const MARQUE_MORTELLE_COOLDOWN = 4;
export const MARQUE_MORTELLE_INITIAL_COOLDOWN = 0;
export const MARQUE_MORTELLE_TURNS = 2;
export const MARQUE_MORTELLE_RECORD_PERCENT = 55;

// 28 - Corruption
export const CORRUPTION_SACRIFICE_PERCENT = 1.5;
export const CORRUPTION_MAX_STACKS = 10;
export const CORRUPTION_DAMAGE_PER_STACK = 6;
export const CORRUPTION_MAX_DRAIN_PERCENT = 20;

// 29 - Tribut
export const TRIBUT_COOLDOWN = 2;
export const TRIBUT_INITIAL_COOLDOWN = 1;
export const TRIBUT_DAMAGE = 80;
export const TRIBUT_DAMAGE_PER_CAST = 5;
export const TRIBUT_DAMAGE_MAX_BONUS = 25;
export const TRIBUT_HEAL_DAMAGE_PERCENT = 25;

// 30 - Invocation : Diablotin
export const INVOCATION_DIABLOTIN_COOLDOWN = 4;
export const INVOCATION_DIABLOTIN_INITIAL_COOLDOWN = 0;
export const INVOCATION_DIABLOTIN_DURATION_TURNS = 3;
export const INVOCATION_DIABLOTIN_ATTAQUE_DAMAGE = 40;
export const INVOCATION_DIABLOTIN_ATTAQUE_HEAL_DAMAGE_PERCENT = 50;
export const INVOCATION_DIABLOTIN_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_DIABLOTIN_ATTAQUE_INITIAL_COOLDOWN = 0;

// 31 - Saignée
export const SAIGNEE_COOLDOWN = 2;
export const SAIGNEE_INITIAL_COOLDOWN = 1;
export const SAIGNEE_BLEED_COUNT = 2;
export const SAIGNEE_EXPIRE_HEAL_PERCENT = 5;

// 32 - Résonance
export const RESONANCE_COOLDOWN = 2;
export const RESONANCE_INITIAL_COOLDOWN = 0;
export const RESONANCE_DAMAGE = 135;
export const RESONANCE_DAMAGE_PER_USE = 2;

// 33 - Virevolte
export const VIREVOLTE_2_THRESHOLD = 2;
export const VIREVOLTE_2_DODGE_BONUS_PERCENT = 3;
export const VIREVOLTE_DODGE_BUFF_TURNS = 3;
export const VIREVOLTE_4_THRESHOLD = 4;
export const VIREVOLTE_4_DAMAGE = 160;
export const VIREVOLTE_6_THRESHOLD = 6;
export const VIREVOLTE_6_CONVERSION_PERCENT = 75;
export const VIREVOLTE_CONVERSION_TURNS = 1;
export const VIREVOLTE_MAX_STACKS = 10;

// 34 - Renouveau
export const RENOUVEAU_HEAL_MISSING_PERCENT = 2;

// 35 - Paralysie
export const PARALYSIE_COOLDOWN = 4;
export const PARALYSIE_INITIAL_COOLDOWN = 1;
export const PARALYSIE_DURATION_TURNS = 8;
export const PARALYSIE_MAX_STACKS = 8;
export const PARALYSIE_STUN_TURNS = 1;
export const PARALYSIE_POWER_PER_STACK = 2;

// 36 - Pacte de Sang
export const PACTE_DE_SANG_COOLDOWN = 2;
export const PACTE_DE_SANG_INITIAL_COOLDOWN = 1;
export const PACTE_DE_SANG_HP_SACRIFICE_PERCENT = 5;
export const PACTE_DE_SANG_DAMAGE_MULTIPLIER = 2;

// 37 - Cycle Lunaire
export const CYCLE_LUNAIRE_FRENESIE_CHARGES_PER_CAST = 2;
export const CYCLE_LUNAIRE_FRENESIE_HASTE_PER_CHARGE = 0.15;

// 38 - Instinct de Survie
export const INSTINCT_DE_SURVIE_FRENESIE_CHARGES_PER_DODGE = 2;
export const INSTINCT_DE_SURVIE_FRENESIE_POWER_PER_CHARGE = 0.25;
export const INSTINCT_DE_SURVIE_FRENESIE_CRIT_CHANCE_PER_CHARGE = 0.25;

// 39 - Morsure Infectée
export const MORSURE_INFECTEE_COOLDOWN = 3;
export const MORSURE_INFECTEE_INITIAL_COOLDOWN = 1;
export const MORSURE_INFECTEE_DAMAGE = 105;
export const MORSURE_INFECTEE_FRENESIE_CHARGES_GENERATED = 6;
export const MORSURE_INFECTEE_FRENESIE_RESISTANCE_PER_CHARGE = 0.2;

// 40 - Invocation : Lycan
export const INVOCATION_LYCAN_COOLDOWN = 4;
export const INVOCATION_LYCAN_INITIAL_COOLDOWN = 0;
export const INVOCATION_LYCAN_DURATION_TURNS = 3;
export const INVOCATION_LYCAN_ATTAQUE_DAMAGE = 57;
export const INVOCATION_LYCAN_ATTAQUE_FRENESIE_CHARGES_PER_ATTACK = 2;
export const INVOCATION_LYCAN_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_LYCAN_ATTAQUE_INITIAL_COOLDOWN = 0;

// 41 - Sang de la Bête
export const SANG_DE_LA_BETE_COOLDOWN = 2;
export const SANG_DE_LA_BETE_INITIAL_COOLDOWN = 0;
export const SANG_DE_LA_BETE_DAMAGE = 110;
export const SANG_DE_LA_BETE_FRENESIE_CHARGES_GENERATED = 3;
export const SANG_DE_LA_BETE_LOW_HP_THRESHOLD_PERCENT = 50;
export const SANG_DE_LA_BETE_LOW_HP_HEAL_DAMAGE_PERCENT = 30;
export const SANG_DE_LA_BETE_FRENESIE_HEAL_RECEIVED_PER_CHARGE_PERCENT = 0.3;

// 42 - Fureur Frénétique
export const FUREUR_FRENETIQUE_INITIAL_CHARGES = 10;
export const FUREUR_FRENETIQUE_CHARGES_PER_TURN = 2;
export const FUREUR_FRENETIQUE_BLEED_CHANCE_PER_CHARGE_PERCENT = 1.5;

// 43 - Pluie de Gel
export const PLUIE_DE_GEL_COOLDOWN = 2;
export const PLUIE_DE_GEL_INITIAL_COOLDOWN = 0;
export const PLUIE_DE_GEL_DAMAGE = 85;
export const PLUIE_DE_GEL_GEL_STACKS = 10;
export const PLUIE_DE_GEL_FROZEN_DAMAGE = 40;

// 44 - Tir Mortel
export const TIR_MORTEL_COOLDOWN = 2;
export const TIR_MORTEL_INITIAL_COOLDOWN = 0;
export const TIR_MORTEL_BASE_DAMAGE = 92;
export const TIR_MORTEL_CRIT_POWER = 25;
export const TIR_MORTEL_CRIT_POWER_BUFF = 10;
export const TIR_MORTEL_CRIT_POWER_BUFF_TURNS = 2;

// 45 - Invocation : Élémentaire de Glace
export const INVOCATION_ELEMENTAIRE_DE_GLACE_COOLDOWN = 4;
export const INVOCATION_ELEMENTAIRE_DE_GLACE_INITIAL_COOLDOWN = 0;
export const INVOCATION_ELEMENTAIRE_DE_GLACE_DURATION_TURNS = 3;
export const INVOCATION_ELEMENTAIRE_DE_GLACE_ATTAQUE_DAMAGE = 70;
export const INVOCATION_ELEMENTAIRE_DE_GLACE_ATTAQUE_GEL_STACKS = 4;
export const INVOCATION_ELEMENTAIRE_DE_GLACE_ATTAQUE_COOLDOWN = 1;
export const INVOCATION_ELEMENTAIRE_DE_GLACE_ATTAQUE_INITIAL_COOLDOWN = 0;

// 46 - Supplice des Faibles
export const SUPPLICE_DES_FAIBLES_FRAGILITE_STACKS = 20;
export const SUPPLICE_DES_FAIBLES_DECAY_DELAY_BONUS = 0.5;
export const SUPPLICE_DES_FAIBLES_EXTRA_RESISTANCE_PER_STACK = 0.1;

// 47 - Siphonner les Vivants
export const SIPHONNER_LES_VIVANTS_COOLDOWN = 3;
export const SIPHONNER_LES_VIVANTS_INITIAL_COOLDOWN = 1;
export const SIPHONNER_LES_VIVANTS_DAMAGE = 100;
export const SIPHONNER_LES_VIVANTS_MAX_TARGETS = 3;
export const SIPHONNER_LES_VIVANTS_HEAL_PER_HP_DIFF_PERCENT = 1;
export const SIPHONNER_LES_VIVANTS_HP_DIFF_PERCENT = 1;
export const SIPHONNER_LES_VIVANTS_LUCKY_STEAL_PERCENT = 0.5;

// 48 - Déferlante Sauvage
export const DEFERLANTE_SAUVAGE_COOLDOWN = 2;
export const DEFERLANTE_SAUVAGE_INITIAL_COOLDOWN = 0;
export const DEFERLANTE_SAUVAGE_DAMAGE = 110;
export const DEFERLANTE_SAUVAGE_FRENESIE_CHARGES_ADDED_PERCENT = 100;
export const DEFERLANTE_SAUVAGE_LUCKY_FRENESIE_CHARGES = 5;

// 49 - Echange Élémentaire
export const ECHANGE_ELEMENTAIRE_GEL_STACKS_ON_BURN_EXPIRE = 3;
export const ECHANGE_ELEMENTAIRE_LUCKY_BRULURE_COUNT = 1;
export const ECHANGE_ELEMENTAIRE_LUCKY_GEL_STACKS = 2;

// 50 - Double Jeu
export const DOUBLE_JEU_COOLDOWN = 2;
export const DOUBLE_JEU_INITIAL_COOLDOWN = 2;
export const DOUBLE_JEU_DAMAGE_PER_HIT = 22;
export const DOUBLE_JEU_HITS_COUNT = 2;
export const DOUBLE_JEU_LUCKY_BRULURE_COUNT = 1;
export const DOUBLE_JEU_LUCKY_SAIGNEMENT_COUNT = 1;
export const DOUBLE_JEU_LUCKY_FRAGILITE_COUNT = 10;
export const DOUBLE_JEU_LUCKY_HEAL_AMOUNT = 20;
export const DOUBLE_JEU_UNLUCKY_STUN_SECONDS = 0.5;
export const DOUBLE_JEU_UNLUCKY_SELF_DAMAGE = 40;
export const DOUBLE_JEU_BIG_LUCKY_FRAGILITE_COUNT = 15;

// 51 - Stigmates
export const STIGMATES_COOLDOWN = 2;
export const STIGMATES_INITIAL_COOLDOWN = 0;
export const STIGMATES_DAMAGE = 95;
export const STIGMATES_MARQUAGE_COUNT = 2;
export const STIGMATES_MARQUAGE_NO_CONSUME_CHANCE_PERCENT = 20;
export const STIGMATES_LUCKY_HIT_TURNS = 2;
export const STIGMATES_LUCKY_DODGE_PERCENT = 5;
export const STIGMATES_LUCKY_CRIT_CHANCE_PERCENT = 5;
export const STIGMATES_LUCKY_CRIT_POWER_PERCENT = 5;

// 52 - Cadence Mystique
export const CADENCE_MYSTIQUE_STACK_TURNS = 4;
export const CADENCE_MYSTIQUE_POWER_THRESHOLD = 3;
export const CADENCE_MYSTIQUE_POWER_BONUS = 15;
export const CADENCE_MYSTIQUE_HASTE_THRESHOLD = 7;
export const CADENCE_MYSTIQUE_HASTE_BONUS = 5;
export const CADENCE_MYSTIQUE_HEAL_THRESHOLD = 10;
export const CADENCE_MYSTIQUE_HEAL_PER_TURN = 20;
export const CADENCE_MYSTIQUE_LUCKY_HIT_DAMAGE = 40;

// 53 - Bonne Fortune
export const BONNE_FORTUNE_COOLDOWN = 3;
export const BONNE_FORTUNE_INITIAL_COOLDOWN = 1;
export const BONNE_FORTUNE_BASE_DAMAGE = 120;
export const BONNE_FORTUNE_LUCKY_DAMAGE = 15;
export const BONNE_FORTUNE_LUCKY_HEAL = 15;

// ============================================================================
// ITEMS DE CLASSE (1001-1009)
// ============================================================================

export const CLASS_ITEM_POINTS_REQUIRED = 5;

// 1001 - Arcanist V : Réplique
export const REPLIQUE_PROC_CHANCE_PERCENT = 25;

// 1002 - Scout V : Anticipation
export const ANTICIPATION_TURN_NUMBER = 2;

// 1003 - Guard V : Résilience
export const RESILIENCE_HP_THRESHOLD_PERCENT = 20;
export const RESILIENCE_HEAL_PERCENT = 3.5;
export const RESILIENCE_MAX_PER_TURN = 1;

// 1004 - Invoker V : Symbiose
export const SYMBIOSE_HEAL_MISSING_PERCENT = 3;

// 1005 - Doppelganger V : Boîte Mystère
export const BOITE_MYSTERE_THRESHOLD_1_PERCENT = 90;
export const BOITE_MYSTERE_THRESHOLD_2_PERCENT = 50;

// 1006 - Vampire V : Renaissance
export const RENAISSANCE_HP_LOSS_THRESHOLD_PERCENT = 10;
export const RENAISSANCE_HEAL_PER_STACK_PERCENT = 2;
export const RENAISSANCE_HASTE_PER_STACK = 1;
export const RENAISSANCE_HEAL_DURATION_TURNS = 3;
export const RENAISSANCE_HEAL_TICKS_PER_TURN = 4;

// 1007 - Enchantress V : Maîtresse des Auras
export const MAITRESSE_DES_AURAS_BONUS_PER_AURA_PERCENT = 5;
export const MAITRESSE_DES_AURAS_MAX_BONUS_PERCENT = 40;

// 1008 - Lycan V : Métamorphose
export const METAMORPHOSE_HP_THRESHOLD_PERCENT = 50;
export const METAMORPHOSE_FRENESIE_MAX_BONUS = 100;
export const METAMORPHOSE_INTERVAL_TURNS = 2;
export const METAMORPHOSE_DAMAGE_PERCENT = 100;

// 1009 - Joker V : Deuxième Tirage
export const DEUXIEME_TIRAGE_EXTRA_TRIGGERS = 1;

// ============================================================================
// ARMES (4001-4009)
// ============================================================================

// 4001 - Epée Simple
export const EPEE_SIMPLE_COOLDOWN = 1;
export const EPEE_SIMPLE_INITIAL_COOLDOWN = 0;
export const EPEE_SIMPLE_DAMAGE = 60;

// 4002 - Fléau Oublié
export const FLEAU_OUBLIE_COOLDOWN = 1;
export const FLEAU_OUBLIE_INITIAL_COOLDOWN = 0;
export const FLEAU_OUBLIE_BASE_DAMAGE = 50;
export const FLEAU_OUBLIE_BASE_STAT_PERCENT_TO_DAMAGE = 20;
export const FLEAU_OUBLIE_CRIT_PERCENT_PER_RANK = 1.5;
export const FLEAU_OUBLIE_RANK_10_NEXT_ATTACK_BONUS = 20;

// 4003 - Epée Divine
export const EPEE_DIVINE_COOLDOWN = 1;
export const EPEE_DIVINE_INITIAL_COOLDOWN = 0;
export const EPEE_DIVINE_BASE_DAMAGE = 26;
export const EPEE_DIVINE_BASE_HEAL = 26;
export const EPEE_DIVINE_DAMAGE_PER_RANK = 1;
export const EPEE_DIVINE_HEAL_PER_RANK = 1;
export const EPEE_DIVINE_BENEDICTION_HEAL_PER_TURN = 6;
export const EPEE_DIVINE_BENEDICTION_TURNS = 2;

// 4004 - Gardefer
export const GARDEFER_COOLDOWN = 1;
export const GARDEFER_INITIAL_COOLDOWN = 0;
export const GARDEFER_BASE_DAMAGE = 40;
export const GARDEFER_DAMAGE_PER_RANK = 2.5;
export const GARDEFER_INVINCIBLE_CHANCE_PERCENT = 40;
export const GARDEFER_INVINCIBLE_DURATION_SECONDS = 1;

// 4005 - Fulgurance
export const FULGURANCE_COOLDOWN = 1;
export const FULGURANCE_INITIAL_COOLDOWN = 0;
export const FULGURANCE_BASE_DAMAGE = 38;
export const FULGURANCE_DAMAGE_PER_RANK = 2.5;
export const FULGURANCE_BUFF_TURNS = 3;
export const FULGURANCE_HASTE_BONUS = 5;
export const FULGURANCE_HASTE_BONUS_RANK_10 = 8;

// 4006 - Thauldrok
export const THAULDROK_COOLDOWN = 1;
export const THAULDROK_INITIAL_COOLDOWN = 0;
export const THAULDROK_BASE_DAMAGE = 75;
export const THAULDROK_DAMAGE_PER_RANK = 4;

// 4007 - Milles Serviteurs
export const MILLES_SERVITEURS_COOLDOWN = 1;
export const MILLES_SERVITEURS_INITIAL_COOLDOWN = 0;
export const MILLES_SERVITEURS_BASE_DAMAGE = 38;
export const MILLES_SERVITEURS_BASE_DAMAGE_PER_INVOCATION = 10;
export const MILLES_SERVITEURS_DAMAGE_PER_INVOCATION_PER_RANK = 3.5;
export const MILLES_SERVITEURS_INVOCATION_DOUBLE_CHANCE_PERCENT = 15;

// 4008 - Zéphyr
export const ZEPHYR_COOLDOWN = 1;
export const ZEPHYR_INITIAL_COOLDOWN = 0;
export const ZEPHYR_BASE_DAMAGE = 40;
export const ZEPHYR_DAMAGE_PER_RANK = 3;
export const ZEPHYR_MAX_PROCS_PER_TURN = 3;
export const ZEPHYR_DODGE_DAMAGE_BONUS_PERCENT_RANK_10 = 10;

// 4009 - Égide Sacrée
export const EGIDE_SACREE_COOLDOWN = 1;
export const EGIDE_SACREE_INITIAL_COOLDOWN = 0;
export const EGIDE_SACREE_BASE_DAMAGE = 25;
export const EGIDE_SACREE_DAMAGE_PER_STACK = 5;
export const EGIDE_SACREE_DAMAGE_PER_STACK_PER_RANK = 0.5;
export const EGIDE_SACREE_MAX_STACKS = 20;
export const EGIDE_SACREE_REMAINING_STACKS_AFTER_ATTACK_RANK_10 = 5;
export const EGIDE_SACREE_REMAINING_STACKS_AFTER_ATTACK_DEFAULT = 0;

// ============================================================================
// RELIQUES (5001-5044)
// ============================================================================

// 5001/5002/5003 - Chasseur de Géants (3 paliers)
export const CHASSEUR_DE_GEANTS_POWER_BONUS_TIER_1 = 8;
export const CHASSEUR_DE_GEANTS_POWER_BONUS_TIER_2 = 15;
export const CHASSEUR_DE_GEANTS_POWER_BONUS_TIER_3 = 25;

// 5004 - Brûlure Amélioré I
export const BRULURE_AMELIORE_I_RESISTANCE_REDUCTION = 1;

// 5005 - Brûlure Amélioré II
export const BRULURE_AMELIORE_II_CRIT_CHANCE_BONUS_PERCENT = 10;

// 5006 - Brûlure Amélioré III
export const BRULURE_AMELIORE_III_DURATION_BONUS_TURNS = 1;

// 5007/5008/5009 - Vigueur (3 paliers)
export const VIGUEUR_HEAL_POWER_BONUS_TIER_1 = 8;
export const VIGUEUR_HEAL_POWER_BONUS_TIER_2 = 15;
export const VIGUEUR_HEAL_POWER_BONUS_TIER_3 = 25;

// 5010 - Second Souffle
export const SECOND_SOUFFLE_REGEN_PERCENT = 5;

// 5011/5012/5013 - Représailles
export const REPRESAILLES_STACKS_GAINED = 4;
export const REPRESAILLES_POWER_PER_STACK = 1;

// 5014/5015/5016 - Frappe Inévitable (3 paliers)
export const FRAPPE_INEVITABLE_DODGE_REFLECT_PERCENT_TIER_1 = 12;
export const FRAPPE_INEVITABLE_DODGE_REFLECT_PERCENT_TIER_2 = 15;
export const FRAPPE_INEVITABLE_DODGE_REFLECT_PERCENT_TIER_3 = 20;

// 5017 - Grand Final
export const GRAND_FINAL_GUARANTEED_CRIT_HP_THRESHOLD_PERCENT = 15;

// 5018/5019/5020 - Faveur des Khaldras (3 paliers)
export const FAVEUR_DES_KHALDRAS_INVOCATION_POWER_BONUS_TIER_1 = 8;
export const FAVEUR_DES_KHALDRAS_INVOCATION_POWER_BONUS_TIER_2 = 10;
export const FAVEUR_DES_KHALDRAS_INVOCATION_POWER_BONUS_TIER_3 = 15;

// 5021 - Serment des Maudits II
export const SERMENT_DES_MAUDITS_II_SAIGNEMENT_BONUS_DAMAGE = 2;

// 5022 - Serment des Maudits III
export const SERMENT_DES_MAUDITS_III_SAIGNEMENT_BONUS_TURNS = 1;

// 5023/5024/5025 - Ténacité (3 paliers)
export const TENACITE_HP_THRESHOLD_PERCENT = 30;
export const TENACITE_RESISTANCE_BONUS_TIER_1 = 5;
export const TENACITE_RESISTANCE_BONUS_TIER_2 = 8;
export const TENACITE_RESISTANCE_BONUS_TIER_3 = 20;
export const TENACITE_DURATION_TURNS = 5;

// 5028 - Bénédiction des Anciens (relique de soin critique)
export const BENEDICTION_DES_ANCIENS_HEAL_PER_TURN = 6;
export const BENEDICTION_DES_ANCIENS_DURATION_TURNS = 2;

// 5029/5030 - Bastion (cap résistance, pas de variable de balance numérique propre)

// 5031/5032 - Évasion (cap esquive, pas de variable de balance numérique propre)

// 5033 - Affûtage
export const AFFUTAGE_CRIT_CHANCE_PER_STACK_PERCENT = 1;
export const AFFUTAGE_MAX_STACKS = 7;
export const AFFUTAGE_BUFF_TURNS = 3;

// 5034/5035/5036 - Jusqu'à l'Os (gel sur crit direct)
export const JUSQU_A_L_OS_GEL_STACKS = 4;

// 5037/5038/5039 - Feinte Glaciale (gel sur dodge)
export const FEINTE_GLACIALE_GEL_STACKS = 3;

// 5040 - Fluctuation de Puissance
export const FLUCTUATION_DE_PUISSANCE_MIN_POWER = 5;
export const FLUCTUATION_DE_PUISSANCE_MAX_POWER = 30;

// 5041 - Renforcer l'Usure
export const RENFORCER_L_USURE_BONUS_PERCENT = 15;

// 5042 - Cuirasse
export const CUIRASSE_RESISTANCE_PER_SPELL = 2;
export const CUIRASSE_TRACKING_OWNER_TURNS = 3;

// 5043 - Devotion
export const DEVOTION_PASSIVE_EQUIP_CHANCE_PERCENT = 20;

// 5044 - Totem de l'Echo
// (Pas de variable numérique propre : invoque un totem aléatoire à la mort d'une invocation)
export const TOTEM_DE_L_ECHO_DURATION_TURNS = 3;

// ============================================================================
// AURAS (valeurs partagées par plusieurs sorts/reliques)
// ============================================================================

// Saignement
export const AURA_SAIGNEMENT_DAMAGE_PER_TURN = 20;
export const AURA_SAIGNEMENT_TURNS = 2;

// Brûlure
export const AURA_BRULURE_DAMAGE_PER_TURN = 20;
export const AURA_BRULURE_TURNS = 2;

// Marquage
export const AURA_MARQUAGE_POWER_BOOST = 4;
export const AURA_MARQUAGE_DAMAGE_ON_TRIGGER = 25;

// Gel
export const AURA_GEL_HASTE_REDUCTION_PER_STACK = 0.1;
export const AURA_GEL_MAX_STACKS = 100;
export const AURA_GEL_STUN_TURNS = 1;
export const AURA_GEL_IMMUNITY_TURNS = 3;

// Fragilité
export const AURA_FRAGILITE_RESISTANCE_DEBUFF_PER_STACK = 0.5;
export const AURA_FRAGILITE_DECAY_TURNS = 6;

// AntiSoin
export const AURA_ANTI_SOIN_TURNS = 2;
export const AURA_ANTI_SOIN_REDUCTION_PERCENT = 15;

// Danse Des Ombres (buff power)
export const AURA_DANSE_DES_OMBRES_POWER_BONUS = 5;

// Drain Spirituel
export const AURA_DRAIN_SPIRITUEL_TURNS = 2;

// ============================================================================
// SORT BOSS (7009)
// ============================================================================

// 7009 - Éveil : configuration narrative gérée dans Eveil.ts (pas centralisé ici
// car dépend de plusieurs spellIds référencés depuis le moteur).
