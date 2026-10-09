import { ClassData } from "../../../types";

export const paladinData: ClassData = {
  name: "Paladin",
  talentTrees: [
    {
      "name": "Holy",
      "talents": [
        {
          "id": 1450,
          "name": "Divine Strength",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            20262,
            20263,
            20264,
            20265,
            20266
          ],
          "descriptions": [
            "Increases your total Strength by 2%",
            "Increases your total Strength by 4%",
            "Increases your total Strength by 6%",
            "Increases your total Strength by 8%",
            "Increases your total Strength by 10%"
          ],
          "iconName": "ability_golemthunderclap",
          "y": 0,
          "x": 1
        },
        {
          "id": 1449,
          "name": "Divine Intellect",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            20257,
            20258,
            20259,
            20260,
            20261
          ],
          "descriptions": [
            "Increases your total Intellect by 2%.",
            "Increases your total Intellect by 4%.",
            "Increases your total Intellect by 6%.",
            "Increases your total Intellect by 8%.",
            "Increases your total Intellect by 10%."
          ],
          "iconName": "spell_nature_sleep",
          "y": 0,
          "x": 2
        },
        {
          "id": 1432,
          "name": "Spiritual Focus",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            20205,
            20206,
            20207,
            20209,
            20208
          ],
          "descriptions": [
            "Gives your Flash of Light and Holy Light spells a 14% chance to not lose casting time when you take damage.",
            "Gives your Flash of Light and Holy Light spells a 28% chance to not lose casting time when you take damage.",
            "Gives your Flash of Light and Holy Light spells a 42% chance to not lose casting time when you take damage.",
            "Gives your Flash of Light and Holy Light spells a 56% chance to not lose casting time when you take damage.",
            "Gives your Flash of Light and Holy Light spells a 70% chance to not lose casting time when you take damage."
          ],
          "iconName": "spell_arcane_blink",
          "y": 1,
          "x": 1
        },
        {
          "id": 1463,
          "name": "Improved Seal of Righteousness",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            20224,
            20225,
            20330,
            20331,
            20332
          ],
          "descriptions": [
            "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 3%.",
            "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 6%.",
            "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 9%.",
            "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 12%.",
            "Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by 15%."
          ],
          "iconName": "ability_thunderbolt",
          "y": 1,
          "x": 2
        },
        {
          "id": 1444,
          "name": "Healing Light",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            20237,
            20238,
            20239
          ],
          "descriptions": [
            "Increases the amount healed by your Holy Light and Flash of Light spells by 4%.",
            "Increases the amount healed by your Holy Light and Flash of Light spells by 8%.",
            "Increases the amount healed by your Holy Light and Flash of Light spells by 12%."
          ],
          "iconName": "spell_holy_holybolt",
          "y": 2,
          "x": 0
        },
        {
          "id": 1435,
          "name": "Aura Mastery",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            31821
          ],
          "descriptions": [
            "Increases the radius of your Auras to 40 yards."
          ],
          "iconName": "spell_holy_auramastery",
          "y": 2,
          "x": 1
        },
        {
          "id": 1443,
          "name": "Improved Lay on Hands",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            20234,
            20235
          ],
          "descriptions": [
            "Gives the target of your Lay on Hands spell a 15% bonus to their armor value from items for 2 min. In addition, the cooldown for your Lay on Hands spell is reduced by 10 min.",
            "Gives the target of your Lay on Hands spell a 30% bonus to their armor value from items for 2 min. In addition, the cooldown for your Lay on Hands spell is reduced by 20 min."
          ],
          "iconName": "spell_holy_layonhands",
          "y": 2,
          "x": 2
        },
        {
          "id": 1628,
          "name": "Unyielding Faith",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            9453,
            25836
          ],
          "descriptions": [
            "Increases your chance to resist Fear and Disorient effects by an additional 5%.",
            "Increases your chance to resist Fear and Disorient effects by an additional 10%."
          ],
          "iconName": "spell_holy_unyieldingfaith",
          "y": 2,
          "x": 3
        },
        {
          "id": 1461,
          "name": "Illumination",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            20210,
            20212,
            20213,
            20214,
            20215
          ],
          "descriptions": [
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to 60% of the base cost of your spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 40% chance to gain Mana equal to 60% of the base cost of your spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 60% chance to gain Mana equal to 60% of the base cost of your spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 80% chance to gain Mana equal to 60% of the base cost of your spell.",
            "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to 60% of the base cost of your spell."
          ],
          "iconName": "spell_holy_greaterheal",
          "y": 3,
          "x": 1
        },
        {
          "id": 1446,
          "name": "Improved Blessing of Wisdom",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            20244,
            20245
          ],
          "descriptions": [
            "Increases the effect of your Blessing of Wisdom spell by 10%.",
            "Increases the effect of your Blessing of Wisdom spell by 20%."
          ],
          "iconName": "spell_holy_sealofwisdom",
          "y": 3,
          "x": 2
        },
        {
          "id": 1742,
          "name": "Pure of Heart",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            31822,
            31823,
            31824
          ],
          "descriptions": [
            "Increases your resistance to Curse and Disease effects by 5%.",
            "Increases your resistance to Curse and Disease effects by 10%.",
            "Increases your resistance to Curse and Disease effects by 15%."
          ],
          "iconName": "spell_holy_pureofheart",
          "y": 4,
          "x": 0
        },
        {
          "id": 1433,
          "name": "Divine Favor",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            20216
          ],
          "descriptions": [
            "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
          ],
          "iconName": "spell_holy_heal",
          "y": 4,
          "x": 1,
          "requirements": {
            "talentId": 1461,
            "talentRank": 5
          }
        },
        {
          "id": 1465,
          "name": "Sanctified Light",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            20359,
            20360,
            20361
          ],
          "descriptions": [
            "Increases the critical strike chance of your Holy Light spell by 2%.",
            "Increases the critical strike chance of your Holy Light spell by 4%.",
            "Increases the critical strike chance of your Holy Light spell by 6%."
          ],
          "iconName": "spell_holy_healingaura",
          "y": 4,
          "x": 2
        },
        {
          "id": 1743,
          "name": "Purifying Power",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31825,
            31826
          ],
          "descriptions": [
            "Reduces the mana cost of your Cleanse and Consecration spells by 5% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 10%.",
            "Reduces the mana cost of your Cleanse and Consecration spells by 10% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 20%."
          ],
          "iconName": "spell_holy_purifyingpower",
          "y": 5,
          "x": 0
        },
        {
          "id": 1627,
          "name": "Holy Power",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            5923,
            5924,
            5925,
            5926,
            25829
          ],
          "descriptions": [
            "Increases the critical effect chance of your Holy spells by 1%.",
            "Increases the critical effect chance of your Holy spells by 2%.",
            "Increases the critical effect chance of your Holy spells by 3%.",
            "Increases the critical effect chance of your Holy spells by 4%.",
            "Increases the critical effect chance of your Holy spells by 5%."
          ],
          "iconName": "spell_holy_power",
          "y": 5,
          "x": 2
        },
        {
          "id": 1745,
          "name": "Light's Grace",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            31833,
            31835,
            31836
          ],
          "descriptions": [
            "Gives your Holy Light spell a 33% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
            "Gives your Holy Light spell a 66% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
            "Gives your Holy Light spell a 100% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec."
          ],
          "iconName": "spell_holy_lightsgrace",
          "y": 6,
          "x": 0
        },
        {
          "id": 1502,
          "name": "Holy Shock",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            20473
          ],
          "descriptions": [
            "Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally."
          ],
          "iconName": "spell_holy_searinglight",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 1433,
            "talentRank": 1
          },
          "talentLink": "Divine Favor"
        },
        {
          "id": 1744,
          "name": "Blessed Life",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            31828,
            31829,
            31830
          ],
          "descriptions": [
            "All attacks against you have a 4% chance to cause half damage.",
            "All attacks against you have a 7% chance to cause half damage.",
            "All attacks against you have a 10% chance to cause half damage."
          ],
          "iconName": "spell_holy_blessedlife",
          "y": 6,
          "x": 2
        },
        {
          "id": 1746,
          "name": "Holy Guidance",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31837,
            31838,
            31839,
            31840,
            31841
          ],
          "descriptions": [
            "Increases your spell damage and healing by 7% of your total Intellect.",
            "Increases your spell damage and healing by 14% of your total Intellect.",
            "Increases your spell damage and healing by 21% of your total Intellect.",
            "Increases your spell damage and healing by 28% of your total Intellect.",
            "Increases your spell damage and healing by 35% of your total Intellect."
          ],
          "iconName": "spell_holy_holyguidance",
          "y": 7,
          "x": 1
        },
        {
          "id": 1747,
          "name": "Divine Illumination",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            31842
          ],
          "descriptions": [
            "Reduces the mana cost of all spells by 50% for 15 sec."
          ],
          "iconName": "spell_holy_divineillumination",
          "y": 8,
          "x": 1
        }
      ]
    },
    {
      "name": "Protection",
      "talents": [
        {
          "id": 1422,
          "name": "Improved Devotion Aura",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            20138,
            20139,
            20140,
            20141,
            20142
          ],
          "descriptions": [
            "Increases the armor bonus of your Devotion Aura by 8%.",
            "Increases the armor bonus of your Devotion Aura by 16%.",
            "Increases the armor bonus of your Devotion Aura by 24%.",
            "Increases the armor bonus of your Devotion Aura by 32%.",
            "Increases the armor bonus of your Devotion Aura by 40%."
          ],
          "iconName": "spell_holy_devotionaura",
          "y": 0,
          "x": 1
        },
        {
          "id": 1421,
          "name": "Redoubt",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            20127,
            20130,
            20135,
            20136,
            20137
          ],
          "descriptions": [
            "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 6%.  Lasts 10 sec or 5 blocks.",
            "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 12%.  Lasts 10 sec or 5 blocks.",
            "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 18%.  Lasts 10 sec or 5 blocks.",
            "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 24%.  Lasts 10 sec or 5 blocks.",
            "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 30%.  Lasts 10 sec or 5 blocks."
          ],
          "iconName": "ability_defend",
          "y": 0,
          "x": 2
        },
        {
          "id": 1630,
          "name": "Precision",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            20189,
            20192,
            20193
          ],
          "descriptions": [
            "Increases your chance to hit with melee weapons and spells by 1%.",
            "Increases your chance to hit with melee weapons and spells by 2%.",
            "Increases your chance to hit with melee weapons and spells by 3%."
          ],
          "iconName": "ability_rogue_ambush",
          "y": 1,
          "x": 0
        },
        {
          "id": 1425,
          "name": "Guardian's Favor",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            20174,
            20175
          ],
          "descriptions": [
            "Reduces the cooldown of your Blessing of Protection by 60 sec and increases the duration of your Blessing of Freedom by 2 sec.",
            "Reduces the cooldown of your Blessing of Protection by 120 sec and increases the duration of your Blessing of Freedom by 4 sec."
          ],
          "iconName": "spell_holy_sealofprotection",
          "y": 1,
          "x": 1
        },
        {
          "id": 1423,
          "name": "Toughness",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            20143,
            20144,
            20145,
            20146,
            20147
          ],
          "descriptions": [
            "Increases your armor value from items by 2%.",
            "Increases your armor value from items by 4%.",
            "Increases your armor value from items by 6%.",
            "Increases your armor value from items by 8%.",
            "Increases your armor value from items by 10%."
          ],
          "iconName": "spell_holy_devotion",
          "y": 1,
          "x": 3
        },
        {
          "id": 1442,
          "name": "Blessing of Kings",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            20217
          ],
          "descriptions": [
            "Places a Blessing on the friendly target, increasing total stats by 10% for 10 min. Players may only have one Blessing on them per Paladin at any one time."
          ],
          "iconName": "spell_magic_magearmor",
          "y": 2,
          "x": 0
        },
        {
          "id": 1501,
          "name": "Improved Righteous Fury",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            20468,
            20469,
            20470
          ],
          "descriptions": [
            "While Righteous Fury is active, all damage taken is reduced by 2% and increases the amount of threat generated by your Righteous Fury spell by 16%.",
            "While Righteous Fury is active, all damage taken is reduced by 4% and increases the amount of threat generated by your Righteous Fury spell by 33%.",
            "While Righteous Fury is active, all damage taken is reduced by 6% and increases the amount of threat generated by your Righteous Fury spell by 50%."
          ],
          "iconName": "spell_holy_sealoffury",
          "y": 2,
          "x": 1
        },
        {
          "id": 1424,
          "name": "Shield Specialization",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            20148,
            20149,
            20150
          ],
          "descriptions": [
            "Increases the amount of damage absorbed by your shield by 10%.",
            "Increases the amount of damage absorbed by your shield by 20%.",
            "Increases the amount of damage absorbed by your shield by 30%."
          ],
          "iconName": "inv_shield_06",
          "y": 2,
          "x": 2,
          "requirements": {
            "talentId": 1421,
            "talentRank": 5
          }
        },
        {
          "id": 1629,
          "name": "Anticipation",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            20096,
            20097,
            20098,
            20099,
            20100
          ],
          "descriptions": [
            "Increases your Defense skill by 4.",
            "Increases your Defense skill by 8.",
            "Increases your Defense skill by 12.",
            "Increases your Defense skill by 16.",
            "Increases your Defense skill by 20."
          ],
          "iconName": "spell_magic_lesserinvisibilty",
          "y": 2,
          "x": 3
        },
        {
          "id": 1748,
          "name": "Stoicism",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            31844,
            31845
          ],
          "descriptions": [
            "Increases your resistance to Stun effects by an additional 5% and reduces the chance your spells will be dispelled by an additional 15%.",
            "Increases your resistance to Stun effects by an additional 10% and reduces the chance your spells will be dispelled by an additional 30%."
          ],
          "iconName": "spell_holy_stoicism",
          "y": 3,
          "x": 0
        },
        {
          "id": 1521,
          "name": "Improved Hammer of Justice",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            20487,
            20488,
            20489
          ],
          "descriptions": [
            "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
            "Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
            "Decreases the cooldown of your Hammer of Justice spell by 15 sec."
          ],
          "iconName": "spell_holy_sealofmight",
          "y": 3,
          "x": 1
        },
        {
          "id": 1626,
          "name": "Improved Concentration Aura",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            20254,
            20255,
            20256
          ],
          "descriptions": [
            "Increases the effect of your Concentration Aura by an additional 5% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 10%.  The duration reduction does not stack with any other effects.",
            "Increases the effect of your Concentration Aura by an additional 10% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 20%.  The duration reduction does not stack with any other effects.",
            "Increases the effect of your Concentration Aura by an additional 15% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 30%.  The duration reduction does not stack with any other effects."
          ],
          "iconName": "spell_holy_mindsooth",
          "y": 3,
          "x": 2
        },
        {
          "id": 1749,
          "name": "Spell Warding",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            31846,
            31847
          ],
          "descriptions": [
            "All spell damage taken is reduced by 2%.",
            "All spell damage taken is reduced by 4%."
          ],
          "iconName": "spell_holy_improvedresistanceauras",
          "y": 4,
          "x": 0
        },
        {
          "id": 1431,
          "name": "Blessing of Sanctuary",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            20911
          ],
          "descriptions": [
            "Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 10 min.  In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time."
          ],
          "iconName": "spell_nature_lightningshield",
          "y": 4,
          "x": 1
        },
        {
          "id": 1426,
          "name": "Reckoning",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            20177,
            20179,
            20181,
            20180,
            20182
          ],
          "descriptions": [
            "Gives you a 2% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
            "Gives you a 4% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
            "Gives you a 6% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
            "Gives you a 8% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
            "Gives you a 10% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack."
          ],
          "iconName": "spell_holy_blessingofstrength",
          "y": 4,
          "x": 2
        },
        {
          "id": 1750,
          "name": "Sacred Duty",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31848,
            31849
          ],
          "descriptions": [
            "Increases your total Stamina by 3%, reduces the cooldown of your Divine Shield spell by 30 sec and reduces the attack speed penalty by 50%.",
            "Increases your total Stamina by 6%, reduces the cooldown of your Divine Shield spell by 60 sec and reduces the attack speed penalty by 100%."
          ],
          "iconName": "spell_holy_divineintervention",
          "y": 5,
          "x": 0
        },
        {
          "id": 1429,
          "name": "One-Handed Weapon Specialization",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            20196,
            20197,
            20198,
            20199,
            20200
          ],
          "descriptions": [
            "Increases all damage you deal when a one-handed melee weapon is equipped by 1%.",
            "Increases all damage you deal when a one-handed melee weapon is equipped by 2%.",
            "Increases all damage you deal when a one-handed melee weapon is equipped by 3%.",
            "Increases all damage you deal when a one-handed melee weapon is equipped by 4%.",
            "Increases all damage you deal when a one-handed melee weapon is equipped by 5%."
          ],
          "iconName": "inv_sword_20",
          "y": 5,
          "x": 2
        },
        {
          "id": 1829,
          "name": "Improved Holy Shield",
          "maxRank": 2,
          "minPointsRequired": 30,
          "spellIds": [
            41021,
            41026
          ],
          "descriptions": [
            "Increases damage caused by your Holy Shield by 10% and increases the number of charges of your Holy Shield by 2.",
            "Increases damage caused by your Holy Shield by 20% and increases the number of charges of your Holy Shield by 4."
          ],
          "iconName": "classic_spell_holy_blessingofprotection",
          "y": 6,
          "x": 0,
          "requirements": {
            "talentId": 1430,
            "talentRank": 1
          }
        },
        {
          "id": 1430,
          "name": "Holy Shield",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            20925
          ],
          "descriptions": [
            "Increases chance to block by 30% for 10 sec and deals 59 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 35% additional threat. Each block expends a charge. 4 charges."
          ],
          "iconName": "classic_spell_holy_blessingofprotection",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 1431,
            "talentRank": 1
          },
          "talentLink": "Blessing of Sanctuary"
        },
        {
          "id": 1751,
          "name": "Ardent Defender",
          "maxRank": 5,
          "minPointsRequired": 30,
          "spellIds": [
            31850,
            31851,
            31852,
            31853,
            31854
          ],
          "descriptions": [
            "When you have less than 35% health, all damage taken is reduced by 6%.",
            "When you have less than 35% health, all damage taken is reduced by 12%.",
            "When you have less than 35% health, all damage taken is reduced by 18%.",
            "When you have less than 35% health, all damage taken is reduced by 24%.",
            "When you have less than 35% health, all damage taken is reduced by 30%."
          ],
          "iconName": "spell_holy_ardentdefender",
          "y": 6,
          "x": 2
        },
        {
          "id": 1753,
          "name": "Combat Expertise",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31858,
            31859,
            31860,
            31861,
            31862
          ],
          "descriptions": [
            "Increases your expertise by 1 and your total Stamina by 2%.",
            "Increases your expertise by 2 and your total Stamina by 4%.",
            "Increases your expertise by 3 and your total Stamina by 6%.",
            "Increases your expertise by 4 and your total Stamina by 8%.",
            "Increases your expertise by 5 and your total Stamina by 10%."
          ],
          "iconName": "spell_holy_weaponmastery",
          "y": 7,
          "x": 2
        },
        {
          "id": 1754,
          "name": "Avenger's Shield",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            31935
          ],
          "descriptions": [
            "Hurls a holy shield at the enemy, dealing 270 to 330 Holy damage, dazing them and then jumping to nearby enemies. Affects 3 total targets. Lasts 6 sec."
          ],
          "iconName": "spell_holy_avengersshield",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 1430,
            "talentRank": 1
          },
          "talentLink": "Holy Shield"
        }
      ]
    },
    {
      "name": "Retribution",
      "talents": [
        {
          "id": 1401,
          "name": "Improved Blessing of Might",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            20042,
            20045,
            20046,
            20047,
            20048
          ],
          "descriptions": [
            "Increases the melee attack power bonus of your Blessing of Might by 4%.",
            "Increases the melee attack power bonus of your Blessing of Might by 8%.",
            "Increases the melee attack power bonus of your Blessing of Might by 12%.",
            "Increases the melee attack power bonus of your Blessing of Might by 16%.",
            "Increases the melee attack power bonus of your Blessing of Might by 20%."
          ],
          "iconName": "spell_holy_fistofjustice",
          "y": 0,
          "x": 1
        },
        {
          "id": 1407,
          "name": "Benediction",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            20101,
            20102,
            20103,
            20104,
            20105
          ],
          "descriptions": [
            "Reduces the Mana cost of your Judgement and Seal spells by 3%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 6%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 9%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 12%.",
            "Reduces the Mana cost of your Judgement and Seal spells by 15%."
          ],
          "iconName": "spell_frost_windwalkon",
          "y": 0,
          "x": 2
        },
        {
          "id": 1631,
          "name": "Improved Judgement",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            25956,
            25957
          ],
          "descriptions": [
            "Decreases the cooldown of your Judgement spell by 1 sec.",
            "Decreases the cooldown of your Judgement spell by 2 sec."
          ],
          "iconName": "spell_holy_righteousfury",
          "y": 1,
          "x": 0
        },
        {
          "id": 1464,
          "name": "Improved Seal of the Crusader",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            20335,
            20336,
            20337
          ],
          "descriptions": [
            "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 1%.",
            "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 2%.",
            "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 3%."
          ],
          "iconName": "spell_holy_holysmite",
          "y": 1,
          "x": 1
        },
        {
          "id": 1403,
          "name": "Deflection",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            20060,
            20061,
            20062,
            20063,
            20064
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
          "x": 2
        },
        {
          "id": 1633,
          "name": "Vindication",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            9452,
            26016,
            26021
          ],
          "descriptions": [
            "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 5% for 10 sec.",
            "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 10% for 10 sec.",
            "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 15% for 10 sec."
          ],
          "iconName": "spell_holy_vindication",
          "y": 2,
          "x": 0
        },
        {
          "id": 1411,
          "name": "Conviction",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            20117,
            20118,
            20119,
            20120,
            20121
          ],
          "descriptions": [
            "Increases your chance to get a critical strike with melee weapons by 1%.",
            "Increases your chance to get a critical strike with melee weapons by 2%.",
            "Increases your chance to get a critical strike with melee weapons by 3%.",
            "Increases your chance to get a critical strike with melee weapons by 4%.",
            "Increases your chance to get a critical strike with melee weapons by 5%."
          ],
          "iconName": "spell_holy_retributionaura",
          "y": 2,
          "x": 1
        },
        {
          "id": 1481,
          "name": "Seal of Command",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            20375
          ],
          "descriptions": [
            "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.<br><br>Unleashing this Seal's energy will judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated."
          ],
          "iconName": "ability_warrior_innerrage",
          "y": 2,
          "x": 2
        },
        {
          "id": 1634,
          "name": "Pursuit of Justice",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            26022,
            26023,
            44414
          ],
          "descriptions": [
            "Reduces the chance you'll be hit by spells by 1% and increases movement and mounted movement speed by 5%.  This does not stack with other movement speed increasing effects.",
            "Reduces the chance you'll be hit by spells by 2% and increases movement and mounted movement speed by 10%.  This does not stack with other movement speed increasing effects.",
            "Reduces the chance you'll be hit by spells by 3% and increases movement and mounted movement speed by 15%.  This does not stack with other movement speed increasing effects."
          ],
          "iconName": "spell_holy_persuitofjustice",
          "y": 2,
          "x": 3
        },
        {
          "id": 1632,
          "name": "Eye for an Eye",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            9799,
            25988
          ],
          "descriptions": [
            "All spell criticals against you cause 15% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
            "All spell criticals against you cause 30% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
          ],
          "iconName": "spell_holy_eyeforaneye",
          "y": 3,
          "x": 0
        },
        {
          "id": 1405,
          "name": "Improved Retribution Aura",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            20091,
            20092
          ],
          "descriptions": [
            "Increases the damage done by your Retribution Aura by 25%.",
            "Increases the damage done by your Retribution Aura by 50%."
          ],
          "iconName": "spell_holy_auraoflight",
          "y": 3,
          "x": 2
        },
        {
          "id": 1755,
          "name": "Crusade",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            31866,
            31867,
            31868
          ],
          "descriptions": [
            "Increases all damage caused against Humanoids, Demons, Undead and Elementals by 1%.",
            "Increases all damage caused against Humanoids, Demons, Undead and Elementals by 2%.",
            "Increases all damage caused against Humanoids, Demons, Undead and Elementals by 3%."
          ],
          "iconName": "spell_holy_crusade",
          "y": 3,
          "x": 3
        },
        {
          "id": 1410,
          "name": "Two-Handed Weapon Specialization",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            20111,
            20112,
            20113
          ],
          "descriptions": [
            "Increases the damage you deal with two-handed melee weapons by 2%.",
            "Increases the damage you deal with two-handed melee weapons by 4%.",
            "Increases the damage you deal with two-handed melee weapons by 6%."
          ],
          "iconName": "inv_hammer_04",
          "y": 4,
          "x": 0
        },
        {
          "id": 1409,
          "name": "Sanctity Aura",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            20218
          ],
          "descriptions": [
            "Increases Holy damage done by party members within 30 yards by 10%. Players may only have one Aura on them per Paladin at any one time."
          ],
          "iconName": "spell_holy_mindvision",
          "y": 4,
          "x": 2
        },
        {
          "id": 1756,
          "name": "Improved Sanctity Aura",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            31869,
            31870
          ],
          "descriptions": [
            "The amount of damage caused by targets affected by Sanctity Aura is increased by 1%.",
            "The amount of damage caused by targets affected by Sanctity Aura is increased by 2%."
          ],
          "iconName": "spell_holy_mindvision",
          "y": 4,
          "x": 3,
          "requirements": {
            "talentId": 1409,
            "talentRank": 1
          }
        },
        {
          "id": 1402,
          "name": "Vengeance",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            20049,
            20056,
            20057,
            20058,
            20059
          ],
          "descriptions": [
            "Gives you a 1% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times",
            "Gives you a 2% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times",
            "Gives you a 3% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times",
            "Gives you a 4% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times",
            "Gives you a 5% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times"
          ],
          "iconName": "ability_racial_avatar",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 1411,
            "talentRank": 5
          },
          "talentLink": "Conviction"
        },
        {
          "id": 1758,
          "name": "Sanctified Judgement",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            31876,
            31877,
            31878
          ],
          "descriptions": [
            "Gives your Judgement spell a 33% chance to return 80% of the mana cost of the judged seal.",
            "Gives your Judgement spell a 66% chance to return 80% of the mana cost of the judged seal.",
            "Gives your Judgement spell a 100% chance to return 80% of the mana cost of the judged seal."
          ],
          "iconName": "spell_holy_righteousfury",
          "y": 5,
          "x": 2
        },
        {
          "id": 1761,
          "name": "Sanctified Seals",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            32043,
            35396,
            35397
          ],
          "descriptions": [
            "Increases your chance to critically hit with all spells and melee attacks by 1% and reduces the chance your Seals will be dispelled by 33%.",
            "Increases your chance to critically hit with all spells and melee attacks by 2% and reduces the chance your Seals will be dispelled by 66%.",
            "Increases your chance to critically hit with all spells and melee attacks by 3% and reduces the chance your Seals will be dispelled by 100%."
          ],
          "iconName": "spell_holy_holysmite",
          "y": 6,
          "x": 0
        },
        {
          "id": 1441,
          "name": "Repentance",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            20066
          ],
          "descriptions": [
            "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids."
          ],
          "iconName": "spell_holy_prayerofhealing",
          "y": 6,
          "x": 1
        },
        {
          "id": 1757,
          "name": "Divine Purpose",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            31871,
            31872,
            31873
          ],
          "descriptions": [
            "Melee and ranged critical strikes against you cause 4% less damage.",
            "Melee and ranged critical strikes against you cause 7% less damage.",
            "Melee and ranged critical strikes against you cause 10% less damage."
          ],
          "iconName": "spell_holy_divinepurpose",
          "y": 6,
          "x": 2
        },
        {
          "id": 1759,
          "name": "Fanaticism",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31879,
            31880,
            31881,
            31882,
            31883
          ],
          "descriptions": [
            "Increases the critical strike chance of all Judgements capable of a critical hit by 3% and reduces threat caused by all actions by 6%.",
            "Increases the critical strike chance of all Judgements capable of a critical hit by 6% and reduces threat caused by all actions by 12%.",
            "Increases the critical strike chance of all Judgements capable of a critical hit by 9% and reduces threat caused by all actions by 18%.",
            "Increases the critical strike chance of all Judgements capable of a critical hit by 12% and reduces threat caused by all actions by 24%.",
            "Increases the critical strike chance of all Judgements capable of a critical hit by 15% and reduces threat caused by all actions by 30%."
          ],
          "iconName": "spell_holy_fanaticism",
          "y": 7,
          "x": 1,
          "requirements": {
            "talentId": 1441,
            "talentRank": 1
          }
        },
        {
          "id": 1823,
          "name": "Crusader Strike",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            35395
          ],
          "descriptions": [
            "Requires Melee Weapon<br>An instant strike that causes weapon damage plus 110% weapon damage and refreshes all Judgements on the target."
          ],
          "iconName": "spell_holy_crusaderstrike",
          "y": 8,
          "x": 1
        }
      ]
    }
  ]
};
