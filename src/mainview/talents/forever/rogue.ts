import { ClassData } from "../../../types";

export const rogueData: ClassData = {
  "name": "Rogue",
  "talentTrees": [
    {
      "name": "Assassination",
      "talents": [
        {
          "id": 1310707,
          "name": "Mutilate",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_rogue_deadlybrew",
          "spellIds": [
            1310707
          ],
          "descriptions": [
            "Instantly attacks with both weapons for 75% weapon damage plus an additional 17 with each weapon. Damage increased by 20% against Poisoned targets. Awards 2 Combo Points."
          ]
        },
        {
          "id": 14186,
          "name": "Seal Fate",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_shadow_chilltouch",
          "spellIds": [
            14186
          ],
          "descriptions": [
            "Your critical strikes from abilities that add Combo Points have a 20% chance to add an additional Combo Point.",
            "Your critical strikes from abilities that add Combo Points have a 40% chance to add an additional Combo Point.",
            "Your critical strikes from abilities that add Combo Points have a 60% chance to add an additional Combo Point.",
            "Your critical strikes from abilities that add Combo Points have a 80% chance to add an additional Combo Point.",
            "Your critical strikes from abilities that add Combo Points have a 100% chance to add an additional Combo Point."
          ]
        },
        {
          "id": 14174,
          "name": "Improved Kidney Shot",
          "x": 2,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_rogue_kidneyshot",
          "spellIds": [
            14174
          ],
          "descriptions": [
            "Enemies Stunned by your Kidney Shot ability take 5% increased damage from your poisons and attacks.",
            "Enemies Stunned by your Kidney Shot ability take 10% increased damage from your poisons and attacks."
          ]
        },
        {
          "id": 1310703,
          "name": "Venom",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "inv_sword_31",
          "requirements": {
            "talentName": "Mutilate",
            "talentRank": 1,
            "talentId": 1310707
          },
          "spellIds": [
            1310703
          ],
          "descriptions": [
            "Finishing move that increases the damage of your Poisons by 30% and your chance to apply Poisons by 10%. Lasts longer per combo point:    1 point  : 9 sec    2 points: 12 sec    3 points: 15 sec    4 points: 18 sec    5 points: 21 sec"
          ]
        },
        {
          "id": 14113,
          "name": "Improved Poisons",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_poisons",
          "spellIds": [
            14113
          ],
          "descriptions": [
            "Increases the chance to apply Poisons to your target by 2%, and gives Poison applications a 10% chance to not consume a charge.",
            "Increases the chance to apply Poisons to your target by 4%, and gives Poison applications a 20% chance to not consume a charge.",
            "Increases the chance to apply Poisons to your target by 6%, and gives Poison applications a 30% chance to not consume a charge.",
            "Increases the chance to apply Poisons to your target by 8%, and gives Poison applications a 40% chance to not consume a charge.",
            "Increases the chance to apply Poisons to your target by 10%, and gives Poison applications a 50% chance to not consume a charge."
          ]
        },
        {
          "id": 16513,
          "name": "Vile Poisons",
          "x": 0,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_rogue_feigndeath",
          "spellIds": [
            16513
          ],
          "descriptions": [
            "Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
            "Increases the damage dealt by your poisons by 20% and gives your poisons an additional 40% chance to resist dispel effects."
          ]
        },
        {
          "id": 14177,
          "name": "Cold Blood",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_ice_lament",
          "spellIds": [
            14177
          ],
          "descriptions": [
            "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, Eviscerate, or Mutilate by 100%."
          ]
        },
        {
          "id": 14128,
          "name": "Lethality",
          "x": 2,
          "y": 2,
          "maxRank": 5,
          "minPointsRequired": 10,
          "iconName": "ability_criticalstrike",
          "requirements": {
            "talentName": "Malice",
            "talentRank": 5,
            "talentId": 14138
          },
          "spellIds": [
            14128
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 4%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 8%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 12%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 16%.",
            "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 20%."
          ]
        },
        {
          "id": 14168,
          "name": "Improved Expose Armor",
          "x": 1,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_riposte",
          "spellIds": [
            14168
          ],
          "descriptions": [
            "Reduces the Energy cost of your Expose Armor ability by 5, and refunds 1 Combo Point when cast with 5 Combo Points.",
            "Reduces the Energy cost of your Expose Armor ability by 10, and refunds 2 Combo Points when cast with 5 Combo Points."
          ]
        },
        {
          "id": 14983,
          "name": "Vigor",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_earthbindtotem",
          "spellIds": [
            14983
          ],
          "descriptions": [
            "Increases your maximum Energy by 5.",
            "Increases your maximum Energy by 10."
          ]
        },
        {
          "id": 14158,
          "name": "Murder",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_deathscream",
          "spellIds": [
            14158
          ],
          "descriptions": [
            "Increases all damage dealt by 2% against Humanoid and Giant targets.",
            "Increases all damage dealt by 4% against Humanoid and Giant targets."
          ]
        },
        {
          "id": 14156,
          "name": "Ruthlessness",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_druid_disembowel",
          "spellIds": [
            14156
          ],
          "descriptions": [
            "Gives your finishing moves a 20% chance to add a Combo Point to your target.",
            "Gives your finishing moves a 40% chance to add a Combo Point to your target.",
            "Gives your finishing moves a 60% chance to add a Combo Point to your target."
          ]
        },
        {
          "id": 14138,
          "name": "Malice",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_racial_bloodrage",
          "spellIds": [
            14138
          ],
          "descriptions": [
            "Increases your critical strike chance with all attacks and Poisons by 1%.",
            "Increases your critical strike chance with all attacks and Poisons by 2%.",
            "Increases your critical strike chance with all attacks and Poisons by 3%.",
            "Increases your critical strike chance with all attacks and Poisons by 4%.",
            "Increases your critical strike chance with all attacks and Poisons by 5%."
          ]
        },
        {
          "id": 14144,
          "name": "Remorseless Attacks",
          "x": 1,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "ability_fiegndead",
          "spellIds": [
            14144
          ],
          "descriptions": [
            "After killing a non-trivial enemy, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
            "After killing a non-trivial enemy, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec."
          ]
        },
        {
          "id": 14165,
          "name": "Improved Slice and Dice",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_rogue_slicedice",
          "spellIds": [
            14165
          ],
          "descriptions": [
            "Increases the duration of your Slice and Dice ability by 15%.",
            "Increases the duration of your Slice and Dice ability by 30%.",
            "Increases the duration of your Slice and Dice ability by 45%."
          ]
        },
        {
          "id": 13741,
          "name": "Improved Gouge",
          "x": 0,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "ability_gouge",
          "spellIds": [
            13741
          ],
          "descriptions": [
            "Increases the duration of your Gouge ability by 0.5 sec.",
            "Increases the duration of your Gouge ability by 1 sec.",
            "Increases the duration of your Gouge ability by 1.5 sec."
          ]
        },
        {
          "id": 14179,
          "name": "Relentless Strikes",
          "x": 0,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_decisivestrike",
          "spellIds": [
            14179
          ],
          "descriptions": [
            "Your finishing moves have a 20% chance per Combo Point to restore 25 Energy."
          ]
        }
      ]
    },
    {
      "name": "Combat",
      "talents": [
        {
          "id": 14162,
          "name": "Improved Eviscerate",
          "x": 0,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "ability_rogue_eviscerate",
          "spellIds": [
            14162
          ],
          "descriptions": [
            "Increases the damage done by your Eviscerate ability by 7%.",
            "Increases the damage done by your Eviscerate ability by 13%.",
            "Increases the damage done by your Eviscerate ability by 20%."
          ]
        },
        {
          "id": 1224716,
          "name": "Puncturing Wounds",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_backstab",
          "spellIds": [
            1224716
          ],
          "descriptions": [
            "Increases the critical strike chance of your Backstab by 10% and your Mutilate by 5%, and gives Backstab a 15% chance to add an additional Combo Point.",
            "Increases the critical strike chance of your Backstab by 20% and your Mutilate by 10%, and gives Backstab a 30% chance to add an additional Combo Point.",
            "Increases the critical strike chance of your Backstab by 30% and your Mutilate by 15%, and gives Backstab a 45% chance to add an additional Combo Point."
          ]
        },
        {
          "id": 13750,
          "name": "Adrenaline Rush",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_shadow_shadowworddominate",
          "spellIds": [
            13750
          ],
          "descriptions": [
            "Increases your Energy regeneration rate by 100% for 15 sec."
          ]
        },
        {
          "id": 30919,
          "name": "Weapon Expertise",
          "x": 1,
          "y": 5,
          "maxRank": 2,
          "minPointsRequired": 25,
          "iconName": "spell_holy_blessingofstrength",
          "requirements": {
            "talentName": "Blade Flurry",
            "talentRank": 1,
            "talentId": 13877
          },
          "spellIds": [
            30919
          ],
          "descriptions": [
            "Reduces the chance for your attacks to be Dodged or Parried by 1%.",
            "Reduces the chance for your attacks to be Dodged or Parried by 2%."
          ]
        },
        {
          "id": 13960,
          "name": "Hack and Slash",
          "x": 2,
          "y": 4,
          "maxRank": 5,
          "minPointsRequired": 20,
          "iconName": "inv_sword_27",
          "spellIds": [
            13960
          ],
          "descriptions": [
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Sword: Your successful     melee attacks have a 1% chance     to trigger an extra attack on the      target.      Dagger/Fist: Increases your     critical strike chance by 1%.      Mace: Your attacks ignore 3% of     your target's armor.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Sword: Your successful     melee attacks have a 2% chance     to trigger an extra attack on the      target.      Dagger/Fist: Increases your     critical strike chance by 2%.      Mace: Your attacks ignore 6% of     your target's armor.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Sword: Your successful     melee attacks have a 3% chance     to trigger an extra attack on the      target.      Dagger/Fist: Increases your     critical strike chance by 3%.      Mace: Your attacks ignore 9% of     your target's armor.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Sword: Your successful     melee attacks have a 4% chance     to trigger an extra attack on the      target.      Dagger/Fist: Increases your     critical strike chance by 4%.      Mace: Your attacks ignore 12% of     your target's armor.",
            "Gives your melee weapon attacks a benefit depending on the weapon.      Axe/Sword: Your successful     melee attacks have a 5% chance     to trigger an extra attack on the      target.      Dagger/Fist: Increases your     critical strike chance by 5%.      Mace: Your attacks ignore 15% of     your target's armor."
          ]
        },
        {
          "id": 13877,
          "name": "Blade Flurry",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "ability_warrior_punishingblow",
          "spellIds": [
            13877
          ],
          "descriptions": [
            "Increases your melee attack speed by 20% and your melee attacks strike an additional nearby opponent. Lasts 15 sec."
          ]
        },
        {
          "id": 18427,
          "name": "Aggression",
          "x": 2,
          "y": 5,
          "maxRank": 3,
          "minPointsRequired": 25,
          "iconName": "ability_racial_avatar",
          "spellIds": [
            18427
          ],
          "descriptions": [
            "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
            "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 4%.",
            "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%."
          ]
        },
        {
          "id": 13743,
          "name": "Improved Sprint",
          "x": 3,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_rogue_sprint",
          "spellIds": [
            13743
          ],
          "descriptions": [
            "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
            "Gives a 100% chance to remove all movement impairing effects when you activate your Sprint ability."
          ]
        },
        {
          "id": 13754,
          "name": "Improved Kick",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_kick",
          "spellIds": [
            13754
          ],
          "descriptions": [
            "Gives your Kick ability a 50% chance to Silence the target for 2 sec.",
            "Gives your Kick ability a 100% chance to Silence the target for 2 sec."
          ]
        },
        {
          "id": 14251,
          "name": "Riposte",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_warrior_challange",
          "requirements": {
            "talentName": "Deflection",
            "talentRank": 3,
            "talentId": 13713
          },
          "spellIds": [
            14251
          ],
          "descriptions": [
            "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec."
          ]
        },
        {
          "id": 13742,
          "name": "Endurance",
          "x": 0,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_shadowward",
          "spellIds": [
            13742
          ],
          "descriptions": [
            "Reduces the cooldown of your Sprint and Evasion abilities by 30%.",
            "Reduces the cooldown of your Sprint and Evasion abilities by 60%."
          ]
        },
        {
          "id": 13705,
          "name": "Precision",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_marksmanship",
          "spellIds": [
            13705
          ],
          "descriptions": [
            "Improves your chance to hit by 1%.",
            "Improves your chance to hit by 2%.",
            "Improves your chance to hit by 3%."
          ]
        },
        {
          "id": 13713,
          "name": "Deflection",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_parry",
          "spellIds": [
            13713
          ],
          "descriptions": [
            "Increases your Parry chance by 2%.",
            "Increases your Parry chance by 4%.",
            "Increases your Parry chance by 6%."
          ]
        },
        {
          "id": 13715,
          "name": "Dual Wield Specialization",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "ability_dualwield",
          "requirements": {
            "talentName": "Precision",
            "talentRank": 3,
            "talentId": 13705
          },
          "spellIds": [
            13715
          ],
          "descriptions": [
            "Increases the damage done by your off-hand weapon by 5%.",
            "Increases the damage done by your off-hand weapon by 10%.",
            "Increases the damage done by your off-hand weapon by 15%.",
            "Increases the damage done by your off-hand weapon by 20%.",
            "Increases the damage done by your off-hand weapon by 25%."
          ]
        },
        {
          "id": 13732,
          "name": "Improved Sinister Strike",
          "x": 1,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_ritualofsacrifice",
          "spellIds": [
            13732
          ],
          "descriptions": [
            "Reduces the Energy cost of your Sinister Strike ability by 3.",
            "Reduces the Energy cost of your Sinister Strike ability by 5."
          ]
        },
        {
          "id": 1310711,
          "name": "Flawless Execution",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "inv_sword_35",
          "spellIds": [
            1310711
          ],
          "descriptions": [
            "Reduces the Energy cost of your Eviscerate ability by 10."
          ]
        },
        {
          "id": 13712,
          "name": "Lightning Reflexes",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_invisibilty",
          "spellIds": [
            13712
          ],
          "descriptions": [
            "Increases your Dodge chance by 1%.",
            "Increases your Dodge chance by 2%.",
            "Increases your Dodge chance by 3%.",
            "Increases your Dodge chance by 4%.",
            "Increases your Dodge chance by 5%."
          ]
        }
      ]
    },
    {
      "name": "Subtlety",
      "talents": [
        {
          "id": 14183,
          "name": "Premeditation",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_possession",
          "spellIds": [
            14183
          ],
          "descriptions": [
            "Adds 2 Combo Points to your target. You must add to or use those combo points within 20 sec or the combo points are lost."
          ]
        },
        {
          "id": 14082,
          "name": "Dirty Deeds",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_summonsuccubus",
          "spellIds": [
            14082
          ],
          "descriptions": [
            "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10, and your Garrote ability no longer requires you to be behind your target.",
            "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20, and your Garrote ability no longer requires you to be behind your target."
          ]
        },
        {
          "id": 14185,
          "name": "Preparation",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_antishadow",
          "spellIds": [
            14185
          ],
          "descriptions": [
            "When activated, this ability immediately finishes the cooldown on your other Rogue abilities."
          ]
        },
        {
          "id": 30894,
          "name": "Heightened Senses",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_ambush",
          "spellIds": [
            30894
          ],
          "descriptions": [
            "Increases your Stealth detection as if you were 1 level higher and reduces your chance to be hit by spells and ranged attacks by 2%.",
            "Increases your Stealth detection as if you were 3 levels higher and reduces your chance to be hit by spells and ranged attacks by 4%."
          ]
        },
        {
          "id": 16511,
          "name": "Hemorrhage",
          "x": 2,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_lifedrain",
          "requirements": {
            "talentName": "Serrated Blades",
            "talentRank": 3,
            "talentId": 14171
          },
          "spellIds": [
            16511
          ],
          "descriptions": [
            "An instant strike that deals 100% weapon damage (145% if a Dagger is equipped) and causes the target to take 15% increased Rupture damage from the Rogue. Lasts 15 sec. Awards 1 Combo Point."
          ]
        },
        {
          "id": 14079,
          "name": "Improved Ambush",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_rogue_ambush",
          "spellIds": [
            14079
          ],
          "descriptions": [
            "Increases the critical strike chance of your Ambush ability by 15%.",
            "Increases the critical strike chance of your Ambush ability by 30%.",
            "Increases the critical strike chance of your Ambush ability by 45%."
          ]
        },
        {
          "id": 462708,
          "name": "Cutthroat",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "classicon_rogue",
          "spellIds": [
            462708
          ],
          "descriptions": [
            "Your Backstab has a 3% chance to cause your next Ambush within 10 sec to not require Stealth.",
            "Your Backstab has a 6% chance to cause your next Ambush within 10 sec to not require Stealth.",
            "Your Backstab has a 9% chance to cause your next Ambush within 10 sec to not require Stealth.",
            "Your Backstab has a 12% chance to cause your next Ambush within 10 sec to not require Stealth.",
            "Your Backstab has a 15% chance to cause your next Ambush within 10 sec to not require Stealth."
          ]
        },
        {
          "id": 13983,
          "name": "Setup",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_mirrorimage",
          "spellIds": [
            13983
          ],
          "descriptions": [
            "Gives you a 33% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells.",
            "Gives you a 67% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells.",
            "Gives you a 100% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells."
          ]
        },
        {
          "id": 14171,
          "name": "Serrated Blades",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "inv_sword_17",
          "spellIds": [
            14171
          ],
          "descriptions": [
            "Causes your attacks to ignore 3% of your target's Armor and increases the damage dealt by your Rupture ability by 10%.",
            "Causes your attacks to ignore 6% of your target's Armor and increases the damage dealt by your Rupture ability by 20%.",
            "Causes your attacks to ignore 9% of your target's Armor and increases the damage dealt by your Rupture ability by 30%."
          ]
        },
        {
          "id": 13981,
          "name": "Elusiveness",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_magic_lesserinvisibilty",
          "spellIds": [
            13981
          ],
          "descriptions": [
            "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
            "Reduces the cooldown of your Vanish and Blind abilities by 90 sec."
          ]
        },
        {
          "id": 14278,
          "name": "Ghostly Strike",
          "x": 1,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_curse",
          "spellIds": [
            14278
          ],
          "descriptions": [
            "A strike that deals 125% (180% if a Dagger is equipped in your Main Hand) weapon damage and increases your chance to dodge by 15% for 7 sec.  Awards 1 combo point."
          ]
        },
        {
          "id": 13976,
          "name": "Initiative",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_fumble",
          "spellIds": [
            13976
          ],
          "descriptions": [
            "Gives you a 33% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
            "Gives you a 67% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
            "Gives you a 100% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
          ]
        },
        {
          "id": 13975,
          "name": "Camouflage",
          "x": 0,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_stealth",
          "spellIds": [
            13975
          ],
          "descriptions": [
            "Reduces your speed penalty from your Stealth ability by 3% and reduces its cooldown by 2 sec.",
            "Reduces your speed penalty from your Stealth ability by 6% and reduces its cooldown by 3 sec.",
            "Reduces your speed penalty from your Stealth ability by 9% and reduces its cooldown by 4 sec.",
            "Reduces your speed penalty from your Stealth ability by 12% and reduces its cooldown by 5 sec.",
            "Reduces your speed penalty from your Stealth ability by 15% and reduces its cooldown by 6 sec."
          ]
        },
        {
          "id": 1224782,
          "name": "Dirty Tricks",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_sap",
          "spellIds": [
            1224782
          ],
          "descriptions": [
            "Reduces the Energy cost of your Sap and Blind abilities by 25%.",
            "Reduces the Energy cost of your Sap and Blind abilities by 50%."
          ]
        },
        {
          "id": 14057,
          "name": "Opportunity",
          "x": 2,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "ability_warrior_warcry",
          "spellIds": [
            14057
          ],
          "descriptions": [
            "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 5%.",
            "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 10%."
          ]
        },
        {
          "id": 13958,
          "name": "Master of Deception",
          "x": 1,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "spell_shadow_charm",
          "spellIds": [
            13958
          ],
          "descriptions": [
            "Reduces the chance enemies have to detect you while in Stealth mode as if you were 1 level higher.",
            "Reduces the chance enemies have to detect you while in Stealth mode as if you were 2 levels higher.",
            "Reduces the chance enemies have to detect you while in Stealth mode as if you were 3 levels higher."
          ]
        },
        {
          "id": 1310721,
          "name": "Thousand Cuts",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_rogue_rupture",
          "requirements": {
            "talentName": "Preparation",
            "talentRank": 1,
            "talentId": 14185
          },
          "spellIds": [
            1310721
          ],
          "descriptions": [
            "When your Rupture ability deals periodic damage, the Energy cost of your next Hemorrhage or Backstab ability within 10 sec is reduced by 3, stacking up to 5 times."
          ]
        },
        {
          "id": 1310728,
          "name": "Quietus",
          "x": 0,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "ability_rogue_garrote",
          "requirements": {
            "talentName": "Dirty Deeds",
            "talentRank": 2,
            "talentId": 14082
          },
          "spellIds": [
            1310728
          ],
          "descriptions": [
            "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 2% more damage against targets below 35% health.",
            "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 4% more damage against targets below 35% health.",
            "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 6% more damage against targets below 35% health.",
            "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 8% more damage against targets below 35% health.",
            "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 10% more damage against targets below 35% health."
          ]
        },
        {
          "id": 14084,
          "name": "Improved Distract",
          "x": 2,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_rogue_distract",
          "spellIds": [
            14084
          ],
          "descriptions": [
            "Increases the radius of your Distract ability by 3 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 1 level lower.",
            "Increases the radius of your Distract ability by 5 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 2 levels lower."
          ]
        }
      ]
    }
  ]
};
