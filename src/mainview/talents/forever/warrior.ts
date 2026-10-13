import { ClassData } from "../../../types";

export const warriorData: ClassData = {
  "name": "Warrior",
  "talentTrees": [
    {
      "name": "Arms",
      "talents": [
        {
          "id": 12294,
          "name": "Mortal Strike",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_warrior_savageblow",
          "requirements": {
            "talentName": "Sweeping Strikes",
            "talentRank": 1,
            "talentId": 12292
          },
          "spellIds": [
            12294
          ],
          "descriptions": [
            "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec."
          ]
        },
        {
          "id": 12289,
          "name": "Improved Hamstring",
          "x": 2,
          "y": 5,
          "maxRank": 3,
          "minPointsRequired": 25,
          "iconName": "ability_shockwave",
          "spellIds": [
            12289
          ],
          "descriptions": [
            "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
            "Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
            "Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec."
          ]
        },
        {
          "id": 1290261,
          "name": "Weaponmaster",
          "x": 2,
          "y": 4,
          "maxRank": 5,
          "minPointsRequired": 20,
          "iconName": "garrison_weaponupgrade",
          "spellIds": [
            1290261
          ],
          "descriptions": [
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Polearm: Increases your     critical strike chance by 1%.      Mace/Staff: Your attacks ignore     3% of your target's armor.      Sword: Your successful melee      attacks have a 1% chance to      trigger an extra attack on the      target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Polearm: Increases your     critical strike chance by 2%.      Mace/Staff: Your attacks ignore     6% of your target's armor.      Sword: Your successful melee      attacks have a 2% chance to      trigger an extra attack on the      target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Polearm: Increases your     critical strike chance by 3%.      Mace/Staff: Your attacks ignore     9% of your target's armor.      Sword: Your successful melee      attacks have a 3% chance to      trigger an extra attack on the      target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Polearm: Increases your     critical strike chance by 4%.      Mace/Staff: Your attacks ignore     12% of your target's armor.      Sword: Your successful melee      attacks have a 4% chance to      trigger an extra attack on the      target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Polearm: Increases your     critical strike chance by 5%.      Mace/Staff: Your attacks ignore     15% of your target's armor.      Sword: Your successful melee      attacks have a 5% chance to      trigger an extra attack on the      target."
          ]
        },
        {
          "id": 12292,
          "name": "Sweeping Strikes",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_rogue_slicedice",
          "spellIds": [
            12292
          ],
          "descriptions": [
            "Your next 5 melee attacks strike an additional nearby opponent."
          ]
        },
        {
          "id": 16493,
          "name": "Impale",
          "x": 2,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_searingarrow",
          "requirements": {
            "talentName": "Deep Wounds",
            "talentRank": 3,
            "talentId": 12834
          },
          "spellIds": [
            16493
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your abilities by 10%.",
            "Increases the critical strike damage bonus of your abilities by 20%."
          ]
        },
        {
          "id": 12163,
          "name": "Two-Handed Weapon Specialization",
          "x": 1,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "inv_axe_09",
          "spellIds": [
            12163
          ],
          "descriptions": [
            "Increases the damage you deal with two-handed melee weapons by 1%.",
            "Increases the damage you deal with two-handed melee weapons by 2%.",
            "Increases the damage you deal with two-handed melee weapons by 3%."
          ]
        },
        {
          "id": 1310222,
          "name": "Spearing Strike",
          "x": 0,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "inv_spear_01",
          "spellIds": [
            1310222
          ],
          "descriptions": [
            "A brutal attack that deals 40% weapon damage. Deals an additional 80% weapon damage against Giants, Dragonkin, and mounted targets. Mounted targets are dismounted."
          ]
        },
        {
          "id": 12834,
          "name": "Deep Wounds",
          "x": 2,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_backstab",
          "requirements": {
            "talentName": "Improved Rend",
            "talentRank": 3,
            "talentId": 12286
          },
          "spellIds": [
            12834
          ],
          "descriptions": [
            "Your critical strikes cause your opponent to Bleed, dealing 20% of your melee weapon's average damage over 12 sec.",
            "Your critical strikes cause your opponent to Bleed, dealing 40% of your melee weapon's average damage over 12 sec.",
            "Your critical strikes cause your opponent to Bleed, dealing 60% of your melee weapon's average damage over 12 sec."
          ]
        },
        {
          "id": 12296,
          "name": "Anger Management",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_holy_blessingofstamina",
          "requirements": {
            "talentName": "Improved Tactical Mastery",
            "talentRank": 5,
            "talentId": 12295
          },
          "spellIds": [
            12296
          ],
          "descriptions": [
            "Generates 1 Rage every 3 sec while in combat, and reduces Rage loss while out of combat by 30%."
          ]
        },
        {
          "id": 12290,
          "name": "Improved Overpower",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "inv_sword_05",
          "spellIds": [
            12290
          ],
          "descriptions": [
            "Increases the critical strike chance of your Overpower ability by 25%.",
            "Increases the critical strike chance of your Overpower ability by 50%."
          ]
        },
        {
          "id": 12295,
          "name": "Improved Tactical Mastery",
          "x": 1,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_nature_enchantarmor",
          "spellIds": [
            12295
          ],
          "descriptions": [
            "Tactical Mastery lets you retain up to an additional 3 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 6 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 9 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 12 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances."
          ]
        },
        {
          "id": 12285,
          "name": "Improved Charge",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_warrior_charge",
          "spellIds": [
            12285
          ],
          "descriptions": [
            "Increases the Rage generated by your Charge ability by 3.",
            "Increases the Rage generated by your Charge ability by 6."
          ]
        },
        {
          "id": 12286,
          "name": "Improved Rend",
          "x": 2,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "ability_gouge",
          "spellIds": [
            12286
          ],
          "descriptions": [
            "Increases the Bleed damage done by your Rend ability by 12%.",
            "Increases the Bleed damage done by your Rend ability by 23%.",
            "Increases the Bleed damage done by your Rend ability by 35%."
          ]
        },
        {
          "id": 16462,
          "name": "Deflection",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_parry",
          "spellIds": [
            16462
          ],
          "descriptions": [
            "Increases your Parry chance by 1%.",
            "Increases your Parry chance by 2%.",
            "Increases your Parry chance by 3%.",
            "Increases your Parry chance by 4%.",
            "Increases your Parry chance by 5%."
          ]
        },
        {
          "id": 12282,
          "name": "Improved Heroic Strike",
          "x": 0,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "ability_rogue_ambush",
          "spellIds": [
            12282
          ],
          "descriptions": [
            "Reduces the cost of your Heroic Strike ability by 1 Rage.",
            "Reduces the cost of your Heroic Strike ability by 2 Rage.",
            "Reduces the cost of your Heroic Strike ability by 3 Rage."
          ]
        },
        {
          "id": 1289682,
          "name": "Bloodthrill",
          "x": 0,
          "y": 4,
          "maxRank": 5,
          "minPointsRequired": 20,
          "iconName": "inv_sword_01",
          "spellIds": [
            1289682
          ],
          "descriptions": [
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 4% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 8% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 12% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 16% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 20% chance to allow the use of your Overpower ability on the target. Lasts 6 sec."
          ]
        },
        {
          "id": 12862,
          "name": "Improved Slam",
          "x": 0,
          "y": 5,
          "maxRank": 2,
          "minPointsRequired": 25,
          "iconName": "ability_warrior_decisivestrike",
          "spellIds": [
            12862
          ],
          "descriptions": [
            "Reduces the global cooldown and cast time of your Slam ability by 0.25 sec. In addition, Slam no longer interrupts or delays your melee swing and Slam's cooldown is reduced by 3.0 sec.",
            "Reduces the global cooldown and cast time of your Slam ability by 0.50 sec. In addition, Slam no longer interrupts or delays your melee swing and Slam's cooldown is reduced by 3.0 sec."
          ]
        }
      ]
    },
    {
      "name": "Fury",
      "talents": [
        {
          "id": 20504,
          "name": "Improved Intercept",
          "x": 3,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_rogue_sprint",
          "spellIds": [
            20504
          ],
          "descriptions": [
            "Reduces the cooldown of your Intercept ability by 5 sec.",
            "Reduces the cooldown of your Intercept ability by 10 sec."
          ]
        },
        {
          "id": 12328,
          "name": "Death Wish",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_deathpact",
          "spellIds": [
            12328
          ],
          "descriptions": [
            "When activated, increases your Physical damage done by 20% and makes you immune to Fear effects, but increases all damage you take by 5%. Lasts 30 sec."
          ]
        },
        {
          "id": 12319,
          "name": "Flurry",
          "x": 1,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "ability_ghoulfrenzy",
          "requirements": {
            "talentName": "Death Wish",
            "talentRank": 1,
            "talentId": 12328
          },
          "spellIds": [
            12319
          ],
          "descriptions": [
            "Increases your melee attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
            "Increases your melee attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
            "Increases your melee attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
            "Increases your melee attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
            "Increases your melee attack speed by 25% for your next 3 swings after dealing a melee critical strike."
          ]
        },
        {
          "id": 23881,
          "name": "Bloodthirst",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_nature_bloodlust",
          "spellIds": [
            23881
          ],
          "descriptions": [
            "Instantly attack the target causing damage equal to 45% of your Attack Power plus 30 and increasing your movement speed by 10% for 10 sec."
          ]
        },
        {
          "id": 12317,
          "name": "Enrage",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_unholyfrenzy",
          "spellIds": [
            12317
          ],
          "descriptions": [
            "Gives you a 30% chance to deal 2% increased Physical damage for 12 sec after being the victim of any damaging attack.",
            "Gives you a 30% chance to deal 4% increased Physical damage for 12 sec after being the victim of any damaging attack.",
            "Gives you a 30% chance to deal 6% increased Physical damage for 12 sec after being the victim of any damaging attack.",
            "Gives you a 30% chance to deal 8% increased Physical damage for 12 sec after being the victim of any damaging attack.",
            "Gives you a 30% chance to deal 10% increased Physical damage for 12 sec after being the victim of any damaging attack."
          ]
        },
        {
          "id": 20502,
          "name": "Improved Execute",
          "x": 3,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "inv_sword_48",
          "spellIds": [
            20502
          ],
          "descriptions": [
            "Reduces the Rage cost of your Execute ability by 3.",
            "Reduces the Rage cost of your Execute ability by 5."
          ]
        },
        {
          "id": 23584,
          "name": "Dual Wield Specialization",
          "x": 0,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_dualwield",
          "spellIds": [
            23584
          ],
          "descriptions": [
            "Increases the damage done by your off-hand weapon by 5% and the Rage generated by your off-hand attacks by 10%.",
            "Increases the damage done by your off-hand weapon by 10% and the Rage generated by your off-hand attacks by 20%.",
            "Increases the damage done by your off-hand weapon by 15% and the Rage generated by your off-hand attacks by 30%.",
            "Increases the damage done by your off-hand weapon by 20% and the Rage generated by your off-hand attacks by 40%.",
            "Increases the damage done by your off-hand weapon by 25% and the Rage generated by your off-hand attacks by 50%."
          ]
        },
        {
          "id": 16487,
          "name": "Blood Craze",
          "x": 2,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_summonimp",
          "spellIds": [
            16487
          ],
          "descriptions": [
            "Regenerates 1% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack.",
            "Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack.",
            "Regenerates 3% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack."
          ]
        },
        {
          "id": 12323,
          "name": "Piercing Howl",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_deathscream",
          "spellIds": [
            12323
          ],
          "descriptions": [
            "Causes all enemies within 10 yds to be Dazed, reducing movement speed by 50% for 6 sec."
          ]
        },
        {
          "id": 12322,
          "name": "Unbridled Wrath",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_nature_stoneclawtotem",
          "spellIds": [
            12322
          ],
          "descriptions": [
            "Gives you a 12% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
            "Gives you a 24% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
            "Gives you a 36% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
            "Gives you a 48% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
            "Gives you a 60% chance to generate 1 additional Rage when you deal melee damage with a weapon."
          ]
        },
        {
          "id": 12321,
          "name": "Booming Voice",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_purge",
          "spellIds": [
            12321
          ],
          "descriptions": [
            "Increases the area of effect of your Shouts by 10% and reduces their Rage cost by 5%.",
            "Increases the area of effect of your Shouts by 20% and reduces their Rage cost by 10%.",
            "Increases the area of effect of your Shouts by 30% and reduces their Rage cost by 15%.",
            "Increases the area of effect of your Shouts by 40% and reduces their Rage cost by 20%.",
            "Increases the area of effect of your Shouts by 50% and reduces their Rage cost by 25%."
          ]
        },
        {
          "id": 12320,
          "name": "Cruelty",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_rogue_eviscerate",
          "spellIds": [
            12320
          ],
          "descriptions": [
            "Improves your chance to get a critical strike with melee attacks by 1%.",
            "Improves your chance to get a critical strike with melee attacks by 2%.",
            "Improves your chance to get a critical strike with melee attacks by 3%.",
            "Improves your chance to get a critical strike with melee attacks by 4%.",
            "Improves your chance to get a critical strike with melee attacks by 5%."
          ]
        },
        {
          "id": 1323963,
          "name": "Furious Precision",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_incite",
          "spellIds": [
            1323963
          ],
          "descriptions": [
            "Increases your chance to hit with off-hand attacks by 4%.",
            "Increases your chance to hit with off-hand attacks by 7%.",
            "Increases your chance to hit with off-hand attacks by 10%."
          ]
        },
        {
          "id": 1310315,
          "name": "Raging Blows",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_whirlwind",
          "spellIds": [
            1310315
          ],
          "descriptions": [
            "Reduces the Rage cost of your Cleave and Whirlwind abilities by 3."
          ]
        },
        {
          "id": 20500,
          "name": "Improved Berserker Rage",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_ancestralguardian",
          "spellIds": [
            20500
          ],
          "descriptions": [
            "Your Berserker Rage ability will instantly generate 5 Rage and has a 50% chance to remove all movement impairing effects when activated.",
            "Your Berserker Rage ability will instantly generate 10 Rage and has a 100% chance to remove all movement impairing effects when activated."
          ]
        },
        {
          "id": 1323964,
          "name": "Lingering Rage",
          "x": 1,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "ability_warrior_secondwind",
          "spellIds": [
            1323964
          ],
          "descriptions": [
            "Increases the time before your Rage begins to decay after leaving combat by 2 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 4 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 6 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 8 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 10 sec."
          ]
        },
        {
          "id": 1323967,
          "name": "Gore Drinker",
          "x": 2,
          "y": 5,
          "maxRank": 2,
          "minPointsRequired": 25,
          "iconName": "racial_troll_berserk",
          "requirements": {
            "talentName": "Enrage",
            "talentRank": 5,
            "talentId": 12317
          },
          "spellIds": [
            1323967
          ],
          "descriptions": [
            "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 0.5% of your maximum Health.",
            "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 1.0% of your maximum Health."
          ]
        }
      ]
    },
    {
      "name": "Protection",
      "talents": [
        {
          "id": 23922,
          "name": "Shield Slam",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "inv_shield_05",
          "requirements": {
            "talentName": "Concussion Blow",
            "talentRank": 1,
            "talentId": 12809
          },
          "spellIds": [
            23922
          ],
          "descriptions": [
            "Slam the target with your shield, causing 421 to 439 damage, increased by your Block Value, and has a 50% chance of dispelling 1 magic effect on the target. Causes a very high amount of threat."
          ]
        },
        {
          "id": 29787,
          "name": "Focused Rage",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "ability_warrior_focusedrage",
          "spellIds": [
            29787
          ],
          "descriptions": [
            "Reduces the Rage cost of your offensive abilities by 1.",
            "Reduces the Rage cost of your offensive abilities by 2.",
            "Reduces the Rage cost of your offensive abilities by 3."
          ]
        },
        {
          "id": 16538,
          "name": "Bastion",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "inv_shield_04",
          "spellIds": [
            16538
          ],
          "descriptions": [
            "Increases all damage you deal by 2% while a shield is equipped.",
            "Increases all damage you deal by 4% while a shield is equipped.",
            "Increases all damage you deal by 6% while a shield is equipped.",
            "Increases all damage you deal by 8% while a shield is equipped.",
            "Increases all damage you deal by 10% while a shield is equipped."
          ]
        },
        {
          "id": 12311,
          "name": "Improved Shield Bash",
          "x": 2,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_warrior_shieldbash",
          "spellIds": [
            12311
          ],
          "descriptions": [
            "Gives your Shield Bash ability a 50% chance to Silence the target for 3 sec.",
            "Gives your Shield Bash ability a 100% chance to Silence the target for 3 sec."
          ]
        },
        {
          "id": 12312,
          "name": "Improved Shield Wall",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_warrior_shieldwall",
          "spellIds": [
            12312
          ],
          "descriptions": [
            "Reduces the cooldown of your Shield Wall ability by 5.5 min.",
            "Reduces the cooldown of your Shield Wall ability by 11.0 min."
          ]
        },
        {
          "id": 12809,
          "name": "Concussion Blow",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_thunderbolt",
          "spellIds": [
            12809
          ],
          "descriptions": [
            "Stuns the target for 5 sec."
          ]
        },
        {
          "id": 1310317,
          "name": "Vanguard",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_warrior_shieldcharge",
          "spellIds": [
            1310317
          ],
          "descriptions": [
            "Your Charge ability is now usable while in Defensive Stance."
          ]
        },
        {
          "id": 12313,
          "name": "Improved Disarm",
          "x": 2,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_disarm",
          "spellIds": [
            12313
          ],
          "descriptions": [
            "Reduces the cooldown of your Disarm ability by 7 secs.",
            "Reduces the cooldown of your Disarm ability by 13 secs.",
            "Reduces the cooldown of your Disarm ability by 20 secs."
          ]
        },
        {
          "id": 12308,
          "name": "Improved Sunder Armor",
          "x": 0,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "ability_warrior_sunder",
          "spellIds": [
            12308
          ],
          "descriptions": [
            "Reduces the Rage cost of your Sunder Armor ability by 1.",
            "Reduces the Rage cost of your Sunder Armor ability by 2.",
            "Reduces the Rage cost of your Sunder Armor ability by 3."
          ]
        },
        {
          "id": 12797,
          "name": "Improved Revenge",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_warrior_revenge",
          "spellIds": [
            12797
          ],
          "descriptions": [
            "Increases damage dealt by your Revenge ability by 20%.",
            "Increases damage dealt by your Revenge ability by 40%.",
            "Increases damage dealt by your Revenge ability by 60%."
          ]
        },
        {
          "id": 12975,
          "name": "Last Stand",
          "x": 0,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_holy_ashestoashes",
          "spellIds": [
            12975
          ],
          "descriptions": [
            "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost."
          ]
        },
        {
          "id": 1310316,
          "name": "Master of Defense",
          "x": 1,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_shieldguard",
          "requirements": {
            "talentName": "Shield Specialization",
            "talentRank": 5,
            "talentId": 12298
          },
          "spellIds": [
            1310316
          ],
          "descriptions": [
            "Grants you a 50% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
            "Grants you a 100% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped."
          ]
        },
        {
          "id": 12287,
          "name": "Improved Thunder Clap",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_thunderclap",
          "spellIds": [
            12287
          ],
          "descriptions": [
            "Reduces the Rage cost of your Thunder Clap ability by 2.",
            "Reduces the Rage cost of your Thunder Clap ability by 4.",
            "Reduces the Rage cost of your Thunder Clap ability by 6."
          ]
        },
        {
          "id": 12301,
          "name": "Improved Bloodrage",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "ability_racial_bloodrage",
          "spellIds": [
            12301
          ],
          "descriptions": [
            "Increases all the Rage generated by your Bloodrage ability by 25%.",
            "Increases all the Rage generated by your Bloodrage ability by 50%."
          ]
        },
        {
          "id": 12297,
          "name": "Anticipation",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_nature_mirrorimage",
          "spellIds": [
            12297
          ],
          "descriptions": [
            "Increases your Defense Skill by 4.",
            "Increases your Defense Skill by 8.",
            "Increases your Defense Skill by 12.",
            "Increases your Defense Skill by 16.",
            "Increases your Defense Skill by 20."
          ]
        },
        {
          "id": 12298,
          "name": "Shield Specialization",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "inv_shield_06",
          "spellIds": [
            12298
          ],
          "descriptions": [
            "Increases your chance to Block attacks with your shield by 1% and grants you a 20% chance to generate 5 Rage when you Block.",
            "Increases your chance to Block attacks with your shield by 2% and grants you a 40% chance to generate 5 Rage when you Block.",
            "Increases your chance to Block attacks with your shield by 3% and grants you a 60% chance to generate 5 Rage when you Block.",
            "Increases your chance to Block attacks with your shield by 4% and grants you a 80% chance to generate 5 Rage when you Block.",
            "Increases your chance to Block attacks with your shield by 5% and grants you a 100% chance to generate 5 Rage when you Block."
          ]
        },
        {
          "id": 12792,
          "name": "Defiance",
          "x": 3,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_innerrage",
          "spellIds": [
            12792
          ],
          "descriptions": [
            "Increases all threat generated in Defensive stance by an additional 5% while a shield is equipped.",
            "Increases all threat generated in Defensive stance by an additional 10% while a shield is equipped.",
            "Increases all threat generated in Defensive stance by an additional 15% while a shield is equipped."
          ]
        },
        {
          "id": 12962,
          "name": "Iron Will",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_magic_magearmor",
          "spellIds": [
            12962
          ],
          "descriptions": [
            "Reduces the duration of Stun and Fear effects inflicted on you by 3%.",
            "Reduces the duration of Stun and Fear effects inflicted on you by 6%.",
            "Reduces the duration of Stun and Fear effects inflicted on you by 9%.",
            "Reduces the duration of Stun and Fear effects inflicted on you by 12%.",
            "Reduces the duration of Stun and Fear effects inflicted on you by 15%."
          ]
        }
      ]
    }
  ]
};
