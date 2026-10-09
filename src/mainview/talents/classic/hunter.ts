import { ClassData } from "../../../types"

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
            "While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 3% chance of increasing ranged attack speed by 30% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 4% chance of increasing ranged attack speed by 30% for 12 sec.",
            "While Aspect of the Hawk is active, all normal ranged attacks have a 5% chance of increasing ranged attack speed by 30% for 12 sec."
          ],
          "x": 1,
          "y": 0,
          "iconName": "spell_nature_ravenform"
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
            "Increases the Health of your pets by 3%.",
            "Increases the Health of your pets by 6%.",
            "Increases the Health of your pets by 9%.",
            "Increases the Health of your pets by 12%.",
            "Increases the Health of your pets by 15%."
          ],
          "x": 2,
          "y": 0,
          "iconName": "spell_nature_reincarnation"
        },
        {
          "id": 1624,
          "name": "Improved Eyes of the Beast",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            19557,
            19558
          ],
          "descriptions": [
            "Increases the duration of your Eyes of the Beast by 30 sec.",
            "Increases the duration of your Eyes of the Beast by 60 sec."
          ],
          "x": 0,
          "y": 1,
          "iconName": "ability_eyeoftheowl"
        },
        {
          "id": 1381,
          "name": "Improved Aspect of the Monkey",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            19549,
            19550,
            19551,
            24386,
            24387
          ],
          "descriptions": [
            "Increases the Dodge bonus of your Aspect of the Monkey by 1%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 2%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 3%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 4%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 5%."
          ],
          "x": 1,
          "y": 1,
          "iconName": "ability_hunter_aspectofthemonkey"
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
            "Increases the Armor rating of your pets by 10%.",
            "Increases the Armor rating of your pets by 20%.",
            "Increases the Armor rating of your pets by 30%."
          ],
          "x": 2,
          "y": 1,
          "iconName": "inv_misc_pelt_bear_03"
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
          "x": 3,
          "y": 1,
          "iconName": "ability_hunter_beastsoothe"
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
            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%."
          ],
          "x": 0,
          "y": 2,
          "iconName": "ability_mount_jungletiger"
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
          "x": 1,
          "y": 2,
          "iconName": "ability_druid_dash"
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
          "x": 2,
          "y": 2,
          "iconName": "ability_bullrush"
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
            "Gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
            "Gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
          ],
          "x": 1,
          "y": 3,
          "iconName": "ability_hunter_mendpet"
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
            "Increases the critical strike chance of your pets by 3%.",
            "Increases the critical strike chance of your pets by 6%.",
            "Increases the critical strike chance of your pets by 9%.",
            "Increases the critical strike chance of your pets by 12%.",
            "Increases the critical strike chance of your pets by 15%."
          ],
          "x": 2,
          "y": 3,
          "iconName": "inv_misc_monsterclaw_04"
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
          "x": 0,
          "y": 4,
          "iconName": "ability_druid_demoralizingroar"
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
          "x": 1,
          "y": 4,
          "iconName": "ability_devour"
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
            "Increases the Focus regeneration of your pets by 10%.",
            "Increases the Focus regeneration of your pets by 20%."
          ],
          "x": 3,
          "y": 4,
          "iconName": "spell_nature_abolishmagic"
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
          "x": 2,
          "y": 5,
          "iconName": "inv_misc_monsterclaw_03"
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
            "Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed."
          ],
          "x": 1,
          "y": 6,
          "iconName": "ability_druid_ferociousbite"
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
          "x": 1,
          "y": 0,
          "iconName": "spell_frost_stun"
        },
        {
          "id": 1342,
          "name": "Efficiency",
          "maxRank": 5,
          "minPointsRequired": 0,
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
          "x": 2,
          "y": 0,
          "iconName": "spell_frost_wizardmark"
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
            "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 3%.",
            "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 6%.",
            "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 9%.",
            "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 12%.",
            "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 15%."
          ],
          "x": 1,
          "y": 1,
          "iconName": "ability_hunter_snipershot"
        },
        {
          "id": 1344,
          "name": "Lethal Shots",
          "maxRank": 5,
          "minPointsRequired": 5,
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
          "x": 2,
          "y": 1,
          "iconName": "ability_searingarrow"
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
            "An aimed shot that increases ranged damage by 70."
          ],
          "x": 0,
          "y": 2,
          "iconName": "inv_spear_07"
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
          "x": 1,
          "y": 2,
          "iconName": "ability_impalingbolt"
        },
        {
          "id": 1352,
          "name": "Hawk Eye",
          "maxRank": 3,
          "minPointsRequired": 10,
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
          "x": 3,
          "y": 2,
          "iconName": "ability_townwatch"
        },
        {
          "id": 1348,
          "name": "Improved Serpent Sting",
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
            "Increases the damage done by your Serpent Sting by 2%.",
            "Increases the damage done by your Serpent Sting by 4%.",
            "Increases the damage done by your Serpent Sting by 6%.",
            "Increases the damage done by your Serpent Sting by 8%.",
            "Increases the damage done by your Serpent Sting by 10%."
          ],
          "x": 1,
          "y": 3,
          "iconName": "ability_hunter_quickshot"
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
          "x": 2,
          "y": 3,
          "iconName": "ability_piercedamage"
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
            "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used."
          ],
          "x": 0,
          "y": 4,
          "iconName": "ability_golemstormbolt"
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
            "Increases the damage done by your Multi-Shot and Volley spells by 5%.",
            "Increases the damage done by your Multi-Shot and Volley spells by 10%.",
            "Increases the damage done by your Multi-Shot and Volley spells by 15%."
          ],
          "x": 1,
          "y": 4,
          "iconName": "ability_upgrademoonglaive"
        },
        {
          "id": 1351,
          "name": "Improved Scorpid Sting",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            19491,
            19493,
            19494
          ],
          "descriptions": [
            "Reduces the Stamina of targets affected by your Scorpid Sting by 10% of the amount of Strength reduced.",
            "Reduces the Stamina of targets affected by your Scorpid Sting by 20% of the amount of Strength reduced.",
            "Reduces the Stamina of targets affected by your Scorpid Sting by 30% of the amount of Strength reduced."
          ],
          "x": 2,
          "y": 4,
          "iconName": "ability_hunter_criticalshot"
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
          "x": 2,
          "y": 5,
          "iconName": "inv_weapon_rifle_06"
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
            "Increases the attack power of party members within 45 yards by 50.  Lasts 30 min."
          ],
          "x": 1,
          "y": 6,
          "iconName": "ability_trueshot"
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
            "Increases all damage caused against Beasts, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 1%.",
            "Increases all damage caused against Beasts, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 2%.",
            "Increases all damage caused against Beasts, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 3%."
          ],
          "x": 0,
          "y": 0,
          "iconName": "inv_misc_head_dragon_black"
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
          "x": 1,
          "y": 0,
          "iconName": "spell_holy_prayerofhealing"
        },
        {
          "id": 1311,
          "name": "Deflection",
          "maxRank": 5,
          "minPointsRequired": 0,
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
          "x": 2,
          "y": 0,
          "iconName": "ability_parry"
        },
        {
          "id": 1304,
          "name": "Entrapment",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            19184,
            19387,
            19388,
            19389,
            19390
          ],
          "descriptions": [
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 5% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 10% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 15% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 20% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 25% chance to entrap the target, preventing them from moving for 5 sec."
          ],
          "x": 0,
          "y": 1,
          "iconName": "spell_nature_stranglevines"
        },
        {
          "id": 1621,
          "name": "Savage Strikes",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            19159,
            19160
          ],
          "descriptions": [
            "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.",
            "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%."
          ],
          "x": 1,
          "y": 1,
          "iconName": "ability_racial_bloodrage"
        },
        {
          "id": 1305,
          "name": "Improved Wing Clip",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            19228,
            19232,
            19233,
            19234,
            19235
          ],
          "descriptions": [
            "Gives your Wing Clip ability a 4% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 8% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 12% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 16% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
          ],
          "x": 2,
          "y": 1,
          "iconName": "ability_rogue_trip"
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
            "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
            "Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%."
          ],
          "x": 0,
          "y": 2,
          "iconName": "spell_nature_timestop"
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
          "x": 1,
          "y": 2,
          "iconName": "spell_shadow_twilight"
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
          "x": 2,
          "y": 2,
          "iconName": "ability_whirlwind"
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
          "x": 0,
          "y": 3,
          "iconName": "ability_ensnare"
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
            "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%.",
            "Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by an additional 10%.",
            "Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by an additional 15%."
          ],
          "x": 1,
          "y": 3,
          "iconName": "ability_kick"
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
          "x": 3,
          "y": 3,
          "iconName": "ability_rogue_feigndeath"
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
          "x": 1,
          "y": 4,
          "iconName": "spell_holy_blessingofstamina"
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
            "A strike that becomes active after parrying an opponent's attack.  This attack deals 40 damage and immobilizes the target for 5 sec.  Counterattack cannot be blocked, dodged, or parried."
          ],
          "x": 2,
          "y": 4,
          "iconName": "ability_warrior_challange"
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
          "x": 2,
          "y": 5,
          "iconName": "spell_nature_invisibilty"
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
            "A stinging shot that puts the target to sleep for 12 sec.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 0 Nature damage over 12 sec.  Only usable out of combat.  Only one Sting per Hunter can be active on the target at a time."
          ],
          "x": 1,
          "y": 6,
          "iconName": "inv_spear_02"
        }
      ]
    }
  ]
}
