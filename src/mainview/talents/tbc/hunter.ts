import { ClassData } from "../../../types";

export const hunterData: ClassData = {
  name: "Hunter",
  talentTrees: [
    {
      "name": "Beast Mastery",
      "talents": [
        {
          "id": 1382,
          "name": "Improved Aspect of the Hawk",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            19552,
            19553,
            19554,
            19555,
            19556
          ],
          "descriptions": [
            "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 3% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 6% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 9% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 12% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 15% for 12 sec."
          ],
          "iconName": "spell_nature_ravenform",
          "y": 0,
          "x": 1
        },
        {
          "id": 1389,
          "name": "Endurance Training",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            19583,
            19584,
            19585,
            19586,
            19587
          ],
          "descriptions": [
            "Increases the Health of your pets by 2% and your total health by 1%.",
            "Increases the Health of your pets by 4% and your total health by 2%.",
            "Increases the Health of your pets by 6% and your total health by 3%.",
            "Increases the Health of your pets by 8% and your total health by 4%.",
            "Increases the Health of your pets by 10% and your total health by 5%."
          ],
          "iconName": "spell_nature_reincarnation",
          "y": 0,
          "x": 2
        },
        {
          "id": 1624,
          "name": "Focused Fire",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            35029,
            35030
          ],
          "descriptions": [
            "All damage caused by you is increased by 1% while your pet is active and the critical strike chance of your Kill Command Ability is increased by 10%.",
            "All damage caused by you is increased by 2% while your pet is active and the critical strike chance of your Kill Command Ability is increased by 20%."
          ],
          "iconName": "ability_hunter_silenthunter",
          "y": 1,
          "x": 0
        },
        {
          "id": 1381,
          "name": "Improved Aspect of the Monkey",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            19549,
            19550,
            19551
          ],
          "descriptions": [
            "Increases the Dodge bonus of your Aspect of the Monkey by 2%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 4%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 6%."
          ],
          "iconName": "ability_hunter_aspectofthemonkey",
          "y": 1,
          "x": 1
        },
        {
          "id": 1395,
          "name": "Thick Hide",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            19609,
            19610,
            19612
          ],
          "descriptions": [
            "Increases the armor rating of your pets by 7% and your armor contributions from items by 4%.",
            "Increases the armor rating of your pets by 14% and your armor contributions from items by 7%.",
            "Increases the armor rating of your pets by 20% and your armor contributions from items by 10%."
          ],
          "iconName": "inv_misc_pelt_bear_03",
          "y": 1,
          "x": 2
        },
        {
          "id": 1625,
          "name": "Improved Revive Pet",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            24443,
            19575
          ],
          "descriptions": [
            "Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
            "Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
          ],
          "iconName": "ability_hunter_beastsoothe",
          "y": 1,
          "x": 3
        },
        {
          "id": 1384,
          "name": "Pathfinding",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            19559,
            19560
          ],
          "descriptions": [
            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 4%.",
            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 8%."
          ],
          "iconName": "ability_mount_jungletiger",
          "y": 2,
          "x": 0
        },
        {
          "id": 1391,
          "name": "Bestial Swiftness",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            19596
          ],
          "descriptions": [
            "Increases the outdoor movement speed of your pets by 30%."
          ],
          "iconName": "ability_druid_dash",
          "y": 2,
          "x": 1
        },
        {
          "id": 1396,
          "name": "Unleashed Fury",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            19616,
            19617,
            19618,
            19619,
            19620
          ],
          "descriptions": [
            "Increases the damage done by your pets by 4%.",
            "Increases the damage done by your pets by 8%.",
            "Increases the damage done by your pets by 12%.",
            "Increases the damage done by your pets by 16%.",
            "Increases the damage done by your pets by 20%."
          ],
          "iconName": "ability_bullrush",
          "y": 2,
          "x": 2
        },
        {
          "id": 1385,
          "name": "Improved Mend Pet",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            19572,
            19573
          ],
          "descriptions": [
            "Reduces the mana cost of your Mend Pet spell by 10% and gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
            "Reduces the mana cost of your Mend Pet spell by 20% and gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
          ],
          "iconName": "ability_hunter_mendpet",
          "y": 3,
          "x": 1
        },
        {
          "id": 1393,
          "name": "Ferocity",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            19598,
            19599,
            19600,
            19601,
            19602
          ],
          "descriptions": [
            "Increases the critical strike chance of your pets by 2%.",
            "Increases the critical strike chance of your pets by 4%.",
            "Increases the critical strike chance of your pets by 6%.",
            "Increases the critical strike chance of your pets by 8%.",
            "Increases the critical strike chance of your pets by 10%."
          ],
          "iconName": "inv_misc_monsterclaw_04",
          "y": 3,
          "x": 2
        },
        {
          "id": 1388,
          "name": "Spirit Bond",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            19578,
            20895
          ],
          "descriptions": [
            "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
            "While your pet is active, you and your pet will regenerate 2% of total health every 10 sec."
          ],
          "iconName": "classic_ability_druid_demoralizingroar",
          "y": 4,
          "x": 0
        },
        {
          "id": 1387,
          "name": "Intimidation",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            19577
          ],
          "descriptions": [
            "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec."
          ],
          "iconName": "ability_devour",
          "y": 4,
          "x": 1
        },
        {
          "id": 1390,
          "name": "Bestial Discipline",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            19590,
            19592
          ],
          "descriptions": [
            "Increases the Focus regeneration of your pets by 50%.",
            "Increases the Focus regeneration of your pets by 100%."
          ],
          "iconName": "spell_nature_abolishmagic",
          "y": 4,
          "x": 3
        },
        {
          "id": 1799,
          "name": "Animal Handler",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            34453,
            34454
          ],
          "descriptions": [
            "Increases your speed while mounted by 4% and your pet's chance to hit by 2%. The mounted movement speed increase does not stack with other effects.",
            "Increases your speed while mounted by 8% and your pet's chance to hit by 4%. The mounted movement speed increase does not stack with other effects."
          ],
          "iconName": "ability_hunter_animalhandler",
          "y": 5,
          "x": 0
        },
        {
          "id": 1397,
          "name": "Frenzy",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            19621,
            19622,
            19623,
            19624,
            19625
          ],
          "descriptions": [
            "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
          ],
          "iconName": "inv_misc_monsterclaw_03",
          "y": 5,
          "x": 2,
          "requirements": {
            "talentId": 1393,
            "talentRank": 5
          },
          "talentLink": "Ferocity"
        },
        {
          "id": 1800,
          "name": "Ferocious Inspiration",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34455,
            34459,
            34460
          ],
          "descriptions": [
            "When your pet scores a critical hit, all party members have all damage increased by 1% for 10 sec.",
            "When your pet scores a critical hit, all party members have all damage increased by 2% for 10 sec.",
            "When your pet scores a critical hit, all party members have all damage increased by 3% for 10 sec."
          ],
          "iconName": "ability_hunter_ferociousinspiration",
          "y": 6,
          "x": 0
        },
        {
          "id": 1386,
          "name": "Bestial Wrath",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            19574
          ],
          "descriptions": [
            "Send your pet into a rage causing 50% additional damage for 18 sec. While enraged, the beast cannot be stopped unless killed."
          ],
          "iconName": "ability_druid_ferociousbite",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 1387,
            "talentRank": 1
          },
          "talentLink": "Intimidation"
        },
        {
          "id": 1801,
          "name": "Catlike Reflexes",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34462,
            34464,
            34465
          ],
          "descriptions": [
            "Increases your pet's chance to dodge by 3% and your chance to dodge by 1%.",
            "Increases your pet's chance to dodge by 6% and your chance to dodge by 2%.",
            "Increases your pet's chance to dodge by 9% and your chance to dodge by 3%."
          ],
          "iconName": "ability_hunter_catlikereflexes",
          "y": 6,
          "x": 2
        },
        {
          "id": 1802,
          "name": "Serpent's Swiftness",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            34466,
            34467,
            34468,
            34469,
            34470
          ],
          "descriptions": [
            "Increases ranged combat attack speed by 4% and your pet's melee attack speed by 4%.",
            "Increases ranged combat attack speed by 8% and your pet's melee attack speed by 8%.",
            "Increases ranged combat attack speed by 12% and your pet's melee attack speed by 12%.",
            "Increases ranged combat attack speed by 16% and your pet's melee attack speed by 16%.",
            "Increases ranged combat attack speed by 20% and your pet's melee attack speed by 20%."
          ],
          "iconName": "ability_hunter_serpentswiftness",
          "y": 7,
          "x": 2
        },
        {
          "id": 2116,
          "name": "The Beast Within",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            34471
          ],
          "descriptions": [
            "When your pet is under the effects of Bestial Wrath, you also go into a rage causing 10% additional damage and reducing mana costs of all spells by 20% for 18 sec. While enraged, you do not feel pity or remorse or fear and you cannot be stopped unless killed."
          ],
          "iconName": "ability_hunter_beastwithin",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 1386,
            "talentRank": 1
          },
          "talentLink": "Bestial Wrath"
        }
      ]
    },
    {
      "name": "Marksmanship",
      "talents": [
        {
          "id": 1341,
          "name": "Improved Concussive Shot",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            19407,
            19412,
            19413,
            19414,
            19415
          ],
          "descriptions": [
            "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 8% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 12% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 16% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 20% chance to stun the target for 3 sec."
          ],
          "iconName": "spell_frost_stun",
          "y": 0,
          "x": 1
        },
        {
          "id": 1344,
          "name": "Lethal Shots",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            19426,
            19427,
            19429,
            19430,
            19431
          ],
          "descriptions": [
            "Increases your critical strike chance with ranged weapons by 1%.",
            "Increases your critical strike chance with ranged weapons by 2%.",
            "Increases your critical strike chance with ranged weapons by 3%.",
            "Increases your critical strike chance with ranged weapons by 4%.",
            "Increases your critical strike chance with ranged weapons by 5%."
          ],
          "iconName": "ability_searingarrow",
          "y": 0,
          "x": 2
        },
        {
          "id": 1343,
          "name": "Improved Hunter's Mark",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            19421,
            19422,
            19423,
            19424,
            19425
          ],
          "descriptions": [
            "Causes 20% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
            "Causes 40% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
            "Causes 60% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
            "Causes 80% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
            "Causes 100% of your Hunter's Mark ability's base attack power to apply to melee attack power as well."
          ],
          "iconName": "ability_hunter_snipershot",
          "y": 1,
          "x": 1
        },
        {
          "id": 1342,
          "name": "Efficiency",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            19416,
            19417,
            19418,
            19419,
            19420
          ],
          "descriptions": [
            "Reduces the Mana cost of your Shots and Stings by 2%.",
            "Reduces the Mana cost of your Shots and Stings by 4%.",
            "Reduces the Mana cost of your Shots and Stings by 6%.",
            "Reduces the Mana cost of your Shots and Stings by 8%.",
            "Reduces the Mana cost of your Shots and Stings by 10%."
          ],
          "iconName": "spell_frost_wizardmark",
          "y": 1,
          "x": 2
        },
        {
          "id": 1818,
          "name": "Go for the Throat",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            34950,
            34954
          ],
          "descriptions": [
            "Your ranged critical hits cause your pet to generate 25 Focus.",
            "Your ranged critical hits cause your pet to generate 50 Focus."
          ],
          "iconName": "ability_hunter_goforthethroat",
          "y": 2,
          "x": 0
        },
        {
          "id": 1346,
          "name": "Improved Arcane Shot",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            19454,
            19455,
            19456,
            19457,
            19458
          ],
          "descriptions": [
            "Reduces the cooldown of your Arcane Shot by 0.2 sec.",
            "Reduces the cooldown of your Arcane Shot by 0.4 sec.",
            "Reduces the cooldown of your Arcane Shot by 0.6 sec.",
            "Reduces the cooldown of your Arcane Shot by 0.8 sec.",
            "Reduces the cooldown of your Arcane Shot by 1 sec."
          ],
          "iconName": "ability_impalingbolt",
          "y": 2,
          "x": 1
        },
        {
          "id": 1345,
          "name": "Aimed Shot",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            19434
          ],
          "descriptions": [
            "An aimed shot that increases ranged damage by 870 and reduces healing done to that target by 50%. Lasts 10 sec."
          ],
          "iconName": "inv_spear_07",
          "y": 2,
          "x": 2
        },
        {
          "id": 1819,
          "name": "Rapid Killing",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            34948,
            34949
          ],
          "descriptions": [
            "Reduces the cooldown of your Rapid Fire ability by 1 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes 10% additional damage.  Lasts 20 sec.",
            "Reduces the cooldown of your Rapid Fire ability by 2 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes 20% additional damage.  Lasts 20 sec."
          ],
          "iconName": "ability_hunter_rapidkilling",
          "y": 2,
          "x": 3
        },
        {
          "id": 1348,
          "name": "Improved Stings",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            19464,
            19465,
            19466,
            19467,
            19468
          ],
          "descriptions": [
            "Increases the damage done by your Serpent Sting and Wyvern Sting by 6%, increases the mana drained by your Viper Sting by 6%, and reduces the chance Stings will be dispelled by 6%.",
            "Increases the damage done by your Serpent Sting and Wyvern Sting by 12%, increases the mana drained by your Viper Sting by 12%, and reduces the chance Stings will be dispelled by 12%.",
            "Increases the damage done by your Serpent Sting and Wyvern Sting by 18%, increases the mana drained by your Viper Sting by 18%, and reduces the chance Stings will be dispelled by 18%.",
            "Increases the damage done by your Serpent Sting and Wyvern Sting by 24%, increases the mana drained by your Viper Sting by 24%, and reduces the chance Stings will be dispelled by 24%.",
            "Increases the damage done by your Serpent Sting and Wyvern Sting by 30%, increases the mana drained by your Viper Sting by 30%, and reduces the chance Stings will be dispelled by 30%."
          ],
          "iconName": "ability_hunter_quickshot",
          "y": 3,
          "x": 1
        },
        {
          "id": 1349,
          "name": "Mortal Shots",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            19485,
            19487,
            19488,
            19489,
            19490
          ],
          "descriptions": [
            "Increases your ranged weapon critical strike damage bonus by 6%.",
            "Increases your ranged weapon critical strike damage bonus by 12%.",
            "Increases your ranged weapon critical strike damage bonus by 18%.",
            "Increases your ranged weapon critical strike damage bonus by 24%.",
            "Increases your ranged weapon critical strike damage bonus by 30%."
          ],
          "iconName": "ability_piercedamage",
          "y": 3,
          "x": 2,
          "requirements": {
            "talentId": 1345,
            "talentRank": 1
          }
        },
        {
          "id": 1351,
          "name": "Concussive Barrage",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            35100,
            35102,
            35103
          ],
          "descriptions": [
            "Your successful Auto Shot attacks have a 2% chance to Daze the target for 4 sec.",
            "Your successful Auto Shot attacks have a 4% chance to Daze the target for 4 sec.",
            "Your successful Auto Shot attacks have a 6% chance to Daze the target for 4 sec."
          ],
          "iconName": "spell_arcane_starfire",
          "y": 4,
          "x": 0
        },
        {
          "id": 1353,
          "name": "Scatter Shot",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            19503
          ],
          "descriptions": [
            "Requires Ranged Weapon<br>A short-range shot that deals 50% weapon damage and confuses the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used."
          ],
          "iconName": "ability_golemstormbolt",
          "y": 4,
          "x": 1
        },
        {
          "id": 1347,
          "name": "Barrage",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            19461,
            19462,
            24691
          ],
          "descriptions": [
            "Increases the damage done by your Multi-Shot and Volley spells by 4%.",
            "Increases the damage done by your Multi-Shot and Volley spells by 8%.",
            "Increases the damage done by your Multi-Shot and Volley spells by 12%."
          ],
          "iconName": "ability_upgrademoonglaive",
          "y": 4,
          "x": 2
        },
        {
          "id": 1804,
          "name": "Combat Experience",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            34475,
            34476
          ],
          "descriptions": [
            "Increases your total Agility by 1% and your total Intellect by 3%.",
            "Increases your total Agility by 2% and your total Intellect by 6%."
          ],
          "iconName": "ability_hunter_combatexperience",
          "y": 5,
          "x": 0
        },
        {
          "id": 1362,
          "name": "Ranged Weapon Specialization",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            19507,
            19508,
            19509,
            19510,
            19511
          ],
          "descriptions": [
            "Increases the damage you deal with ranged weapons by 1%.",
            "Increases the damage you deal with ranged weapons by 2%.",
            "Increases the damage you deal with ranged weapons by 3%.",
            "Increases the damage you deal with ranged weapons by 4%.",
            "Increases the damage you deal with ranged weapons by 5%."
          ],
          "iconName": "inv_weapon_rifle_06",
          "y": 5,
          "x": 3
        },
        {
          "id": 1806,
          "name": "Careful Aim",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34482,
            34483,
            34484
          ],
          "descriptions": [
            "Increases your ranged attack power by an amount equal to 15% of your total Intellect.",
            "Increases your ranged attack power by an amount equal to 30% of your total Intellect.",
            "Increases your ranged attack power by an amount equal to 45% of your total Intellect."
          ],
          "iconName": "ability_hunter_zenarchery",
          "y": 6,
          "x": 0
        },
        {
          "id": 1361,
          "name": "Trueshot Aura",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            19506
          ],
          "descriptions": [
            "Increases the attack power of party members within 45 yards by 50. Lasts until cancelled."
          ],
          "iconName": "ability_trueshot",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 1353,
            "talentRank": 1
          },
          "talentLink": "Scatter Shot"
        },
        {
          "id": 1821,
          "name": "Improved Barrage",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            35104,
            35110,
            35111
          ],
          "descriptions": [
            "Increases the critical strike chance of your Multi-Shot ability by 4% and gives you a 33% chance to avoid interruption caused by damage while channeling Volley.",
            "Increases the critical strike chance of your Multi-Shot ability by 8% and gives you a 66% chance to avoid interruption caused by damage while channeling Volley.",
            "Increases the critical strike chance of your Multi-Shot ability by 12% and gives you a 100% chance to avoid interruption caused by damage while channeling Volley."
          ],
          "iconName": "ability_upgrademoonglaive",
          "y": 6,
          "x": 2,
          "requirements": {
            "talentId": 1347,
            "talentRank": 3
          },
          "talentLink": "Barrage"
        },
        {
          "id": 1807,
          "name": "Master Marksman",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            34485,
            34486,
            34487,
            34488,
            34489
          ],
          "descriptions": [
            "Increases your ranged attack power by 2%.",
            "Increases your ranged attack power by 4%.",
            "Increases your ranged attack power by 6%.",
            "Increases your ranged attack power by 8%.",
            "Increases your ranged attack power by 10%."
          ],
          "iconName": "ability_hunter_mastermarksman",
          "y": 7,
          "x": 1
        },
        {
          "id": 1808,
          "name": "Silencing Shot",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            34490
          ],
          "descriptions": [
            "A shot that deals 50% weapon damage and Silences the target for 3 sec."
          ],
          "iconName": "ability_theblackarrow",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 2128,
            "talentRank": 1
          }
        }
      ]
    },
    {
      "name": "Survival",
      "talents": [
        {
          "id": 1623,
          "name": "Monster Slaying",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            24293,
            24294,
            24295
          ],
          "descriptions": [
            "Increases all damage caused against Beast, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 1%.",
            "Increases all damage caused against Beast, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 2%.",
            "Increases all damage caused against Beast, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants, and Dragonkin targets by an additional 3%."
          ],
          "iconName": "inv_misc_head_dragon_black",
          "y": 0,
          "x": 0
        },
        {
          "id": 1301,
          "name": "Humanoid Slaying",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            19151,
            19152,
            19153
          ],
          "descriptions": [
            "Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%.",
            "Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%.",
            "Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%."
          ],
          "iconName": "spell_holy_prayerofhealing",
          "y": 0,
          "x": 1
        },
        {
          "id": 1820,
          "name": "Hawk Eye",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            19498,
            19499,
            19500
          ],
          "descriptions": [
            "Increases the range of your ranged weapons by 2 yards.",
            "Increases the range of your ranged weapons by 4 yards.",
            "Increases the range of your ranged weapons by 6 yards."
          ],
          "iconName": "ability_townwatch",
          "y": 0,
          "x": 2
        },
        {
          "id": 1621,
          "name": "Savage Strikes",
          "maxRank": 2,
          "minPointsRequired": 0,
          "spellIds": [
            19159,
            19160
          ],
          "descriptions": [
            "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.",
            "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%."
          ],
          "iconName": "ability_racial_bloodrage",
          "y": 0,
          "x": 3
        },
        {
          "id": 1304,
          "name": "Entrapment",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            19184,
            19387,
            19388
          ],
          "descriptions": [
            "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 8% chance to entrap the target, preventing them from moving for 4 sec.",
            "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 16% chance to entrap the target, preventing them from moving for 4 sec.",
            "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a 25% chance to entrap the target, preventing them from moving for 4 sec."
          ],
          "iconName": "spell_nature_stranglevines",
          "y": 1,
          "x": 0
        },
        {
          "id": 1311,
          "name": "Deflection",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            19295,
            19297,
            19298,
            19301,
            19300
          ],
          "descriptions": [
            "Increases your Parry chance by 1%.",
            "Increases your Parry chance by 2%.",
            "Increases your Parry chance by 3%.",
            "Increases your Parry chance by 4%.",
            "Increases your Parry chance by 5%."
          ],
          "iconName": "ability_parry",
          "y": 1,
          "x": 1
        },
        {
          "id": 1305,
          "name": "Improved Wing Clip",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            19228,
            19232,
            19233
          ],
          "descriptions": [
            "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 14% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
          ],
          "iconName": "ability_rogue_trip",
          "y": 1,
          "x": 2
        },
        {
          "id": 1306,
          "name": "Clever Traps",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            19239,
            19245
          ],
          "descriptions": [
            "Increases the duration of Freezing and Frost trap effects by 15%, the damage of Immolation and Explosive trap effects by 15%, and the number of snakes summoned from Snake Traps by 15%.",
            "Increases the duration of Freezing and Frost trap effects by 30%, the damage of Immolation and Explosive trap effects by 30%, and the number of snakes summoned from Snake Traps by 30%."
          ],
          "iconName": "spell_nature_timestop",
          "y": 2,
          "x": 0
        },
        {
          "id": 1622,
          "name": "Survivalist",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            19255,
            19256,
            19257,
            19258,
            19259
          ],
          "descriptions": [
            "Increases total health by 2%.",
            "Increases total health by 4%.",
            "Increases total health by 6%.",
            "Increases total health by 8%.",
            "Increases total health by 10%."
          ],
          "iconName": "spell_shadow_twilight",
          "y": 2,
          "x": 1
        },
        {
          "id": 1308,
          "name": "Deterrence",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            19263
          ],
          "descriptions": [
            "When activated, increases your Dodge and Parry chance by 25% for 10 sec."
          ],
          "iconName": "ability_whirlwind",
          "y": 2,
          "x": 2
        },
        {
          "id": 1322,
          "name": "Trap Mastery",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            19376,
            19377
          ],
          "descriptions": [
            "Decreases the chance enemies will resist trap effects by 5%.",
            "Decreases the chance enemies will resist trap effects by 10%."
          ],
          "iconName": "ability_ensnare",
          "y": 3,
          "x": 0
        },
        {
          "id": 1310,
          "name": "Surefooted",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            19290,
            19294,
            24283
          ],
          "descriptions": [
            "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by 5%.",
            "Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by 10%.",
            "Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by 15%."
          ],
          "iconName": "ability_kick",
          "y": 3,
          "x": 1
        },
        {
          "id": 1309,
          "name": "Improved Feign Death",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            19286,
            19287
          ],
          "descriptions": [
            "Reduces the chance your Feign Death ability will be resisted by 2%.",
            "Reduces the chance your Feign Death ability will be resisted by 4%."
          ],
          "iconName": "ability_rogue_feigndeath",
          "y": 3,
          "x": 3
        },
        {
          "id": 1810,
          "name": "Survival Instincts",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            34494,
            34496
          ],
          "descriptions": [
            "Reduces all damage taken by 2% and increases attack power by 2%.",
            "Reduces all damage taken by 4% and increases attack power by 4%."
          ],
          "iconName": "ability_hunter_survivalinstincts",
          "y": 4,
          "x": 0
        },
        {
          "id": 1321,
          "name": "Killer Instinct",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            19370,
            19371,
            19373
          ],
          "descriptions": [
            "Increases your critical strike chance with all attacks by 1%.",
            "Increases your critical strike chance with all attacks by 2%.",
            "Increases your critical strike chance with all attacks by 3%."
          ],
          "iconName": "spell_holy_blessingofstamina",
          "y": 4,
          "x": 1
        },
        {
          "id": 1312,
          "name": "Counterattack",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            19306
          ],
          "descriptions": [
            "A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."
          ],
          "iconName": "ability_warrior_challange",
          "y": 4,
          "x": 2,
          "requirements": {
            "talentId": 1308,
            "talentRank": 1
          },
          "talentLink": "Deterrence"
        },
        {
          "id": 1809,
          "name": "Resourcefulness",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            34491,
            34492,
            34493
          ],
          "descriptions": [
            "Reduces the mana cost of all traps and melee abilities by 20% and reduces the cooldown of all traps by 2 sec.",
            "Reduces the mana cost of all traps and melee abilities by 40% and reduces the cooldown of all traps by 4 sec.",
            "Reduces the mana cost of all traps and melee abilities by 60% and reduces the cooldown of all traps by 6 sec."
          ],
          "iconName": "ability_hunter_resourcefulness",
          "y": 5,
          "x": 0
        },
        {
          "id": 1303,
          "name": "Lightning Reflexes",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            19168,
            19180,
            19181,
            24296,
            24297
          ],
          "descriptions": [
            "Increases your Agility by 3%.",
            "Increases your Agility by 6%.",
            "Increases your Agility by 9%.",
            "Increases your Agility by 12%.",
            "Increases your Agility by 15%."
          ],
          "iconName": "spell_nature_invisibilty",
          "y": 5,
          "x": 2
        },
        {
          "id": 1811,
          "name": "Thrill of the Hunt",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34497,
            34498,
            34499
          ],
          "descriptions": [
            "Gives you a 33% chance to regain 40% of the mana cost of any shot when it critically hits.",
            "Gives you a 66% chance to regain 40% of the mana cost of any shot when it critically hits.",
            "Gives you a 100% chance to regain 40% of the mana cost of any shot when it critically hits."
          ],
          "iconName": "ability_hunter_thrillofthehunt",
          "y": 6,
          "x": 0
        },
        {
          "id": 1325,
          "name": "Wyvern Sting",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            19386
          ],
          "descriptions": [
            "A stinging shot that puts the target to sleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 Nature damage over 12 sec. Only one Sting per Hunter can be active on the target at a time."
          ],
          "iconName": "inv_spear_02",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 1321,
            "talentRank": 3
          },
          "talentLink": "Killer Instinct"
        },
        {
          "id": 1812,
          "name": "Expose Weakness",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34500,
            34502,
            34503
          ],
          "descriptions": [
            "Your ranged criticals have a 33% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your Agility for 7 sec.",
            "Your ranged criticals have a 66% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your Agility for 7 sec.",
            "Your ranged criticals have a 100% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the Attack Power of all attackers against that target by 25% of your Agility for 7 sec."
          ],
          "iconName": "ability_rogue_findweakness",
          "y": 6,
          "x": 2,
          "requirements": {
            "talentId": 1303,
            "talentRank": 5
          }
        },
        {
          "id": 1813,
          "name": "Master Tactician",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            34506,
            34507,
            34508,
            34838,
            34839
          ],
          "descriptions": [
            "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 2% for 8 sec.",
            "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 4% for 8 sec.",
            "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 6% for 8 sec.",
            "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 8% for 8 sec.",
            "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 10% for 8 sec."
          ],
          "iconName": "ability_hunter_mastertactitian",
          "y": 7,
          "x": 1
        },
        {
          "id": 1814,
          "name": "Readiness",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            23989
          ],
          "descriptions": [
            "When activated, this ability immediately finishes the cooldown on your other Hunter abilities."
          ],
          "iconName": "ability_hunter_readiness",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 2122,
            "talentRank": 1
          }
        }
      ]
    }
  ]
};
