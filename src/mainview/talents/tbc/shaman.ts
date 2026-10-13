import { CharacterClass, ClassData, TalentData, TalentTreeData } from "../../../types";

export const shamanData: ClassData = {
  name: "Shaman",
  talentTrees: [
    {
      "name": "Elemental",
      "talents": [
        {
          "id": 564,
          "name": "Convection",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16039,
            16109,
            16110,
            16111,
            16112
          ],
          "descriptions": [
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 2%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 4%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 6%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 8%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 10%."
          ],
          "iconName": "spell_nature_wispsplode",
          "y": 0,
          "x": 1
        },
        {
          "id": 563,
          "name": "Concussion",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16035,
            16105,
            16106,
            16107,
            16108
          ],
          "descriptions": [
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 1%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 2%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 3%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 4%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 5%."
          ],
          "iconName": "spell_fire_fireball",
          "y": 0,
          "x": 2
        },
        {
          "id": 572,
          "name": "Earth's Grasp",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            16043,
            16130
          ],
          "descriptions": [
            "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
            "Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%."
          ],
          "iconName": "spell_nature_stoneclawtotem",
          "y": 1,
          "x": 0
        },
        {
          "id": 1640,
          "name": "Elemental Warding",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            28996,
            28997,
            28998
          ],
          "descriptions": [
            "Reduces damage taken from Fire, Frost and Nature effects by 4%.",
            "Reduces damage taken from Fire, Frost and Nature effects by 7%.",
            "Reduces damage taken from Fire, Frost and Nature effects by 10%."
          ],
          "iconName": "spell_nature_spiritarmor",
          "y": 1,
          "x": 1
        },
        {
          "id": 561,
          "name": "Call of Flame",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16038,
            16160,
            16161
          ],
          "descriptions": [
            "Increases the damage done by your Fire Totems by 5%.",
            "Increases the damage done by your Fire Totems by 10%.",
            "Increases the damage done by your Fire Totems by 15%."
          ],
          "iconName": "spell_fire_immolation",
          "y": 1,
          "x": 2
        },
        {
          "id": 574,
          "name": "Elemental Focus",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            16164
          ],
          "descriptions": [
            "After landing a critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state.  The Clearcasting state reduces the mana cost of your next 2 damage spells by 40%."
          ],
          "iconName": "spell_shadow_manaburn",
          "y": 2,
          "x": 0
        },
        {
          "id": 575,
          "name": "Reverberation",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            16040,
            16113,
            16114,
            16115,
            16116
          ],
          "descriptions": [
            "Reduces the cooldown of your Shock spells by 0.2 sec.",
            "Reduces the cooldown of your Shock spells by 0.4 sec.",
            "Reduces the cooldown of your Shock spells by 0.6 sec.",
            "Reduces the cooldown of your Shock spells by 0.8 sec.",
            "Reduces the cooldown of your Shock spells by 1 sec."
          ],
          "iconName": "spell_frost_frostward",
          "y": 2,
          "x": 1
        },
        {
          "id": 562,
          "name": "Call of Thunder",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            16041,
            16117,
            16118,
            16119,
            16120
          ],
          "descriptions": [
            "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 1%.",
            "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 2%.",
            "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 3%.",
            "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 4%.",
            "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 5%."
          ],
          "iconName": "spell_nature_callstorm",
          "y": 2,
          "x": 2
        },
        {
          "id": 567,
          "name": "Improved Fire Nova Totem",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            16086,
            16544
          ],
          "descriptions": [
            "Reduces the delay before your Fire Nova Totem activates by 1 sec. and decreases the threat generated by your Magma Totem by 25%.",
            "Reduces the delay before your Fire Nova Totem activates by 2 sec. and decreases the threat generated by your Magma Totem by 50%."
          ],
          "iconName": "spell_fire_sealoffire",
          "y": 3,
          "x": 0
        },
        {
          "id": 1642,
          "name": "Eye of the Storm",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            29062,
            29064,
            29065
          ],
          "descriptions": [
            "Gives you a 33% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.",
            "Gives your a 66% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.",
            "Gives your a 100% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage."
          ],
          "iconName": "spell_shadow_soulleech_2",
          "y": 3,
          "x": 1
        },
        {
          "id": 1645,
          "name": "Elemental Devastation",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            30160,
            29179,
            29180
          ],
          "descriptions": [
            "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
            "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 6% for 10 sec.",
            "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 9% for 10 sec."
          ],
          "iconName": "classic_spell_fire_elementaldevastation",
          "y": 3,
          "x": 3
        },
        {
          "id": 1641,
          "name": "Storm Reach",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            28999,
            29000
          ],
          "descriptions": [
            "Increases the range of your Lightning Bolt and Chain Lightning spells by 3 yards.",
            "Increases the range of your Lightning Bolt and Chain Lightning spells by 6 yards."
          ],
          "iconName": "spell_nature_stormreach",
          "y": 4,
          "x": 0
        },
        {
          "id": 565,
          "name": "Elemental Fury",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            16089
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%."
          ],
          "iconName": "spell_fire_volcano",
          "y": 4,
          "x": 1
        },
        {
          "id": 1682,
          "name": "Unrelenting Storm",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            30664,
            30665,
            30666,
            30667,
            30668
          ],
          "descriptions": [
            "Regenerate mana equal to 2% of your Intellect every 5 sec, even while casting.",
            "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
            "Regenerate mana equal to 6% of your Intellect every 5 sec, even while casting.",
            "Regenerate mana equal to 8% of your Intellect every 5 sec, even while casting.",
            "Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting."
          ],
          "iconName": "spell_nature_unrelentingstorm",
          "y": 4,
          "x": 3
        },
        {
          "id": 1685,
          "name": "Elemental Precision",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            30672,
            30673,
            30674
          ],
          "descriptions": [
            "Increases your chance to hit with Fire, Frost, and Nature spells by 2% and reduces the threat caused by Fire, Frost, and Nature spells by 4%.",
            "Increases your chance to hit with Fire, Frost, and Nature spells by 4% and reduces the threat caused by Fire, Frost, and Nature spells by 7%.",
            "Increases your chance to hit with Fire, Frost, and Nature spells by 6% and reduces the threat caused by Fire, Frost, and Nature spells by 10%."
          ],
          "iconName": "spell_nature_elementalprecision_1",
          "y": 5,
          "x": 0
        },
        {
          "id": 721,
          "name": "Lightning Mastery",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            16578,
            16579,
            16580,
            16581,
            16582
          ],
          "descriptions": [
            "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.1 sec.",
            "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.2 sec.",
            "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.3 sec.",
            "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.4 sec.",
            "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.5 sec."
          ],
          "iconName": "spell_lightning_lightningbolt01",
          "y": 5,
          "x": 2,
          "requirements": {
            "talentId": 562,
            "talentRank": 5
          },
          "talentLink": "Call of Thunder"
        },
        {
          "id": 573,
          "name": "Elemental Mastery",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            16166
          ],
          "descriptions": [
            "When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%."
          ],
          "iconName": "spell_nature_wispheal",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 565,
            "talentRank": 1
          },
          "talentLink": "Elemental Fury"
        },
        {
          "id": 1683,
          "name": "Elemental Shields",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            30669,
            30670,
            30671
          ],
          "descriptions": [
            "Reduces the chance you will be critically hit by melee and ranged attacks by 2%.",
            "Reduces the chance you will be critically hit by melee and ranged attacks by 4%.",
            "Reduces the chance you will be critically hit by melee and ranged attacks by 6%."
          ],
          "iconName": "spell_nature_elementalshields",
          "y": 6,
          "x": 2
        },
        {
          "id": 1686,
          "name": "Lightning Overload",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            30675,
            30678,
            30679,
            30680,
            30681
          ],
          "descriptions": [
            "Gives your Lightning Bolt and Chain Lightning spells a 4% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "Gives your Lightning Bolt and Chain Lightning spells a 8% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "Gives your Lightning Bolt and Chain Lightning spells a 12% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "Gives your Lightning Bolt and Chain Lightning spells a 16% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "Gives your Lightning Bolt and Chain Lightning spells a 20% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat."
          ],
          "iconName": "spell_nature_lightningoverload",
          "y": 7,
          "x": 1,
        },
        {
          "id": 1687,
          "name": "Totem of Wrath",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            30706
          ],
          "descriptions": [
            "Tools: Fire Totem<br>Summons a Totem of Wrath with 5 health at the feet of the caster. The totem increases the chance to hit and critically hit with spells by 3% to all party members if they are within 20 yards. Lasts 2 min."
          ],
          "iconName": "spell_fire_totemofwrath",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 2068,
            "talentRank": 1
          },

        },
      ]
    },
    {
      "name": "Enhancement",
      "talents": [
        {
          "id": 614,
          "name": "Ancestral Knowledge",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            17485,
            17486,
            17487,
            17488,
            17489
          ],
          "descriptions": [
            "Increases your maximum Mana by 1%.",
            "Increases your maximum Mana by 2%.",
            "Increases your maximum Mana by 3%.",
            "Increases your maximum Mana by 4%.",
            "Increases your maximum Mana by 5%."
          ],
          "iconName": "spell_shadow_grimward",
          "y": 0,
          "x": 1
        },
        {
          "id": 612,
          "name": "Shield Specialization",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16253,
            16298,
            16299,
            16300,
            16301
          ],
          "descriptions": [
            "Increases your chance to block attacks with a shield by 1% and increases the amount blocked by 5%.",
            "Increases your chance to block attacks with a shield by 2% and increases the amount blocked by 10%.",
            "Increases your chance to block attacks with a shield by 3% and increases the amount blocked by 15%.",
            "Increases your chance to block attacks with a shield by 4% and increases the amount blocked by 20%.",
            "Increases your chance to block attacks with a shield by 5% and increases the amount blocked by 25%."
          ],
          "iconName": "inv_shield_06",
          "y": 0,
          "x": 2
        },
        {
          "id": 609,
          "name": "Guardian Totems",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            16258,
            16293
          ],
          "descriptions": [
            "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
            "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 20% and reduces the cooldown of your Grounding Totem by 2 sec."
          ],
          "iconName": "spell_nature_stoneskintotem",
          "y": 1,
          "x": 0
        },
        {
          "id": 613,
          "name": "Thundering Strikes",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            16255,
            16302,
            16303,
            16304,
            16305
          ],
          "descriptions": [
            "Improves your chance to get a critical strike with your weapon attacks by 1%.",
            "Improves your chance to get a critical strike with your weapon attacks by 2%.",
            "Improves your chance to get a critical strike with your weapon attacks by 3%.",
            "Improves your chance to get a critical strike with your weapon attacks by 4%.",
            "Improves your chance to get a critical strike with your weapon attacks by 5%."
          ],
          "iconName": "ability_thunderbolt",
          "y": 1,
          "x": 1
        },
        {
          "id": 605,
          "name": "Improved Ghost Wolf",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            16262,
            16287
          ],
          "descriptions": [
            "Reduces the cast time of your Ghost Wolf spell by 1 sec.",
            "Reduces the cast time of your Ghost Wolf spell by 2 sec."
          ],
          "iconName": "spell_nature_spiritwolf",
          "y": 1,
          "x": 2
        },
        {
          "id": 607,
          "name": "Improved Lightning Shield",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16261,
            16290,
            16291
          ],
          "descriptions": [
            "Increases the damage done by your Lightning Shield orbs by 5%.",
            "Increases the damage done by your Lightning Shield orbs by 10%.",
            "Increases the damage done by your Lightning Shield orbs by 15%."
          ],
          "iconName": "spell_nature_lightningshield",
          "y": 1,
          "x": 3
        },
        {
          "id": 610,
          "name": "Enhancing Totems",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            16259,
            16295
          ],
          "descriptions": [
            "Increases the effect of your Strength of Earth and Grace of Air Totems by 8%.",
            "Increases the effect of your Strength of Earth and Grace of Air Totems by 15%."
          ],
          "iconName": "spell_nature_earthbindtotem",
          "y": 2,
          "x": 0
        },
        {
          "id": 617,
          "name": "Shamanistic Focus",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            43338
          ],
          "descriptions": [
            "After landing a melee critical strike, you enter a Focused state. The Focused state reduces the mana cost of your next Shock spell by 60%."
          ],
          "iconName": "spell_nature_elementalabsorption",
          "y": 2,
          "x": 2
        },
        {
          "id": 601,
          "name": "Anticipation",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            16254,
            16271,
            16272,
            16273,
            16274
          ],
          "descriptions": [
            "Increases your chance to dodge by an additional 1%.",
            "Increases your chance to dodge by an additional 2%",
            "Increases your chance to dodge by an additional 3%",
            "Increases your chance to dodge by an additional 4%",
            "Increases your chance to dodge by an additional 5%"
          ],
          "iconName": "spell_nature_mirrorimage",
          "y": 2,
          "x": 3
        },
        {
          "id": 602,
          "name": "Flurry",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            16256,
            16281,
            16282,
            16283,
            16284
          ],
          "descriptions": [
            "Increases your attack speed by 10% for your next 3 swings after dealing a critical strike.",
            "Increases your attack speed by 15% for your next 3 swings after dealing a critical strike.",
            "Increases your attack speed by 20% for your next 3 swings after dealing a critical strike.",
            "Increases your attack speed by 25% for your next 3 swings after dealing a critical strike.",
            "Increases your attack speed by 30% for your next 3 swings after dealing a critical strike."
          ],
          "iconName": "ability_ghoulfrenzy",
          "y": 3,
          "x": 1,
          "requirements": {
            "talentId": 613,
            "talentRank": 5
          },
          "talentLink": "Thundering Strikes"
        },
        {
          "id": 615,
          "name": "Toughness",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            16252,
            16306,
            16307,
            16308,
            16309
          ],
          "descriptions": [
            "Increases your armor value from items by 2% and reduces the duration of movement slowing effects on you by 10%.",
            "Increases your armor value from items by 4% and reduces the duration of movement slowing effects on you by 20%.",
            "Increases your armor value from items by 6% and reduces the duration of movement slowing effects on you by 30%.",
            "Increases your armor value from items by 8% and reduces the duration of movement slowing effects on you by 40%.",
            "Increases your armor value from items by 10% and reduces the duration of movement slowing effects on you by 50%."
          ],
          "iconName": "spell_holy_devotion",
          "y": 3,
          "x": 2
        },
        {
          "id": 1647,
          "name": "Improved Weapon Totems",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            29192,
            29193
          ],
          "descriptions": [
            "Increases the melee attack power bonus of your Windfury Totem by 15% and increases the damage caused by your Flametongue Totem by 6%",
            "Increases the melee attack power bonus of your Windfury Totem by 30% and increases the damage caused by your Flametongue Totem by 12%"
          ],
          "iconName": "spell_fire_enchantweapon",
          "y": 4,
          "x": 0
        },
        {
          "id": 616,
          "name": "Spirit Weapons",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            16268
          ],
          "descriptions": [
            "Gives a chance to parry enemy melee attacks and reduces the threat generated by your melee attacks by 30%."
          ],
          "iconName": "ability_parry",
          "y": 4,
          "x": 1
        },
        {
          "id": 611,
          "name": "Elemental Weapons",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            16266,
            29079,
            29080
          ],
          "descriptions": [
            "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
            "Increases the melee attack power bonus of your Rockbiter Weapon by 14%, your Windfury Weapon effect by 27% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 10%.",
            "Increases the melee attack power bonus of your Rockbiter Weapon by 20%, your Windfury Weapon effect by 40% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 15%."
          ],
          "iconName": "spell_fire_flametounge",
          "y": 4,
          "x": 2
        },
        {
          "id": 1691,
          "name": "Mental Quickness",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            30812,
            30813,
            30814
          ],
          "descriptions": [
            "Reduces the mana cost of your instant cast spells by 2% and increases your spell damage and healing by an amount equal to 10% of your attack power.",
            "Reduces the mana cost of your instant cast spells by 4% and increases your spell damage and healing by an amount equal to 20% of your attack power.",
            "Reduces the mana cost of your instant cast spells by 6% and increases your spell damage and healing by an amount equal to 30% of your attack power."
          ],
          "iconName": "spell_nature_mentalquickness",
          "y": 5,
          "x": 0
        },
        {
          "id": 1643,
          "name": "Weapon Mastery",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            29082,
            29084,
            29086,
            29087,
            29088
          ],
          "descriptions": [
            "Increases the damage you deal with all weapons by 2%.",
            "Increases the damage you deal with all weapons by 4%.",
            "Increases the damage you deal with all weapons by 6%.",
            "Increases the damage you deal with all weapons by 8%.",
            "Increases the damage you deal with all weapons by 10%."
          ],
          "iconName": "ability_hunter_swiftstrike",
          "y": 5,
          "x": 3
        },
        {
          "id": 1692,
          "name": "Dual Wield Specialization",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            30816,
            30818,
            30819
          ],
          "descriptions": [
            "Increases your chance to hit while dual wielding by an additional 2%.",
            "Increases your chance to hit while dual wielding by an additional 4%.",
            "Increases your chance to hit while dual wielding by an additional 6%."
          ],
          "iconName": "ability_dualwieldspecialization",
          "y": 6,
          "x": 0,
          "requirements": {
            "talentId": 1690,
            "talentRank": 1
          }
        },
        {
          "id": 1690,
          "name": "Dual Wield",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            30798
          ],
          "descriptions": [
            "Allows one-hand and off-hand weapons to be equipped in the off-hand."
          ],
          "iconName": "ability_dualwield",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 616,
            "talentRank": 1
          },
          "talentLink": "Spirit Weapons"
        },
        {
          "id": 901,
          "name": "Stormstrike",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            17364
          ],
          "descriptions": [
            "Instantly attack with both weapons. In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 sec."
          ],
          "iconName": "spell_holy_sealofmight",
          "y": 6,
          "x": 2,
          "requirements": {
            "talentId": 611,
            "talentRank": 3
          },
          "talentLink": "Elemental Weapons"
        },
        {
          "id": 1689,
          "name": "Unleashed Rage",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            30802,
            30808,
            30809,
            30810,
            30811
          ],
          "descriptions": [
            "Causes your critical hits with melee attacks to increase all party members' attack power by 2% if within 20 yards of the Shaman. Lasts 10 sec.",
            "Causes your critical hits with melee attacks to increase all party members' attack power by 4% if within 20 yards of the Shaman. Lasts 10 sec.",
            "Causes your critical hits with melee attacks to increase all party members' attack power by 6% if within 20 yards of the Shaman. Lasts 10 sec.",
            "Causes your critical hits with melee attacks to increase all party members' attack power by 8% if within 20 yards of the Shaman. Lasts 10 sec.",
            "Causes your critical hits with melee attacks to increase all party members' attack power by 10% if within 20 yards of the Shaman. Lasts 10 sec."
          ],
          "iconName": "spell_nature_unleashedrage",
          "y": 7,
          "x": 1
        },
        {
          "id": 1693,
          "name": "Shamanistic Rage",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            30823
          ],
          "descriptions": [
            "Reduces all damage taken by 30% and gives your successful melee attacks a chance to regenerate mana equal to 15% of your attack power.  Lasts 30 sec."
          ],
          "iconName": "spell_nature_shamanrage",
          "y": 8,
          "x": 1
        }
      ]
    },
    {
      "name": "Restoration",
      "talents": [
        {
          "id": 586,
          "name": "Improved Healing Wave",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16182,
            16226,
            16227,
            16228,
            16229
          ],
          "descriptions": [
            "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.2 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.3 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.4 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.5 sec."
          ],
          "iconName": "spell_nature_magicimmunity",
          "y": 0,
          "x": 1
        },
        {
          "id": 593,
          "name": "Tidal Focus",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16179,
            16214,
            16215,
            16216,
            16217
          ],
          "descriptions": [
            "Reduces the Mana cost of your healing spells by 1%.",
            "Reduces the Mana cost of your healing spells by 2%.",
            "Reduces the Mana cost of your healing spells by 3%.",
            "Reduces the Mana cost of your healing spells by 4%.",
            "Reduces the Mana cost of your healing spells by 5%."
          ],
          "iconName": "spell_frost_manarecharge",
          "y": 0,
          "x": 2
        },
        {
          "id": 589,
          "name": "Improved Reincarnation",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            16184,
            16209
          ],
          "descriptions": [
            "Reduces the cooldown of your Reincarnation spell by 10 min and increases the amount of health and mana you reincarnate with by an additional 10%.",
            "Reduces the cooldown of your Reincarnation spell by 20 min and increases the amount of health and mana you reincarnate with by an additional 20%."
          ],
          "iconName": "spell_nature_reincarnation",
          "y": 1,
          "x": 0
        },
        {
          "id": 581,
          "name": "Ancestral Healing",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16176,
            16235,
            16240
          ],
          "descriptions": [
            "Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
            "Increases your target's armor value by 16% for 15 sec after getting a critical effect from one of your healing spells.",
            "Increases your target's armor value by 25% for 15 sec after getting a critical effect from one of your healing spells."
          ],
          "iconName": "spell_nature_undyingstrength",
          "y": 1,
          "x": 1
        },
        {
          "id": 595,
          "name": "Totemic Focus",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            16173,
            16222,
            16223,
            16224,
            16225
          ],
          "descriptions": [
            "Reduces the Mana cost of your totems by 5%.",
            "Reduces the Mana cost of your totems by 10%.",
            "Reduces the Mana cost of your totems by 15%.",
            "Reduces the Mana cost of your totems by 20%.",
            "Reduces the Mana cost of your totems by 25%."
          ],
          "iconName": "spell_nature_moonglow",
          "y": 1,
          "x": 2
        },
        {
          "id": 583,
          "name": "Nature's Guidance",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            16180,
            16196,
            16198
          ],
          "descriptions": [
            "Increases your chance to hit with melee attacks and spells by 1%",
            "Increases your chance to hit with melee attacks and spells by 2%",
            "Increases your chance to hit with melee attacks and spells by 3%"
          ],
          "iconName": "spell_frost_stun",
          "y": 2,
          "x": 0
        },
        {
          "id": 587,
          "name": "Healing Focus",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            16181,
            16230,
            16232,
            16233,
            16234
          ],
          "descriptions": [
            "Gives you a 14% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
            "Gives you a 28% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
            "Gives you a 42% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
            "Gives you a 56% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting any Shaman healing spell."
          ],
          "iconName": "spell_nature_healingwavelesser",
          "y": 2,
          "x": 1
        },
        {
          "id": 582,
          "name": "Totemic Mastery",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            16189
          ],
          "descriptions": [
            "The radius of your totems that affect friendly targets is increased to 30 yd."
          ],
          "iconName": "spell_nature_nullward",
          "y": 2,
          "x": 2
        },
        {
          "id": 1646,
          "name": "Healing Grace",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            29187,
            29189,
            29191
          ],
          "descriptions": [
            "Reduces the threat generated by your healing spells by 5%.",
            "Reduces the threat generated by your healing spells by 10%.",
            "Reduces the threat generated by your healing spells by 15%."
          ],
          "iconName": "spell_nature_healingtouch",
          "y": 2,
          "x": 3
        },
        {
          "id": 588,
          "name": "Restorative Totems",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            16187,
            16205,
            16206,
            16207,
            16208
          ],
          "descriptions": [
            "Increases the effect of your Mana Spring and Healing Stream Totems by 5%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 10%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 15%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 20%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 25%."
          ],
          "iconName": "spell_nature_manaregentotem",
          "y": 3,
          "x": 1
        },
        {
          "id": 594,
          "name": "Tidal Mastery",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            16194,
            16218,
            16219,
            16220,
            16221
          ],
          "descriptions": [
            "Increases the critical effect chance of your healing and lightning spells by 1%.",
            "Increases the critical effect chance of your healing and lightning spells by 2%.",
            "Increases the critical effect chance of your healing and lightning spells by 3%.",
            "Increases the critical effect chance of your healing and lightning spells by 4%.",
            "Increases the critical effect chance of your healing and lightning spells by 5%."
          ],
          "iconName": "spell_nature_tranquility",
          "y": 3,
          "x": 2
        },
        {
          "id": 1648,
          "name": "Healing Way",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            29206,
            29205,
            29202
          ],
          "descriptions": [
            "Your Healing Wave spells have a 33% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times.",
            "Your Healing Wave spells have a 66% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times.",
            "Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times."
          ],
          "iconName": "classic_spell_nature_healingway",
          "y": 4,
          "x": 0
        },
        {
          "id": 591,
          "name": "Nature's Swiftness",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            16188
          ],
          "descriptions": [
            "When activated, your next Nature spell with a casting time less then 10 sec becomes an instant cast spell."
          ],
          "iconName": "spell_nature_ravenform",
          "y": 4,
          "x": 2
        },
        {
          "id": 1695,
          "name": "Focused Mind",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            30864,
            30865,
            30866
          ],
          "descriptions": [
            "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 5%. This effect does not stack with other similar effects.",
            "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 10%. This effect does not stack with other similar effects.",
            "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 15%. This effect does not stack with other similar effects."
          ],
          "iconName": "spell_nature_focusedmind",
          "y": 4,
          "x": 3
        },
        {
          "id": 592,
          "name": "Purification",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            16178,
            16210,
            16211,
            16212,
            16213
          ],
          "descriptions": [
            "Increases the effectiveness of your healing spells by 2%.",
            "Increases the effectiveness of your healing spells by 4%.",
            "Increases the effectiveness of your healing spells by 6%.",
            "Increases the effectiveness of your healing spells by 8%.",
            "Increases the effectiveness of your healing spells by 10%."
          ],
          "iconName": "spell_frost_wizardmark",
          "y": 5,
          "x": 2
        },
        {
          "id": 590,
          "name": "Mana Tide Totem",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            16190
          ],
          "descriptions": [
            "Tools: Water Totem<br>Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 6% of total mana every 3 seconds to group members within 20 yards."
          ],
          "iconName": "spell_frost_summonwaterelemental",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 588,
            "talentRank": 5
          },
          "talentLink": "Restorative Totems"
        },
        {
          "id": 1699,
          "name": "Nature's Guardian",
          "maxRank": 5,
          "minPointsRequired": 30,
          "spellIds": [
            30881,
            30883,
            30884,
            30885,
            30886
          ],
          "descriptions": [
            "Whenever a damaging attack is taken that reduces you below 30% health, you have a 10% chance to heal 10% of your total health and reduce your threat level on that target. 5 second cooldown.",
            "Whenever a damaging attack is taken that reduces you below 30% health, you have a 20% chance to heal 10% of your total health and reduce your threat level on that target. 5 second cooldown.",
            "Whenever a damaging attack is taken that reduces you below 30% health, you have a 30% chance to heal 10% of your total health and reduce your threat level on that target. 5 second cooldown.",
            "Whenever a damaging attack is taken that reduces you below 30% health, you have a 40% chance to heal 10% of your total health and reduce your threat level on that target. 5 second cooldown.",
            "Whenever a damaging attack is taken that reduces you below 30% health, you have a 50% chance to heal 10% of your total health and reduce your threat level on that target. 5 second cooldown."
          ],
          "iconName": "spell_nature_natureguardian",
          "y": 6,
          "x": 2
        },
        {
          "id": 1696,
          "name": "Nature's Blessing",
          "maxRank": 3,
          "minPointsRequired": 35,
          "spellIds": [
            30867,
            30868,
            30869
          ],
          "descriptions": [
            "Increases your spell damage and healing by an amount equal to 10% of your Intellect.",
            "Increases your spell damage and healing by an amount equal to 20% of your Intellect.",
            "Increases your spell damage and healing by an amount equal to 30% of your Intellect."
          ],
          "iconName": "spell_nature_natureblessing",
          "y": 7,
          "x": 1
        },
        {
          "id": 1697,
          "name": "Improved Chain Heal",
          "maxRank": 2,
          "minPointsRequired": 35,
          "spellIds": [
            30872,
            30873
          ],
          "descriptions": [
            "Increases the amount healed by your Chain Heal spell by 10%.",
            "Increases the amount healed by your Chain Heal spell by 20%."
          ],
          "iconName": "spell_nature_healingwavegreater",
          "y": 7,
          "x": 2
        },
        {
          "id": 1698,
          "name": "Earth Shield",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            974
          ],
          "descriptions": [
            "Protects the target with an earthen shield, giving a 30% chance of ignoring spell interruption when damaged and causing melee attacks to heal the shielded target for 150. This effect can only occur once every few seconds. 10 charges. Lasts 10 min. This shield can only be placed on one target at a time."
          ],
          "iconName": "spell_nature_skinofearth",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 2072,
            "talentRank": 1
          }
        }
      ]
    }
  ]
};




