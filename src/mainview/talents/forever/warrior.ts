import { ClassData } from "../../types";

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
          "spellIds": [
            12294
          ],
          "descriptions": [
            "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec."
          ],
          "requirements": {
            "talentId": 12292,
            "talentRank": 1
          },
          "talentLink": "Sweeping Strikes"
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
            "Gives your melee weapon attacks a benefit depending on the weapon.<br /><br />    <span style=\"color: #FFFFFF\">Axe/Polearm:</span> Increases your<br />    critical strike chance by 5%.<br /><br />    <span style=\"color: #FFFFFF\">Mace/Staff:</span> Your attacks ignore<br />    15% of your target's armor.<br /><br />    <span style=\"color: #FFFFFF\">Sword:</span> Your successful melee <br />    attacks have a 5% chance to <br />    trigger an extra attack on the <br />    target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.<br /><br />    <span style=\"color: #FFFFFF\">Axe/Polearm:</span> Increases your<br />    critical strike chance by 10%.<br /><br />    <span style=\"color: #FFFFFF\">Mace/Staff:</span> Your attacks ignore<br />    30% of your target's armor.<br /><br />    <span style=\"color: #FFFFFF\">Sword:</span> Your successful melee <br />    attacks have a 10% chance to <br />    trigger an extra attack on the <br />    target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.<br /><br />    <span style=\"color: #FFFFFF\">Axe/Polearm:</span> Increases your<br />    critical strike chance by 15%.<br /><br />    <span style=\"color: #FFFFFF\">Mace/Staff:</span> Your attacks ignore<br />    45% of your target's armor.<br /><br />    <span style=\"color: #FFFFFF\">Sword:</span> Your successful melee <br />    attacks have a 15% chance to <br />    trigger an extra attack on the <br />    target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.<br /><br />    <span style=\"color: #FFFFFF\">Axe/Polearm:</span> Increases your<br />    critical strike chance by 20%.<br /><br />    <span style=\"color: #FFFFFF\">Mace/Staff:</span> Your attacks ignore<br />    60% of your target's armor.<br /><br />    <span style=\"color: #FFFFFF\">Sword:</span> Your successful melee <br />    attacks have a 20% chance to <br />    trigger an extra attack on the <br />    target.",
            "Gives your melee weapon attacks a benefit depending on the weapon.<br /><br />    <span style=\"color: #FFFFFF\">Axe/Polearm:</span> Increases your<br />    critical strike chance by 25%.<br /><br />    <span style=\"color: #FFFFFF\">Mace/Staff:</span> Your attacks ignore<br />    75% of your target's armor.<br /><br />    <span style=\"color: #FFFFFF\">Sword:</span> Your successful melee <br />    attacks have a 25% chance to <br />    trigger an extra attack on the <br />    target."
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
          "spellIds": [
            16493
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 10%.",
            "Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 20%."
          ],
          "requirements": {
            "talentId": 12834,
            "talentRank": 3
          },
          "talentLink": "Deep Wounds"
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
            "Increases the damage you deal with two-handed melee weapons by 2%.",
            "Increases the damage you deal with two-handed melee weapons by 4%.",
            "Increases the damage you deal with two-handed melee weapons by 6%."
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
          "spellIds": [
            12834
          ],
          "descriptions": [
            "Your critical strikes cause the opponent to bleed, dealing 20% of your melee weapon's average damage over 12 sec.",
            "Your critical strikes cause the opponent to bleed, dealing 40% of your melee weapon's average damage over 12 sec.",
            "Your critical strikes cause the opponent to bleed, dealing 60% of your melee weapon's average damage over 12 sec."
          ],
          "requirements": {
            "talentId": 12286,
            "talentRank": 3
          },
          "talentLink": "Improved Rend"
        },
        {
          "id": 12296,
          "name": "Anger Management",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_holy_blessingofstamina",
          "spellIds": [
            12296
          ],
          "descriptions": [
            "Generates 1 Rage every 3 sec while in combat, and reduces Rage loss while out of combat by 30%."
          ],
          "requirements": {
            "talentId": 12295,
            "talentRank": 5
          },
          "talentLink": "Improved Tactical Mastery"
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
            "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances.",
            "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances.",
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
            "Increases the amount of rage generated by your Charge ability by 3.",
            "Increases the amount of rage generated by your Charge ability by 6."
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
            "Increases the bleed damage done by your Rend ability by 15%.",
            "Increases the bleed damage done by your Rend ability by 25%.",
            "Increases the bleed damage done by your Rend ability by 35%."
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
            "Reduces the cost of your Heroic Strike ability by 1 rage point.",
            "Reduces the cost of your Heroic Strike ability by 2 rage points.",
            "Reduces the cost of your Heroic Strike ability by 3 rage points."
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
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 3% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 6% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 9% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 12% chance to allow the use of your Overpower ability on the target. Lasts 6 sec.",
            "Your Main Hand melee attacks against enemies afflicted by your Rend have a 15% chance to allow the use of your Overpower ability on the target. Lasts 6 sec."
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
            "Decreases the casting time of your Slam ability by 0.5 sec.",
            "Decreases the casting time of your Slam ability by 1 sec."
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
          "spellIds": [
            12319
          ],
          "descriptions": [
            "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 30% for your next 3 swings after dealing a melee critical strike."
          ],
          "requirements": {
            "talentId": 12328,
            "talentRank": 1
          },
          "talentLink": "Death Wish"
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
            "Gives you a 5% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
            "Gives you a 10% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
            "Gives you a 15% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
            "Gives you a 20% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
            "Gives you a 25% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike."
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
            "Reduces the Rage cost of your Execute ability by 2.",
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
            "Increases the damage done by your offhand weapon by 5%.",
            "Increases the damage done by your offhand weapon by 10%.",
            "Increases the damage done by your offhand weapon by 15%.",
            "Increases the damage done by your offhand weapon by 20%.",
            "Increases the damage done by your offhand weapon by 25%."
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
            "Regenerates 0% of your total Health over 6 sec after being the victim of a critical strike.",
            "Regenerates 0% of your total Health over 6 sec after being the victim of a critical strike.",
            "Regenerates 0% of your total Health over 6 sec after being the victim of a critical strike."
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
            "Gives you a 8% chance to generate an additional Rage point when you deal melee damage with a weapon.",
            "Gives you a 16% chance to generate an additional Rage point when you deal melee damage with a weapon.",
            "Gives you a 24% chance to generate an additional Rage point when you deal melee damage with a weapon.",
            "Gives you a 32% chance to generate an additional Rage point when you deal melee damage with a weapon.",
            "Gives you a 40% chance to generate an additional Rage point when you deal melee damage with a weapon."
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
            "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 10%.",
            "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 20%.",
            "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 30%.",
            "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 40%.",
            "Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 50%."
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
            "Increases your chance to get a critical strike with melee weapons by 1%.",
            "Increases your chance to get a critical strike with melee weapons by 2%.",
            "Increases your chance to get a critical strike with melee weapons by 3%.",
            "Increases your chance to get a critical strike with melee weapons by 4%.",
            "Increases your chance to get a critical strike with melee weapons by 5%."
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
            "Increases your chance to hit with off-hand attacks by 10%.",
            "Increases your chance to hit with off-hand attacks by 20%.",
            "Increases your chance to hit with off-hand attacks by 30%."
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
            "The Berserker Rage ability will generate 5 rage when used.",
            "The Berserker Rage ability will generate 10 rage when used."
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
            "Increases the time before your Rage begins to decay after leaving combat by 0 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 0 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 0 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 0 sec.",
            "Increases the time before your Rage begins to decay after leaving combat by 0 sec."
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
          "spellIds": [
            1323967
          ],
          "descriptions": [
            "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 1% of your maximum Health.",
            "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 2% of your maximum Health."
          ],
          "requirements": {
            "talentId": 12317,
            "talentRank": 5
          },
          "talentLink": "Enrage"
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
          "spellIds": [
            23922
          ],
          "descriptions": [
            "Slam the target with your shield, causing 421 to 439 damage, increased by your Block Value, and has a 50% chance of dispelling 1 magic effect on the target. Causes a very high amount of threat."
          ],
          "requirements": {
            "talentId": 12809,
            "talentRank": 1
          },
          "talentLink": "Concussion Blow"
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
            "Reduces the rage cost of all your offensive abilities by 1.",
            "Reduces the rage cost of all your offensive abilities by 2.",
            "Reduces the rage cost of all your offensive abilities by 3."
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
            "Gives your Shield Bash ability a 50% chance to silence the target for 3 sec.",
            "Gives your Shield Bash ability a 100% chance to silence the target for 3 sec."
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
            "Increases the effect duration of your Shield Wall ability by 3 secs.",
            "Increases the effect duration of your Shield Wall ability by 5 secs."
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
            "Increases the duration of your Disarm ability by 1 secs.",
            "Increases the duration of your Disarm ability by 2 secs.",
            "Increases the duration of your Disarm ability by 3 secs."
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
            "Reduces the cost of your Sunder Armor ability by 1 rage point.",
            "Reduces the cost of your Sunder Armor ability by 2 rage points.",
            "Reduces the cost of your Sunder Armor ability by 3 rage points."
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
            "Gives your Revenge ability a 15% chance to stun the target for 3 sec.",
            "Gives your Revenge ability a 30% chance to stun the target for 3 sec.",
            "Gives your Revenge ability a 45% chance to stun the target for 3 sec."
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
          "spellIds": [
            1310316
          ],
          "descriptions": [
            "Grants you a 0% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
            "Grants you a 0% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped."
          ],
          "requirements": {
            "talentId": 12298,
            "talentRank": 5
          },
          "talentLink": "Shield Specialization"
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
            "Reduces the cost of your Thunder Clap ability by 1 rage point.",
            "Reduces the cost of your Thunder Clap ability by 2 rage points.",
            "Reduces the cost of your Thunder Clap ability by 4 rage points."
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
            "Increases the instant Rage generated by your Bloodrage ability by 2.",
            "Increases the instant Rage generated by your Bloodrage ability by 5."
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
            "Increases your Defense skill by 2.",
            "Increases your Defense skill by 4.",
            "Increases your Defense skill by 6.",
            "Increases your Defense skill by 8.",
            "Increases your Defense skill by 10."
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
            "Increases your chance to block attacks with a shield by 1% and has a 20% chance to generate 1 rage when a block occurs.",
            "Increases your chance to block attacks with a shield by 2% and has a 40% chance to generate 1 rage when a block occurs.",
            "Increases your chance to block attacks with a shield by 3% and has a 60% chance to generate 1 rage when a block occurs.",
            "Increases your chance to block attacks with a shield by 4% and has a 80% chance to generate 1 rage when a block occurs.",
            "Increases your chance to block attacks with a shield by 5% and has a 100% chance to generate 1 rage when a block occurs."
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
            "Increases the threat generated by your attacks by 5% while in Defensive Stance and increases your expertise by 2.",
            "Increases the threat generated by your attacks by 10% while in Defensive Stance and increases your expertise by 4.",
            "Increases the threat generated by your attacks by 15% while in Defensive Stance and increases your expertise by 6."
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
            "Increases your chance to resist Stun and Charm effects by an additional 3%.",
            "Increases your chance to resist Stun and Charm effects by an additional 6%.",
            "Increases your chance to resist Stun and Charm effects by an additional 9%.",
            "Increases your chance to resist Stun and Charm effects by an additional 12%.",
            "Increases your chance to resist Stun and Charm effects by an additional 15%."
          ]
        }
      ]
    }
  ]
};
