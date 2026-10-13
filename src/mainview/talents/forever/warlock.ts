import { ClassData } from "../../../types";

export const warlockData: ClassData = {
  "name": "Warlock",
  "talentTrees": [
    {
      "name": "Affliction",
      "talents": [
        {
          "id": 1316697,
          "name": "Wrack",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_deathknight_hemorrhagicfever",
          "spellIds": [
            1316697
          ],
          "descriptions": [
            "Tears the target apart from within, inflicting 36 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10% for 6 sec."
          ],
          "requirements": {
            "talentId": 18265,
            "talentRank": 1
          },
          "talentLink": "Siphon Life"
        },
        {
          "id": 18271,
          "name": "Shadow Mastery",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_shadow_shadetruesight",
          "spellIds": [
            18271
          ],
          "descriptions": [
            "Increases the damage dealt or life drained by your Shadow spells by 2%.",
            "Increases the damage dealt or life drained by your Shadow spells by 4%.",
            "Increases the damage dealt or life drained by your Shadow spells by 6%.",
            "Increases the damage dealt or life drained by your Shadow spells by 8%.",
            "Increases the damage dealt or life drained by your Shadow spells by 10%."
          ]
        },
        {
          "id": 17804,
          "name": "Soul Siphon",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_lifedrain02",
          "spellIds": [
            17804
          ],
          "descriptions": [
            "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 4% per each of your other Affliction effects active on the target, up to a maximum increase of 12%.",
            "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 8% per each of your other Affliction effects active on the target, up to a maximum increase of 24%.",
            "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 12% per each of your other Affliction effects active on the target, up to a maximum increase of 36%."
          ]
        },
        {
          "id": 18265,
          "name": "Siphon Life",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_requiem",
          "spellIds": [
            18265
          ],
          "descriptions": [
            "Transfers 11 health from the target to the caster every 3 sec.  Lasts 30 sec."
          ]
        },
        {
          "id": 18223,
          "name": "Curse of Exhaustion",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_grimward",
          "spellIds": [
            18223
          ],
          "descriptions": [
            "Reduces the target's movement speed by <!--sp18288:0-->30<!--sp18288-->% for 12 sec.  Only one Curse per Warlock can be active on any one target."
          ],
          "requirements": {
            "talentId": 18288,
            "talentRank": 1
          },
          "talentLink": "Amplify Curse"
        },
        {
          "id": 18094,
          "name": "Nightfall",
          "x": 1,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_twilight",
          "spellIds": [
            18094
          ],
          "descriptions": [
            "Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
            "Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%."
          ]
        },
        {
          "id": 18288,
          "name": "Amplify Curse",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_contagion",
          "spellIds": [
            18288
          ],
          "descriptions": [
            "Increases the effect of your next Curse of Weakness or Bane of Agony by 50%, or your next Curse of Exhaustion by 20%.  Lasts 30 sec."
          ]
        },
        {
          "id": 427712,
          "name": "Pandemic",
          "x": 3,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_unstableaffliction_2",
          "spellIds": [
            427712
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 100%.",
            "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 200%.",
            "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 300%."
          ]
        },
        {
          "id": 17783,
          "name": "Fel Concentration",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_fingerofdeath",
          "spellIds": [
            17783
          ],
          "descriptions": [
            "Gives you a 70% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
            "Gives you a 140% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
            "Gives you a 210% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells."
          ]
        },
        {
          "id": 18827,
          "name": "Improved Bane of Agony",
          "x": 0,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_curseofsargeras",
          "spellIds": [
            18827
          ],
          "descriptions": [
            "Increases the damage done by your Bane of Agony by 2%.",
            "Increases the damage done by your Bane of Agony by 4%."
          ]
        },
        {
          "id": 403511,
          "name": "Improved Drains",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_haunting",
          "spellIds": [
            403511
          ],
          "descriptions": [
            "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 20%.",
            "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 40%.",
            "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 60%."
          ]
        },
        {
          "id": 18182,
          "name": "Improved Life Tap",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_burningspirit",
          "spellIds": [
            18182
          ],
          "descriptions": [
            "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
            "Increases the amount of Mana awarded by your Life Tap spell by 20%."
          ]
        },
        {
          "id": 437032,
          "name": "Soul Harvest",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "inv_elemental_primal_shadow",
          "spellIds": [
            437032
          ],
          "descriptions": [
            "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by 50% for 10 sec and allows 50% of normal Mana regeneration to continue while casting.",
            "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by 100% for 10 sec and allows 100% of normal Mana regeneration to continue while casting."
          ]
        },
        {
          "id": 1225177,
          "name": "Malediction",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_curseofachimonde",
          "spellIds": [
            1225177
          ],
          "descriptions": [
            "Increases all periodic damage done by your Warlock spells by 2%.",
            "Increases all periodic damage done by your Warlock spells by 4%.",
            "Increases all periodic damage done by your Warlock spells by 6%.",
            "Increases all periodic damage done by your Warlock spells by 8%.",
            "Increases all periodic damage done by your Warlock spells by 10%."
          ]
        },
        {
          "id": 17810,
          "name": "Improved Corruption",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_abominationexplosion",
          "spellIds": [
            17810
          ],
          "descriptions": [
            "Reduces the casting time of your Corruption spell by 0.4 sec.",
            "Reduces the casting time of your Corruption spell by 0.8 sec.",
            "Reduces the casting time of your Corruption spell by 1.2 sec.",
            "Reduces the casting time of your Corruption spell by 1.6 sec.",
            "Reduces the casting time of your Corruption spell by 2 sec."
          ]
        },
        {
          "id": 18174,
          "name": "Suppression",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_unsummonbuilding",
          "spellIds": [
            18174
          ],
          "descriptions": [
            "Reduces the chance for enemies to resist your Affliction spells by 2%.",
            "Reduces the chance for enemies to resist your Affliction spells by 4%.",
            "Reduces the chance for enemies to resist your Affliction spells by 6%.",
            "Reduces the chance for enemies to resist your Affliction spells by 8%.",
            "Reduces the chance for enemies to resist your Affliction spells by 10%."
          ]
        },
        {
          "id": 1310949,
          "name": "Malevolence",
          "x": 0,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_focusedpower",
          "spellIds": [
            1310949
          ],
          "descriptions": [
            "Increases the critical effect chance of your Shadow spells by 5%.",
            "Increases the critical effect chance of your Shadow spells by 10%.",
            "Increases the critical effect chance of your Shadow spells by 15%.",
            "Increases the critical effect chance of your Shadow spells by 20%.",
            "Increases the critical effect chance of your Shadow spells by 25%."
          ]
        }
      ]
    },
    {
      "name": "Demonology",
      "talents": [
        {
          "id": 425464,
          "name": "Demonic Pact",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "inv_ability_soulharvesterwarlock_demonicsoul",
          "spellIds": [
            425464
          ],
          "descriptions": [
            "Your Demonic Sacrifice effect is no longer cancelled by summoning a different Demon pet. Resummoning the sacrificed pet will still cancel the effect."
          ],
          "requirements": {
            "talentId": 19028,
            "talentRank": 1
          },
          "talentLink": "Soul Link"
        },
        {
          "id": 23785,
          "name": "Master Demonologist",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_shadow_shadowpact",
          "spellIds": [
            23785
          ],
          "descriptions": [
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br /><br />Imp - Reduces threat caused by 4%.<br /><br />Voidwalker - Reduces physical damage taken by 2%.<br /><br />Succubus - Increases all damage caused by 2%.<br /><br />Felhunter - Increases all resistances by .2 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br /><br />Imp - Reduces threat caused by 8%.<br /><br />Voidwalker - Reduces physical damage taken by 4%.<br /><br />Succubus - Increases all damage caused by 4%.<br /><br />Felhunter - Increases all resistances by .4 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br /><br />Imp - Reduces threat caused by 12%.<br /><br />Voidwalker - Reduces physical damage taken by 6%.<br /><br />Succubus - Increases all damage caused by 6%.<br /><br />Felhunter - Increases all resistances by .6 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br /><br />Imp - Reduces threat caused by 16%.<br /><br />Voidwalker - Reduces physical damage taken by 8%.<br /><br />Succubus - Increases all damage caused by 8%.<br /><br />Felhunter - Increases all resistances by .8 per level.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br /><br />Imp - Reduces threat caused by 20%.<br /><br />Voidwalker - Reduces physical damage taken by 10%.<br /><br />Succubus - Increases all damage caused by 10%.<br /><br />Felhunter - Increases all resistances by 1 per level."
          ]
        },
        {
          "id": 19028,
          "name": "Soul Link",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_gathershadows",
          "spellIds": [
            19028
          ],
          "descriptions": [
            "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Incubus, or Felhunter Demon instead. In addition, both the Demon and the master will inflict <!--pts1:0:0:25228-->3<!---->% more damage. Lasts as long as the Demon is active."
          ],
          "requirements": {
            "talentId": 18788,
            "talentRank": 1
          },
          "talentLink": "Demonic Sacrifice"
        },
        {
          "id": 412732,
          "name": "Demonic Knowledge",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_improvedvampiricembrace",
          "spellIds": [
            412732
          ],
          "descriptions": [
            "Increases your spell damage by an amount equal to 5% of the total of your active demon's Stamina plus Intellect.",
            "Increases your spell damage by an amount equal to 10% of the total of your active demon's Stamina plus Intellect.",
            "Increases your spell damage by an amount equal to 15% of the total of your active demon's Stamina plus Intellect."
          ]
        },
        {
          "id": 1225217,
          "name": "Improved Felhunter",
          "x": 0,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_summonfelhunter",
          "spellIds": [
            1225217
          ],
          "descriptions": [
            "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 10%, and reduces the cooldown of its Spell Lock by 6 sec.",
            "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 20%, and reduces the cooldown of its Spell Lock by 6 sec.",
            "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 30%, and reduces the cooldown of its Spell Lock by 6 sec."
          ]
        },
        {
          "id": 18708,
          "name": "Fel Domination",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_nature_removecurse",
          "spellIds": [
            18708
          ],
          "descriptions": [
            "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 6 sec and its Mana cost reduced by 50%."
          ],
          "requirements": {
            "talentId": 18709,
            "talentRank": 2
          },
          "talentLink": "Master Summoner"
        },
        {
          "id": 1293695,
          "name": "Demonic Brand",
          "x": 3,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "ability_demonhunter_chaoticimprint_fire",
          "spellIds": [
            1293695
          ],
          "descriptions": [
            "Your Searing Pain generates 50% less threat and brands the target for 10 sec. Your pet's next 3 attacks against the target deal [(((<!--pl1293695:1:60-->60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)] to [(((<!--pl1293695:1:60-->60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)] Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
            "Your Searing Pain generates 100% less threat and brands the target for 10 sec. Your pet's next 3 attacks against the target deal [(((<!--pl1293695:1:60-->60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)] to [(((<!--pl1293695:1:60-->60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)] Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
            "Your Searing Pain generates 150% less threat and brands the target for 10 sec. Your pet's next 3 attacks against the target deal [(((<!--pl1293695:1:60-->60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)] to [(((<!--pl1293695:1:60-->60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)] Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat."
          ]
        },
        {
          "id": 440870,
          "name": "Decimation",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_fire_fireball02",
          "spellIds": [
            440870
          ],
          "descriptions": [
            "Reduces the cooldown of your Soul Fire spell by 45%. When you cast Shadow Bolt or Searing Pain on an enemy below 17.5% health, they deal 0% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 20% and costs no Soul Shards.",
            "Reduces the cooldown of your Soul Fire spell by 90%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 0% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 40% and costs no Soul Shards."
          ]
        },
        {
          "id": 18709,
          "name": "Master Summoner",
          "x": 2,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_impphaseshift",
          "spellIds": [
            18709
          ],
          "descriptions": [
            "Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
            "Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by 4 sec and the Mana cost by 40%."
          ]
        },
        {
          "id": 1225214,
          "name": "Demonic Energies",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_felmending",
          "spellIds": [
            1225214
          ],
          "descriptions": [
            "You heal your pet for 15% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 100% of the Mana you gain.",
            "You heal your pet for 30% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 200% of the Mana you gain."
          ]
        },
        {
          "id": 18788,
          "name": "Demonic Sacrifice",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_psychicscream",
          "spellIds": [
            18788
          ],
          "descriptions": [
            "When activated, sacrifices your summoned Demon to enhance the opposing aspect of your power, granting you an effect that lasts 2 hrs. The effect is canceled if any Demon is summoned.<br /><br />Imp: Increases your Shadow damage by 15%.<br /><br />Voidwalker: Restores 2% of your total Mana every 4 sec.<br /><br />Succubus/Incubus: Increases your Fire damage by 15%.<br /><br />Felhunter: Restores 3% of your total Health every 4 sec."
          ]
        },
        {
          "id": 18754,
          "name": "Improved Sayaad",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "ability_warlock_randomizesuccubusincubus",
          "spellIds": [
            18754
          ],
          "descriptions": [
            "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 10%.",
            "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 20%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 20%.",
            "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by 30%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by 30%."
          ]
        },
        {
          "id": 1235316,
          "name": "Demonic Aegis",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_ragingscream",
          "spellIds": [
            1235316
          ],
          "descriptions": [
            "Increases the effectiveness of your Demon Skin and Demon Armor spells by 15%.",
            "Increases the effectiveness of your Demon Skin and Demon Armor spells by 30%."
          ]
        },
        {
          "id": 18731,
          "name": "Fel Vitality",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_demonictactics",
          "spellIds": [
            18731
          ],
          "descriptions": [
            "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 5%, and increases your maximum Mana by 5%.",
            "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 10%, and increases your maximum Mana by 10%.",
            "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 15%, and increases your maximum Mana by 15%."
          ]
        },
        {
          "id": 18705,
          "name": "Improved Voidwalker",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_summonvoidwalker",
          "spellIds": [
            18705
          ],
          "descriptions": [
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%.",
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 20%.",
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 30%."
          ]
        },
        {
          "id": 18703,
          "name": "Improved Health Funnel",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_lifedrain",
          "spellIds": [
            18703
          ],
          "descriptions": [
            "Increases the amount of Health transferred by your Health Funnel spell by 10%.",
            "Increases the amount of Health transferred by your Health Funnel spell by 20%."
          ]
        },
        {
          "id": 18769,
          "name": "Unholy Power",
          "x": 3,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_shadowworddominate",
          "spellIds": [
            18769
          ],
          "descriptions": [
            "Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 4%.",
            "Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 8%.",
            "Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 12%.",
            "Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 16%.",
            "Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by 20%."
          ]
        },
        {
          "id": 18697,
          "name": "Demonic Embrace",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_metamorphosis",
          "spellIds": [
            18697
          ],
          "descriptions": [
            "Increases your total Stamina by 3% but reduces your total Spirit by 1%.",
            "Increases your total Stamina by 6% but reduces your total Spirit by 2%.",
            "Increases your total Stamina by 9% but reduces your total Spirit by 3%.",
            "Increases your total Stamina by 12% but reduces your total Spirit by 4%.",
            "Increases your total Stamina by 15% but reduces your total Spirit by 5%."
          ]
        },
        {
          "id": 18694,
          "name": "Improved Imp",
          "x": 1,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_summonimp",
          "spellIds": [
            18694
          ],
          "descriptions": [
            "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
            "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
            "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%."
          ]
        }
      ]
    },
    {
      "name": "Destruction",
      "talents": [
        {
          "id": 412758,
          "name": "Incinerate",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_fire_burnout",
          "spellIds": [
            412758
          ],
          "descriptions": [
            "Deals <!--ppl40:49:97:110-->100 to 114 Fire damage to your target and an additional 25% damage if the target is afflicted by Immolate."
          ],
          "requirements": {
            "talentId": 1225228,
            "talentRank": 1
          },
          "talentLink": "Bane of Havoc"
        },
        {
          "id": 426316,
          "name": "Shadow and Flame",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_fire_playingwithfire",
          "spellIds": [
            426316
          ],
          "descriptions": [
            "Your Shadow Bolt and Incinerate spells gain an additional 4% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 8% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 12% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 16% of your bonus spell damage effects.",
            "Your Shadow Bolt and Incinerate spells gain an additional 20% of your bonus spell damage effects."
          ]
        },
        {
          "id": 1225228,
          "name": "Bane of Havoc",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_warlock_baneofhavoc",
          "spellIds": [
            1225228
          ],
          "descriptions": [
            "Afflicts the target for 5 min, causing 15% of all damage done by the Warlock to other targets to also be dealt to the cursed target. Bane of Havoc is limited to 1 target, and only one Bane per Warlock can be active on any one target."
          ]
        },
        {
          "id": 412751,
          "name": "Fire and Brimstone",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_fire_meteorstorm",
          "spellIds": [
            412751
          ],
          "descriptions": [
            "Increases the critical strike chance of your Conflagrate spell by 25%.",
            "Increases the critical strike chance of your Conflagrate spell by 50%.",
            "Increases the critical strike chance of your Conflagrate spell by 75%."
          ],
          "requirements": {
            "talentId": 1293817,
            "talentRank": 1
          },
          "talentLink": "Conflagrate"
        },
        {
          "id": 18073,
          "name": "Pyroclasm",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_fire_volcano",
          "spellIds": [
            18073
          ],
          "descriptions": [
            "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 13% chance to stun the target for 3 sec.",
            "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 26% chance to stun the target for 3 sec."
          ],
          "requirements": {
            "talentId": 18135,
            "talentRank": 3
          },
          "talentLink": "Intensity"
        },
        {
          "id": 17927,
          "name": "Agonizing Flames",
          "x": 1,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_fire_soulburn",
          "spellIds": [
            17927
          ],
          "descriptions": [
            "Increases the critical strike chance of your Searing Pain spell by 10% and the damage done by all your Destruction spells by 10%.",
            "Increases the critical strike chance of your Searing Pain spell by 20% and the damage done by all your Destruction spells by 20%.",
            "Increases the critical strike chance of your Searing Pain spell by 30% and the damage done by all your Destruction spells by 30%."
          ]
        },
        {
          "id": 1293817,
          "name": "Conflagrate",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_fire_fireball",
          "spellIds": [
            1293817
          ],
          "descriptions": [
            "Ignites a target that is already afflicted by your Immolate spell, dealing <!--ppl25:30:95:90-->88 to 111 Fire damage and consuming your Immolate effect."
          ]
        },
        {
          "id": 17917,
          "name": "Destructive Reach",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_corpseexplode",
          "spellIds": [
            17917
          ],
          "descriptions": [
            "Increases the range of your Destruction spells by 10%.",
            "Increases the range of your Destruction spells by 20%."
          ]
        },
        {
          "id": 18135,
          "name": "Intensity",
          "x": 0,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_fire_lavaspawn",
          "spellIds": [
            18135
          ],
          "descriptions": [
            "Allows 10% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 4 rage.",
            "Allows 20% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 7 rage.",
            "Allows 30% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 10 rage."
          ]
        },
        {
          "id": 17959,
          "name": "Ruin",
          "x": 1,
          "y": 2,
          "maxRank": 5,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_shadowwordpain",
          "spellIds": [
            17959
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Destruction spells by 20%.",
            "Increases the critical strike damage bonus of your Destruction spells by 40%.",
            "Increases the critical strike damage bonus of your Destruction spells by 60%.",
            "Increases the critical strike damage bonus of your Destruction spells by 80%.",
            "Increases the critical strike damage bonus of your Destruction spells by 100%."
          ]
        },
        {
          "id": 17877,
          "name": "Shadowburn",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_scourgebuild",
          "spellIds": [
            17877
          ],
          "descriptions": [
            "Instantly blasts the target for <!--ppl20:24:66:90-->65 to 74 Shadow damage.  If a non-trivial target dies within 8 sec of being hit with Shadowburn, the caster gains a Soul Shard."
          ]
        },
        {
          "id": 1225220,
          "name": "Molten Skin",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "ability_mage_moltenarmor",
          "spellIds": [
            1225220
          ],
          "descriptions": [
            "Reduces all damage taken by 2%.",
            "Reduces all damage taken by 4%.",
            "Reduces all damage taken by 6%.",
            "Reduces all damage taken by 8%.",
            "Reduces all damage taken by 10%."
          ]
        },
        {
          "id": 18119,
          "name": "Aftermath",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_fire_fire",
          "spellIds": [
            18119
          ],
          "descriptions": [
            "Gives your Destruction spells a 2% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 4% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 6% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 8% chance to daze the target for 5 sec.",
            "Gives your Destruction spells a 10% chance to daze the target for 5 sec."
          ]
        },
        {
          "id": 17778,
          "name": "Cataclysm",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_fire_windsofwoe",
          "spellIds": [
            17778
          ],
          "descriptions": [
            "Reduces the Mana cost of your Destruction spells by 10%.",
            "Reduces the Mana cost of your Destruction spells by 20%.",
            "Reduces the Mana cost of your Destruction spells by 30%."
          ]
        },
        {
          "id": 17788,
          "name": "Bane",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_deathpact",
          "spellIds": [
            17788
          ],
          "descriptions": [
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
            "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2 sec."
          ]
        },
        {
          "id": 17793,
          "name": "Improved Shadow Bolt",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_shadowbolt",
          "spellIds": [
            17793
          ],
          "descriptions": [
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 8% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 12% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 16% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 20% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec."
          ]
        }
      ]
    }
  ]
};
