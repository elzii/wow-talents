import { ClassData } from "../../../types";

export const mageData: ClassData = {
  name: "Mage",
  talentTrees: [
    {
      "name": "Arcane",
      "talents": [
        {
          "id": 74,
          "name": "Arcane Subtlety",
          "maxRank": 2,
          "minPointsRequired": 0,
          "spellIds": [
            11210,
            12592
          ],
          "descriptions": [
            "Reduces your target's resistance to all your spells by 5 and reduces threat of Arcane spells by 20%.",
            "Reduces your target's resistance to all your spells by 10 and reduces threat of Arcane spells by 40%."
          ],
          "iconName": "spell_holy_dispelmagic",
          "y": 0,
          "x": 0
        },
        {
          "id": 76,
          "name": "Arcane Focus",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            11222,
            12839,
            12840,
            12841,
            12842
          ],
          "descriptions": [
            "Reduces the chance that the opponent can resist your Arcane spells by 2%.",
            "Reduces the chance that the opponent can resist your Arcane spells by 4%.",
            "Reduces the chance that the opponent can resist your Arcane spells by 6%.",
            "Reduces the chance that the opponent can resist your Arcane spells by 8%.",
            "Reduces the chance that the opponent can resist your Arcane spells by 10%."
          ],
          "iconName": "spell_holy_devotion",
          "y": 0,
          "x": 1
        },
        {
          "id": 80,
          "name": "Improved Arcane Missiles",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            11237,
            12463,
            12464,
            16769,
            16770
          ],
          "descriptions": [
            "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            "Gives you a 40% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            "Gives you a 60% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            "Gives you a 80% chance to avoid interruption caused by damage while channeling Arcane Missiles.",
            "Gives you a 100% chance to avoid interruption caused by damage while channeling Arcane Missiles."
          ],
          "iconName": "spell_nature_starfall",
          "y": 0,
          "x": 2
        },
        {
          "id": 78,
          "name": "Wand Specialization",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            6057,
            6085
          ],
          "descriptions": [
            "Increases your damage with Wands by 13%.",
            "Increases your damage with Wands by 25%."
          ],
          "iconName": "inv_wand_01",
          "y": 1,
          "x": 0
        },
        {
          "id": 1650,
          "name": "Magic Absorption",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            29441,
            29444,
            29445,
            29446,
            29447
          ],
          "descriptions": [
            "Increases all resistances by 2 and causes all spells you fully resist to restore 1% of your total mana.  1 sec. cooldown.",
            "Increases all resistances by 4 and causes all spells you fully resist to restore 2% of your total mana.  1 sec. cooldown.",
            "Increases all resistances by 6 and causes all spells you fully resist to restore 3% of your total mana.  1 sec. cooldown.",
            "Increases all resistances by 8 and causes all spells you fully resist to restore 4% of your total mana.  1 sec. cooldown.",
            "Increases all resistances by 10 and causes all spells you fully resist to restore 5% of your total mana.  1 sec. cooldown."
          ],
          "iconName": "spell_nature_astralrecalgroup",
          "y": 1,
          "x": 1
        },
        {
          "id": 75,
          "name": "Arcane Concentration",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            11213,
            12574,
            12575,
            12576,
            12577
          ],
          "descriptions": [
            "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage\tspell by 100%.",
            "Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
            "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
            "Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
            "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%."
          ],
          "iconName": "spell_shadow_manaburn",
          "y": 1,
          "x": 2
        },
        {
          "id": 82,
          "name": "Magic Attunement",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            11247,
            12606
          ],
          "descriptions": [
            "Increases the effect of your Amplify Magic and Dampen Magic spells by 25%.",
            "Increases the effect of your Amplify Magic and Dampen Magic spells by 50%."
          ],
          "iconName": "spell_nature_abolishmagic",
          "y": 2,
          "x": 0
        },
        {
          "id": 81,
          "name": "Arcane Impact",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            11242,
            12467,
            12469
          ],
          "descriptions": [
            "Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional 2%.",
            "Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional 4%.",
            "Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional 6%."
          ],
          "iconName": "spell_nature_wispsplode",
          "y": 2,
          "x": 1
        },
        {
          "id": 85,
          "name": "Arcane Fortitude",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            28574
          ],
          "descriptions": [
            "Increases your armor by an amount equal to 50% of your Intellect."
          ],
          "iconName": "spell_arcane_arcaneresilience",
          "y": 2,
          "x": 3
        },
        {
          "id": 83,
          "name": "Improved Mana Shield",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            11252,
            12605
          ],
          "descriptions": [
            "Decreases the mana lost per point of damage taken when Mana Shield is active by 10%.",
            "Decreases the mana lost per point of damage taken when Mana Shield is active by 20%."
          ],
          "iconName": "spell_shadow_detectlesserinvisibility",
          "y": 3,
          "x": 0
        },
        {
          "id": 88,
          "name": "Improved Counterspell",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            11255,
            12598
          ],
          "descriptions": [
            "Gives your Counterspell a 50% chance to silence the target for 4 sec.",
            "Gives your Counterspell a 100% chance to silence the target for 4 sec."
          ],
          "iconName": "spell_frost_iceshock",
          "y": 3,
          "x": 1
        },
        {
          "id": 1142,
          "name": "Arcane Meditation",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            18462,
            18463,
            18464
          ],
          "descriptions": [
            "Allows 10% of your Mana regeneration to continue while casting.",
            "Allows 20% of your Mana regeneration to continue while casting.",
            "Allows 30% of your Mana regeneration to continue while casting."
          ],
          "iconName": "spell_shadow_siphonmana",
          "y": 3,
          "x": 3
        },
        {
          "id": 1724,
          "name": "Improved Blink",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            31569,
            31570
          ],
          "descriptions": [
            "Reduces the mana cost of your Blink spell by 25%.",
            "Reduces the mana cost of your Blink spell by 50%."
          ],
          "iconName": "spell_arcane_blink",
          "y": 4,
          "x": 0
        },
        {
          "id": 86,
          "name": "Presence of Mind",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            12043
          ],
          "descriptions": [
            "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
          ],
          "iconName": "spell_nature_enchantarmor",
          "y": 4,
          "x": 1
        },
        {
          "id": 77,
          "name": "Arcane Mind",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            11232,
            12500,
            12501,
            12502,
            12503
          ],
          "descriptions": [
            "Increases your total Intellect by 3%.",
            "Increases your total Intellect by 6%.",
            "Increases your total Intellect by 9%.",
            "Increases your total Intellect by 12%.",
            "Increases your total Intellect by 15%."
          ],
          "iconName": "spell_shadow_charm",
          "y": 4,
          "x": 3
        },
        {
          "id": 1726,
          "name": "Prismatic Cloak",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31574,
            31575
          ],
          "descriptions": [
            "Reduces all damage taken by 2%.",
            "Reduces all damage taken by 4%."
          ],
          "iconName": "spell_arcane_prismaticcloak",
          "y": 5,
          "x": 0
        },
        {
          "id": 421,
          "name": "Arcane Instability",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            15058,
            15059,
            15060
          ],
          "descriptions": [
            "Increases your spell damage and critical strike chance by 1%.",
            "Increases your spell damage and critical strike chance by 2%.",
            "Increases your spell damage and critical strike chance by 3%."
          ],
          "iconName": "spell_shadow_teleport",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 86,
            "talentRank": 1
          }
        },
        {
          "id": 1725,
          "name": "Arcane Potency",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            31571,
            31572,
            31573
          ],
          "descriptions": [
            "Increases the critical strike chance of any spell cast while Clearcasting by 10%.",
            "Increases the critical strike chance of any spell cast while Clearcasting by 20%.",
            "Increases the critical strike chance of any spell cast while Clearcasting by 30%."
          ],
          "iconName": "spell_arcane_arcanepotency",
          "y": 5,
          "x": 2,
          "requirements": {
            "talentId": 75,
            "talentRank": 5
          },
          "talentLink": "Arcane Concentration"
        },
        {
          "id": 1727,
          "name": "Empowered Arcane Missiles",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            31579,
            31582,
            31583
          ],
          "descriptions": [
            "Your Arcane Missiles spell gains an additional 15% of your bonus spell damage effects, but mana cost is increased by 2%.",
            "Your Arcane Missiles spell gains an additional 30% of your bonus spell damage effects, but mana cost is increased by 4%.",
            "Your Arcane Missiles spell gains an additional 45% of your bonus spell damage effects, but mana cost is increased by 6%."
          ],
          "iconName": "spell_nature_starfall",
          "y": 6,
          "x": 0
        },
        {
          "id": 87,
          "name": "Arcane Power",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            12042
          ],
          "descriptions": [
            "When activated, your spells deal 30% more damage while costing 30% more mana to cast. This effect lasts 15 sec."
          ],
          "iconName": "spell_nature_lightning",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 421,
            "talentRank": 3
          }
        },
        {
          "id": 1826,
          "name": "Spell Power",
          "maxRank": 2,
          "minPointsRequired": 30,
          "spellIds": [
            35578,
            35581
          ],
          "descriptions": [
            "Increases critical strike damage bonus of all spells by 25%.",
            "Increases critical strike damage bonus of all spells by 50%."
          ],
          "iconName": "spell_arcane_arcanetorrent",
          "y": 6,
          "x": 2
        },
        {
          "id": 1728,
          "name": "Mind Mastery",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31584,
            31585,
            31586,
            31587,
            31588
          ],
          "descriptions": [
            "Increases spell damage by up to 5% of your total intellect.",
            "Increases spell damage by up to 10% of your total intellect.",
            "Increases spell damage by up to 15% of your total intellect.",
            "Increases spell damage by up to 20% of your total intellect.",
            "Increases spell damage by up to 25% of your total intellect."
          ],
          "iconName": "spell_arcane_mindmastery",
          "y": 7,
          "x": 1
        },
        {
          "id": 1729,
          "name": "Slow",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            31589
          ],
          "descriptions": [
            "Reduces target's movement speed by 50%, increases the time between ranged attacks by 50% and increases casting time by 50%. Lasts 15 sec. Slow can only affect one target at a time."
          ],
          "iconName": "spell_nature_slow",
          "y": 8,
          "x": 1
        }
      ]
    },
    {
      "name": "Fire",
      "talents": [
        {
          "id": 26,
          "name": "Improved Fireball",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            11069,
            12338,
            12339,
            12340,
            12341
          ],
          "descriptions": [
            "Reduces the casting time of your Fireball spell by 0.1 sec.",
            "Reduces the casting time of your Fireball spell by 0.2 sec.",
            "Reduces the casting time of your Fireball spell by 0.3 sec.",
            "Reduces the casting time of your Fireball spell by 0.4 sec.",
            "Reduces the casting time of your Fireball spell by 0.5 sec."
          ],
          "iconName": "spell_fire_flamebolt",
          "y": 0,
          "x": 1
        },
        {
          "id": 30,
          "name": "Impact",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            11103,
            12357,
            12358,
            12359,
            12360
          ],
          "descriptions": [
            "Gives your Fire spells a 2% chance to stun the target for 2 sec.",
            "Gives your Fire spells a 4% chance to stun the target for 2 sec.",
            "Gives your Fire spells a 6% chance to stun the target for 2 sec.",
            "Gives your Fire spells a 8% chance to stun the target for 2 sec.",
            "Gives your Fire spells a 10% chance to stun the target for 2 sec."
          ],
          "iconName": "spell_fire_meteorstorm",
          "y": 0,
          "x": 2
        },
        {
          "id": 34,
          "name": "Ignite",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            11119,
            11120,
            12846,
            12847,
            12848
          ],
          "descriptions": [
            "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
            "Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 sec.",
            "Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 sec.",
            "Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 sec.",
            "Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec."
          ],
          "iconName": "spell_fire_incinerate",
          "y": 1,
          "x": 0
        },
        {
          "id": 28,
          "name": "Flame Throwing",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            11100,
            12353
          ],
          "descriptions": [
            "Increases the range of your fire spells by 3 yards.",
            "Increases the range of your fire spells by 6 yards."
          ],
          "iconName": "spell_fire_flare",
          "y": 1,
          "x": 1
        },
        {
          "id": 27,
          "name": "Improved Fire Blast",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            11078,
            11080,
            12342
          ],
          "descriptions": [
            "Reduces the cooldown of your Fire Blast spell by 0.5 sec.",
            "Reduces the cooldown of your Fire Blast spell by 1 sec.",
            "Reduces the cooldown of your Fire Blast spell by 1.5 sec."
          ],
          "iconName": "spell_fire_fireball",
          "y": 1,
          "x": 2
        },
        {
          "id": 1141,
          "name": "Incinerate",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            18459,
            18460
          ],
          "descriptions": [
            "Increases the critical strike chance of your Fire Blast and Scorch spells by 2%.",
            "Increases the critical strike chance of your Fire Blast and Scorch spells by 4%."
          ],
          "iconName": "spell_fire_flameshock",
          "y": 2,
          "x": 0
        },
        {
          "id": 31,
          "name": "Improved Flamestrike",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            11108,
            12349,
            12350
          ],
          "descriptions": [
            "Increases the critical strike chance of your Flamestrike spell by 5%.",
            "Increases the critical strike chance of your Flamestrike spell by 10%.",
            "Increases the critical strike chance of your Flamestrike spell by 15%."
          ],
          "iconName": "spell_fire_selfdestruct",
          "y": 2,
          "x": 1
        },
        {
          "id": 29,
          "name": "Pyroblast",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            11366
          ],
          "descriptions": [
            "Hurls an immense fiery boulder that causes 148 to 195 Fire damage and an additional 56 Fire damage over 12 sec."
          ],
          "iconName": "spell_fire_fireball02",
          "y": 2,
          "x": 2
        },
        {
          "id": 23,
          "name": "Burning Soul",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            11083,
            12351
          ],
          "descriptions": [
            "Gives your Fire spells a 35% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 5%.",
            "Gives your Fire spells a 70% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 10%."
          ],
          "iconName": "spell_fire_fire",
          "y": 2,
          "x": 3
        },
        {
          "id": 25,
          "name": "Improved Scorch",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            11095,
            12872,
            12873
          ],
          "descriptions": [
            "Your Scorch spells have a 33% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
            "Your Scorch spells have a 66% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
            "Your Scorch spells have a 100% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times."
          ],
          "iconName": "spell_fire_soulburn",
          "y": 3,
          "x": 0
        },
        {
          "id": 24,
          "name": "Improved Fire Ward",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            11094,
            13043
          ],
          "descriptions": [
            "Causes your Fire Ward to have a 10% chance to reflect Fire spells while active.",
            "Causes your Fire Ward to have a 20% chance to reflect Fire spells while active."
          ],
          "iconName": "spell_fire_firearmor",
          "y": 3,
          "x": 1
        },
        {
          "id": 1639,
          "name": "Master of Elements",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            29074,
            29075,
            29076
          ],
          "descriptions": [
            "Your Fire and Frost spell criticals will refund 10% of their base mana cost.",
            "Your Fire and Frost spell criticals will refund 20% of their base mana cost.",
            "Your Fire and Frost spell criticals will refund 30% of their base mana cost."
          ],
          "iconName": "spell_fire_masterofelements",
          "y": 3,
          "x": 3
        },
        {
          "id": 1730,
          "name": "Playing with Fire",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            31638,
            31639,
            31640
          ],
          "descriptions": [
            "Increases all spell damage caused by 1% and all spell damage taken by 1%.",
            "Increases all spell damage caused by 2% and all spell damage taken by 2%.",
            "Increases all spell damage caused by 3% and all spell damage taken by 3%."
          ],
          "iconName": "spell_fire_playingwithfire",
          "y": 4,
          "x": 0
        },
        {
          "id": 33,
          "name": "Critical Mass",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            11115,
            11367,
            11368
          ],
          "descriptions": [
            "Increases the critical strike chance of your fire spells by 2%.",
            "Increases the critical strike chance of your fire spells by 4%.",
            "Increases the critical strike chance of your fire spells by 6%."
          ],
          "iconName": "spell_nature_wispheal",
          "y": 4,
          "x": 1
        },
        {
          "id": 32,
          "name": "Blast Wave",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            11113
          ],
          "descriptions": [
            "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec."
          ],
          "iconName": "spell_holy_excorcism_02",
          "y": 4,
          "x": 2,
          "requirements": {
            "talentId": 29,
            "talentRank": 1
          },
          "talentLink": "Pyroblast"
        },
        {
          "id": 1731,
          "name": "Blazing Speed",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31641,
            31642
          ],
          "descriptions": [
            "Gives you a 5% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. This effect lasts 8 sec.",
            "Gives you a 10% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. This effect lasts 8 sec."
          ],
          "iconName": "spell_fire_burningspeed",
          "y": 5,
          "x": 0
        },
        {
          "id": 35,
          "name": "Fire Power",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            11124,
            12378,
            12398,
            12399,
            12400
          ],
          "descriptions": [
            "Increases the damage done by your fire spells by 2%.",
            "Increases the damage done by your fire spells by 4%.",
            "Increases the damage done by your fire spells by 6%.",
            "Increases the damage done by your fire spells by 8%.",
            "Increases the damage done by your fire spells by 10%."
          ],
          "iconName": "spell_fire_immolation",
          "y": 5,
          "x": 2
        },
        {
          "id": 1733,
          "name": "Pyromaniac",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34293,
            34295,
            34296
          ],
          "descriptions": [
            "Increases chance to critically hit and reduces the mana cost of all Fire spells by an additional 1%.",
            "Increases chance to critically hit and reduces the mana cost of all Fire spells by an additional 2%.",
            "Increases chance to critically hit and reduces the mana cost of all Fire spells by an additional 3%."
          ],
          "iconName": "spell_fire_burnout",
          "y": 6,
          "x": 0
        },
        {
          "id": 36,
          "name": "Combustion",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            11129
          ],
          "descriptions": [
            "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 critical strikes with Fire spells."
          ],
          "iconName": "spell_fire_sealoffire",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 33,
            "talentRank": 3
          },
          "talentLink": "Critical Mass"
        },
        {
          "id": 1732,
          "name": "Molten Fury",
          "maxRank": 2,
          "minPointsRequired": 30,
          "spellIds": [
            31679,
            31680
          ],
          "descriptions": [
            "Increases damage of all spells against targets with less than 20% health by 10%.",
            "Increases damage of all spells against targets with less than 20% health by 20%."
          ],
          "iconName": "spell_fire_moltenblood",
          "y": 6,
          "x": 2
        },
        {
          "id": 1734,
          "name": "Empowered Fireball",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31656,
            31657,
            31658,
            31659,
            31660
          ],
          "descriptions": [
            "Your Fireball spell gains an additional 3% of your bonus spell damage effects.",
            "Your Fireball spell gains an additional 6% of your bonus spell damage effects.",
            "Your Fireball spell gains an additional 9% of your bonus spell damage effects.",
            "Your Fireball spell gains an additional 12% of your bonus spell damage effects.",
            "Your Fireball spell gains an additional 15% of your bonus spell damage effects."
          ],
          "iconName": "spell_fire_flamebolt",
          "y": 7,
          "x": 2
        },
        {
          "id": 2005,
          "name": "Dragon's Breath",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            35250
          ],
          "descriptions": [
            "Targets in a cone in front of the caster take 382 to 442 Fire damage and are Disoriented for 3 sec. Any direct damaging attack will revive targets. Turns off your attack when used."
          ],
          "iconName": "inv_misc_head_dragon_01",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 36,
            "talentRank": 1
          },
          "talentLink": "Combustion"
        }
      ]
    },
    {
      "name": "Frost",
      "talents": [
        {
          "id": 70,
          "name": "Frost Warding",
          "maxRank": 2,
          "minPointsRequired": 0,
          "spellIds": [
            11189,
            28332
          ],
          "descriptions": [
            "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
            "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by 30%. In addition, gives your Frost Ward a 20% chance to reflect Frost spells and effects while active."
          ],
          "iconName": "spell_frost_frostward",
          "y": 0,
          "x": 0
        },
        {
          "id": 37,
          "name": "Improved Frostbolt",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            11070,
            12473,
            16763,
            16765,
            16766
          ],
          "descriptions": [
            "Reduces the casting time of your Frostbolt spell by 0.1 sec.",
            "Reduces the casting time of your Frostbolt spell by 0.2 sec.",
            "Reduces the casting time of your Frostbolt spell by 0.3 sec.",
            "Reduces the casting time of your Frostbolt spell by 0.4 sec.",
            "Reduces the casting time of your Frostbolt spell by 0.5 sec."
          ],
          "iconName": "spell_frost_frostbolt02",
          "y": 0,
          "x": 1
        },
        {
          "id": 1649,
          "name": "Elemental Precision",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            29438,
            29439,
            29440
          ],
          "descriptions": [
            "Reduces the mana cost and chance targets resist your Frost and Fire spells by 1%.",
            "Reduces the mana cost and chance targets resist your Frost and Fire spells by 2%.",
            "Reduces the mana cost and chance targets resist your Frost and Fire spells by 3%."
          ],
          "iconName": "spell_ice_magicdamage",
          "y": 0,
          "x": 2
        },
        {
          "id": 73,
          "name": "Ice Shards",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            11207,
            12672,
            15047,
            15052,
            15053
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Frost spells by 20%.",
            "Increases the critical strike damage bonus of your Frost spells by 40%.",
            "Increases the critical strike damage bonus of your Frost spells by 60%.",
            "Increases the critical strike damage bonus of your Frost spells by 80%.",
            "Increases the critical strike damage bonus of your Frost spells by 100%."
          ],
          "iconName": "spell_frost_iceshard",
          "y": 1,
          "x": 0
        },
        {
          "id": 38,
          "name": "Frostbite",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            11071,
            12496,
            12497
          ],
          "descriptions": [
            "Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
            "Gives your Chill effects a 10% chance to freeze the target for 5 sec.",
            "Gives your Chill effects a 15% chance to freeze the target for 5 sec."
          ],
          "iconName": "spell_frost_frostarmor",
          "y": 1,
          "x": 1
        },
        {
          "id": 62,
          "name": "Improved Frost Nova",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            11165,
            12475
          ],
          "descriptions": [
            "Reduces the cooldown of your Frost Nova spell by 2 sec.",
            "Reduces the cooldown of your Frost Nova spell by 4 sec."
          ],
          "iconName": "spell_frost_freezingbreath",
          "y": 1,
          "x": 2
        },
        {
          "id": 65,
          "name": "Permafrost",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            11175,
            12569,
            12571
          ],
          "descriptions": [
            "Increases the duration of your Chill effects by 1 sec and reduces the target's speed by an additional 4%.",
            "Increases the duration of your Chill effects by 2 sec and reduces the target's speed by an additional 7%.",
            "Increases the duration of your Chill effects by 3 sec and reduces the target's speed by an additional 10%."
          ],
          "iconName": "spell_frost_wisp",
          "y": 1,
          "x": 3
        },
        {
          "id": 61,
          "name": "Piercing Ice",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            11151,
            12952,
            12953
          ],
          "descriptions": [
            "Increases the damage done by your Frost spells by 2%.",
            "Increases the damage done by your Frost spells by 4%.",
            "Increases the damage done by your Frost spells by 6%."
          ],
          "iconName": "spell_frost_frostbolt",
          "y": 2,
          "x": 0
        },
        {
          "id": 69,
          "name": "Icy Veins",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            12472
          ],
          "descriptions": [
            "Hastens your spellcasting, reducing cast time of all spells by 20% and increases the chance your chilling effects will Freeze the target by 10%. Lasts 20 sec."
          ],
          "iconName": "spell_frost_coldhearted",
          "y": 2,
          "x": 1
        },
        {
          "id": 63,
          "name": "Improved Blizzard",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            11185,
            12487,
            12488
          ],
          "descriptions": [
            "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 30%. Lasts 1.50 sec.",
            "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 50%. Lasts 1.50 sec.",
            "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by 65%. Lasts 1.50 sec."
          ],
          "iconName": "spell_frost_icestorm",
          "y": 2,
          "x": 3
        },
        {
          "id": 741,
          "name": "Arctic Reach",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            16757,
            16758
          ],
          "descriptions": [
            "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
            "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
          ],
          "iconName": "spell_shadow_darkritual",
          "y": 3,
          "x": 0
        },
        {
          "id": 66,
          "name": "Frost Channeling",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            11160,
            12518,
            12519
          ],
          "descriptions": [
            "Reduces the mana cost of your frost spells by 5% and reduces the threat caused by your Frost spells by 4%.",
            "Reduces the mana cost of your frost spells by 10% and reduces the threat caused by your Frost spells by 7%.",
            "Reduces the mana cost of your frost spells by 15% and reduces the threat caused by your Frost spells by 10%."
          ],
          "iconName": "spell_frost_stun",
          "y": 3,
          "x": 1
        },
        {
          "id": 67,
          "name": "Shatter",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            11170,
            12982,
            12983,
            12984,
            12985
          ],
          "descriptions": [
            "Increases the critical strike chance of all your spells against frozen targets by 10%.",
            "Increases the critical strike chance of all your spells against frozen targets by 20%.",
            "Increases the critical strike chance of all your spells against frozen targets by 30%.",
            "Increases the critical strike chance of all your spells against frozen targets by 40%.",
            "Increases the critical strike chance of all your spells against frozen targets by 50%."
          ],
          "iconName": "spell_frost_frostshock",
          "y": 3,
          "x": 2,
          "requirements": {
            "talentId": 62,
            "talentRank": 2
          },
          "talentLink": "Improved Frost Nova"
        },
        {
          "id": 1736,
          "name": "Frozen Core",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            31667,
            31668,
            31669
          ],
          "descriptions": [
            "Reduces the damage taken by Frost and Fire effects by 2%.",
            "Reduces the damage taken by Frost and Fire effects by 4%.",
            "Reduces the damage taken by Frost and Fire effects by 6%."
          ],
          "iconName": "spell_frost_frozencore",
          "y": 4,
          "x": 0
        },
        {
          "id": 72,
          "name": "Cold Snap",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            11958
          ],
          "descriptions": [
            "When activated, this spell finishes the cooldown on all Frost spells you recently cast."
          ],
          "iconName": "spell_frost_wizardmark",
          "y": 4,
          "x": 1
        },
        {
          "id": 64,
          "name": "Improved Cone of Cold",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            11190,
            12489,
            12490
          ],
          "descriptions": [
            "Increases the damage dealt by your Cone of Cold spell by 15%.",
            "Increases the damage dealt by your Cone of Cold spell by 25%.",
            "Increases the damage dealt by your Cone of Cold spell by 35%."
          ],
          "iconName": "spell_frost_glacier",
          "y": 4,
          "x": 2
        },
        {
          "id": 1737,
          "name": "Ice Floes",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31670,
            31672
          ],
          "descriptions": [
            "Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by 10%.",
            "Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by 20%."
          ],
          "iconName": "spell_frost_icefloes",
          "y": 5,
          "x": 0
        },
        {
          "id": 68,
          "name": "Winter's Chill",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            11180,
            28592,
            28593,
            28594,
            28595
          ],
          "descriptions": [
            "Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            "Gives your Frost damage spells a 40% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            "Gives your Frost damage spells a 60% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            "Gives your Frost damage spells a 80% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
            "Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times."
          ],
          "iconName": "spell_frost_chillingblast",
          "y": 5,
          "x": 2
        },
        {
          "id": 71,
          "name": "Ice Barrier",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            11426
          ],
          "descriptions": [
            "Instantly shields you, absorbing 454 damage. Lasts 1 min. While the shield holds, spells will not be interrupted."
          ],
          "iconName": "spell_ice_lament",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 72,
            "talentRank": 1
          },
          "talentLink": "Cold Snap"
        },
        {
          "id": 1738,
          "name": "Arctic Winds",
          "maxRank": 5,
          "minPointsRequired": 30,
          "spellIds": [
            31674,
            31675,
            31676,
            31677,
            31678
          ],
          "descriptions": [
            "Increases all Frost damage you cause by 1% and reduces the chance melee and ranged attacks will hit you by 1%.",
            "Increases all Frost damage you cause by 2% and reduces the chance melee and ranged attacks will hit you by 2%.",
            "Increases all Frost damage you cause by 3% and reduces the chance melee and ranged attacks will hit you by 3%.",
            "Increases all Frost damage you cause by 4% and reduces the chance melee and ranged attacks will hit you by 4%.",
            "Increases all Frost damage you cause by 5% and reduces the chance melee and ranged attacks will hit you by 5%."
          ],
          "iconName": "spell_frost_arcticwinds",
          "y": 6,
          "x": 2
        },
        {
          "id": 1740,
          "name": "Empowered Frostbolt",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31682,
            31683,
            31684,
            31685,
            31686
          ],
          "descriptions": [
            "Your Frostbolt spell gains an additional 2% of your bonus spell damage effects and an additional 1% chance to critically strike.",
            "Your Frostbolt spell gains an additional 4% of your bonus spell damage effects and an additional 2% chance to critically strike.",
            "Your Frostbolt spell gains an additional 6% of your bonus spell damage effects and an additional 3% chance to critically strike.",
            "Your Frostbolt spell gains an additional 8% of your bonus spell damage effects and an additional 4% chance to critically strike.",
            "Your Frostbolt spell gains an additional 10% of your bonus spell damage effects and an additional 5% chance to critically strike."
          ],
          "iconName": "spell_frost_frostbolt02",
          "y": 7,
          "x": 1
        },
        {
          "id": 1741,
          "name": "Summon Water Elemental",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            31687
          ],
          "descriptions": [
            "Summon a Water Elemental to fight for the caster for 45 sec."
          ],
          "iconName": "spell_frost_summonwaterelemental_2",
          "y": 8,
          "x": 1
        }
      ]
    }
  ]
};
