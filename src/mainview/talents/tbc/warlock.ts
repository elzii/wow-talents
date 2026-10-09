import { ClassData } from "../../../types";

export const warlockData: ClassData = {
  name: "Warlock",
  talentTrees: [
    {
      "name": "Affliction",
      "talents": [
        {
          "id": 1005,
          "name": "Suppression",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            18174,
            18175,
            18176,
            18177,
            18178
          ],
          "descriptions": [
            "Reduces the chance for enemies to resist your Affliction spells by 2%.",
            "Reduces the chance for enemies to resist your Affliction spells by 4%.",
            "Reduces the chance for enemies to resist your Affliction spells by 6%.",
            "Reduces the chance for enemies to resist your Affliction spells by 8%.",
            "Reduces the chance for enemies to resist your Affliction spells by 10%."
          ],
          "iconName": "spell_shadow_unsummonbuilding",
          "y": 0,
          "x": 1
        },
        {
          "id": 1003,
          "name": "Improved Corruption",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            17810,
            17811,
            17812,
            17813,
            17814
          ],
          "descriptions": [
            "Reduces the casting time of your Corruption spell by 0.4 sec.",
            "Reduces the casting time of your Corruption spell by 0.8 sec.",
            "Reduces the casting time of your Corruption spell by 1.2 sec.",
            "Reduces the casting time of your Corruption spell by 1.6 sec.",
            "Reduces the casting time of your Corruption spell by 2 sec."
          ],
          "iconName": "spell_shadow_abominationexplosion",
          "y": 0,
          "x": 2
        },
        {
          "id": 1006,
          "name": "Improved Curse of Weakness",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            18179,
            18180
          ],
          "descriptions": [
            "Increases the effect of your Curse of Weakness by 10%.",
            "Increases the effect of your Curse of Weakness by 20%."
          ],
          "iconName": "spell_shadow_curseofmannoroth",
          "y": 1,
          "x": 0
        },
        {
          "id": 1101,
          "name": "Improved Drain Soul",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            18213,
            18372
          ],
          "descriptions": [
            "Returns 7% of your maximum mana if the target is killed by you while you drain its soul. In addition, your Affliction spells generate 5% less threat.",
            "Returns 15% of your maximum mana if the target is killed by you while you drain its soul. In addition, your Affliction spells generate 10% less threat."
          ],
          "iconName": "spell_shadow_haunting",
          "y": 1,
          "x": 1
        },
        {
          "id": 1007,
          "name": "Improved Life Tap",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            18182,
            18183
          ],
          "descriptions": [
            "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
            "Increases the amount of Mana awarded by your Life Tap spell by 20%."
          ],
          "iconName": "spell_shadow_burningspirit",
          "y": 1,
          "x": 2
        },
        {
          "id": 1004,
          "name": "Soul Siphon",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            17804,
            17805
          ],
          "descriptions": [
            "Increases the amount drained by your Drain Life spell by an additional 2% for each Affliction effect on the target, up to a maximum of 24% additional effect.",
            "Increases the amount drained by your Drain Life spell by an additional 4% for each Affliction effect on the target, up to a maximum of 60% additional effect."
          ],
          "iconName": "spell_shadow_lifedrain02",
          "y": 1,
          "x": 3
        },
        {
          "id": 1284,
          "name": "Improved Curse of Agony",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            18827,
            18829
          ],
          "descriptions": [
            "Increases the damage done by your Curse of Agony by 5%.",
            "Increases the damage done by your Curse of Agony by 10%."
          ],
          "iconName": "spell_shadow_curseofsargeras",
          "y": 2,
          "x": 0
        },
        {
          "id": 1001,
          "name": "Fel Concentration",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            17783,
            17784,
            17785,
            17786,
            17787
          ],
          "descriptions": [
            "Gives you a 14% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
            "Gives you a 28% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
            "Gives you a 42% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
            "Gives you a 56% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.",
            "Gives you a 70% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell."
          ],
          "iconName": "spell_shadow_fingerofdeath",
          "y": 2,
          "x": 1
        },
        {
          "id": 1061,
          "name": "Amplify Curse",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            18288
          ],
          "descriptions": [
            "Increases the effect of your next Curse of Doom or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%. Lasts 30 sec."
          ],
          "iconName": "spell_shadow_contagion",
          "y": 2,
          "x": 2
        },
        {
          "id": 1021,
          "name": "Grim Reach",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            18218,
            18219
          ],
          "descriptions": [
            "Increases the range of your Affliction spells by 10%.",
            "Increases the range of your Affliction spells by 20%."
          ],
          "iconName": "spell_shadow_callofbone",
          "y": 3,
          "x": 0
        },
        {
          "id": 1002,
          "name": "Nightfall",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            18094,
            18095
          ],
          "descriptions": [
            "Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
            "Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%."
          ],
          "iconName": "spell_shadow_twilight",
          "y": 3,
          "x": 1
        },
        {
          "id": 1764,
          "name": "Empowered Corruption",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            32381,
            32382,
            32383
          ],
          "descriptions": [
            "Your Corruption spell gains an additional 12% of your bonus spell damage effects.",
            "Your Corruption spell gains an additional 24% of your bonus spell damage effects.",
            "Your Corruption spell gains an additional 36% of your bonus spell damage effects."
          ],
          "iconName": "spell_shadow_abominationexplosion",
          "y": 3,
          "x": 3
        },
        {
          "id": 1763,
          "name": "Shadow Embrace",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            32385,
            32387,
            32392,
            32393,
            32394
          ],
          "descriptions": [
            "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 1%.",
            "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 2%.",
            "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 3%.",
            "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 4%.",
            "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 5%."
          ],
          "iconName": "spell_shadow_shadowembrace",
          "y": 4,
          "x": 0
        },
        {
          "id": 1041,
          "name": "Siphon Life",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            18265
          ],
          "descriptions": [
            "Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec."
          ],
          "iconName": "spell_shadow_requiem",
          "y": 4,
          "x": 1
        },
        {
          "id": 1081,
          "name": "Curse of Exhaustion",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            18223
          ],
          "descriptions": [
            "Reduces the target's movement speed by 30% for 12 sec. Only one Curse per Warlock can be active on any one target."
          ],
          "iconName": "spell_shadow_grimward",
          "y": 4,
          "x": 2,
          "requirements": {
            "talentId": 1061,
            "talentRank": 1
          },
          "talentLink": "Amplify Curse"
        },
        {
          "id": 1042,
          "name": "Shadow Mastery",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            18271,
            18272,
            18273,
            18274,
            18275
          ],
          "descriptions": [
            "Increases the damage dealt or life drained by your Shadow spells by 2%.",
            "Increases the damage dealt or life drained by your Shadow spells by 4%.",
            "Increases the damage dealt or life drained by your Shadow spells by 6%.",
            "Increases the damage dealt or life drained by your Shadow spells by 8%.",
            "Increases the damage dealt or life drained by your Shadow spells by 10%."
          ],
          "iconName": "spell_shadow_shadetruesight",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 1041,
            "talentRank": 1
          }
        },
        {
          "id": 1669,
          "name": "Contagion",
          "maxRank": 5,
          "minPointsRequired": 30,
          "spellIds": [
            30060,
            30061,
            30062,
            30063,
            30064
          ],
          "descriptions": [
            "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 1% and reduces the chance your Affliction spells will be dispelled by an additional 6%.",
            "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 2% and reduces the chance your Affliction spells will be dispelled by an additional 12%.",
            "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 3% and reduces the chance your Affliction spells will be dispelled by an additional 18%.",
            "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 4% and reduces the chance your Affliction spells will be dispelled by an additional 24%.",
            "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 5% and reduces the chance your Affliction spells will be dispelled by an additional 30%."
          ],
          "iconName": "spell_shadow_painfulafflictions",
          "y": 6,
          "x": 1
        },
        {
          "id": 1022,
          "name": "Dark Pact",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            18220
          ],
          "descriptions": [
            "Drains 305 of your pet's Mana, returning 100% to you."
          ],
          "iconName": "spell_shadow_darkritual",
          "y": 6,
          "x": 2
        },
        {
          "id": 1668,
          "name": "Improved Howl of Terror",
          "maxRank": 2,
          "minPointsRequired": 35,
          "spellIds": [
            30054,
            30057
          ],
          "descriptions": [
            "Reduces the casting time of your Howl of Terror spell by 0.8 sec.",
            "Reduces the casting time of your Howl of Terror spell by 1.5 sec."
          ],
          "iconName": "spell_shadow_deathscream",
          "y": 7,
          "x": 0
        },
        {
          "id": 1667,
          "name": "Malediction",
          "maxRank": 3,
          "minPointsRequired": 35,
          "spellIds": [
            32477,
            32483,
            32484
          ],
          "descriptions": [
            "Increases the damage bonus effect of your Curse of Shadows and Curse of the Elements spells by an additional 1%.",
            "Increases the damage bonus effect of your Curse of Shadows and Curse of the Elements spells by an additional 2%.",
            "Increases the damage bonus effect of your Curse of Shadows and Curse of the Elements spells by an additional 3%."
          ],
          "iconName": "spell_shadow_curseofachimonde",
          "y": 7,
          "x": 2
        },
        {
          "id": 1670,
          "name": "Unstable Affliction",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            30108
          ],
          "descriptions": [
            "Shadow energy slowly destroys the target, causing 660 damage over 18 sec. In addition, if the Unstable Affliction is dispelled it will cause 990 damage to the dispeller and silence them for 5 sec."
          ],
          "iconName": "spell_shadow_unstableaffliction_3",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 2103,
            "talentRank": 1
          },
          "talentLink": "Contagion"
        }
      ]
    },
    {
      "name": "Demonology",
      "talents": [
        {
          "id": 1221,
          "name": "Improved Healthstone",
          "maxRank": 2,
          "minPointsRequired": 0,
          "spellIds": [
            18692,
            18693
          ],
          "descriptions": [
            "Increases the amount of Health restored by your Healthstone by 10%.",
            "Increases the amount of Health restored by your Healthstone by 20%."
          ],
          "iconName": "inv_stone_04",
          "y": 0,
          "x": 0
        },
        {
          "id": 1222,
          "name": "Improved Imp",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            18694,
            18695,
            18696
          ],
          "descriptions": [
            "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
            "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
            "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%."
          ],
          "iconName": "spell_shadow_summonimp",
          "y": 0,
          "x": 1
        },
        {
          "id": 1223,
          "name": "Demonic Embrace",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            18697,
            18698,
            18699,
            18700,
            18701
          ],
          "descriptions": [
            "Increases your total Stamina by 3% but reduces your total Spirit by 1%.",
            "Increases your total Stamina by 6% but reduces your total Spirit by 2%.",
            "Increases your total Stamina by 9% but reduces your total Spirit by 3%.",
            "Increases your total Stamina by 12% but reduces your total Spirit by 4%.",
            "Increases your total Stamina by 15% but reduces your total Spirit by 5%."
          ],
          "iconName": "spell_shadow_metamorphosis",
          "y": 0,
          "x": 2
        },
        {
          "id": 1224,
          "name": "Improved Health Funnel",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            18703,
            18704
          ],
          "descriptions": [
            "Increases the amount of Health transfered by your Health Funnel spell by 10% and reduces the health cost by 10%.",
            "Increases the amount of Health transfered by your Health Funnel spell by 20% and reduces the health cost by 20%."
          ],
          "iconName": "spell_shadow_lifedrain",
          "y": 1,
          "x": 0
        },
        {
          "id": 1225,
          "name": "Improved Voidwalker",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            18705,
            18706,
            18707
          ],
          "descriptions": [
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%.",
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 20%.",
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 30%."
          ],
          "iconName": "spell_shadow_summonvoidwalker",
          "y": 1,
          "x": 1
        },
        {
          "id": 1242,
          "name": "Fel Intellect",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            18731,
            18743,
            18744
          ],
          "descriptions": [
            "Increases the Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 5% and increases your maximum mana by 1%.",
            "Increases the Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 10% and increases your maximum mana by 2%.",
            "Increases the Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 15% and increases your maximum mana by 3%."
          ],
          "iconName": "spell_holy_magicalsentry",
          "y": 1,
          "x": 2
        },
        {
          "id": 1243,
          "name": "Improved Succubus",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            18754,
            18755,
            18756
          ],
          "descriptions": [
            "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 10%.",
            "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 20%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 20%.",
            "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 30%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 30%."
          ],
          "iconName": "spell_shadow_summonsuccubus",
          "y": 2,
          "x": 0
        },
        {
          "id": 1226,
          "name": "Fel Domination",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            18708
          ],
          "descriptions": [
            "Your next Imp, Voidwalker, Succubus, Felhunter or Felguard Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%."
          ],
          "iconName": "spell_nature_removecurse",
          "y": 2,
          "x": 1
        },
        {
          "id": 1241,
          "name": "Fel Stamina",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            18748,
            18749,
            18750
          ],
          "descriptions": [
            "Increases the Stamina of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 5% and increases your maximum health by 1%.",
            "Increases the Stamina of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 10% and increases your maximum health by 2%.",
            "Increases the Stamina of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 15% and increases your maximum health by 3%."
          ],
          "iconName": "spell_shadow_antishadow",
          "y": 2,
          "x": 2
        },
        {
          "id": 1671,
          "name": "Demonic Aegis",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            30143,
            30144,
            30145
          ],
          "descriptions": [
            "Increases the effectiveness of your Demon Armor and Fel Armor spells by 10%.",
            "Increases the effectiveness of your Demon Armor and Fel Armor spells by 20%.",
            "Increases the effectiveness of your Demon Armor and Fel Armor spells by 30%."
          ],
          "iconName": "spell_shadow_ragingscream",
          "y": 2,
          "x": 3
        },
        {
          "id": 1227,
          "name": "Master Summoner",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            18709,
            18710
          ],
          "descriptions": [
            "Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Felguard Summoning spells by 2 sec and the Mana cost by 20%.",
            "Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Felguard Summoning spells by 4 sec and the Mana cost by 40%."
          ],
          "iconName": "spell_shadow_impphaseshift",
          "y": 3,
          "x": 1,
          "requirements": {
            "talentId": 1226,
            "talentRank": 1
          }
        },
        {
          "id": 1262,
          "name": "Unholy Power",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            18769,
            18770,
            18771,
            18772,
            18773
          ],
          "descriptions": [
            "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 4%.",
            "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 8%.",
            "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 12%.",
            "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 16%.",
            "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 20%."
          ],
          "iconName": "spell_shadow_shadowworddominate",
          "y": 3,
          "x": 2
        },
        {
          "id": 1283,
          "name": "Improved Enslave Demon",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            18821,
            18822
          ],
          "descriptions": [
            "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 5% and reduces the resist chance by 5%.",
            "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 10% and reduces the resist chance by 10%."
          ],
          "iconName": "spell_shadow_enslavedemon",
          "y": 4,
          "x": 0
        },
        {
          "id": 1281,
          "name": "Demonic Sacrifice",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            18788
          ],
          "descriptions": [
            "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min. The effect is canceled if any Demon is summoned.\n\nImp: Increases your Fire damage by 15%.\n\nVoidwalker: Restores 2% of total Health every 4 sec.\n\nSuccubus: Increases your Shadow damage by 15%.\n\nFelhunter: Restores 3% of total Mana every 4 sec.\n\nFelguard: Increases your Shadow damage by 10% and restores 2% of total mana every 4 sec."
          ],
          "iconName": "spell_shadow_psychicscream",
          "y": 4,
          "x": 1
        },
        {
          "id": 1261,
          "name": "Master Conjuror",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            18767,
            18768
          ],
          "descriptions": [
            "Increases the bonus Fire damage from Firestones and the Firestone effect by 15% and increases the spell critical strike rating bonus of your Spellstone by 15%.",
            "Increases the bonus Fire damage from Firestones and the Firestone effect by 30% and increases the spell critical strike rating bonus of your Spellstone by 30%."
          ],
          "iconName": "inv_ammo_firetar",
          "y": 4,
          "x": 3
        },
        {
          "id": 1681,
          "name": "Mana Feed",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            30326,
            30327,
            30328
          ],
          "descriptions": [
            "When you gain mana from Drain Mana or Life Tap spells, your pet gains 33% of the mana you gain",
            "When you gain mana from Drain Mana or Life Tap spells, your pet gains 66% of the mana you gain",
            "When you gain mana from Drain Mana or Life Tap spells, your pet gains 100% of the mana you gain"
          ],
          "iconName": "spell_shadow_manafeed",
          "y": 5,
          "x": 0
        },
        {
          "id": 1244,
          "name": "Master Demonologist",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            23785,
            23822,
            23823,
            23824,
            23825
          ],
          "descriptions": [
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Reduces threat caused by 4%.\n\nVoidwalker - Reduces physical damage taken by 2%.\n\nSuccubus - Increases all damage caused by 2%.\n\nFelhunter - Increases all resistances by .2 per level.\n\nFelguard - Increases all damage caused by 1% and all resistances by .1 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Reduces threat caused by 8%.\n\nVoidwalker - Reduces physical damage taken by 4%.\n\nSuccubus - Increases all damage caused by 4%.\n\nFelhunter - Increases all resistances by .4 per level.\n\nFelguard - Increases all damage caused by 2% and all resistances by .2 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Reduces threat caused by 12%.\n\nVoidwalker - Reduces physical damage taken by 6%.\n\nSuccubus - Increases all damage caused by 6%.\n\nFelhunter - Increases all resistances by .6 per level.\n\nFelguard - Increases all damage caused by 3% and all resistances by .3 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Reduces threat caused by 16%.\n\nVoidwalker - Reduces physical damage taken by 8%.\n\nSuccubus - Increases all damage caused by 8%.\n\nFelhunter - Increases all resistances by .8 per level.\n\nFelguard - Increases all damage caused by 4% and all resistances by .4 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Reduces threat caused by 20%.\n\nVoidwalker - Reduces physical damage taken by 10%.\n\nSuccubus - Increases all damage caused by 10%.\n\nFelhunter - Increases all resistances by 1 per level.\n\nFelguard - Increases all damage caused by 5% and all resistances by .5 per level."
          ],
          "iconName": "spell_shadow_shadowpact",
          "y": 5,
          "x": 2,
          "requirements": {
            "talentId": 1262,
            "talentRank": 5
          },
          "talentLink": "Unholy Power"
        },
        {
          "id": 1680,
          "name": "Demonic Resilience",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            30319,
            30320,
            30321
          ],
          "descriptions": [
            "Reduces the chance you'll be critically hit by melee and spells by 1% and reduces all damage your summoned demon takes by 5%.",
            "Reduces the chance you'll be critically hit by melee and spells by 2% and reduces all damage your summoned demon takes by 10%.",
            "Reduces the chance you'll be critically hit by melee and spells by 3% and reduces all damage your summoned demon takes by 15%."
          ],
          "iconName": "spell_shadow_demonicfortitude",
          "y": 6,
          "x": 0
        },
        {
          "id": 1282,
          "name": "Soul Link",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            19028
          ],
          "descriptions": [
            "When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Felhunter, Felguard, or enslaved demon instead.  That damage cannot be prevented.  In addition, both the demon and master will inflict 5% more damage.  Lasts as long as the demon is active and controlled."
          ],
          "iconName": "spell_shadow_gathershadows",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 1281,
            "talentRank": 1
          },
          "talentLink": "Demonic Sacrifice"
        },
        {
          "id": 1263,
          "name": "Demonic Knowledge",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            35691,
            35692,
            35693
          ],
          "descriptions": [
            "Increases your spell damage by an amount equal to 5% of the total of your active demon's Stamina plus Intellect.",
            "Increases your spell damage by an amount equal to 10% of the total of your active demon's Stamina plus Intellect.",
            "Increases your spell damage by an amount equal to 15% of the total of your active demon's Stamina plus Intellect."
          ],
          "iconName": "spell_shadow_improvedvampiricembrace",
          "y": 6,
          "x": 2
        },
        {
          "id": 1673,
          "name": "Demonic Tactics",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            30242,
            30245,
            30246,
            30247,
            30248
          ],
          "descriptions": [
            "Increases melee and spell critical strike chance for you and your summoned demon by 1%.",
            "Increases melee and spell critical strike chance for you and your summoned demon by 2%.",
            "Increases melee and spell critical strike chance for you and your summoned demon by 3%.",
            "Increases melee and spell critical strike chance for you and your summoned demon by 4%.",
            "Increases melee and spell critical strike chance for you and your summoned demon by 5%."
          ],
          "iconName": "spell_shadow_demonictactics",
          "y": 7,
          "x": 1
        },
        {
          "id": 1672,
          "name": "Summon Felguard",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            30146
          ],
          "descriptions": [
            "Summons a Felguard under the command of the Warlock."
          ],
          "iconName": "spell_shadow_summonfelguard",
          "y": 8,
          "x": 1
        }
      ]
    },
    {
      "name": "Destruction",
      "talents": [
        {
          "id": 944,
          "name": "Improved Shadow Bolt",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            17793,
            17796,
            17801,
            17802,
            17803
          ],
          "descriptions": [
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 8% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 12% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 16% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 20% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec."
          ],
          "iconName": "spell_shadow_shadowbolt",
          "y": 0,
          "x": 1
        },
        {
          "id": 941,
          "name": "Cataclysm",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            17778,
            17779,
            17780,
            17781,
            17782
          ],
          "descriptions": [
            "Reduces the Mana cost of your Destruction spells by 1%.",
            "Reduces the Mana cost of your Destruction spells by 2%.",
            "Reduces the Mana cost of your Destruction spells by 3%.",
            "Reduces the Mana cost of your Destruction spells by 4%.",
            "Reduces the Mana cost of your Destruction spells by 5%."
          ],
          "iconName": "spell_fire_windsofwoe",
          "y": 0,
          "x": 2
        },
        {
          "id": 943,
          "name": "Bane",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            17788,
            17789,
            17790,
            17791,
            17792
          ],
          "descriptions": [
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2.0 sec."
          ],
          "iconName": "spell_shadow_deathpact",
          "y": 1,
          "x": 1
        },
        {
          "id": 982,
          "name": "Aftermath",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            18119,
            18120,
            18121,
            18122,
            18123
          ],
          "descriptions": [
            "Gives your Destruction spells a 2% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 4% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 6% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 8% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 10% chance to daze the target for 5 sec."
          ],
          "iconName": "spell_fire_fire",
          "y": 1,
          "x": 2
        },
        {
          "id": 983,
          "name": "Improved Firebolt",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            18126,
            18127
          ],
          "descriptions": [
            "Reduces the casting time of your Imp's Firebolt spell by 0.25 sec.",
            "Reduces the casting time of your Imp's Firebolt spell by 0.5 sec."
          ],
          "iconName": "spell_fire_firebolt",
          "y": 2,
          "x": 0
        },
        {
          "id": 984,
          "name": "Improved Lash of Pain",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            18128,
            18129
          ],
          "descriptions": [
            "Reduces the cooldown of your Succubus' Lash of Pain spell by 3 sec.",
            "Reduces the cooldown of your Succubus' Lash of Pain spell by 6 sec."
          ],
          "iconName": "spell_shadow_curse",
          "y": 2,
          "x": 1
        },
        {
          "id": 981,
          "name": "Devastation",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            18130,
            18131,
            18132,
            18133,
            18134
          ],
          "descriptions": [
            "Increases the critical strike chance of your Destruction spells by 1%.",
            "Increases the critical strike chance of your Destruction spells by 2%.",
            "Increases the critical strike chance of your Destruction spells by 3%.",
            "Increases the critical strike chance of your Destruction spells by 4%.",
            "Increases the critical strike chance of your Destruction spells by 5%."
          ],
          "iconName": "spell_fire_flameshock",
          "y": 2,
          "x": 2
        },
        {
          "id": 963,
          "name": "Shadowburn",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            17877
          ],
          "descriptions": [
            "Instantly blasts the target for 91 to 104 Shadow damage. If the target dies within 5 secs of Shadowburn, and yields experience or honor, the caster gains a Soul Shard."
          ],
          "iconName": "spell_shadow_scourgebuild",
          "y": 2,
          "x": 3
        },
        {
          "id": 985,
          "name": "Intensity",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            18135,
            18136
          ],
          "descriptions": [
            "Gives you a 35% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
            "Gives you a 70% chance to resist interruption caused by damage while casting or channeling any Destruction spell."
          ],
          "iconName": "spell_fire_lavaspawn",
          "y": 3,
          "x": 0
        },
        {
          "id": 964,
          "name": "Destructive Reach",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            17917,
            17918
          ],
          "descriptions": [
            "Increases the range of your Destruction spells by 10% and reduces threat caused by Destruction spells by 5%.",
            "Increases the range of your Destruction spells by 20% and reduces threat caused by Destruction spells by 10%."
          ],
          "iconName": "spell_shadow_corpseexplode",
          "y": 3,
          "x": 1
        },
        {
          "id": 965,
          "name": "Improved Searing Pain",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            17927,
            17929,
            17930
          ],
          "descriptions": [
            "Increases the critical strike chance of your Searing Pain spell by 4%.",
            "Increases the critical strike chance of your Searing Pain spell by 7%.",
            "Increases the critical strike chance of your Searing Pain spell by 10%."
          ],
          "iconName": "spell_fire_soulburn",
          "y": 3,
          "x": 3
        },
        {
          "id": 986,
          "name": "Pyroclasm",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            18096,
            18073
          ],
          "descriptions": [
            "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 13% chance to stun the target for 3 sec.",
            "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 26% chance to stun the target for 3 sec."
          ],
          "iconName": "spell_fire_volcano",
          "y": 4,
          "x": 0,
          "requirements": {
            "talentId": 985,
            "talentRank": 2
          }
        },
        {
          "id": 961,
          "name": "Improved Immolate",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            17815,
            17833,
            17834,
            17835,
            17836
          ],
          "descriptions": [
            "Increases the initial damage of your Immolate spell by 5%.",
            "Increases the initial damage of your Immolate spell by 10%.",
            "Increases the initial damage of your Immolate spell by 15%.",
            "Increases the initial damage of your Immolate spell by 20%.",
            "Increases the initial damage of your Immolate spell by 25%."
          ],
          "iconName": "spell_fire_immolation",
          "y": 4,
          "x": 1
        },
        {
          "id": 967,
          "name": "Ruin",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            17959
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Destruction spells by 100%."
          ],
          "iconName": "spell_shadow_shadowwordpain",
          "y": 4,
          "x": 2,
          "requirements": {
            "talentId": 981,
            "talentRank": 5
          },
          "talentLink": "Devastation"
        },
        {
          "id": 1679,
          "name": "Nether Protection",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            30299,
            30301,
            30302
          ],
          "descriptions": [
            "After being hit with a Shadow or Fire spell, you have a 10% chance to become immune to Shadow and Fire spells for 4 sec.",
            "After being hit with a Shadow or Fire spell, you have a 20% chance to become immune to Shadow and Fire spells for 4 sec.",
            "After being hit with a Shadow or Fire spell, you have a 30% chance to become immune to Shadow and Fire spells for 4 sec."
          ],
          "iconName": "spell_shadow_netherprotection",
          "y": 5,
          "x": 0
        },
        {
          "id": 966,
          "name": "Emberstorm",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            17954,
            17955,
            17956,
            17957,
            17958
          ],
          "descriptions": [
            "Increases the damage done by your Fire spells by 2% and reduces the cast time of your Incinerate spell by 2%.",
            "Increases the damage done by your Fire spells by 4% and reduces the cast time of your Incinerate spell by 4%.",
            "Increases the damage done by your Fire spells by 6% and reduces the cast time of your Incinerate spell by 6%.",
            "Increases the damage done by your Fire spells by 8% and reduces the cast time of your Incinerate spell by 8%.",
            "Increases the damage done by your Fire spells by 10% and reduces the cast time of your Incinerate spell by 10%."
          ],
          "iconName": "spell_fire_selfdestruct",
          "y": 5,
          "x": 2
        },
        {
          "id": 1817,
          "name": "Backlash",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34935,
            34938,
            34939
          ],
          "descriptions": [
            "Increases your critical strike chance with spells by an additional 1% and gives you a 8% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds.",
            "Increases your critical strike chance with spells by an additional 2% and gives you a 16% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds.",
            "Increases your critical strike chance with spells by an additional 3% and gives you a 25% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%. This effect lasts 8 sec and will not occur more than once every 8 seconds."
          ],
          "iconName": "spell_fire_playingwithfire",
          "y": 6,
          "x": 0
        },
        {
          "id": 968,
          "name": "Conflagrate",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            17962
          ],
          "descriptions": [
            "Ignites a target that is already afflicted by Immolate, dealing 249 to 316 Fire damage and consuming the Immolate spell."
          ],
          "iconName": "spell_fire_fireball",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 961,
            "talentRank": 5
          },
          "talentLink": "Improved Immolate"
        },
        {
          "id": 1678,
          "name": "Soul Leech",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            30293,
            30295,
            30296
          ],
          "descriptions": [
            "Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 10% chance to return health equal to 20% of the damage caused.",
            "Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 20% chance to return health equal to 20% of the damage caused.",
            "Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 30% chance to return health equal to 20% of the damage caused."
          ],
          "iconName": "spell_shadow_soulleech_3",
          "y": 6,
          "x": 2
        },
        {
          "id": 1677,
          "name": "Shadow and Flame",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            30288,
            30289,
            30290,
            30291,
            30292
          ],
          "descriptions": [
            "Your Shadow Bolt and Incinerate spells gain an additional 4% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 8% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 12% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 16% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 20% of your bonus spell damage effects."
          ],
          "iconName": "spell_shadow_shadowandflame",
          "y": 7,
          "x": 1
        },
        {
          "id": 1676,
          "name": "Shadowfury",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            30283
          ],
          "descriptions": [
            "Shadowfury is unleashed, causing 357 to 422 Shadow damage and stunning all enemies within 8 yds for 2 sec."
          ],
          "iconName": "spell_shadow_shadowfury",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 2100,
            "talentRank": 1
          }
        }
      ]
    }
  ]
};
