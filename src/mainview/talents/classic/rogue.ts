import { ClassData } from "../../../types"

export const rogueData: ClassData = {
  name: "Rogue",
  talentTrees: [
    {
      "name": "Assassination",
      "talents": [
        {
          "id": 276,
          "name": "Improved Eviscerate",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            14162,
            14163,
            14164
          ],
          "descriptions": [
            "Increases the damage done by your Eviscerate ability by 5%.",
            "Increases the damage done by your Eviscerate ability by 10%.",
            "Increases the damage done by your Eviscerate ability by 15%."
          ],
          "x": 0,
          "y": 0,
          "iconName": "ability_rogue_eviscerate"
        },
        {
          "id": 272,
          "name": "Remorseless Attacks",
          "maxRank": 2,
          "minPointsRequired": 0,
          "spellIds": [
            14144,
            14148
          ],
          "descriptions": [
            "After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.  Lasts 20 sec.",
            "After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.  Lasts 20 sec."
          ],
          "x": 1,
          "y": 0,
          "iconName": "ability_fiegndead"
        },
        {
          "id": 270,
          "name": "Malice",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            14138,
            14139,
            14140,
            14141,
            14142
          ],
          "descriptions": [
            "Increases your critical strike chance by 1%.",
            "Increases your critical strike chance by 2%.",
            "Increases your critical strike chance by 3%.",
            "Increases your critical strike chance by 4%.",
            "Increases your critical strike chance by 5%."
          ],
          "x": 2,
          "y": 0,
          "iconName": "ability_racial_bloodrage"
        },
        {
          "id": 273,
          "name": "Ruthlessness",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            14156,
            14160,
            14161
          ],
          "descriptions": [
            "Gives your finishing moves a 20% chance to add a combo point to your target.",
            "Gives your finishing moves a 40% chance to add a combo point to your target.",
            "Gives your finishing moves a 60% chance to add a combo point to your target."
          ],
          "x": 0,
          "y": 1,
          "iconName": "ability_druid_disembowel"
        },
        {
          "id": 274,
          "name": "Murder",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            14158,
            14159
          ],
          "descriptions": [
            "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by 1%.",
            "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by 2%."
          ],
          "x": 1,
          "y": 1,
          "iconName": "spell_shadow_deathscream"
        },
        {
          "id": 277,
          "name": "Improved Slice and Dice",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            14165,
            14166,
            14167
          ],
          "descriptions": [
            "Increases the duration of your Slice and Dice ability by 15%.",
            "Increases the duration of your Slice and Dice ability by 30%.",
            "Increases the duration of your Slice and Dice ability by 45%."
          ],
          "x": 3,
          "y": 1,
          "iconName": "ability_rogue_slicedice"
        },
        {
          "id": 281,
          "name": "Relentless Strikes",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            14179
          ],
          "descriptions": [
            "Your finishing moves have a 1101000000% chance per combo point to restore 25 energy."
          ],
          "x": 0,
          "y": 2,
          "iconName": "ability_warrior_decisivestrike"
        },
        {
          "id": 278,
          "name": "Improved Expose Armor",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            14168,
            14169
          ],
          "descriptions": [
            "Increases the armor reduced by your Expose Armor ability by 25%.",
            "Increases the armor reduced by your Expose Armor ability by 50%."
          ],
          "x": 1,
          "y": 2,
          "iconName": "ability_warrior_riposte"
        },
        {
          "id": 269,
          "name": "Lethality",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            14128,
            14132,
            14135,
            14136,
            14137
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 6%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 12%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 18%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 24%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 30%."
          ],
          "x": 2,
          "y": 2,
          "iconName": "ability_criticalstrike"
        },
        {
          "id": 682,
          "name": "Vile Poisons",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            16513,
            16514,
            16515,
            16719,
            16720
          ],
          "descriptions": [
            "Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 20% and gives your poisons an additional 40% chance to resist dispel effects."
          ],
          "x": 1,
          "y": 3,
          "iconName": "ability_rogue_feigndeath"
        },
        {
          "id": 268,
          "name": "Improved Poisons",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            14113,
            14114,
            14115,
            14116,
            14117
          ],
          "descriptions": [
            "Increases the chance to apply poisons to your target by 2%.",
            "Increases the chance to apply poisons to your target by 4%.",
            "Increases the chance to apply poisons to your target by 6%.",
            "Increases the chance to apply poisons to your target by 8%.",
            "Increases the chance to apply poisons to your target by 10%."
          ],
          "x": 2,
          "y": 3,
          "iconName": "ability_poisons"
        },
        {
          "id": 280,
          "name": "Cold Blood",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            14177
          ],
          "descriptions": [
            "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%."
          ],
          "x": 1,
          "y": 4,
          "iconName": "spell_ice_lament"
        },
        {
          "id": 279,
          "name": "Improved Kidney Shot",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            14174,
            14175,
            14176
          ],
          "descriptions": [
            "While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources.",
            "While affected by your Kidney Shot ability, the target receives an additional 6% damage from all sources.",
            "While affected by your Kidney Shot ability, the target receives an additional 9% damage from all sources."
          ],
          "x": 2,
          "y": 4,
          "iconName": "ability_rogue_kidneyshot"
        },
        {
          "id": 283,
          "name": "Seal Fate",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            14186,
            14190,
            14193,
            14194,
            14195
          ],
          "descriptions": [
            "Your critical strikes from abilities that add combo points  have a 20% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points  have a 40% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points  have a 60% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points  have a 80% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points  have a 100% chance to add an additional combo point."
          ],
          "x": 1,
          "y": 5,
          "iconName": "spell_shadow_chilltouch"
        },
        {
          "id": 382,
          "name": "Vigor",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            14983
          ],
          "descriptions": [
            "Increases your maximum Energy by 10."
          ],
          "x": 1,
          "y": 6,
          "iconName": "spell_nature_earthbindtotem"
        }
      ]
    },
    {
      "name": "Combat",
      "talents": [
        {
          "id": 203,
          "name": "Improved Gouge",
          "maxRank": 3,
          "minPointsRequired": 0,
          "spellIds": [
            13741,
            13793,
            13792
          ],
          "descriptions": [
            "Increases the effect duration of your Gouge ability by 0.5 sec.",
            "Increases the effect duration of your Gouge ability by 1 sec.",
            "Increases the effect duration of your Gouge ability by 1.5 sec."
          ],
          "x": 0,
          "y": 0,
          "iconName": "ability_gouge"
        },
        {
          "id": 201,
          "name": "Improved Sinister Strike",
          "maxRank": 2,
          "minPointsRequired": 0,
          "spellIds": [
            13732,
            13863
          ],
          "descriptions": [
            "Reduces the Energy cost of your Sinister Strike ability by 3.",
            "Reduces the Energy cost of your Sinister Strike ability by 5."
          ],
          "x": 1,
          "y": 0,
          "iconName": "spell_shadow_ritualofsacrifice"
        },
        {
          "id": 186,
          "name": "Lightning Reflexes",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            13712,
            13788,
            13789,
            13790,
            13791
          ],
          "descriptions": [
            "Increases your Dodge chance by 1%.",
            "Increases your Dodge chance by 2%.",
            "Increases your Dodge chance by 3%.",
            "Increases your Dodge chance by 4%.",
            "Increases your Dodge chance by 5%."
          ],
          "x": 2,
          "y": 0,
          "iconName": "spell_nature_invisibilty"
        },
        {
          "id": 202,
          "name": "Improved Backstab",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            13733,
            13865,
            13866
          ],
          "descriptions": [
            "Increases the critical strike chance of your Backstab ability by 10%.",
            "Increases the critical strike chance of your Backstab ability by 20%.",
            "Increases the critical strike chance of your Backstab ability by 30%."
          ],
          "x": 0,
          "y": 1,
          "iconName": "ability_backstab"
        },
        {
          "id": 187,
          "name": "Deflection",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            13713,
            13853,
            13854,
            13855,
            13856
          ],
          "descriptions": [
            "Increases your Parry chance by 1%.",
            "Increases your Parry chance by 2%.",
            "Increases your Parry chance by 3%.",
            "Increases your Parry chance by 4%.",
            "Increases your Parry chance by 5%."
          ],
          "x": 1,
          "y": 1,
          "iconName": "ability_parry"
        },
        {
          "id": 181,
          "name": "Precision",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            13705,
            13832,
            13843,
            13844,
            13845
          ],
          "descriptions": [
            "Increases your chance to hit with melee weapons by 1%.",
            "Increases your chance to hit with melee weapons by 2%.",
            "Increases your chance to hit with melee weapons by 3%.",
            "Increases your chance to hit with melee weapons by 4%.",
            "Increases your chance to hit with melee weapons by 5%."
          ],
          "x": 2,
          "y": 1,
          "iconName": "ability_marksmanship"
        },
        {
          "id": 204,
          "name": "Endurance",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            13742,
            13872
          ],
          "descriptions": [
            "Reduces the cooldown of your Sprint and Evasion abilities by 45 sec.",
            "Reduces the cooldown of your Sprint and Evasion abilities by 1.5 min."
          ],
          "x": 0,
          "y": 2,
          "iconName": "spell_shadow_shadowward"
        },
        {
          "id": 301,
          "name": "Riposte",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            14251
          ],
          "descriptions": [
            "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec."
          ],
          "x": 1,
          "y": 2,
          "iconName": "ability_warrior_challange"
        },
        {
          "id": 222,
          "name": "Improved Sprint",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            13743,
            13875
          ],
          "descriptions": [
            "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
            "Gives a 100% chance to remove all movement impairing effects when you activate your Sprint ability."
          ],
          "x": 3,
          "y": 2,
          "iconName": "ability_rogue_sprint"
        },
        {
          "id": 206,
          "name": "Improved Kick",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            13754,
            13867
          ],
          "descriptions": [
            "Gives your Kick ability a 50% chance to silence the target for 2 sec.",
            "Gives your Kick ability a 100% chance to silence the target for 2 sec."
          ],
          "x": 0,
          "y": 3,
          "iconName": "ability_kick"
        },
        {
          "id": 182,
          "name": "Dagger Specialization",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            13706,
            13804,
            13805,
            13806,
            13807
          ],
          "descriptions": [
            "Increases your chance to get a critical strike with Daggers by 1%.",
            "Increases your chance to get a critical strike with Daggers by 2%.",
            "Increases your chance to get a critical strike with Daggers by 3%.",
            "Increases your chance to get a critical strike with Daggers by 4%.",
            "Increases your chance to get a critical strike with Daggers by 5%."
          ],
          "x": 1,
          "y": 3,
          "iconName": "inv_weapon_shortblade_05"
        },
        {
          "id": 221,
          "name": "Dual Wield Specialization",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            13715,
            13848,
            13849,
            13851,
            13852
          ],
          "descriptions": [
            "Increases the damage done by your offhand weapon by 10%.",
            "Increases the damage done by your offhand weapon by 20%.",
            "Increases the damage done by your offhand weapon by 30%.",
            "Increases the damage done by your offhand weapon by 40%.",
            "Increases the damage done by your offhand weapon by 50%."
          ],
          "x": 2,
          "y": 3,
          "iconName": "ability_dualwield"
        },
        {
          "id": 184,
          "name": "Mace Specialization",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            13709,
            13800,
            13801,
            13802,
            13803
          ],
          "descriptions": [
            "Increases your skill with Maces by 1, and gives you a 1% chance to stun your target for 3 sec with a mace.",
            "Increases your skill with Maces by 2, and gives you a 2% chance to stun your target for 3 sec with a mace.",
            "Increases your skill with Maces by 3, and gives you a 3% chance to stun your target for 3 sec with a mace.",
            "Increases your skill with Maces by 4, and gives you a 4% chance to stun your target for 3 sec with a mace.",
            "Increases your skill with Maces by 5, and gives you a 6% chance to stun your target for 3 sec with a mace."
          ],
          "x": 0,
          "y": 4,
          "iconName": "inv_mace_01"
        },
        {
          "id": 223,
          "name": "Blade Flurry",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            13877
          ],
          "descriptions": [
            "Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 sec."
          ],
          "x": 1,
          "y": 4,
          "iconName": "ability_warrior_punishingblow"
        },
        {
          "id": 242,
          "name": "Sword Specialization",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            13960,
            13961,
            13962,
            13963,
            13964
          ],
          "descriptions": [
            "Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword.",
            "Gives you a 2% chance to get an extra attack on the same target after dealing damage with your Sword.",
            "Gives you a 3% chance to get an extra attack on the same target after dealing damage with your Sword.",
            "Gives you a 4% chance to get an extra attack on the same target after dealing damage with your Sword.",
            "Gives you a 5% chance to get an extra attack on the same target after dealing damage with your Sword."
          ],
          "x": 2,
          "y": 4,
          "iconName": "inv_sword_27"
        },
        {
          "id": 183,
          "name": "Fist Weapon Specialization",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            13707,
            13966,
            13967,
            13968,
            13969
          ],
          "descriptions": [
            "Increases your chance to get a critical strike with Fist Weapons by 1%.",
            "Increases your chance to get a critical strike with Fist Weapons by 2%.",
            "Increases your chance to get a critical strike with Fist Weapons by 3%.",
            "Increases your chance to get a critical strike with Fist Weapons by 4%.",
            "Increases your chance to get a critical strike with Fist Weapons by 5%."
          ],
          "x": 3,
          "y": 4,
          "iconName": "inv_gauntlets_04"
        },
        {
          "id": 1703,
          "name": "Weapon Expertise",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            30919,
            30920
          ],
          "descriptions": [
            "Increases your skill with Sword, Fist and Dagger weapons by 3.",
            "Increases your skill with Sword, Fist and Dagger weapons by 5."
          ],
          "x": 1,
          "y": 5,
          "iconName": "spell_holy_blessingofstrength"
        },
        {
          "id": 1122,
          "name": "Aggression",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            18427,
            18428,
            18429
          ],
          "descriptions": [
            "Increases the damage of your Sinister Strike and Eviscerate abilities by 2%.",
            "Increases the damage of your Sinister Strike and Eviscerate abilities by 4%.",
            "Increases the damage of your Sinister Strike and Eviscerate abilities by 6%."
          ],
          "x": 2,
          "y": 5,
          "iconName": "ability_racial_avatar"
        },
        {
          "id": 205,
          "name": "Adrenaline Rush",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            13750
          ],
          "descriptions": [
            "Increases your Energy regeneration rate by 100% for 15 sec."
          ],
          "x": 1,
          "y": 6,
          "iconName": "spell_shadow_shadowworddominate"
        }
      ]
    },
    {
      "name": "Subtlety",
      "talents": [
        {
          "id": 241,
          "name": "Master of Deception",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            13958,
            13970,
            13971,
            13972,
            13973
          ],
          "descriptions": [
            "Reduces the chance enemies have to detect you while in Stealth mode.",
            "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 1).",
            "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 2).",
            "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 3).",
            "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 4)."
          ],
          "x": 1,
          "y": 0,
          "iconName": "spell_shadow_charm"
        },
        {
          "id": 261,
          "name": "Opportunity",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            14057,
            14072,
            14073,
            14074,
            14075
          ],
          "descriptions": [
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 4%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 8%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 12%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 16%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by 20%."
          ],
          "x": 2,
          "y": 0,
          "iconName": "ability_warrior_warcry"
        },
        {
          "id": 1700,
          "name": "Sleight of Hand",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            30892,
            30893
          ],
          "descriptions": [
            "Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduction of your Feint ability by 10%.",
            "Reduces the chance you are critically hit by melee and ranged attacks by 2% and increases the threat reduction of your Feint ability by 20%."
          ],
          "x": 0,
          "y": 1,
          "iconName": "ability_rogue_feint"
        },
        {
          "id": 247,
          "name": "Elusiveness",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            13981,
            14066
          ],
          "descriptions": [
            "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
            "Reduces the cooldown of your Vanish and Blind abilities by 1.5 min."
          ],
          "x": 1,
          "y": 1,
          "iconName": "spell_magic_lesserinvisibilty"
        },
        {
          "id": 244,
          "name": "Camouflage",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            13975,
            14062,
            14063,
            14064,
            14065
          ],
          "descriptions": [
            "Increases your speed while stealthed by 3% and reduces the cooldown of your Stealth ability by 1 sec.",
            "Increases your speed while stealthed by 6% and reduces the cooldown of your Stealth ability by 2 sec.",
            "Increases your speed while stealthed by 9% and reduces the cooldown of your Stealth ability by 3 sec.",
            "Increases your speed while stealthed by 12% and reduces the cooldown of your Stealth ability by 4 sec.",
            "Increases your speed while stealthed by 15% and reduces the cooldown of your Stealth ability by 5 sec."
          ],
          "x": 2,
          "y": 1,
          "iconName": "ability_stealth"
        },
        {
          "id": 245,
          "name": "Initiative",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            13976,
            13979,
            13980
          ],
          "descriptions": [
            "Gives you a 25% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
            "Gives you a 50% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
            "Gives you a 75% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
          ],
          "x": 0,
          "y": 2,
          "iconName": "spell_shadow_fumble"
        },
        {
          "id": 303,
          "name": "Ghostly Strike",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            14278
          ],
          "descriptions": [
            "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec.  Awards 1 combo point."
          ],
          "x": 1,
          "y": 2,
          "iconName": "spell_shadow_curse"
        },
        {
          "id": 263,
          "name": "Improved Ambush",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            14079,
            14080,
            14081
          ],
          "descriptions": [
            "Increases the critical strike chance of your Ambush ability by 15%.",
            "Increases the critical strike chance of your Ambush ability by 30%.",
            "Increases the critical strike chance of your Ambush ability by 45%."
          ],
          "x": 2,
          "y": 2,
          "iconName": "ability_rogue_ambush"
        },
        {
          "id": 246,
          "name": "Setup",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            13983,
            14070,
            14071
          ],
          "descriptions": [
            "Gives you a 15% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
            "Gives you a 30% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
            "Gives you a 45% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells."
          ],
          "x": 0,
          "y": 3,
          "iconName": "spell_nature_mirrorimage"
        },
        {
          "id": 262,
          "name": "Improved Sap",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            14076,
            14094,
            14095
          ],
          "descriptions": [
            "Gives you a 30% chance to return to stealth mode after using your Sap ability.",
            "Gives you a 60% chance to return to stealth mode after using your Sap ability.",
            "Gives you a 90% chance to return to stealth mode after using your Sap ability."
          ],
          "x": 1,
          "y": 3,
          "iconName": "ability_sap"
        },
        {
          "id": 1123,
          "name": "Serrated Blades",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            14171,
            14172,
            14173
          ],
          "descriptions": [
            "Causes your attacks to ignore 0 of your target's Armor and increases the damage dealt by your Rupture ability by 10%.  The amount of Armor reduced increases with your level.",
            "Causes your attacks to ignore 0 of your target's Armor and increases the damage dealt by your Rupture ability by 20%.  The amount of Armor reduced increases with your level.",
            "Causes your attacks to ignore 0 of your target's Armor and increases the damage dealt by your Rupture ability by 30%.  The amount of Armor reduced increases with your level."
          ],
          "x": 2,
          "y": 3,
          "iconName": "inv_sword_17"
        },
        {
          "id": 1701,
          "name": "Heightened Senses",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            30894,
            30895
          ],
          "descriptions": [
            "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
            "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%.  More effective than Heightened Senses (Rank 1)."
          ],
          "x": 0,
          "y": 4,
          "iconName": "ability_ambush"
        },
        {
          "id": 284,
          "name": "Preparation",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            14185
          ],
          "descriptions": [
            "When activated, this ability immediately finishes the cooldown on your other Rogue abilities."
          ],
          "x": 1,
          "y": 4,
          "iconName": "spell_shadow_antishadow"
        },
        {
          "id": 265,
          "name": "Dirty Deeds",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            14082,
            14083
          ],
          "descriptions": [
            "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10.",
            "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20."
          ],
          "x": 2,
          "y": 4,
          "iconName": "spell_shadow_summonsuccubus"
        },
        {
          "id": 681,
          "name": "Hemorrhage",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            16511
          ],
          "descriptions": [
            "An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 3.  Lasts 30 charges or 15 sec.  Awards 1 combo point."
          ],
          "x": 3,
          "y": 4,
          "iconName": "spell_shadow_lifedrain"
        },
        {
          "id": 1702,
          "name": "Deadliness",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            30902,
            30903,
            30904,
            30905,
            30906
          ],
          "descriptions": [
            "Increases your Attack Power by 2%.",
            "Increases your Attack Power by 4%.",
            "Increases your Attack Power by 6%.",
            "Increases your Attack Power by 8%.",
            "Increases your Attack Power by 10%."
          ],
          "x": 2,
          "y": 5,
          "iconName": "inv_weapon_crossbow_11"
        },
        {
          "id": 381,
          "name": "Premeditation",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            14183
          ],
          "descriptions": [
            "When used, adds 2 combo points to your target.  You must add to or use those combo points within 10 sec or the combo points are lost. "
          ],
          "x": 1,
          "y": 6,
          "iconName": "spell_shadow_possession"
        }
      ]
    }
  ]
}
