import { ClassData } from "../../types";

export const shamanData: ClassData = {
  "name": "Shaman",
  "talentTrees": [
    {
      "name": "Elemental",
      "talents": [
        {
          "id": 408490,
          "name": "Lava Burst",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_shaman_lavaburst",
          "spellIds": [
            408490
          ],
          "descriptions": [
            "You hurl molten lava at the target, dealing <!--ppl40:48:164:90-->150 to 192 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage."
          ],
          "requirements": {
            "talentId": 408438,
            "talentRank": 3
          },
          "talentLink": "Lightning Overload"
        },
        {
          "id": 408438,
          "name": "Lightning Overload",
          "x": 1,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_nature_lightningoverload",
          "spellIds": [
            408438
          ],
          "descriptions": [
            "Gives your Lightning Bolt and Chain Lightning spells a 10% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "Gives your Lightning Bolt and Chain Lightning spells a 20% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "Gives your Lightning Bolt and Chain Lightning spells a 30% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat."
          ]
        },
        {
          "id": 1222988,
          "name": "Earthbound",
          "x": 3,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_stranglevines",
          "spellIds": [
            1222988
          ],
          "descriptions": [
            "Your Earthbind Totem Immobilizes nearby targets for 5 sec when cast."
          ]
        },
        {
          "id": 28999,
          "name": "Elemental Reach",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_stormreach",
          "spellIds": [
            28999
          ],
          "descriptions": [
            "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 6 yards, and increases the range of your Flame Shock spell by 15 yards.",
            "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 6 yards, and increases the range of your Flame Shock spell by 15 yards."
          ]
        },
        {
          "id": 16120,
          "name": "Call of Thunder",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_nature_callstorm",
          "spellIds": [
            16120
          ],
          "descriptions": [
            "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 3%."
          ],
          "requirements": {
            "talentId": 16578,
            "talentRank": 3
          },
          "talentLink": "Elemental Alacrity"
        },
        {
          "id": 29062,
          "name": "Eye of the Storm",
          "x": 1,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_nature_eyeofthestorm",
          "spellIds": [
            29062
          ],
          "descriptions": [
            "Gives you a 33% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage.",
            "Gives you a 66% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage.",
            "Gives you a 100% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time when taking damage."
          ]
        },
        {
          "id": 16086,
          "name": "Improved Fire Nova",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_fire_sealoffire",
          "spellIds": [
            16086
          ],
          "descriptions": [
            "Increases the damage done by your Fire Nova spell by 10% and reduces its cooldown by 2 sec.",
            "Increases the damage done by your Fire Nova spell by 20% and reduces its cooldown by 2 sec."
          ]
        },
        {
          "id": 16578,
          "name": "Elemental Alacrity",
          "x": 2,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_lightning_lightningbolt01",
          "spellIds": [
            16578
          ],
          "descriptions": [
            "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.2 sec.",
            "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.4 sec.",
            "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.6 sec."
          ]
        },
        {
          "id": 16089,
          "name": "Elemental Fury",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_fire_volcano",
          "spellIds": [
            16089
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 20%.",
            "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 40%.",
            "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 60%.",
            "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 80%.",
            "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 100%."
          ],
          "requirements": {
            "talentId": 16120,
            "talentRank": 1
          },
          "talentLink": "Call of Thunder"
        },
        {
          "id": 16040,
          "name": "Reverberation",
          "x": 1,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_frost_frostward",
          "spellIds": [
            16040
          ],
          "descriptions": [
            "Reduces the cooldown of your Shock spells by 0.2 sec.",
            "Reduces the cooldown of your Shock spells by 0.4 sec.",
            "Reduces the cooldown of your Shock spells by 0.6 sec.",
            "Reduces the cooldown of your Shock spells by 0.8 sec.",
            "Reduces the cooldown of your Shock spells by 1 sec."
          ]
        },
        {
          "id": 16164,
          "name": "Elemental Focus",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_manaburn",
          "spellIds": [
            16164
          ],
          "descriptions": [
            "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next damage spell by 100%."
          ]
        },
        {
          "id": 30160,
          "name": "Elemental Devastation",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_fire_elementaldevastation",
          "spellIds": [
            30160
          ],
          "descriptions": [
            "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
            "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 6% for 10 sec.",
            "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 9% for 10 sec."
          ]
        },
        {
          "id": 16038,
          "name": "Call of Flame",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_fire_immolation",
          "spellIds": [
            16038
          ],
          "descriptions": [
            "Increases the damage done by your Fire Totems by 5%.",
            "Increases the damage done by your Fire Totems by 10%.",
            "Increases the damage done by your Fire Totems by 15%."
          ]
        },
        {
          "id": 28996,
          "name": "Elemental Warding",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_spiritarmor",
          "spellIds": [
            28996
          ],
          "descriptions": [
            "Reduces damage taken from Fire, Frost and Nature effects by 4%.",
            "Reduces damage taken from Fire, Frost and Nature effects by 7%.",
            "Reduces damage taken from Fire, Frost and Nature effects by 10%."
          ]
        },
        {
          "id": 16035,
          "name": "Concussion",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_earthshock",
          "spellIds": [
            16035
          ],
          "descriptions": [
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 1%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 2%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 3%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 4%.",
            "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 5%."
          ]
        },
        {
          "id": 16039,
          "name": "Convection",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_wispsplode",
          "spellIds": [
            16039
          ],
          "descriptions": [
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 2%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 4%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 6%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 8%.",
            "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 10%."
          ]
        }
      ]
    },
    {
      "name": "Enhancement",
      "talents": [
        {
          "id": 425336,
          "name": "Rage of the Farseer",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_nature_bloodlust",
          "spellIds": [
            425336
          ],
          "descriptions": [
            "Increases your attack speed by 30% for 25 sec."
          ],
          "requirements": {
            "talentId": 30812,
            "talentRank": 2
          },
          "talentLink": "Mental Quickness"
        },
        {
          "id": 408498,
          "name": "Maelstrom Weapon",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_shaman_maelstromweapon",
          "spellIds": [
            408498
          ],
          "descriptions": [
            "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 4%. Stacks up to 5 times. Lasts 30 sec.",
            "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 8%. Stacks up to 5 times. Lasts 30 sec.",
            "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 12%. Stacks up to 5 times. Lasts 30 sec.",
            "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 16%. Stacks up to 5 times. Lasts 30 sec.",
            "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 20%. Stacks up to 5 times. Lasts 30 sec."
          ]
        },
        {
          "id": 1223031,
          "name": "Improved Stormstrike",
          "x": 2,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_shaman_improvedstormstrike",
          "spellIds": [
            1223031
          ],
          "descriptions": [
            "When you Stormstrike, you have a 10% chance to gain 25% mana regeneration while casting spells for 15 sec, and Stormstrike's cooldown has a 10% chance to reset each time you Dodge or Parry.",
            "When you Stormstrike, you have a 20% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike's cooldown has a 20% chance to reset each time you Dodge or Parry."
          ],
          "requirements": {
            "talentId": 17364,
            "talentRank": 1
          },
          "talentLink": "Stormstrike"
        },
        {
          "id": 17364,
          "name": "Stormstrike",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_shaman_stormstrike",
          "spellIds": [
            17364
          ],
          "descriptions": [
            "Instantly strike for normal weapon damage and increase the damage you deal to the target with your next Lightning Bolt, Chain Lightning, or Earth Shock spell by 20% for 12 sec."
          ]
        },
        {
          "id": 30812,
          "name": "Mental Quickness",
          "x": 1,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_sleep",
          "spellIds": [
            30812
          ],
          "descriptions": [
            "Increases your spell damage and healing by up to 15% of your Intellect.",
            "Increases your spell damage and healing by up to 30% of your Intellect."
          ]
        },
        {
          "id": 16268,
          "name": "Spirit Weapons",
          "x": 0,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_parry",
          "spellIds": [
            16268
          ],
          "descriptions": [
            "Gives a chance to parry enemy melee attacks, reduces all threat generated by your attacks by 30% while Rockbiter Weapon is not active, and increases all threat generated by 30% while Rockbiter Weapon is active."
          ]
        },
        {
          "id": 16252,
          "name": "Toughness",
          "x": 0,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_holy_devotion",
          "spellIds": [
            16252
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
          "id": 16256,
          "name": "Flurry",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_ghoulfrenzy",
          "spellIds": [
            16256
          ],
          "descriptions": [
            "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike.",
            "Increases your attack speed by 30% for your next 3 swings after dealing a melee critical strike."
          ],
          "requirements": {
            "talentId": 415140,
            "talentRank": 3
          },
          "talentLink": "Mental Dexterity"
        },
        {
          "id": 16254,
          "name": "Anticipation",
          "x": 3,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_nature_mirrorimage",
          "spellIds": [
            16254
          ],
          "descriptions": [
            "Increases your chance to dodge by an additional 1%.",
            "Increases your chance to dodge by an additional 2%.",
            "Increases your chance to dodge by an additional 3%."
          ]
        },
        {
          "id": 1223030,
          "name": "Shamanistic Focus",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_nature_elementalabsorption",
          "spellIds": [
            1223030
          ],
          "descriptions": [
            "Reduces the mana cost of your Shock and Lightning Shield spells by 45%."
          ]
        },
        {
          "id": 16266,
          "name": "Elemental Weapons",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_fire_flametounge",
          "spellIds": [
            16266
          ],
          "descriptions": [
            "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
            "Increases the melee attack power bonus of your Rockbiter Weapon by 14%, your Windfury Weapon effect by 27% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 10%.",
            "Increases the melee attack power bonus of your Rockbiter Weapon by 20%, your Windfury Weapon effect by 40% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 15%."
          ]
        },
        {
          "id": 16261,
          "name": "Improved Lightning Shield",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_lightningshield",
          "spellIds": [
            16261
          ],
          "descriptions": [
            "Increases the damage done by your Lightning Shield orbs by 5%.",
            "Increases the damage done by your Lightning Shield orbs by 10%.",
            "Increases the damage done by your Lightning Shield orbs by 15%."
          ]
        },
        {
          "id": 16262,
          "name": "Improved Ghost Wolf",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_spiritwolf",
          "spellIds": [
            16262
          ],
          "descriptions": [
            "Reduces the cast time of your Ghost Wolf spell by 1 sec.",
            "Reduces the cast time of your Ghost Wolf spell by 2 sec."
          ]
        },
        {
          "id": 16255,
          "name": "Thundering Strikes",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_thunderbolt",
          "spellIds": [
            16255
          ],
          "descriptions": [
            "Improves your chance to get a critical strike with your weapon attacks by 1%.",
            "Improves your chance to get a critical strike with your weapon attacks by 2%.",
            "Improves your chance to get a critical strike with your weapon attacks by 3%.",
            "Improves your chance to get a critical strike with your weapon attacks by 4%.",
            "Improves your chance to get a critical strike with your weapon attacks by 5%."
          ]
        },
        {
          "id": 16258,
          "name": "Guardian Totems",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_stoneskintotem",
          "spellIds": [
            16258
          ],
          "descriptions": [
            "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
            "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 20% and reduces the cooldown of your Grounding Totem by 2 sec."
          ]
        },
        {
          "id": 415140,
          "name": "Mental Dexterity",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_mentalquickness",
          "spellIds": [
            415140
          ],
          "descriptions": [
            "Increases your Attack Power by an amount equal to 100% of your Intellect.",
            "Increases your Attack Power by an amount equal to 200% of your Intellect.",
            "Increases your Attack Power by an amount equal to 300% of your Intellect."
          ]
        },
        {
          "id": 17485,
          "name": "Ancestral Knowledge",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_grimward",
          "spellIds": [
            17485
          ],
          "descriptions": [
            "Increases your maximum Mana by 1%.",
            "Increases your maximum Mana by 2%.",
            "Increases your maximum Mana by 3%.",
            "Increases your maximum Mana by 4%.",
            "Increases your maximum Mana by 5%."
          ]
        },
        {
          "id": 16043,
          "name": "Earth's Grasp",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_nature_stoneclawtotem",
          "spellIds": [
            16043
          ],
          "descriptions": [
            "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
            "Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%."
          ]
        }
      ]
    },
    {
      "name": "Restoration",
      "talents": [
        {
          "id": 408521,
          "name": "Riptide",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_nature_riptide",
          "spellIds": [
            408521
          ],
          "descriptions": [
            "Heals a friendly target for <!--ppl40:48:480:370-->486 to 534, an additional 445 over 15 sec, and increases the effectiveness of your Chain Heal casts directly on that target by 25%."
          ],
          "requirements": {
            "talentId": 29206,
            "talentRank": 3
          },
          "talentLink": "Healing Way"
        },
        {
          "id": 16178,
          "name": "Purification",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_frost_wizardmark",
          "spellIds": [
            16178
          ],
          "descriptions": [
            "Increases the effectiveness of your healing spells by 2%.",
            "Increases the effectiveness of your healing spells by 4%.",
            "Increases the effectiveness of your healing spells by 6%.",
            "Increases the effectiveness of your healing spells by 8%.",
            "Increases the effectiveness of your healing spells by 10%."
          ]
        },
        {
          "id": 16188,
          "name": "Nature's Swiftness",
          "x": 2,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_ravenform",
          "spellIds": [
            16188
          ],
          "descriptions": [
            "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell."
          ]
        },
        {
          "id": 29206,
          "name": "Healing Way",
          "x": 1,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_nature_healingway",
          "spellIds": [
            29206
          ],
          "descriptions": [
            "Your Healing Wave spells have a 33% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 15001 times.",
            "Your Healing Wave spells have a 66% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 15001 times.",
            "Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 15001 times."
          ]
        },
        {
          "id": 16190,
          "name": "Mana Tide Totem",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_frost_summonwaterelemental",
          "spellIds": [
            16190
          ],
          "descriptions": [
            "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 88 mana every 3 seconds to group members within 30 yards."
          ]
        },
        {
          "id": 16173,
          "name": "Totemic Focus",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_moonglow",
          "spellIds": [
            16173
          ],
          "descriptions": [
            "Reduces the Mana cost of your totems by 5%.",
            "Reduces the Mana cost of your totems by 10%.",
            "Reduces the Mana cost of your totems by 15%.",
            "Reduces the Mana cost of your totems by 20%.",
            "Reduces the Mana cost of your totems by 25%."
          ]
        },
        {
          "id": 16187,
          "name": "Restorative Totems",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_nature_manaregentotem",
          "spellIds": [
            16187
          ],
          "descriptions": [
            "Increases the effect of your Mana Spring and Healing Stream Totems by 5%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 10%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 15%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 20%.",
            "Increases the effect of your Mana Spring and Healing Stream Totems by 25%."
          ]
        },
        {
          "id": 16176,
          "name": "Ancestral Healing",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_nature_undyingstrength",
          "spellIds": [
            16176
          ],
          "descriptions": [
            "Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
            "Increases your target's armor value by 16% for 15 sec after getting a critical effect from one of your healing spells.",
            "Increases your target's armor value by 25% for 15 sec after getting a critical effect from one of your healing spells."
          ]
        },
        {
          "id": 408510,
          "name": "Water Shield",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_shaman_watershield",
          "spellIds": [
            408510
          ],
          "descriptions": [
            "The caster is surrounded by 3 globes of water. When a spell, melee, or ranged attack hits the caster or when one of the caster's healing spells gets a critical result, 2% of maximum mana is restored to the caster, expending one water globe. Only one globe will activate every few seconds.  Lasts 10 min.<br /><br />Only one Elemental Shield can be active on the Shaman at any one time."
          ]
        },
        {
          "id": 16181,
          "name": "Healing Focus",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_nature_healingwavelesser",
          "spellIds": [
            16181
          ],
          "descriptions": [
            "Gives you a 70% chance to avoid interruption caused by damage while casting any healing spell.",
            "Gives you a 140% chance to avoid interruption caused by damage while casting any healing spell.",
            "Gives you a 210% chance to avoid interruption caused by damage while casting any healing spell."
          ]
        },
        {
          "id": 1223033,
          "name": "Mindfulness",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_sleep",
          "spellIds": [
            1223033
          ],
          "descriptions": [
            "Allows 5% of your Mana regeneration to continue while casting.",
            "Allows 10% of your Mana regeneration to continue while casting.",
            "Allows 15% of your Mana regeneration to continue while casting."
          ]
        },
        {
          "id": 16179,
          "name": "Tidal Focus",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_frost_manarecharge",
          "spellIds": [
            16179
          ],
          "descriptions": [
            "Reduces the Mana cost of your healing spells by 1%.",
            "Reduces the Mana cost of your healing spells by 2%.",
            "Reduces the Mana cost of your healing spells by 3%.",
            "Reduces the Mana cost of your healing spells by 4%.",
            "Reduces the Mana cost of your healing spells by 5%."
          ]
        },
        {
          "id": 29187,
          "name": "Natural Grace",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_healingtouch",
          "spellIds": [
            29187
          ],
          "descriptions": [
            "Reduces the threat generated by your spells by 10%.",
            "Reduces the threat generated by your spells by 20%.",
            "Reduces the threat generated by your spells by 30%."
          ]
        },
        {
          "id": 16184,
          "name": "Improved Reincarnation",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_reincarnation",
          "spellIds": [
            16184
          ],
          "descriptions": [
            "Reduces the cooldown of your Reincarnation spell by 10 min and increases the amount of health and mana you reincarnate with by an additional 10%.",
            "Reduces the cooldown of your Reincarnation spell by 20 min and increases the amount of health and mana you reincarnate with by an additional 20%."
          ]
        },
        {
          "id": 16194,
          "name": "Tidal Mastery",
          "x": 0,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_nature_tranquility",
          "spellIds": [
            16194
          ],
          "descriptions": [
            "Increases the critical effect chance of your healing and lightning spells by 1%.",
            "Increases the critical effect chance of your healing and lightning spells by 2%.",
            "Increases the critical effect chance of your healing and lightning spells by 3%.",
            "Increases the critical effect chance of your healing and lightning spells by 4%.",
            "Increases the critical effect chance of your healing and lightning spells by 5%."
          ]
        },
        {
          "id": 16182,
          "name": "Improved Healing Wave",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_magicimmunity",
          "spellIds": [
            16182
          ],
          "descriptions": [
            "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.2 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.3 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.4 sec.",
            "Reduces the casting time of your Healing Wave spell by 0.5 sec."
          ]
        }
      ]
    }
  ]
};
