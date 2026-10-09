import { ClassData } from "../../../types";

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
          "iconName": "ability_rogue_eviscerate",
          "y": 0,
          "x": 0
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
            "After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Mutilate, Hemorrhage, Ambush, or Ghostly Strike. Lasts 20 sec.",
            "After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Mutilate, Hemorrhage, Ambush, or Ghostly Strike. Lasts 20 sec."
          ],
          "iconName": "ability_fiegndead",
          "y": 0,
          "x": 1
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
          "iconName": "ability_racial_bloodrage",
          "y": 0,
          "x": 2
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
          "iconName": "ability_druid_disembowel",
          "y": 1,
          "x": 0
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
            "Increases all damage caused against Humanoid, Giant, Beast, and Dragonkin targets by 1%",
            "Increases all damage caused against Humanoid, Giant, Beast, and Dragonkin targets by 2%"
          ],
          "iconName": "spell_shadow_deathscream",
          "y": 1,
          "x": 1
        },
        {
          "id": 277,
          "name": "Puncturing Wounds",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            13733,
            13865,
            13866
          ],
          "descriptions": [
            "Increases the critical strike chance of your Backstab ability by 10%, and the critical strike chance of your Mutilate ability by 5%.",
            "Increases the critical strike chance of your Backstab ability by 20%, and the critical strike chance of your Mutilate ability by 10%.",
            "Increases the critical strike chance of your Backstab ability by 30%, and the critical strike chance of your Mutilate ability by 15%."
          ],
          "iconName": "ability_backstab",
          "y": 1,
          "x": 3
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
            "Your finishing moves have a 20% chance per combo point to restore 25 energy."
          ],
          "iconName": "ability_warrior_decisivestrike",
          "y": 2,
          "x": 0
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
            "Increases the armor reduced by your Expose Armor ability by an additional 25%.",
            "Increases the armor reduced by your Expose Armor ability by an additional 50%."
          ],
          "iconName": "ability_warrior_riposte",
          "y": 2,
          "x": 1
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
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilites by 6%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilites by 12%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilites by 18%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilites by 24%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilites by 30%."
          ],
          "iconName": "ability_criticalstrike",
          "y": 2,
          "x": 2,
          "requirements": {
            "talentId": 270,
            "talentRank": 5
          },
          "talentLink": "Malice"
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
            "Increases the damage dealt by your poisons and Envenom ability by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons and Envenom ability by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons and Envenom ability by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons and Envenom ability by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons and Envenom ability by 20% and gives your poisons an additional 40% chance to resist dispel effects."
          ],
          "iconName": "ability_rogue_feigndeath",
          "y": 3,
          "x": 1
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
          "iconName": "ability_poisons",
          "y": 3,
          "x": 2
        },
        {
          "id": 1721,
          "name": "Fleet Footed",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            31208,
            31209
          ],
          "descriptions": [
            "Increases your chance to resist movement impairing effects by 5% and increases your movement speed by 8%. This does not stack with other movement speed increasing effects.",
            "Increases your chance to resist movement impairing effects by 10% and increases your movement speed by 15%. This does not stack with other movement speed increasing effects."
          ],
          "iconName": "ability_rogue_fleetfooted",
          "y": 4,
          "x": 0
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
            "When activated, increases the critical strike chance of your next offensive ability by 100%."
          ],
          "iconName": "spell_ice_lament",
          "y": 4,
          "x": 1
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
            "While affected by your Kidney Shot ability, target receives an additional 3% damage from all sources.",
            "While affected by your Kidney Shot ability, target receives an additional 6% damage from all sources.",
            "While affected by your Kidney Shot ability, target receives an additional 9% damage from all sources."
          ],
          "iconName": "ability_rogue_kidneyshot",
          "y": 4,
          "x": 2
        },
        {
          "id": 1762,
          "name": "Quick Recovery",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            31244,
            31245
          ],
          "descriptions": [
            "All healing effects on you are increased by 10%. In addition, your finishing moves cost 40% less Energy when they fail to hit.",
            "All healing effects on you are increased by 20%. In addition, your finishing moves cost 80% less Energy when they fail to hit."
          ],
          "iconName": "ability_rogue_quickrecovery",
          "y": 4,
          "x": 3
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
            "Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points have a 80% chance to add an additional combo point.",
            "Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point."
          ],
          "iconName": "spell_shadow_chilltouch",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 280,
            "talentRank": 1
          }
        },
        {
          "id": 1715,
          "name": "Master Poisoner",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31226,
            31227
          ],
          "descriptions": [
            "Reduces the chance your poisons will be resisted by 5% and increases your chance to resist Poison effects by an additional 15%.",
            "Reduces the chance your poisons will be resisted by 10% and increases your chance to resist Poison effects by an additional 30%."
          ],
          "iconName": "ability_creature_poison_06",
          "y": 5,
          "x": 2
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
          "iconName": "spell_nature_earthbindtotem",
          "y": 6,
          "x": 1
        },
        {
          "id": 1723,
          "name": "Deadened Nerves",
          "maxRank": 5,
          "minPointsRequired": 30,
          "spellIds": [
            31380,
            31382,
            31383,
            31384,
            31385
          ],
          "descriptions": [
            "Decreases all physical damage taken by 1%.",
            "Decreases all physical damage taken by 2%.",
            "Decreases all physical damage taken by 3%.",
            "Decreases all physical damage taken by 4%.",
            "Decreases all physical damage taken by 5%."
          ],
          "iconName": "ability_rogue_deadenednerves",
          "y": 6,
          "x": 2
        },
        {
          "id": 1718,
          "name": "Find Weakness",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31233,
            31239,
            31240,
            31241,
            31242
          ],
          "descriptions": [
            "Your finishing moves increase the damage of all offensive abilities by 2% for 10 sec.",
            "Your finishing moves increase the damage of all offensive abilities by 4% for 10 sec.",
            "Your finishing moves increase the damage of all offensive abilities by 6% for 10 sec.",
            "Your finishing moves increase the damage of all offensive abilities by 8% for 10 sec.",
            "Your finishing moves increase the damage of all offensive abilities by 10% for 10 sec."
          ],
          "iconName": "ability_rogue_findweakness",
          "y": 7,
          "x": 2
        },
        {
          "id": 1719,
          "name": "Mutilate",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            1329
          ],
          "descriptions": [
            "Requires Daggers<br>Instantly attacks with both weapons for an additional 44 with each weapon. Damage is increased by 50% against Poisoned targets. Must be behind the target. Awards 2 combo points."
          ],
          "iconName": "ability_rogue_shadowstrikes",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 382,
            "talentRank": 1
          },
          "talentLink": "Vigor"
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
          "iconName": "ability_gouge",
          "y": 0,
          "x": 0
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
          "iconName": "spell_shadow_ritualofsacrifice",
          "y": 0,
          "x": 1
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
          "iconName": "spell_nature_invisibilty",
          "y": 0,
          "x": 2
        },
        {
          "id": 1827,
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
          "iconName": "ability_rogue_slicedice",
          "y": 1,
          "x": 0
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
          "iconName": "ability_parry",
          "y": 1,
          "x": 1
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
            "Increases your chance to hit with weapons by 1%.",
            "Increases your chance to hit with weapons by 2%.",
            "Increases your chance to hit with weapons by 3%.",
            "Increases your chance to hit with weapons by 4%.",
            "Increases your chance to hit with weapons by 5%."
          ],
          "iconName": "ability_marksmanship",
          "y": 1,
          "x": 2
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
            "Reduces the cooldown of your Sprint and Evasion abilities by 45 sec",
            "Reduces the cooldown of your Sprint and Evasion abilities by 1.5 min."
          ],
          "iconName": "spell_shadow_shadowward",
          "y": 2,
          "x": 0
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
            "A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec."
          ],
          "iconName": "ability_warrior_challange",
          "y": 2,
          "x": 1,
          "requirements": {
            "talentId": 187,
            "talentRank": 5
          },
          // "talentLink": "Deflection"
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
            "Gives a 50% chance to remove all movement imparing effects when you activate your Sprint ability.",
            "Gives a 100% chance to remove all movement imparing effects when you activate your Sprint ability."
          ],
          "iconName": "ability_rogue_sprint",
          "y": 2,
          "x": 3
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
          "iconName": "ability_kick",
          "y": 3,
          "x": 0
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
          "iconName": "inv_weapon_shortblade_05",
          "y": 3,
          "x": 1
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
          "iconName": "ability_dualwield",
          "y": 3,
          "x": 2,
          "requirements": {
            "talentId": 181,
            "talentRank": 5
          },
          "talentLink": "Precision"
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
            "Increases the damage dealt by your critical strikes with maces by 1%, and gives you a 1% chance to stun your target for 3 sec with a mace.",
            "Increases the damage dealt by your critical strikes with maces by 2%, and gives you a 2% chance to stun your target for 3 sec with a mace.",
            "Increases the damage dealt by your critical strikes with maces by 3%, and gives you a 3% chance to stun your target for 3 sec with a mace.",
            "Increases the damage dealt by your critical strikes with maces by 4%, and gives you a 4% chance to stun your target for 3 sec with a mace.",
            "Increases the damage dealt by your critical strikes with maces by 5%, and gives you a 5% chance to stun your target for 3 sec with a mace."
          ],
          "iconName": "inv_mace_01",
          "y": 4,
          "x": 0
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
            "Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec."
          ],
          "iconName": "ability_warrior_punishingblow",
          "y": 4,
          "x": 1
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
          "iconName": "inv_sword_27",
          "y": 4,
          "x": 2
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
          "iconName": "inv_gauntlets_04",
          "y": 4,
          "x": 3
        },
        {
          "id": 1706,
          "name": "Blade Twisting",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            31124,
            31126
          ],
          "descriptions": [
            "Gives your Sinister Strike, Backstab, Gouge and Shiv abilities a 10% chance to Daze the target for 8 sec.",
            "Gives your Sinister Strike, Backstab, Gouge and Shiv abilities a 20% chance to Daze the target for 8 sec."
          ],
          "iconName": "ability_rogue_bladetwisting",
          "y": 5,
          "x": 0
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
            "Increases your expertise by 5.",
            "Increases your expertise by 10."
          ],
          "iconName": "spell_holy_blessingofstrength",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 223,
            "talentRank": 1
          }
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
            "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
            "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 4%.",
            "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%."
          ],
          "iconName": "ability_racial_avatar",
          "y": 5,
          "x": 2
        },
        {
          "id": 1705,
          "name": "Vitality",
          "maxRank": 2,
          "minPointsRequired": 30,
          "spellIds": [
            31122,
            31123
          ],
          "descriptions": [
            "Increases your total Stamina by 2% and your total Agility by 1%.",
            "Increases your total Stamina by 4% and your total Agility by 2%."
          ],
          "iconName": "ability_warrior_revenge",
          "y": 6,
          "x": 0
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
          "iconName": "spell_shadow_shadowworddominate",
          "y": 6,
          "x": 1
        },
        {
          "id": 1707,
          "name": "Nerves of Steel",
          "maxRank": 2,
          "minPointsRequired": 30,
          "spellIds": [
            31130,
            31131
          ],
          "descriptions": [
            "Increases your chance to resist Stun and Fear effects by an additional 5%.",
            "Increases your chance to resist Stun and Fear effects by an additional 10%."
          ],
          "iconName": "ability_rogue_nervesofsteel",
          "y": 6,
          "x": 2
        },
        {
          "id": 1825,
          "name": "Combat Potency",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            35541,
            35550,
            35551,
            35552,
            35553
          ],
          "descriptions": [
            "Gives your successful off-hand melee attacks a 20% chance to generate 3 Energy.",
            "Gives your successful off-hand melee attacks a 20% chance to generate 6 Energy.",
            "Gives your successful off-hand melee attacks a 20% chance to generate 9 Energy.",
            "Gives your successful off-hand melee attacks a 20% chance to generate 12 Energy.",
            "Gives your successful off-hand melee attacks a 20% chance to generate 15 Energy."
          ],
          "iconName": "inv_weapon_shortblade_38",
          "y": 7,
          "x": 2
        },
        {
          "id": 1709,
          "name": "Surprise Attacks",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            32601
          ],
          "descriptions": [
            "Your finishing moves can no longer be dodged, and the damage dealt by your Sinister Strike, Backstab, Shiv and Gouge abilities is increased by 10%."
          ],
          "iconName": "ability_rogue_surpriseattack",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 205,
            "talentRank": 1
          },
          "talentLink": "Adrenaline Rush"
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
            "Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 1).",
            "Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 2).",
            "Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 3).",
            "Reduces the chance enemies have to detect you while in Stealth mode. More effective than Master of Deception (Rank 4)."
          ],
          "iconName": "spell_shadow_charm",
          "y": 0,
          "x": 1
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
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, Mutilate, and Ambush abilities by 4%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, Mutilate, and Ambush abilities by 8%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, Mutilate, and Ambush abilities by 12%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, Mutilate, and Ambush abilities by 16%.",
            "Increases the damage dealt when striking from behind with your Backstab, Garrote, Mutilate, and Ambush abilities by 20%."
          ],
          "iconName": "ability_warrior_warcry",
          "y": 0,
          "x": 2
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
            "Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduced by your Feint ability by 10%.",
            "Reduces the chance you are critically hit by melee and ranged attacks by 2% and increases the threat reduced by your Feint ability by 20%."
          ],
          "iconName": "ability_rogue_feint",
          "y": 1,
          "x": 0
        },
        {
          "id": 262,
          "name": "Dirty Tricks",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            14076,
            14094
          ],
          "descriptions": [
            "Increases the range of your Blind and Sap abilities by 2 yards and reduces the energy cost of your Blind and Sap abilities by 25%.",
            "Increases the range of your Blind and Sap abilities by 5 yards and reduces the energy cost of your Blind and Sap abilities by 50%."
          ],
          "iconName": "ability_sap",
          "y": 1,
          "x": 1
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
          "iconName": "ability_stealth",
          "y": 1,
          "x": 2
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
          "iconName": "spell_shadow_fumble",
          "y": 2,
          "x": 0
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
            "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point."
          ],
          "iconName": "spell_shadow_curse",
          "y": 2,
          "x": 1
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
          "iconName": "ability_rogue_ambush",
          "y": 2,
          "x": 2
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
          "iconName": "spell_nature_mirrorimage",
          "y": 3,
          "x": 0
        },
        {
          "id": 247,
          "name": "Elusiveness",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            13981,
            14066
          ],
          "descriptions": [
            "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
            "Reduces the cooldown of your Vanish and Blind abilities by 1.5 min."
          ],
          "iconName": "spell_magic_lesserinvisibilty",
          "y": 3,
          "x": 1
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
            "Causes your attacks to ignore 186 of your target's Armor and increases the damage dealt by your Rupture ability by 10%.  The amount of Armor reduced increases with your level.",
            "Causes your attacks to ignore 373 of your target's Armor and increases the damage dealt by your Rupture ability by 20%.  The amount of Armor reduced increases with your level.",
            "Causes your attacks to ignore 560 of your target's Armor and increases the damage dealt by your Rupture ability by 30%.  The amount of Armor reduced increases with your level."
          ],
          "iconName": "inv_sword_17",
          "y": 3,
          "x": 2
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
            "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%. More effective than Heightened Senses (Rank 1)."
          ],
          "iconName": "ability_ambush",
          "y": 4,
          "x": 0
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
            "When activated, this ability immediately finishes the cooldown on your Evasion, Sprint, Vanish, Cold Blood, Shadowstep and Premeditation abilities."
          ],
          "iconName": "spell_shadow_antishadow",
          "y": 4,
          "x": 1
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
            "Reduces the Energy Cost of your Cheap Shot and Garrote abilities by 10. Additionally, your special abilities cause 10% more damage against targets below 35% health.",
            "Reduces the Energy Cost of your Cheap Shot and Garrote abilities by 20. Additionally, your special abilities cause 20% more damage against targets below 35% health."
          ],
          "iconName": "spell_shadow_summonsuccubus",
          "y": 4,
          "x": 2
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
            "Requires Melee Weapon<br>An instant strike that deals 110% weapon damage and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 11.  Lasts 10 charges or 15 sec.  Awards 1 combo point."
          ],
          "iconName": "spell_shadow_lifedrain",
          "y": 4,
          "x": 3,
          "requirements": {
            "talentId": 1123,
            "talentRank": 3
          }
        },
        {
          "id": 1713,
          "name": "Master of Subtlety",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            31221,
            31222,
            31223
          ],
          "descriptions": [
            "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 4% damage.",
            "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 7% damage.",
            "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 10% damage."
          ],
          "iconName": "ability_rogue_masterofsubtlety",
          "y": 5,
          "x": 0
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
          "iconName": "inv_weapon_crossbow_11",
          "y": 5,
          "x": 2
        },
        {
          "id": 1711,
          "name": "Enveloping Shadows",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            31211,
            31212,
            31213
          ],
          "descriptions": [
            "Increases your chance to avoid area of effect attacks by an additional 5%.",
            "Increases your chance to avoid area of effect attacks by an additional 10%.",
            "Increases your chance to avoid area of effect attacks by an additional 15%."
          ],
          "iconName": "ability_rogue_envelopingshadows",
          "y": 6,
          "x": 0
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
            "When used, adds 2 combo points to your target. You must add to or use those combo points within 10 sec or the combo points are lost."
          ],
          "iconName": "spell_shadow_possession",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 284,
            "talentRank": 1
          },
          "talentLink": "Preparation"
        },
        {
          "id": 1722,
          "name": "Cheat Death",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            31228,
            31229,
            31230
          ],
          "descriptions": [
            "You have a 33% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 sec.  This effect cannot occur more than once per minute.",
            "You have a 66% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 sec.  This effect cannot occur more than once per minute.",
            "You have a 100% chance to completely avoid any damaging attack that would otherwise kill you and reduce all damage taken by 90% for 3 sec.  This effect cannot occur more than once per minute."
          ],
          "iconName": "ability_rogue_cheatdeath",
          "y": 6,
          "x": 2
        },
        {
          "id": 1712,
          "name": "Sinister Calling",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            31216,
            31217,
            31218,
            31219,
            31220
          ],
          "descriptions": [
            "Increases your total Agility by 3% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 2%.",
            "Increases your total Agility by 6% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 4%.",
            "Increases your total Agility by 9% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 6%.",
            "Increases your total Agility by 12% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 8%.",
            "Increases your total Agility by 15% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 10%."
          ],
          "iconName": "ability_rogue_sinistercalling",
          "y": 7,
          "x": 1,
          "requirements": {
            "talentId": 381,
            "talentRank": 1
          }
        },
        {
          "id": 1714,
          "name": "Shadowstep",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            36554
          ],
          "descriptions": [
            "Attempts to step through the shadows and reappear behind your enemy and increases movement speed by 70% for 3 sec. The damage of your next ability is increased by 20% and the threat caused is reduced by 50%.  Lasts 10 sec."
          ],
          "iconName": "ability_rogue_shadowstep",
          "y": 8,
          "x": 1
        }
      ]
    }
  ]
};
