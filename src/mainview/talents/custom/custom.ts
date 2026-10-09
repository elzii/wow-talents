import { ClassData, TalentData, TalentTreeData } from "../../../types";

// Helper to make custom talents with cross-tree requirements
// Tree 1: "Martial / Combat"
// Tree 2: "Arcane & Shadow / Magic"
// Tree 3: "Holy & Nature / Divinity"
//
// Milestone rule:
// - To unlock Tier with minPointsRequired = 10, requires having spent >= 10 points total across AT LEAST 2 trees.
// - To unlock Tier with minPointsRequired = 20, requires having spent >= 20 points total across AT LEAST 2 trees.
// - To unlock Capstone with minPointsRequired = 40, requires having spent >= 40 points total across ALL 3 trees.

const martialTree: TalentTreeData = {
  name: "Martial Power",
  icon: "ability_warrior_charge",
  talents: [
    // Row 0 (0 points)
    {
      id: 9001,
      name: "Cruelty",
      sourceClass: "Warrior",
      sourceTree: "Fury",
      maxRank: 5,
      minPointsRequired: 0,
      x: 1,
      y: 0,
      iconName: "ability_rogue_eviscerate",
      spellIds: [12856],
      descriptions: ["Increases your chance to get a critical strike with melee weapons by 1% per rank."]
    },
    {
      id: 9002,
      name: "Malice",
      sourceClass: "Rogue",
      sourceTree: "Assassination",
      maxRank: 5,
      minPointsRequired: 0,
      x: 2,
      y: 0,
      iconName: "ability_racial_bloodrage",
      spellIds: [14142],
      descriptions: ["Increases your critical strike chance with all attacks by 1% per rank."]
    },
    // Row 1 (5 points)
    {
      id: 9003,
      name: "Flurry",
      sourceClass: "Warrior",
      sourceTree: "Fury",
      maxRank: 5,
      minPointsRequired: 5,
      x: 1,
      y: 1,
      iconName: "ability_ghoulfrenzy",
      spellIds: [16282],
      descriptions: ["Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike."]
    },
    {
      id: 9004,
      name: "Riposte",
      sourceClass: "Rogue",
      sourceTree: "Combat",
      maxRank: 1,
      minPointsRequired: 5,
      x: 2,
      y: 1,
      iconName: "ability_warrior_challange",
      spellIds: [14251],
      descriptions: ["A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec."]
    },
    // Row 2 (10 points - requires points in at least 2 trees!)
    {
      id: 9005,
      name: "Sweeping Strikes",
      sourceClass: "Warrior",
      sourceTree: "Arms",
      maxRank: 1,
      minPointsRequired: 10,
      x: 1,
      y: 2,
      iconName: "ability_rogue_slicedice",
      spellIds: [12328],
      descriptions: ["Your next 5 melee attacks strike an additional nearby opponent."]
    },
    {
      id: 9006,
      name: "Blade Flurry",
      sourceClass: "Rogue",
      sourceTree: "Combat",
      maxRank: 1,
      minPointsRequired: 10,
      x: 2,
      y: 2,
      iconName: "ability_warrior_punishingblow",
      spellIds: [13877],
      descriptions: ["Increases your attack speed by 20% and attacks strike an additional nearby opponent. Lasts 15 sec."]
    },
    // Row 3 (15 points)
    {
      id: 9007,
      name: "Weapon Mastery",
      sourceClass: "Warrior",
      sourceTree: "Arms",
      maxRank: 2,
      minPointsRequired: 15,
      x: 1,
      y: 3,
      iconName: "ability_warrior_weaponmastery",
      spellIds: [20504],
      descriptions: ["Reduces the chance your attacks will be dodged or parried by 1% per rank."]
    },
    // Row 4 (20 points - requires points in at least 2 trees!)
    {
      id: 9008,
      name: "Death Wish",
      sourceClass: "Warrior",
      sourceTree: "Fury",
      maxRank: 1,
      minPointsRequired: 20,
      x: 1,
      y: 4,
      iconName: "spell_shadow_deathpact",
      spellIds: [12292],
      descriptions: ["When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers armor by 20%. Lasts 30 sec."]
    },
    {
      id: 9009,
      name: "Adrenaline Rush",
      sourceClass: "Rogue",
      sourceTree: "Combat",
      maxRank: 1,
      minPointsRequired: 20,
      x: 2,
      y: 4,
      iconName: "spell_shadow_shadowworddominate",
      spellIds: [13750],
      descriptions: ["Increases your Energy / Rage regeneration rate by 100% for 15 sec."]
    },
    // Row 5 (25 points)
    {
      id: 9010,
      name: "Bloodthirst",
      sourceClass: "Warrior",
      sourceTree: "Fury",
      maxRank: 1,
      minPointsRequired: 25,
      x: 1,
      y: 5,
      iconName: "spell_nature_bloodlust",
      spellIds: [23881],
      descriptions: ["Instantly attack the target for physical damage and causing your next 5 successful melee attacks to restore health."]
    },
    // Row 6 (40 points - Universal Capstone across all 3 trees)
    {
      id: 9011,
      name: "Avatar of War",
      sourceClass: "Custom",
      sourceTree: "Martial Power",
      maxRank: 1,
      minPointsRequired: 40,
      x: 1,
      y: 6,
      iconName: "ability_warrior_innerrage",
      spellIds: [99001],
      descriptions: ["Requires 40 points across all trees. Transform into an Avatar of War for 20 sec, gaining 30% increased damage, 15% leech, and immunity to all crowd control."]
    }
  ]
};

