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
          "requirements": {
            "talentName": "Siphon Life",
            "talentRank": 1,
            "talentId": 18265
          },
          "spellIds": [
            1316697
          ],
          "descriptions": [
            "Tears the target apart from within, inflicting 36 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10% for 6 sec."
          ]
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
            "Increases the damage dealt or life drained by your Shadow spells by 1%.",
            "Increases the damage dealt or life drained by your Shadow spells by 2%.",
            "Increases the damage dealt or life drained by your Shadow spells by 3%.",
            "Increases the damage dealt or life drained by your Shadow spells by 4%.",
            "Increases the damage dealt or life drained by your Shadow spells by 5%."
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
          "requirements": {
            "talentName": "Amplify Curse",
            "talentRank": 1,
            "talentId": 18288
          },
          "spellIds": [
            18223
          ],
          "descriptions": [
            "Reduces the target's movement speed by 30% for 12 sec.  Only one Curse per Warlock can be active on any one target."
          ]
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
            "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 2% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
            "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 4% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%."
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
            "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 33%.",
            "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 67%.",
            "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 100%."
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
            "Gives you a 23% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
            "Gives you a 47% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
            "Gives you a 70% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells."
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
            "Increases the damage done by your Bane of Agony by 5%.",
            "Increases the damage done by your Bane of Agony by 10%."
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
            "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 7%.",
            "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 13%.",
            "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 20%."
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
            "Increases all periodic damage done by your Warlock spells by 1%.",
            "Increases all periodic damage done by your Warlock spells by 2%.",
            "Increases all periodic damage done by your Warlock spells by 3%.",
            "Increases all periodic damage done by your Warlock spells by 4%.",
            "Increases all periodic damage done by your Warlock spells by 5%."
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
            "Reduces the casting time of your Corruption spell by 0.4 sec and increases the damage it deals by 2%.",
            "Reduces the casting time of your Corruption spell by 0.8 sec and increases the damage it deals by 4%.",
            "Reduces the casting time of your Corruption spell by 1.2 sec and increases the damage it deals by 6%.",
            "Reduces the casting time of your Corruption spell by 1.6 sec and increases the damage it deals by 8%.",
            "Reduces the casting time of your Corruption spell by 2 sec and increases the damage it deals by 10%."
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
            "Improves your chance to hit by 1% and reduces all threat you generate by 4%.",
            "Improves your chance to hit by 2% and reduces all threat you generate by 8%.",
            "Improves your chance to hit by 3% and reduces all threat you generate by 12%.",
            "Improves your chance to hit by 4% and reduces all threat you generate by 16%.",
            "Improves your chance to hit by 5% and reduces all threat you generate by 20%."
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
            "Increases the critical effect chance of your Shadow spells by 1%.",
            "Increases the critical effect chance of your Shadow spells by 2%.",
            "Increases the critical effect chance of your Shadow spells by 3%.",
            "Increases the critical effect chance of your Shadow spells by 4%.",
            "Increases the critical effect chance of your Shadow spells by 5%."
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
          "requirements": {
            "talentName": "Soul Link",
            "talentRank": 1,
            "talentId": 19028
          },
          "spellIds": [
            425464
          ],
          "descriptions": [
            "Your Demonic Sacrifice effect is no longer cancelled by summoning a different Demon pet. Resummoning the sacrificed pet will still cancel the effect."
          ]
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
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.  Imp - Increases Fire damage done by 2%.  Voidwalker - Reduces Physical damage taken by 2%.  Succubus/Incubus - Increases Shadow damage done by 2%.  Felhunter - Reduces Magic damage taken by 2%.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.  Imp - Increases Fire damage done by 4%.  Voidwalker - Reduces Physical damage taken by 4%.  Succubus/Incubus - Increases Shadow damage done by 4%.  Felhunter - Reduces Magic damage taken by 4%.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.  Imp - Increases Fire damage done by 6%.  Voidwalker - Reduces Physical damage taken by 6%.  Succubus/Incubus - Increases Shadow damage done by 6%.  Felhunter - Reduces Magic damage taken by 6%.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.  Imp - Increases Fire damage done by 8%.  Voidwalker - Reduces Physical damage taken by 8%.  Succubus/Incubus - Increases Shadow damage done by 8%.  Felhunter - Reduces Magic damage taken by 8%.",
            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.  Imp - Increases Fire damage done by 10%.  Voidwalker - Reduces Physical damage taken by 10%.  Succubus/Incubus - Increases Shadow damage done by 10%.  Felhunter - Reduces Magic damage taken by 10%."
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
          "requirements": {
            "talentName": "Demonic Sacrifice",
            "talentRank": 1,
            "talentId": 18788
          },
          "spellIds": [
            19028
          ],
          "descriptions": [
            "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Incubus, or Felhunter Demon instead. In addition, both the Demon and the master will inflict 3% more damage. Lasts as long as the Demon is active."
          ]
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
            "Increases your spell damage and your Demon pet's spell damage by up to 33% of your level while you have a summoned Demon pet active.",
            "Increases your spell damage and your Demon pet's spell damage by up to 67% of your level while you have a summoned Demon pet active.",
            "Increases your spell damage and your Demon pet's spell damage by up to 100% of your level while you have a summoned Demon pet active."
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
            "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 10%, and reduces the cooldown of its Spell Lock by 2 sec.",
            "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 20%, and reduces the cooldown of its Spell Lock by 4 sec.",
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
          "requirements": {
            "talentName": "Master Summoner",
            "talentRank": 2,
            "talentId": 18709
          },
          "spellIds": [
            18708
          ],
          "descriptions": [
            "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 6 sec and its Mana cost reduced by 50%."
          ]
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
            "Your Searing Pain generates 17% less threat and brands the target for 10 sec. Your pet's next 2 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
            "Your Searing Pain generates 33% less threat and brands the target for 10 sec. Your pet's next 4 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
            "Your Searing Pain generates 50% less threat and brands the target for 10 sec. Your pet's next 6 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat."
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
            "Reduces the cooldown of your Soul Fire spell by 45%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 3% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 20% and costs no Soul Shards.",
            "Reduces the cooldown of your Soul Fire spell by 90%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 6% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 40% and costs no Soul Shards."
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
            "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
            "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 4 sec and the Mana cost by 40%."
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
            "You heal your pet for 8% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 50% of the Mana you gain.",
            "You heal your pet for 15% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 100% of the Mana you gain."
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
            "When activated, sacrifices your summoned Demon to enhance the opposing aspect of your power, granting you an effect that lasts 2 hrs. The effect is canceled if any Demon is summoned.  Imp: Increases your Shadow damage by 15%.  Voidwalker: Restores 2% of your total Mana every 4 sec.  Succubus/Incubus: Increases your Fire damage by 15%.  Felhunter: Restores 3% of your total Health every 4 sec."
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
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 10%.",
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 20%.",
            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by 30%."
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
            "Increases the amount of health transferred by your Health Funnel spell by 20%, reduces its health cost by 15%, and reduces all threat your Health Funnel generates by 50%. Allows Health Funnel to be used regardless of your demon's health.",
            "Increases the amount of health transferred by your Health Funnel spell by 40%, reduces its health cost by 30%, and reduces all threat your Health Funnel generates by 100%. Allows Health Funnel to be used regardless of your demon's health."
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
            "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 2%.",
            "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 4%.",
            "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 6%.",
            "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 8%.",
            "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 10%."
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
            "Increases your total Stamina by 3%.",
            "Increases your total Stamina by 6%.",
            "Increases your total Stamina by 9%.",
            "Increases your total Stamina by 12%.",
            "Increases your total Stamina by 15%."
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
            "Increases the damage of your Imp's Firebolt spell by 10% and the effect of its Fire Shield spell by 10%.",
            "Increases the damage of your Imp's Firebolt spell by 20% and the effect of its Fire Shield spell by 20%.",
            "Increases the damage of your Imp's Firebolt spell by 30% and the effect of its Fire Shield spell by 30%."
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
          "requirements": {
            "talentName": "Bane of Havoc",
            "talentRank": 1,
            "talentId": 1225228
          },
          "spellIds": [
            412758
          ],
          "descriptions": [
            "Deals 100 to 114 Fire damage to your target and an additional 25% damage if the target is afflicted by Immolate."
          ]
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
            "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 2% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 2% for 20 sec. In addition, Conflagrate has a 20% chance not to consume Immolate, and Shadowburn has a 20% chance to instantly refund a Soul Shard.",
            "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 4% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 4% for 20 sec. In addition, Conflagrate has a 40% chance not to consume Immolate, and Shadowburn has a 40% chance to instantly refund a Soul Shard.",
            "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 6% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 6% for 20 sec. In addition, Conflagrate has a 60% chance not to consume Immolate, and Shadowburn has a 60% chance to instantly refund a Soul Shard.",
            "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 8% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 8% for 20 sec. In addition, Conflagrate has a 80% chance not to consume Immolate, and Shadowburn has a 80% chance to instantly refund a Soul Shard.",
            "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 10% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 10% for 20 sec. In addition, Conflagrate has a 100% chance not to consume Immolate, and Shadowburn has a 100% chance to instantly refund a Soul Shard."
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
          "requirements": {
            "talentName": "Conflagrate",
            "talentRank": 1,
            "talentId": 1293817
          },
          "spellIds": [
            412751
          ],
          "descriptions": [
            "Increases the critical strike chance of your Conflagrate spell by 8%.",
            "Increases the critical strike chance of your Conflagrate spell by 17%.",
            "Increases the critical strike chance of your Conflagrate spell by 25%."
          ]
        },
        {
          "id": 18073,
          "name": "Pyroclasm",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_fire_volcano",
          "requirements": {
            "talentName": "Intensity",
            "talentRank": 3,
            "talentId": 18135
          },
          "spellIds": [
            18073
          ],
          "descriptions": [
            "Gives your Soul Fire spell a 13% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 13% chance over their duration to Stun targets they damage for 3 sec.",
            "Gives your Soul Fire spell a 26% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 26% chance over their duration to Stun targets they damage for 3 sec."
          ]
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
            "Increases the critical strike chance of your Searing Pain spell by 3% and the damage done by all your Destruction spells by 3%.",
            "Increases the critical strike chance of your Searing Pain spell by 7% and the damage done by all your Destruction spells by 7%.",
            "Increases the critical strike chance of your Searing Pain spell by 10% and the damage done by all your Destruction spells by 10%."
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
            "Ignites a target that is already afflicted by your Immolate spell, dealing 88 to 111 Fire damage and consuming your Immolate effect."
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
            "Increases the range of your damaging spells by 10%.",
            "Increases the range of your damaging spells by 20%."
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
            "Gives you a 23% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
            "Gives you a 47% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
            "Gives you a 70% chance to resist interruption caused by damage while casting or channeling any Destruction spell."
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
            "Instantly blasts the target for 65 to 74 Shadow damage.  If a non-trivial target dies within 8 sec of being hit with Shadowburn, the caster gains a Soul Shard."
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
            "Increases the initial damage of your Immolate spell by 10% and your Conflagrate spell has a 20% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
            "Increases the initial damage of your Immolate spell by 20% and your Conflagrate spell has a 40% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
            "Increases the initial damage of your Immolate spell by 30% and your Conflagrate spell has a 60% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
            "Increases the initial damage of your Immolate spell by 40% and your Conflagrate spell has a 80% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
            "Increases the initial damage of your Immolate spell by 50% and your Conflagrate spell has a 100% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec."
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
            "Reduces the Mana cost of your Destruction spells by 3%.",
            "Reduces the Mana cost of your Destruction spells by 6%.",
            "Reduces the Mana cost of your Destruction spells by 10%."
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
            "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
            "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
            "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
            "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
            "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.5 sec and your Soul Fire spell by 2 sec."
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
            "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 4% for 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 8% for 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 12% for 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 16% for 12 sec.",
            "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 20% for 12 sec."
          ]
        }
      ]
    }
  ]
};
