import { ClassData } from "../../types";

export const hunterData: ClassData = {
  "name": "Hunter",
  "talentTrees": [
    {
      "name": "Beast Mastery",
      "talents": [
        {
          "id": 19552,
          "name": "Deadly Aspects",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_ravenform",
          "spellIds": [
            19552
          ],
          "descriptions": [
            "While Aspect of the Hawk is active, Auto Shot has a 2% chance of increasing ranged attack speed by 6% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 2% chance of increasing melee attack speed by 6% for 12 sec.",
            "While Aspect of the Hawk is active, Auto Shot has a 4% chance of increasing ranged attack speed by 12% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 4% chance of increasing melee attack speed by 12% for 12 sec.",
            "While Aspect of the Hawk is active, Auto Shot has a 6% chance of increasing ranged attack speed by 18% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 6% chance of increasing melee attack speed by 18% for 12 sec.",
            "While Aspect of the Hawk is active, Auto Shot has a 8% chance of increasing ranged attack speed by 24% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 8% chance of increasing melee attack speed by 24% for 12 sec.",
            "While Aspect of the Hawk is active, Auto Shot has a 10% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 10% chance of increasing melee attack speed by 30% for 12 sec."
          ]
        },
        {
          "id": 19574,
          "name": "Bestial Wrath",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_druid_ferociousbite",
          "spellIds": [
            19574
          ],
          "descriptions": [
            "Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed."
          ],
          "requirements": {
            "talentId": 19577,
            "talentRank": 1
          },
          "talentLink": "Intimidation"
        },
        {
          "id": 19621,
          "name": "Frenzy",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "inv_misc_monsterclaw_03",
          "spellIds": [
            19621
          ],
          "descriptions": [
            "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
          ],
          "requirements": {
            "talentId": 19598,
            "talentRank": 5
          },
          "talentLink": "Ferocity"
        },
        {
          "id": 19590,
          "name": "Bestial Discipline",
          "x": 3,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_abolishmagic",
          "spellIds": [
            19590
          ],
          "descriptions": [
            "Increases the Focus regeneration of your pets by 10%.",
            "Increases the Focus regeneration of your pets by 20%."
          ]
        },
        {
          "id": 19577,
          "name": "Intimidation",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_devour",
          "spellIds": [
            19577
          ],
          "descriptions": [
            "Command your pet to Stun the target for 3 sec on its next successful attack, which also gains 100% increased critical strike chance. Generates high threat."
          ],
          "requirements": {
            "talentId": 19596,
            "talentRank": 1
          },
          "talentLink": "Bestial Swiftness"
        },
        {
          "id": 19578,
          "name": "Spirit Bond",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_druid_demoralizingroar",
          "spellIds": [
            19578
          ],
          "descriptions": [
            "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
            "While your pet is active, you and your pet will regenerate 2% of total health every 10 sec."
          ]
        },
        {
          "id": 1293241,
          "name": "Summon Hawk",
          "x": 3,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_hunter_animalhandler",
          "spellIds": [
            1293241
          ],
          "descriptions": [
            "Command a hawk to dive-bomb your targeted enemy, dealing [32 / <span class=\"q2\">Ferocity</span>: <span class=\"q9\">48</span> / <span class=\"q2\">Unleashed Fury</span>: <span class=\"q9\">52</span> + (Ranged Attack Power * (0.05))] Physical damage and continuing its assault for 18 sec. Only 2 hawks can be active at once. Summon Hawk shares its cooldown with Arcane Shot."
          ]
        },
        {
          "id": 19598,
          "name": "Ferocity",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "inv_misc_monsterclaw_04",
          "spellIds": [
            19598
          ],
          "descriptions": [
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 5 Rage or Energy."
          ]
        },
        {
          "id": 19572,
          "name": "Improved Mend Pet",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_hunter_mendpet",
          "spellIds": [
            19572
          ],
          "descriptions": [
            "Gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
            "Gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
          ]
        },
        {
          "id": 19616,
          "name": "Unleashed Fury",
          "x": 2,
          "y": 2,
          "maxRank": 5,
          "minPointsRequired": 10,
          "iconName": "ability_bullrush",
          "spellIds": [
            19616
          ],
          "descriptions": [
            "Increases the damage done by your pets by 4%.",
            "Increases the damage done by your pets by 8%.",
            "Increases the damage done by your pets by 12%.",
            "Increases the damage done by your pets by 16%.",
            "Increases the damage done by your pets by 20%."
          ]
        },
        {
          "id": 19596,
          "name": "Bestial Swiftness",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_druid_dash",
          "spellIds": [
            19596
          ],
          "descriptions": [
            "Increases the movement speed of your pets by 30%."
          ]
        },
        {
          "id": 24443,
          "name": "Improved Revive Pet",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_hunter_beastsoothe",
          "spellIds": [
            24443
          ],
          "descriptions": [
            "Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
            "Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
          ]
        },
        {
          "id": 19559,
          "name": "Pathfinding",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_mount_jungletiger",
          "spellIds": [
            19559
          ],
          "descriptions": [
            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%."
          ]
        },
        {
          "id": 19549,
          "name": "Improved Aspect of the Monkey",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_hunter_aspectofthemonkey",
          "spellIds": [
            19549
          ],
          "descriptions": [
            "Increases the Dodge bonus of your Aspect of the Monkey by 2%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 4%.",
            "Increases the Dodge bonus of your Aspect of the Monkey by 6%."
          ]
        },
        {
          "id": 1223755,
          "name": "Focused Fire",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "inv_weapon_crossbow_10",
          "spellIds": [
            1223755
          ],
          "descriptions": [
            "All damage caused by you is increased by 1% while your pet is active and the critical strike chance of your Kill Command Ability is increased by 10%.",
            "All damage caused by you is increased by 2% while your pet is active and the critical strike chance of your Kill Command Ability is increased by 20%."
          ]
        },
        {
          "id": 19583,
          "name": "Endurance Training",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_reincarnation",
          "spellIds": [
            19583
          ],
          "descriptions": [
            "Increases the Health of your pets by 3%.",
            "Increases the Health of your pets by 6%.",
            "Increases the Health of your pets by 9%.",
            "Increases the Health of your pets by 12%.",
            "Increases the Health of your pets by 15%."
          ]
        }
      ]
    },
    {
      "name": "Marksmanship",
      "talents": [
        {
          "id": 1310687,
          "name": "Sniper Shot",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "hunter_pvp_snipershot",
          "spellIds": [
            1310687
          ],
          "descriptions": [
            "A long-range shot that deals ranged damage plus 160 and increases the range of your next 3 Shots by 10 yards for 10 sec."
          ],
          "requirements": {
            "talentId": 1299346,
            "talentRank": 1
          },
          "talentLink": "Trueshot Aura"
        },
        {
          "id": 19507,
          "name": "Ranged Weapon Specialization",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "inv_weapon_rifle_06",
          "spellIds": [
            19507
          ],
          "descriptions": [
            "Increases the damage you deal with ranged weapons by 1%.",
            "Increases the damage you deal with ranged weapons by 2%.",
            "Increases the damage you deal with ranged weapons by 3%.",
            "Increases the damage you deal with ranged weapons by 4%.",
            "Increases the damage you deal with ranged weapons by 5%."
          ]
        },
        {
          "id": 1223987,
          "name": "Rapid Recuperation",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_rapidregeneration",
          "spellIds": [
            1223987
          ],
          "descriptions": [
            "Hitting a target with your Serpent Sting ability grants you 25% and consuming Rapid Killing grants you 50% of your Mana regeneration while casting for the next 15 sec.",
            "Hitting a target with your Serpent Sting ability grants you 50% and consuming Rapid Killing grants you 100% of your Mana regeneration while casting for the next 15 sec."
          ],
          "requirements": {
            "talentId": 415405,
            "talentRank": 2
          },
          "talentLink": "Rapid Killing"
        },
        {
          "id": 19503,
          "name": "Scatter Shot",
          "x": 3,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_golemstormbolt",
          "spellIds": [
            19503
          ],
          "descriptions": [
            "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used."
          ]
        },
        {
          "id": 19461,
          "name": "Barrage",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "ability_upgrademoonglaive",
          "spellIds": [
            19461
          ],
          "descriptions": [
            "Increases the damage done by your Multi-Shot and Volley spells by 5%.",
            "Increases the damage done by your Multi-Shot and Volley spells by 10%.",
            "Increases the damage done by your Multi-Shot and Volley spells by 15%."
          ]
        },
        {
          "id": 19485,
          "name": "Mortal Shots",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_piercedamage",
          "spellIds": [
            19485
          ],
          "descriptions": [
            "Increases your ranged weapon critical strike damage bonus by 6%.",
            "Increases your ranged weapon critical strike damage bonus by 12%.",
            "Increases your ranged weapon critical strike damage bonus by 18%.",
            "Increases your ranged weapon critical strike damage bonus by 24%.",
            "Increases your ranged weapon critical strike damage bonus by 30%."
          ],
          "requirements": {
            "talentId": 1223984,
            "talentRank": 5
          },
          "talentLink": "Careful Aim"
        },
        {
          "id": 1299346,
          "name": "Trueshot Aura",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_trueshot",
          "spellIds": [
            1299346
          ],
          "descriptions": [
            "Increases the Ranged Attack Power of party members within 45 yds by 30."
          ]
        },
        {
          "id": 415405,
          "name": "Rapid Killing",
          "x": 0,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_hunter_rapidkilling",
          "spellIds": [
            415405
          ],
          "descriptions": [
            "Reduces the cooldown of your Rapid Fire ability by 1 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes 10% additional damage.  Lasts 20 sec.",
            "Reduces the cooldown of your Rapid Fire ability by 2 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes 20% additional damage.  Lasts 20 sec."
          ]
        },
        {
          "id": 19454,
          "name": "Improved Arcane Shot",
          "x": 1,
          "y": 2,
          "maxRank": 5,
          "minPointsRequired": 10,
          "iconName": "ability_impalingbolt",
          "spellIds": [
            19454
          ],
          "descriptions": [
            "Reduces the cooldown of your Arcane Shot by 0.2 sec.",
            "Reduces the cooldown of your Arcane Shot by 0.4 sec.",
            "Reduces the cooldown of your Arcane Shot by 0.6 sec.",
            "Reduces the cooldown of your Arcane Shot by 0.8 sec.",
            "Reduces the cooldown of your Arcane Shot by 1 sec."
          ]
        },
        {
          "id": 415370,
          "name": "Lone Wolf",
          "x": 3,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_mount_whitedirewolf",
          "spellIds": [
            415370
          ],
          "descriptions": [
            "You deal 20% increased damage with all attacks while you do not have an active pet."
          ]
        },
        {
          "id": 1223984,
          "name": "Careful Aim",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "ability_hunter_zenarchery",
          "spellIds": [
            1223984
          ],
          "descriptions": [
            "Increases your Attack Power by 20% of your Intellect.",
            "Increases your Attack Power by 40% of your Intellect.",
            "Increases your Attack Power by 60% of your Intellect.",
            "Increases your Attack Power by 80% of your Intellect.",
            "Increases your Attack Power by 100% of your Intellect."
          ]
        },
        {
          "id": 19416,
          "name": "Efficiency",
          "x": 1,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_frost_wizardmark",
          "spellIds": [
            19416
          ],
          "descriptions": [
            "Reduces the Mana cost of your Shots and Stings by 2%.",
            "Reduces the Mana cost of your Shots and Stings by 4%.",
            "Reduces the Mana cost of your Shots and Stings by 6%.",
            "Reduces the Mana cost of your Shots and Stings by 8%.",
            "Reduces the Mana cost of your Shots and Stings by 10%."
          ]
        },
        {
          "id": 19426,
          "name": "Lethal Attacks",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_searingarrow",
          "spellIds": [
            19426
          ],
          "descriptions": [
            "Increases your critical strike chance with all attacks by 1%.",
            "Increases your critical strike chance with all attacks by 2%.",
            "Increases your critical strike chance with all attacks by 3%.",
            "Increases your critical strike chance with all attacks by 4%.",
            "Increases your critical strike chance with all attacks by 5%."
          ]
        },
        {
          "id": 19407,
          "name": "Improved Concussive Shot",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_frost_stun",
          "spellIds": [
            19407
          ],
          "descriptions": [
            "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 8% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 12% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 16% chance to stun the target for 3 sec.",
            "Gives your Concussive Shot a 20% chance to stun the target for 3 sec."
          ]
        },
        {
          "id": 19498,
          "name": "Hawk Eye",
          "x": 0,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "ability_townwatch",
          "spellIds": [
            19498
          ],
          "descriptions": [
            "Increases the range of your ranged weapons by 2 yards.",
            "Increases the range of your ranged weapons by 4 yards.",
            "Increases the range of your ranged weapons by 6 yards."
          ]
        },
        {
          "id": 1310661,
          "name": "Improved Stings",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_hunter_quickshot",
          "spellIds": [
            1310661
          ],
          "descriptions": [
            "Increases the damage of your Serpent Sting ability by 20%, reduces the cooldown of your Viper Sting ability by 6 sec, and increases the duration of your Scorpid Sting ability by 45 sec.",
            "Increases the damage of your Serpent Sting ability by 40%, reduces the cooldown of your Viper Sting ability by 6 sec, and increases the duration of your Scorpid Sting ability by 45 sec.",
            "Increases the damage of your Serpent Sting ability by 60%, reduces the cooldown of your Viper Sting ability by 6 sec, and increases the duration of your Scorpid Sting ability by 45 sec."
          ]
        }
      ]
    },
    {
      "name": "Survival",
      "talents": [
        {
          "id": 1317257,
          "name": "Strider Kick",
          "x": 3,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_pet_tallstrider",
          "spellIds": [
            1317257
          ],
          "descriptions": [
            "A powerful kick that deals 100% melee weapon damage and increases movement speed by 30% for 3 sec."
          ]
        },
        {
          "id": 440529,
          "name": "Resourcefulness",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_resourcefulness",
          "spellIds": [
            440529
          ],
          "descriptions": [
            "Reduces the mana cost of your Trap abilities and melee abilities by 30%. In addition, your critical strikes have a 30% chance to allow 25% of your Mana regeneration to continue while casting for 30 sec.",
            "Reduces the mana cost of your Trap abilities and melee abilities by 60%. In addition, your critical strikes have a 60% chance to allow 50% of your Mana regeneration to continue while casting for 30 sec."
          ]
        },
        {
          "id": 1310533,
          "name": "Lacerating Strikes",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_gouge",
          "spellIds": [
            1310533
          ],
          "descriptions": [
            "Your Mongoose Bite also causes the target to Bleed for damage equal to 40% of the damage done by Mongoose Bite over 21 sec"
          ],
          "requirements": {
            "talentId": 1310532,
            "talentRank": 2
          },
          "talentLink": "Expose Prey"
        },
        {
          "id": 1310532,
          "name": "Expose Prey",
          "x": 1,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_swiftstrike",
          "spellIds": [
            1310532
          ],
          "descriptions": [
            "Your attacks against targets with Hunter's Mark have a 5% chance to activate your Mongoose Bite for 10 sec.",
            "Your attacks against targets with Hunter's Mark have a 10% chance to activate your Mongoose Bite for 10 sec."
          ]
        },
        {
          "id": 19263,
          "name": "Deterrence",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_whirlwind",
          "spellIds": [
            19263
          ],
          "descriptions": [
            "When activated, increases your Dodge and Parry chance by 25% for 10 sec.<!--cooldown:1310496:3 min cooldown-->"
          ]
        },
        {
          "id": 19290,
          "name": "Surefooted",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_kick",
          "spellIds": [
            19290
          ],
          "descriptions": [
            "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%.",
            "Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by an additional 10%.",
            "Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by an additional 15%."
          ]
        },
        {
          "id": 19376,
          "name": "Survival Tactics",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_ensnare",
          "spellIds": [
            19376
          ],
          "descriptions": [
            "Increases your chance to hit with your Trap and Feign Death abilities by 17%.",
            "Increases your chance to hit with your Trap and Feign Death abilities by 34%."
          ]
        },
        {
          "id": 19306,
          "name": "Counterattack",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_warrior_challange",
          "spellIds": [
            19306
          ],
          "descriptions": [
            "A strike that becomes active after parrying an opponent's attack. This attack deals 50% weapon damage plus 26 and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."
          ],
          "requirements": {
            "talentId": 19263,
            "talentRank": 1
          },
          "talentLink": "Deterrence"
        },
        {
          "id": 19228,
          "name": "Improved Wing Clip",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_rogue_trip",
          "spellIds": [
            19228
          ],
          "descriptions": [
            "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 14% chance to immobilize the target for 5 sec.",
            "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
          ]
        },
        {
          "id": 19239,
          "name": "Clever Traps",
          "x": 0,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_nature_timestop",
          "spellIds": [
            19239
          ],
          "descriptions": [
            "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
            "Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%."
          ]
        },
        {
          "id": 19255,
          "name": "Survivalist",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_twilight",
          "spellIds": [
            19255
          ],
          "descriptions": [
            "Increases total health by 2%.",
            "Increases total health by 4%.",
            "Increases total health by 6%.",
            "Increases total health by 8%.",
            "Increases total health by 10%."
          ]
        },
        {
          "id": 19159,
          "name": "Savage Strikes",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_racial_bloodrage",
          "spellIds": [
            19159
          ],
          "descriptions": [
            "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%.",
            "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%."
          ]
        },
        {
          "id": 19184,
          "name": "Entrapment",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_nature_stranglevines",
          "spellIds": [
            19184
          ],
          "descriptions": [
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 5% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 10% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 15% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 20% chance to entrap the target, preventing them from moving for 5 sec.",
            "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 25% chance to entrap the target, preventing them from moving for 5 sec."
          ]
        },
        {
          "id": 19295,
          "name": "Deflection",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_parry",
          "spellIds": [
            19295
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
          "id": 24293,
          "name": "Improved Tracking",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "inv_misc_head_dragon_black",
          "spellIds": [
            24293
          ],
          "descriptions": [
            "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 5%.",
            "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 10%.",
            "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 15%.",
            "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 20%.",
            "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 25%."
          ]
        },
        {
          "id": 19168,
          "name": "Lightning Reflexes",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_nature_invisibilty",
          "spellIds": [
            19168
          ],
          "descriptions": [
            "Increases your Dodge chance by 1%.",
            "Increases your Dodge chance by 2%.",
            "Increases your Dodge chance by 3%.",
            "Increases your Dodge chance by 4%.",
            "Increases your Dodge chance by 5%."
          ]
        },
        {
          "id": 1310496,
          "name": "Survivalist's Discipline",
          "x": 2,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_mastertactitian",
          "spellIds": [
            1310496
          ],
          "descriptions": [
            "Reduces the cooldown of your Trap and Deterrence abilities by 20%.",
            "Reduces the cooldown of your Trap and Deterrence abilities by 40%."
          ]
        },
        {
          "id": 1310627,
          "name": "Predator's Edge",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_dualwield",
          "spellIds": [
            1310627
          ],
          "descriptions": [
            "Increases your melee critical strike damage by 6% and your Off Hand weapon damage by 10%.",
            "Increases your melee critical strike damage by 12% and your Off Hand weapon damage by 20%.",
            "Increases your melee critical strike damage by 18% and your Off Hand weapon damage by 30%.",
            "Increases your melee critical strike damage by 24% and your Off Hand weapon damage by 40%.",
            "Increases your melee critical strike damage by 30% and your Off Hand weapon damage by 50%."
          ]
        }
      ]
    }
  ]
};