const magicTree: TalentTreeData = {
  name: "Arcane & Shadow",
  icon: "spell_holy_magicalsentry",
  talents: [
    // Row 0 (0 points)
    {
      id: 9101,
      name: "Arcane Focus",
      sourceClass: "Mage",
      sourceTree: "Arcane",
      maxRank: 5,
      minPointsRequired: 0,
      x: 1,
      y: 0,
      iconName: "spell_holy_devotion",
      spellIds: [12592],
      descriptions: ["Reduces the chance that the opponent can resist your Arcane and Shadow spells by 2% per rank."]
    },
    {
      id: 9102,
      name: "Shadow Reach",
      sourceClass: "Priest",
      sourceTree: "Shadow",
      maxRank: 3,
      minPointsRequired: 0,
      x: 2,
      y: 0,
      iconName: "spell_shadow_chilltouch",
      spellIds: [17322],
      descriptions: ["Increases the range of your offensive spells by 10% per rank."]
    },
    // Row 1 (5 points)
    {
      id: 9103,
      name: "Clearcasting",
      sourceClass: "Mage",
      sourceTree: "Arcane",
      maxRank: 5,
      minPointsRequired: 5,
      x: 1,
      y: 1,
      iconName: "spell_shadow_manaburn",
      spellIds: [12536],
      descriptions: ["Gives you a 2% chance per rank after damaging an enemy to enter a Clearcasting state, reducing mana cost of your next damage spell by 100%."]
    },
    {
      id: 9104,
      name: "Nightfall",
      sourceClass: "Warlock",
      sourceTree: "Affliction",
      maxRank: 2,
      minPointsRequired: 5,
      x: 2,
      y: 1,
      iconName: "spell_shadow_twilight",
      spellIds: [18094],
      descriptions: ["Gives your Corruption and periodic spells a 2% chance per rank to cause you to enter a Shadow Trance state, making your next cast instant."]
    },
    // Row 2 (10 points - requires points in at least 2 trees!)
    {
      id: 9105,
      name: "Presence of Mind",
      sourceClass: "Mage",
      sourceTree: "Arcane",
      maxRank: 1,
      minPointsRequired: 10,
      x: 1,
      y: 2,
      iconName: "spell_nature_enchantarmor",
      spellIds: [12043],
      descriptions: ["When activated, your next spell with a casting time less than 10 sec becomes an instant cast spell."]
    },
    {
      id: 9106,
      name: "Siphon Life",
      sourceClass: "Warlock",
      sourceTree: "Affliction",
      maxRank: 1,
      minPointsRequired: 10,
      x: 2,
      y: 2,
      iconName: "spell_shadow_requiem",
      spellIds: [18879],
      descriptions: ["Siphons health from the target every 3 sec and transfers it to the caster. Lasts 30 sec."]
    },
    // Row 3 (15 points)
    {
      id: 9107,
      name: "Spell Power",
      sourceClass: "Mage",
      sourceTree: "Arcane",
      maxRank: 2,
      minPointsRequired: 15,
      x: 1,
      y: 3,
      iconName: "spell_arcane_starfire",
      spellIds: [35578],
      descriptions: ["Increases the critical strike damage bonus of all spells by 25% per rank."]
    },
    // Row 4 (20 points - requires points in at least 2 trees!)
    {
      id: 9108,
      name: "Arcane Power",
      sourceClass: "Mage",
      sourceTree: "Arcane",
      maxRank: 1,
      minPointsRequired: 20,
      x: 1,
      y: 4,
      iconName: "spell_nature_lightning",
      spellIds: [12042],
      descriptions: ["When activated, your spells deal 30% more damage while costing 30% more mana. Lasts 15 sec."]
    },
    {
      id: 9109,
      name: "Shadowform",
      sourceClass: "Priest",
      sourceTree: "Shadow",
      maxRank: 1,
      minPointsRequired: 20,
      x: 2,
      y: 4,
      iconName: "spell_shadow_shadowform",
      spellIds: [15473],
      descriptions: ["Assume a Shadowform, increasing your Shadow damage by 15% and reducing physical damage taken by 15%."]
    },
    // Row 5 (25 points)
    {
      id: 9110,
      name: "Shadowburn",
      sourceClass: "Warlock",
      sourceTree: "Destruction",
      maxRank: 1,
      minPointsRequired: 25,
      x: 1,
      y: 5,
      iconName: "spell_shadow_scourgebuild",
      spellIds: [17877],
      descriptions: ["Instantly strikes the target for high Shadow damage."]
    },
    // Row 6 (40 points - Universal Capstone)
    {
      id: 9111,
      name: "Archmage Ascendance",
      sourceClass: "Custom",
      sourceTree: "Arcane & Shadow",
      maxRank: 1,
      minPointsRequired: 40,
      x: 1,
      y: 6,
      iconName: "spell_holy_mindvision",
      spellIds: [99002],
      descriptions: ["Requires 40 points across all trees. Unleash arcane convergence, granting 100% mana cost reduction and 50% spell haste for 15 sec."]
    }
  ]
};

