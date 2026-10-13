import { ClassData } from "../../types";

export const paladinData: ClassData = {
  "name": "Paladin",
  "talentTrees": [
    {
      "name": "Holy",
      "talents": [
        {
          "id": 1310911,
          "name": "Light's Vigil",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_paladin_judgementofthepure",
          "spellIds": [
            1310911
          ],
          "descriptions": [
            "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light's Vigil's Mana cost, or allied targets to heal their party for <!--ppl40:49:324:120-->326 to 344. You may only have one Light's Vigil active per party."
          ],
          "requirements": {
            "talentId": 1311606,
            "talentRank": 1
          },
          "talentLink": "Holy Shock"
        },
        {
          "id": 5923,
          "name": "Holy Power",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_holy_power",
          "spellIds": [
            5923
          ],
          "descriptions": [
            "Increases the critical effect chance of your Holy spells by 1%.",
            "Increases the critical effect chance of your Holy spells by 2%.",
            "Increases the critical effect chance of your Holy spells by 3%.",
            "Increases the critical effect chance of your Holy spells by 4%.",
            "Increases the critical effect chance of your Holy spells by 5%."
          ]
        },
        {
          "id": 1311606,
          "name": "Holy Shock",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_holy_searinglight",
          "spellIds": [
            1311606
          ],
          "descriptions": [
            "Blasts the target with Holy energy, causing 129 to 139 Holy damage to an enemy, or 110 to 118 healing to an ally."
          ]
        },
        {
          "id": 1310904,
          "name": "Divine Precision",
          "x": 0,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_holy_healingfocus",
          "spellIds": [
            1310904
          ],
          "descriptions": [
            "Improves your chance to hit with Holy spells by 6%.",
            "Improves your chance to hit with Holy spells by 12%.",
            "Improves your chance to hit with Holy spells by 18%."
          ],
          "requirements": {
            "talentId": 1311606,
            "talentRank": 1
          },
          "talentLink": "Holy Shock"
        },
        {
          "id": 20216,
          "name": "Divine Favor",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_holy_heal",
          "spellIds": [
            20216
          ],
          "descriptions": [
            "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
          ]
        },
        {
          "id": 429144,
          "name": "Purifying Power",
          "x": 2,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_holy_purifyingpower",
          "spellIds": [
            429144
          ],
          "descriptions": [
            "Reduces the mana cost of your Cleanse and Consecration spells by 5% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 10%.",
            "Reduces the mana cost of your Cleanse and Consecration spells by 10% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 20%."
          ]
        },
        {
          "id": 20210,
          "name": "Illumination",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_holy_greaterheal",
          "spellIds": [
            20210
          ],
          "descriptions": [
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to the base cost of the spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 40% chance to gain Mana equal to the base cost of the spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 60% chance to gain Mana equal to the base cost of the spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 80% chance to gain Mana equal to the base cost of the spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to the base cost of the spell."
          ],
          "requirements": {
            "talentId": 1310899,
            "talentRank": 3
          },
          "talentLink": "Reverence"
        },
        {
          "id": 1310897,
          "name": "Voice of Truth",
          "x": 0,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "inv_misc_horn_03",
          "spellIds": [
            1310897
          ],
          "descriptions": [
            "Grants you immunity to Silence and Interrupt effects for 6 sec."
          ]
        },
        {
          "id": 9453,
          "name": "Unyielding Faith",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_holy_unyieldingfaith",
          "spellIds": [
            9453
          ],
          "descriptions": [
            "Increases your chance to resist Fear and Disorient effects by an additional 5%.",
            "Increases your chance to resist Fear and Disorient effects by an additional 10%."
          ]
        },
        {
          "id": 20257,
          "name": "Divine Intellect",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_sleep",
          "spellIds": [
            20257
          ],
          "descriptions": [
            "Increases your total Intellect by 2%.",
            "Increases your total Intellect by 4%.",
            "Increases your total Intellect by 6%.",
            "Increases your total Intellect by 8%.",
            "Increases your total Intellect by 10%."
          ]
        },
        {
          "id": 20237,
          "name": "Healing Light",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_holy_holybolt",
          "spellIds": [
            20237
          ],
          "descriptions": [
            "Increases the amount healed by your Holy Light and Flash of Light spells by 4%.",
            "Increases the amount healed by your Holy Light and Flash of Light spells by 8%.",
            "Increases the amount healed by your Holy Light and Flash of Light spells by 12%."
          ]
        },
        {
          "id": 20224,
          "name": "Improved Seals",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_thunderbolt",
          "spellIds": [
            20224
          ],
          "descriptions": [
            "Increases the damage done by your Seals and Judgements by 3%.",
            "Increases the damage done by your Seals and Judgements by 6%.",
            "Increases the damage done by your Seals and Judgements by 9%."
          ]
        },
        {
          "id": 20205,
          "name": "Spiritual Focus",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_arcane_blink",
          "spellIds": [
            20205
          ],
          "descriptions": [
            "Gives your Flash of Light, Holy Light, and Light's Vigil spells a 7% chance to not lose casting time when you take damage.",
            "Gives your Flash of Light, Holy Light, and Light's Vigil spells a 14% chance to not lose casting time when you take damage."
          ]
        },
        {
          "id": 20262,
          "name": "Divine Strength",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_golemthunderclap",
          "spellIds": [
            20262
          ],
          "descriptions": [
            "Increases your Strength by 2%.",
            "Increases your Strength by 4%.",
            "Increases your Strength by 6%.",
            "Increases your Strength by 8%.",
            "Increases your Strength by 10%."
          ]
        },
        {
          "id": 1310899,
          "name": "Reverence",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_holy_divineillumination",
          "spellIds": [
            1310899
          ],
          "descriptions": [
            "Allows 10% of your Mana regeneration to continue while casting.",
            "Allows 20% of your Mana regeneration to continue while casting.",
            "Allows 30% of your Mana regeneration to continue while casting."
          ]
        },
        {
          "id": 1310905,
          "name": "Consecrated Ground",
          "x": 2,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_holy_innerfire",
          "spellIds": [
            1310905
          ],
          "descriptions": [
            "Gives your Holy spells 5% increased damage against the first 4 enemies that enter your Consecration.",
            "Gives your Holy spells 10% increased damage against the first 4 enemies that enter your Consecration."
          ]
        },
        {
          "id": 426065,
          "name": "Infusion of Light",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_paladin_infusionoflight",
          "spellIds": [
            426065
          ],
          "descriptions": [
            "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 1 sec.",
            "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 30 sec by 2 sec."
          ]
        }
      ]
    },
    {
      "name": "Protection",
      "talents": [
        {
          "id": 1311015,
          "name": "Templar's Bulwark",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_paladin_shieldofthetemplar",
          "spellIds": [
            1311015
          ],
          "descriptions": [
            "When activated, this ability grants you an absorb shield equal to 100% of your maximum health for 8 sec. Applies Forbearance for 1 min. Cannot be cast while Forbearance is active.<!--cooldown:1224697:4 min cooldown-->"
          ]
        },
        {
          "id": 20127,
          "name": "Redoubt",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_defend",
          "spellIds": [
            20127
          ],
          "descriptions": [
            "Increases your chance to block attacks with your shield by 6% after being the victim of a critical strike.  Lasts 10 sec or 5 blocks.",
            "Increases your chance to block attacks with your shield by 12% after being the victim of a critical strike.  Lasts 10 sec or 5 blocks.",
            "Increases your chance to block attacks with your shield by 18% after being the victim of a critical strike.  Lasts 10 sec or 5 blocks.",
            "Increases your chance to block attacks with your shield by 24% after being the victim of a critical strike.  Lasts 10 sec or 5 blocks.",
            "Increases your chance to block attacks with your shield by 30% after being the victim of a critical strike.  Lasts 10 sec or 5 blocks."
          ]
        },
        {
          "id": 20177,
          "name": "Reckoning",
          "x": 2,
          "y": 4,
          "maxRank": 5,
          "minPointsRequired": 20,
          "iconName": "spell_holy_blessingofstrength",
          "spellIds": [
            20177
          ],
          "descriptions": [
            "Gives you a 20% chance to gain an extra attack after being the victim of a critical strike.",
            "Gives you a 40% chance to gain an extra attack after being the victim of a critical strike.",
            "Gives you a 60% chance to gain an extra attack after being the victim of a critical strike.",
            "Gives you a 80% chance to gain an extra attack after being the victim of a critical strike.",
            "Gives you a 100% chance to gain an extra attack after being the victim of a critical strike."
          ]
        },
        {
          "id": 20925,
          "name": "Holy Shield",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_holy_blessingofprotection",
          "spellIds": [
            20925
          ],
          "descriptions": [
            "Increases chance to block by 30% for 10 sec, and deals 110 Holy damage for each attack blocked while active.  Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges."
          ],
          "requirements": {
            "talentId": 1311015,
            "talentRank": 1
          },
          "talentLink": "Templar's Bulwark"
        },
        {
          "id": 20196,
          "name": "One-Handed Weapon Specialization",
          "x": 1,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "inv_sword_20",
          "spellIds": [
            20196
          ],
          "descriptions": [
            "Increases the damage you deal with one-handed melee weapons by 2%.",
            "Increases the damage you deal with one-handed melee weapons by 4%.",
            "Increases the damage you deal with one-handed melee weapons by 6%."
          ]
        },
        {
          "id": 20143,
          "name": "Toughness",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_holy_devotion",
          "spellIds": [
            20143
          ],
          "descriptions": [
            "Increases your armor value from items by 2%.",
            "Increases your armor value from items by 4%.",
            "Increases your armor value from items by 6%.",
            "Increases your armor value from items by 8%.",
            "Increases your armor value from items by 10%."
          ]
        },
        {
          "id": 1224697,
          "name": "Sacred Duty",
          "x": 3,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_holy_divineintervention",
          "spellIds": [
            1224697
          ],
          "descriptions": [
            "Increases your total Stamina by 3%, reduces the cooldown of your Divine Shield spell by 30 sec and reduces the attack speed penalty by 50%.",
            "Increases your total Stamina by 6%, reduces the cooldown of your Divine Shield spell by 60 sec and reduces the attack speed penalty by 100%."
          ]
        },
        {
          "id": 20487,
          "name": "Improved Hammer of Justice",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_holy_sealofmight",
          "spellIds": [
            20487
          ],
          "descriptions": [
            "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
            "Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
            "Decreases the cooldown of your Hammer of Justice spell by 15 sec."
          ]
        },
        {
          "id": 20468,
          "name": "Improved Righteous Fury",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_holy_sealoffury",
          "spellIds": [
            20468
          ],
          "descriptions": [
            "Increases the amount of threat generated by your Righteous Fury spell by 16%.",
            "Increases the amount of threat generated by your Righteous Fury spell by 33%.",
            "Increases the amount of threat generated by your Righteous Fury spell by 50%."
          ]
        },
        {
          "id": 20096,
          "name": "Anticipation",
          "x": 3,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_magic_lesserinvisibilty",
          "spellIds": [
            20096
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
          "id": 20174,
          "name": "Guardian's Favor",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_holy_sealofprotection",
          "spellIds": [
            20174
          ],
          "descriptions": [
            "Reduces the cooldown of your Blessing of Protection by 60 sec and increases the duration of your Blessing of Freedom by 3 sec.",
            "Reduces the cooldown of your Blessing of Protection by 120 sec and increases the duration of your Blessing of Freedom by 6 sec."
          ]
        },
        {
          "id": 20189,
          "name": "Precision",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_rogue_ambush",
          "spellIds": [
            20189
          ],
          "descriptions": [
            "Increases your chance to hit with melee weapons by 1%.",
            "Increases your chance to hit with melee weapons by 2%.",
            "Increases your chance to hit with melee weapons by 3%."
          ]
        },
        {
          "id": 20150,
          "name": "Shield Specialization",
          "x": 2,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "inv_shield_06",
          "spellIds": [
            20150
          ],
          "descriptions": [
            "Increases the amount of damage absorbed by your shield by 10%.",
            "Increases the amount of damage absorbed by your shield by 20%.",
            "Increases the amount of damage absorbed by your shield by 30%."
          ],
          "requirements": {
            "talentId": 20127,
            "talentRank": 5
          },
          "talentLink": "Redoubt"
        },
        {
          "id": 1314103,
          "name": "Improved Seal of Fury",
          "x": 0,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_holy_righteousnessaura",
          "spellIds": [
            1314103
          ],
          "descriptions": [
            "When Seal of Fury's shield is fully absorbed, restore 0 Mana, increased by 15% per level the attacker is above you, up to 45%."
          ]
        },
        {
          "id": 1310994,
          "name": "Swift Judgement",
          "x": 0,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_paladin_judgementred",
          "spellIds": [
            1310994
          ],
          "descriptions": [
            "Finishes the remaining cooldown on your Judgement ability and reduces the Mana cost of your next Judgement by 100%."
          ],
          "requirements": {
            "talentId": 1314103,
            "talentRank": 1
          },
          "talentLink": "Improved Seal of Fury"
        },
        {
          "id": 1311034,
          "name": "Iron Creed",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_holy_improvedresistanceauras",
          "spellIds": [
            1311034
          ],
          "descriptions": [
            "Increases the threat generated by your Holy Strike ability by 6%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 3% for 6 sec.",
            "Increases the threat generated by your Holy Strike ability by 12%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 6% for 6 sec.",
            "Increases the threat generated by your Holy Strike ability by 18%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 9% for 6 sec.",
            "Increases the threat generated by your Holy Strike ability by 24%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 12% for 6 sec.",
            "Increases the threat generated by your Holy Strike ability by 30%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 15% for 6 sec."
          ]
        }
      ]
    },
    {
      "name": "Retribution",
      "talents": [
        {
          "id": 1310735,
          "name": "Twist of Light",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_holy_blessedresillience",
          "spellIds": [
            1310735
          ],
          "descriptions": [
            "Reduces the Mana cost of your Seal spells by 20%, and when you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, you gain an Echo of that Seal. Your next melee attack applies the replaced Seal's effects, consuming the Echo."
          ]
        },
        {
          "id": 20049,
          "name": "Vengeance",
          "x": 1,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "ability_racial_avatar",
          "spellIds": [
            20049
          ],
          "descriptions": [
            "Increases your Physical and Holy damage dealt by 5% for 30 sec after landing a non-periodic critical strike.  Stacks up to 3 times.",
            "Increases your Physical and Holy damage dealt by 10% for 30 sec after landing a non-periodic critical strike.  Stacks up to 3 times.",
            "Increases your Physical and Holy damage dealt by 15% for 30 sec after landing a non-periodic critical strike.  Stacks up to 3 times."
          ],
          "requirements": {
            "talentId": 1311074,
            "talentRank": 3
          },
          "talentLink": "Sanctified Judgement"
        },
        {
          "id": 20066,
          "name": "Repentance",
          "x": 2,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_holy_prayerofhealing",
          "spellIds": [
            20066
          ],
          "descriptions": [
            "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids."
          ]
        },
        {
          "id": 20375,
          "name": "Seal of Command",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_innerrage",
          "spellIds": [
            20375
          ],
          "descriptions": [
            "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage.  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.<br /><br />Unleashing this Seal's energy will judge an enemy, instantly causing <!--ppl20:28:97:560-->69 to 73 Holy damage, <!--ppl20:28:97:560-->138 to 146 if the target is stunned or incapacitated."
          ]
        },
        {
          "id": 20111,
          "name": "Two-Handed Weapon Specialization",
          "x": 0,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "inv_hammer_04",
          "spellIds": [
            20111
          ],
          "descriptions": [
            "Increases the damage you deal with two-handed melee weapons by 2%.",
            "Increases the damage you deal with two-handed melee weapons by 4%.",
            "Increases the damage you deal with two-handed melee weapons by 6%."
          ]
        },
        {
          "id": 9799,
          "name": "Eye for an Eye",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_holy_eyeforaneye",
          "spellIds": [
            9799
          ],
          "descriptions": [
            "All spell criticals against you cause 15% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
            "All spell criticals against you cause 30% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
          ]
        },
        {
          "id": 26022,
          "name": "Pursuit of Justice",
          "x": 3,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_holy_persuitofjustice",
          "spellIds": [
            26022
          ],
          "descriptions": [
            "Increases movement and mounted movement speed by 4%.  This does not stack with other movement speed increasing effects.",
            "Increases movement and mounted movement speed by 8%.  This does not stack with other movement speed increasing effects."
          ]
        },
        {
          "id": 1311087,
          "name": "Sacred Arbiter",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "inv_sword_08",
          "spellIds": [
            1311087
          ],
          "descriptions": [
            "Increases the damage of your Holy Strike ability by 20% and causes it to refresh all Judgement effects on the target."
          ]
        },
        {
          "id": 1311074,
          "name": "Sanctified Judgement",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_paladin_judgementblue",
          "spellIds": [
            1311074
          ],
          "descriptions": [
            "Gives your Judgement spell a 33% chance to return 80% of the mana cost of the judged seal.",
            "Gives your Judgement spell a 66% chance to return 80% of the mana cost of the judged seal.",
            "Gives your Judgement spell a 100% chance to return 80% of the mana cost of the judged seal."
          ]
        },
        {
          "id": 9452,
          "name": "Vindication",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_holy_vindication",
          "spellIds": [
            9452
          ],
          "descriptions": [
            "Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 5% for 10 sec.",
            "Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 10% for 10 sec.",
            "Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by 15% for 10 sec."
          ]
        },
        {
          "id": 20117,
          "name": "Conviction",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_holy_retributionaura",
          "spellIds": [
            20117
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
          "id": 1237268,
          "name": "Holy Conduit",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_holy_devineaegis",
          "spellIds": [
            1237268
          ],
          "descriptions": [
            "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 20%.",
            "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 40%."
          ]
        },
        {
          "id": 25956,
          "name": "Improved Judgement",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_holy_righteousfury",
          "spellIds": [
            25956
          ],
          "descriptions": [
            "Decreases the cooldown of your Judgement spell by 1 sec.",
            "Decreases the cooldown of your Judgement spell by 2 sec."
          ]
        },
        {
          "id": 20101,
          "name": "Benediction",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_frost_windwalkon",
          "spellIds": [
            20101
          ],
          "descriptions": [
            "Reduces the Mana cost of your Judgement and Seal spells by 3%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 6%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 9%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 12%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 15%."
          ]
        },
        {
          "id": 20060,
          "name": "Deflection",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_parry",
          "spellIds": [
            20060
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
          "id": 1311085,
          "name": "Instrument of Law",
          "x": 2,
          "y": 5,
          "maxRank": 2,
          "minPointsRequired": 25,
          "iconName": "spell_holy_divinepurpose",
          "spellIds": [
            1311085
          ],
          "descriptions": [
            "Reduces the cast time of your Hammer of Wrath by 1.0 sec, and reduces all threat you generate by 10% while Righteous Fury is not active.",
            "Reduces the cast time of your Hammer of Wrath by 1.0 sec, and reduces all threat you generate by 20% while Righteous Fury is not active."
          ]
        },
        {
          "id": 1311084,
          "name": "Champion of the Light",
          "x": 1,
          "y": 5,
          "maxRank": 3,
          "minPointsRequired": 25,
          "iconName": "ability_paladin_enlightenedjudgements",
          "spellIds": [
            1311084
          ],
          "descriptions": [
            "Increases your spell damage by up to 100% of your Intellect.",
            "Increases your spell damage by up to 200% of your Intellect.",
            "Increases your spell damage by up to 300% of your Intellect."
          ]
        }
      ]
    }
  ]
};
