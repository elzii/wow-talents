import { ClassData } from "../../../types";

export const druidData: ClassData = {
  "name": "Druid",
  "talentTrees": [
    {
      "name": "Balance",
      "talents": [
        {
          "id": 16814,
          "name": "Improved Wrath",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_abolishmagic",
          "spellIds": [
            16814
          ],
          "descriptions": [
            "Reduces the cast time of your Wrath spell by 0.1 sec and its Mana cost by 10%.",
            "Reduces the cast time of your Wrath spell by 0.2 sec and its Mana cost by 20%.",
            "Reduces the cast time of your Wrath spell by 0.3 sec and its Mana cost by 30%.",
            "Reduces the cast time of your Wrath spell by 0.4 sec and its Mana cost by 40%.",
            "Reduces the cast time of your Wrath spell by 0.5 sec and its Mana cost by 50%."
          ]
        },
        {
          "id": 1223081,
          "name": "Genesis",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_arcane_arcane03",
          "spellIds": [
            1223081
          ],
          "descriptions": [
            "Increases the periodic damage and healing done by your spells and abilities by 1%.",
            "Increases the periodic damage and healing done by your spells and abilities by 2%.",
            "Increases the periodic damage and healing done by your spells and abilities by 3%.",
            "Increases the periodic damage and healing done by your spells and abilities by 4%.",
            "Increases the periodic damage and healing done by your spells and abilities by 5%."
          ]
        },
        {
          "id": 16845,
          "name": "Moonglow",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_sentinal",
          "spellIds": [
            16845
          ],
          "descriptions": [
            "Reduces the Mana cost of your damaging spells by 8%.",
            "Reduces the Mana cost of your damaging spells by 17%.",
            "Reduces the Mana cost of your damaging spells by 25%."
          ]
        },
        {
          "id": 16918,
          "name": "Improved Entangling Roots",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_nature_stranglevines",
          "spellIds": [
            16918
          ],
          "descriptions": [
            "Increases the damage done by your Entangling Roots spell by 25%, and its victims can take up to 25% more damage without interrupting the effect.",
            "Increases the damage done by your Entangling Roots spell by 50%, and its victims can take up to 50% more damage without interrupting the effect.",
            "Increases the damage done by your Entangling Roots spell by 75%, and its victims can take up to 75% more damage without interrupting the effect."
          ]
        },
        {
          "id": 1223082,
          "name": "Nature's Majesty",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "inv_staff_01",
          "spellIds": [
            1223082
          ],
          "descriptions": [
            "Increases your critical strike chance with spells and melee attacks by 2%.",
            "Increases your critical strike chance with spells and melee attacks by 4%."
          ]
        },
        {
          "id": 1223083,
          "name": "Nature's Splendor",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_nature_natureresistancetotem",
          "requirements": {
            "talentName": "Nature's Majesty",
            "talentRank": 2,
            "talentId": 1223082
          },
          "spellIds": [
            1223083
          ],
          "descriptions": [
            "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec."
          ]
        },
        {
          "id": 16819,
          "name": "Nature's Reach",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_naturetouchgrow",
          "spellIds": [
            16819
          ],
          "descriptions": [
            "Increases the range of your offensive Balance spells by 10% and improves your chance to hit by 2%.",
            "Increases the range of your offensive Balance spells by 20% and improves your chance to hit by 4%."
          ]
        },
        {
          "id": 5570,
          "name": "Insect Swarm",
          "x": 0,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_nature_insectswarm",
          "spellIds": [
            5570
          ],
          "descriptions": [
            "The enemy target is swarmed by insects, decreasing their chance to hit with attacks by 2% and causing 48 Nature damage over 12 sec."
          ]
        },
        {
          "id": 16821,
          "name": "Improved Moonfire",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_starfall",
          "spellIds": [
            16821
          ],
          "descriptions": [
            "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
            "Increases the damage and critical strike chance of your Moonfire spell by 10%."
          ]
        },
        {
          "id": 16909,
          "name": "Vengeance",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_nature_purge",
          "requirements": {
            "talentName": "Improved Moonfire",
            "talentRank": 2,
            "talentId": 16821
          },
          "spellIds": [
            16909
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 20%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 40%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 60%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 80%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 100%."
          ]
        },
        {
          "id": 16850,
          "name": "Improved Starfire",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_arcane_starfire",
          "spellIds": [
            16850
          ],
          "descriptions": [
            "Reduces the cast time of Starfire by 0.1 sec and Starfire has a 3% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.2 sec and Starfire has a 6% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.3 sec and Starfire has a 9% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.4 sec and Starfire has a 12% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.5 sec and Starfire has a 15% chance to stun its target for 3 sec."
          ]
        },
        {
          "id": 16880,
          "name": "Nature's Grace",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_naturesblessing",
          "spellIds": [
            16880
          ],
          "descriptions": [
            "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec."
          ]
        },
        {
          "id": 408248,
          "name": "Eclipse",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "ability_druid_eclipse",
          "spellIds": [
            408248
          ],
          "descriptions": [
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.17 sec. Stores up to 4 charges. Lasts 15 sec.",
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.33 sec. Stores up to 4 charges. Lasts 15 sec.",
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.50 sec. Stores up to 4 charges. Lasts 15 sec."
          ]
        },
        {
          "id": 16896,
          "name": "Moonfury",
          "x": 1,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_nature_moonglow",
          "spellIds": [
            16896
          ],
          "descriptions": [
            "Increases the damage done by your Arcane and Nature spells by 2%.",
            "Increases the damage done by your Arcane and Nature spells by 4%.",
            "Increases the damage done by your Arcane and Nature spells by 6%.",
            "Increases the damage done by your Arcane and Nature spells by 8%.",
            "Increases the damage done by your Arcane and Nature spells by 10%."
          ]
        },
        {
          "id": 24858,
          "name": "Moonkin Form",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_nature_forceofnature",
          "spellIds": [
            24858
          ],
          "descriptions": [
            "Shapeshift into Moonkin Form, increasing Omen of Clarity's chance to trigger by 100%, Armor contribution from items by 360%, and all party members within 45 yards have their Critical Strike chance increased by 3%, exclusive with Leader of the Pack.  Also protects the caster from Polymorph effects and prevents the use of healing spells.  The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
          ]
        },
        {
          "id": 17245,
          "name": "Overgrowth",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "inv_misc_herb_15",
          "spellIds": [
            17245
          ],
          "descriptions": [
            "Increases the maximum number of targets you may have affected by Entangling Roots by 1.",
            "Increases the maximum number of targets you may have affected by Entangling Roots by 2."
          ]
        }
      ]
    },
    {
      "name": "Feral Combat",
      "talents": [
        {
          "id": 16934,
          "name": "Ferocity",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_hunter_pet_hyena",
          "spellIds": [
            16934
          ],
          "descriptions": [
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 5 Rage or Energy."
          ]
        },
        {
          "id": 17003,
          "name": "Heart of the Wild",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_holy_blessingofagility",
          "spellIds": [
            17003
          ],
          "descriptions": [
            "Increases your Intellect by 2%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 2%.",
            "Increases your Intellect by 4%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your Strength is increased by 4%.",
            "Increases your Intellect by 6%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your Strength is increased by 6%.",
            "Increases your Intellect by 8%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your Strength is increased by 8%.",
            "Increases your Intellect by 10%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your Strength is increased by 10%."
          ]
        },
        {
          "id": 16947,
          "name": "Feral Instinct",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_ambush",
          "spellIds": [
            16947
          ],
          "descriptions": [
            "Increases damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling as if you were 1 level higher.",
            "Increases damage done by your Swipe ability by 20% and reduces the chance enemies have to detect you while Prowling as if you were 2 levels higher.",
            "Increases damage done by your Swipe ability by 30% and reduces the chance enemies have to detect you while Prowling as if you were 3 levels higher."
          ]
        },
        {
          "id": 16940,
          "name": "Brutal Impact",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_druid_bash",
          "spellIds": [
            16940
          ],
          "descriptions": [
            "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and reduces the cooldown of Bash by 15 sec.",
            "Increases the stun duration of your Bash and Pounce abilities by 1 sec and reduces the cooldown of Bash by 30 sec."
          ]
        },
        {
          "id": 16929,
          "name": "Thick Hide",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "inv_misc_pelt_bear_03",
          "spellIds": [
            16929
          ],
          "descriptions": [
            "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 0.67 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
            "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 1.33 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
            "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 2.00 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms."
          ]
        },
        {
          "id": 17002,
          "name": "Feral Swiftness",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_spiritwolf",
          "spellIds": [
            17002
          ],
          "descriptions": [
            "Increases your movement speed while in Cat Form by 15%, and increases your chance to Dodge by 2%.",
            "Increases your movement speed while in Cat Form by 30%, and increases your chance to Dodge by 4%."
          ]
        },
        {
          "id": 1238122,
          "name": "Feral Charge",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_hunter_pet_bear",
          "spellIds": [
            1238122
          ],
          "descriptions": [
            "Requires Bear Form, Dire Bear Form Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec.   Feral Charge (Cat) 8 - 25 yd rangeInstant30 sec cooldownRequires Druid Requires level 1Requires Cat Form Leap behind an enemy."
          ]
        },
        {
          "id": 16966,
          "name": "Shredding Attacks",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_vampiricaura",
          "spellIds": [
            16966
          ],
          "descriptions": [
            "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 1.",
            "Reduces the Energy cost of your Shred ability by 12 and reduces the Rage cost of your Lacerate ability by 2.",
            "Reduces the Energy cost of your Shred ability by 18 and reduces the Rage cost of your Lacerate ability by 3."
          ]
        },
        {
          "id": 16942,
          "name": "Sharpened Claws",
          "x": 3,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "inv_misc_monsterclaw_04",
          "spellIds": [
            16942
          ],
          "descriptions": [
            "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 3%.",
            "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 6%."
          ]
        },
        {
          "id": 16958,
          "name": "Blood Frenzy",
          "x": 3,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_ghoulfrenzy",
          "requirements": {
            "talentName": "Sharpened Claws",
            "talentRank": 2,
            "talentId": 16942
          },
          "spellIds": [
            16958
          ],
          "descriptions": [
            "Gives you a 50% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 50% chance to add an additional Combo Point.",
            "Gives you a 100% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 100% chance to add an additional Combo Point."
          ]
        },
        {
          "id": 16998,
          "name": "Savage Fury",
          "x": 1,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_druid_ravage",
          "spellIds": [
            16998
          ],
          "descriptions": [
            "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 5%.",
            "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 10%."
          ]
        },
        {
          "id": 407995,
          "name": "Primal Bite",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_racial_cannibalize",
          "requirements": {
            "talentName": "Savage Fury",
            "talentRank": 2,
            "talentId": 16998
          },
          "spellIds": [
            407995
          ],
          "descriptions": [
            "Bite the target, dealing 100% normal damage plus 26 and generating a high amount of threat."
          ]
        },
        {
          "id": 1223242,
          "name": "Natural Instinct",
          "x": 3,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_druid_predatoryinstincts",
          "spellIds": [
            1223242
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your melee abilities by 10% and increases your spell healing by 12% of your Intellect.",
            "Increases the critical strike damage bonus of your melee abilities by 20% and increases your spell healing by 25% of your Intellect."
          ]
        },
        {
          "id": 1322605,
          "name": "Shifting Power",
          "x": 0,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_druid_displacement",
          "requirements": {
            "talentName": "Shredding Attacks",
            "talentRank": 3,
            "talentId": 16966
          },
          "spellIds": [
            1322605
          ],
          "descriptions": [
            "Instantly convert 0 Mana into 40 Energy. Shifting Power's cost is reduced by effects that reduce the cost of Shapeshifting."
          ]
        },
        {
          "id": 16972,
          "name": "Predatory Strikes",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "ability_hunter_pet_cat",
          "spellIds": [
            16972
          ],
          "descriptions": [
            "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 50% of your level.",
            "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 100% of your level.",
            "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 150% of your level."
          ]
        },
        {
          "id": 1223246,
          "name": "Rend and Tear",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "ability_druid_primalagression",
          "requirements": {
            "talentName": "Predatory Strikes",
            "talentRank": 3,
            "talentId": 16972
          },
          "spellIds": [
            1223246
          ],
          "descriptions": [
            "Increases damage done by your melee abilities on Bleeding targets by 2%.",
            "Increases damage done by your melee abilities on Bleeding targets by 4%.",
            "Increases damage done by your melee abilities on Bleeding targets by 6%.",
            "Increases damage done by your melee abilities on Bleeding targets by 8%.",
            "Increases damage done by your melee abilities on Bleeding targets by 10%."
          ]
        },
        {
          "id": 417051,
          "name": "Natural Reaction",
          "x": 0,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "ability_bullrush",
          "spellIds": [
            417051
          ],
          "descriptions": [
            "Increases your dodge chance by 1%, and gives you a 20% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 2%, and gives you a 40% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 3%, and gives you a 60% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 4%, and gives you a 80% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 5%, and gives you a 100% chance to gain 5 Rage each time you dodge."
          ]
        },
        {
          "id": 17007,
          "name": "Leader of the Pack",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_unyeildingstamina",
          "spellIds": [
            17007
          ],
          "descriptions": [
            "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the critical strike chance of all party members within 45 yards by 3%, exclusive with Moonkin Aura."
          ]
        },
        {
          "id": 417141,
          "name": "Berserk",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_druid_berserk",
          "requirements": {
            "talentName": "Leader of the Pack",
            "talentRank": 1,
            "talentId": 17007
          },
          "spellIds": [
            417141
          ],
          "descriptions": [
            "Requires Cat Form, Bear Form, Dire Bear Form Causes your Primal Bite ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec."
          ]
        },
        {
          "id": 1322670,
          "name": "Improved Shifting Power",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_aspectmastery",
          "requirements": {
            "talentName": "Shifting Power",
            "talentRank": 1,
            "talentId": 1322605
          },
          "spellIds": [
            1322670
          ],
          "descriptions": [
            "Reduces the cooldown of your Shifting Power spell by 4 sec.",
            "Reduces the cooldown of your Shifting Power spell by 8 sec."
          ]
        }
      ]
    },
    {
      "name": "Restoration",
      "talents": [
        {
          "id": 17123,
          "name": "Improved Tranquility",
          "x": 3,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_tranquility",
          "spellIds": [
            17123
          ],
          "descriptions": [
            "Reduces threat caused by Tranquility by 50% and its cooldown by 30%.",
            "Reduces threat caused by Tranquility by 100% and its cooldown by 60%."
          ]
        },
        {
          "id": 408120,
          "name": "Wild Growth",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_druid_flourish",
          "requirements": {
            "talentName": "Living Spirit",
            "talentRank": 3,
            "talentId": 1309631
          },
          "spellIds": [
            408120
          ],
          "descriptions": [
            "Heals the target and their party for 336 over 7 sec. Party members must be within 43.5 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration."
          ]
        },
        {
          "id": 1309631,
          "name": "Living Spirit",
          "x": 1,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_nature_giftofthewaterspirit",
          "spellIds": [
            1309631
          ],
          "descriptions": [
            "Increases your Spirit by 5%.",
            "Increases your Spirit by 10%.",
            "Increases your Spirit by 15%."
          ]
        },
        {
          "id": 18562,
          "name": "Swiftmend",
          "x": 3,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "inv_relics_idolofrejuvenation",
          "spellIds": [
            18562
          ],
          "descriptions": [
            "Instantly heals a target with an active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of one of those spells."
          ]
        },
        {
          "id": 17074,
          "name": "Improved Regrowth",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_nature_resistnature",
          "requirements": {
            "talentName": "Improved Rejuvenation",
            "talentRank": 3,
            "talentId": 17111
          },
          "spellIds": [
            17074
          ],
          "descriptions": [
            "Increases the critical effect chance of your Regrowth spell by 10%.",
            "Increases the critical effect chance of your Regrowth spell by 20%.",
            "Increases the critical effect chance of your Regrowth spell by 30%.",
            "Increases the critical effect chance of your Regrowth spell by 40%.",
            "Increases the critical effect chance of your Regrowth spell by 50%."
          ]
        },
        {
          "id": 17111,
          "name": "Improved Rejuvenation",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_nature_rejuvenation",
          "spellIds": [
            17111
          ],
          "descriptions": [
            "Increases the effect of your Rejuvenation spell by 5%.",
            "Increases the effect of your Rejuvenation spell by 10%.",
            "Increases the effect of your Rejuvenation spell by 15%."
          ]
        },
        {
          "id": 24968,
          "name": "Tranquil Spirit",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_holy_elunesgrace",
          "spellIds": [
            24968
          ],
          "descriptions": [
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%."
          ]
        },
        {
          "id": 17104,
          "name": "Gift of Nature",
          "x": 2,
          "y": 2,
          "maxRank": 5,
          "minPointsRequired": 10,
          "iconName": "spell_nature_protectionformnature",
          "spellIds": [
            17104
          ],
          "descriptions": [
            "Increases the effect of all your healing spells by 2%.",
            "Increases the effect of all your healing spells by 4%.",
            "Increases the effect of all your healing spells by 6%.",
            "Increases the effect of all your healing spells by 8%.",
            "Increases the effect of all your healing spells by 10%."
          ]
        },
        {
          "id": 17106,
          "name": "Reflection",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_frost_windwalkon",
          "spellIds": [
            17106
          ],
          "descriptions": [
            "Allows 17% of your Mana regeneration to continue while casting.",
            "Allows 33% of your Mana regeneration to continue while casting.",
            "Allows 50% of your Mana regeneration to continue while casting."
          ]
        },
        {
          "id": 414673,
          "name": "Gift of the Earthmother",
          "x": 3,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_nature_spiritarmor",
          "spellIds": [
            414673
          ],
          "descriptions": [
            "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells."
          ]
        },
        {
          "id": 16833,
          "name": "Natural Shapeshifter",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_wispsplode",
          "spellIds": [
            16833
          ],
          "descriptions": [
            "Reduces the mana cost of all shapeshifting by 10%.",
            "Reduces the mana cost of all shapeshifting by 20%.",
            "Reduces the mana cost of all shapeshifting by 30%."
          ]
        },
        {
          "id": 17118,
          "name": "Subtlety",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_eyeoftheowl",
          "spellIds": [
            17118
          ],
          "descriptions": [
            "Reduces the threat generated by your Nature and Arcane spells by 10%.",
            "Reduces the threat generated by your Nature and Arcane spells by 20%.",
            "Reduces the threat generated by your Nature and Arcane spells by 30%."
          ]
        },
        {
          "id": 17116,
          "name": "Nature's Swiftness",
          "x": 0,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_ravenform",
          "requirements": {
            "talentName": "Naturalist",
            "talentRank": 5,
            "talentId": 17069
          },
          "spellIds": [
            17116
          ],
          "descriptions": [
            "When activated, your next Nature spell becomes an instant cast spell."
          ]
        },
        {
          "id": 17069,
          "name": "Naturalist",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_nature_healingtouch",
          "spellIds": [
            17069
          ],
          "descriptions": [
            "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases all damage you deal by 1%.",
            "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases all damage you deal by 2%.",
            "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases all damage you deal by 3%.",
            "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases all damage you deal by 4%.",
            "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases all damage you deal by 5%."
          ]
        },
        {
          "id": 17063,
          "name": "Nature's Focus",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_healingwavegreater",
          "spellIds": [
            17063
          ],
          "descriptions": [
            "Gives you a 14% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 28% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 42% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 56% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting Arcane and Nature spells."
          ]
        },
        {
          "id": 17056,
          "name": "Furor",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_holy_blessingofstamina",
          "spellIds": [
            17056
          ],
          "descriptions": [
            "Gives you a 20% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 20% of the Energy you had when last in Cat Form, plus 2 Energy per sec spent outside Cat Form, up to 20 Energy.  Bear Form and Dire Bear Form forfeit this Energy and halt its restoration while active.",
            "Gives you a 40% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 40% of the Energy you had when last in Cat Form, plus 4 Energy per sec spent outside Cat Form, up to 40 Energy.  Bear Form and Dire Bear Form forfeit this Energy and halt its restoration while active.",
            "Gives you a 60% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 60% of the Energy you had when last in Cat Form, plus 6 Energy per sec spent outside Cat Form, up to 60 Energy.  Bear Form and Dire Bear Form forfeit this Energy and halt its restoration while active.",
            "Gives you a 80% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 80% of the Energy you had when last in Cat Form, plus 8 Energy per sec spent outside Cat Form, up to 80 Energy.  Bear Form and Dire Bear Form forfeit this Energy and halt its restoration while active.",
            "Gives you a 100% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 100% of the Energy you had when last in Cat Form, plus 10 Energy per sec spent outside Cat Form, up to 100 Energy.  Bear Form and Dire Bear Form forfeit this Energy and halt its restoration while active."
          ]
        }
      ]
    }
  ]
};