const divinityTree: TalentTreeData = {
  name: "Holy & Nature",
  icon: "spell_holy_holyprotection",
  talents: [
    // Row 0 (0 points)
    {
      id: 9201,
      name: "Divine Intellect",
      sourceClass: "Paladin",
      sourceTree: "Holy",
      maxRank: 5,
      minPointsRequired: 0,
      x: 1,
      y: 0,
      iconName: "spell_nature_sleep",
      spellIds: [20257],
      descriptions: ["Increases your total Intellect by 2% per rank."]
    },
    {
      id: 9202,
      name: "Nature's Guidance",
      sourceClass: "Shaman",
      sourceTree: "Restoration",
      maxRank: 3,
      minPointsRequired: 0,
      x: 2,
      y: 0,
      iconName: "spell_frost_stun",
      spellIds: [16582],
      descriptions: ["Increases your chance to hit with melee attacks and spells by 1% per rank."]
    },
    // Row 1 (5 points)
    {
      id: 9203,
      name: "Spiritual Focus",
      sourceClass: "Paladin",
      sourceTree: "Holy",
      maxRank: 5,
      minPointsRequired: 5,
      x: 1,
      y: 1,
      iconName: "spell_arcane_blink",
      spellIds: [20205],
      descriptions: ["Gives your healing spells a 14% chance per rank to not lose casting time when taking damage."]
    },
    {
      id: 9204,
      name: "Tidal Mastery",
      sourceClass: "Shaman",
      sourceTree: "Restoration",
      maxRank: 5,
      minPointsRequired: 5,
      x: 2,
      y: 1,
      iconName: "spell_nature_healingwavegreater",
      spellIds: [16194],
      descriptions: ["Increases the critical effect chance of your healing and lightning spells by 1% per rank."]
    },
    // Row 2 (10 points - requires points in at least 2 trees!)
    {
      id: 9205,
      name: "Illumination",
      sourceClass: "Paladin",
      sourceTree: "Holy",
      maxRank: 5,
      minPointsRequired: 10,
      x: 1,
      y: 2,
      iconName: "spell_holy_greaterheal",
      spellIds: [20210],
      descriptions: ["After gaining a critical effect on a healing spell, you have a 20% chance per rank to be refunded 100% of the base mana cost."]
    },
    {
      id: 9206,
      name: "Nature's Swiftness",
      sourceClass: "Druid",
      sourceTree: "Restoration",
      maxRank: 1,
      minPointsRequired: 10,
      x: 2,
      y: 2,
      iconName: "spell_nature_ravenform",
      spellIds: [17116],
      descriptions: ["When activated, your next Nature or Holy spell becomes an instant cast spell."]
    },
    // Row 3 (15 points)
    {
      id: 9207,
      name: "Gift of Nature",
      sourceClass: "Druid",
      sourceTree: "Restoration",
      maxRank: 5,
      minPointsRequired: 15,
      x: 1,
      y: 3,
      iconName: "spell_nature_protectionformnature",
      spellIds: [17104],
      descriptions: ["Increases the effect of all your healing spells by 2% per rank."]
    },
    // Row 4 (20 points - requires points in at least 2 trees!)
    {
      id: 9208,
      name: "Divine Favor",
      sourceClass: "Paladin",
      sourceTree: "Holy",
      maxRank: 1,
      minPointsRequired: 20,
      x: 1,
      y: 4,
      iconName: "spell_holy_heal",
      spellIds: [20216],
      descriptions: ["When activated, gives your next Flash of Light or Holy Light a 100% critical effect chance."]
    },
    {
      id: 9209,
      name: "Mana Tide Totem",
      sourceClass: "Shaman",
      sourceTree: "Restoration",
      maxRank: 1,
      minPointsRequired: 20,
      x: 2,
      y: 4,
      iconName: "spell_frost_summonwaterelemental",
      spellIds: [16190],
      descriptions: ["Summons a totem that restores 170 mana every 3 sec for 12 sec to group members within 20 yd."]
    },
    // Row 5 (25 points)
    {
      id: 9210,
      name: "Holy Shock",
      sourceClass: "Paladin",
      sourceTree: "Holy",
      maxRank: 1,
      minPointsRequired: 25,
      x: 1,
      y: 5,
      iconName: "spell_holy_searinglight",
      spellIds: [20473],
      descriptions: ["Blasts the target with Holy energy, causing Holy damage to an enemy, or healing an ally."]
    },
    // Row 6 (40 points - Universal Capstone)
    {
      id: 9211,
      name: "Divine Intervention",
      sourceClass: "Custom",
      sourceTree: "Holy & Nature",
      maxRank: 1,
      minPointsRequired: 40,
      x: 1,
      y: 6,
      iconName: "spell_nature_reincarnation",
      spellIds: [99003],
      descriptions: ["Requires 40 points across all trees. Blesses the caster and all party members with complete damage immunity and 100% increased healing for 10 sec."]
    }
  ]
};

export const customClassData: ClassData = {
  name: "Custom",
  talentTrees: [martialTree, magicTree, divinityTree]
};
