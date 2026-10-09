import { ClassData } from "../../../types";

export const customClassData: ClassData = {
  "name": "Custom",
  "talentTrees": [
    {
      "name": "Martial Power",
      "icon": "ability_warrior_charge",
      "talents": [
        {
          "id": 90000,
          "name": "Arcane Power",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_nature_lightning",
          "spellIds": [
            12042
          ],
          "descriptions": [
            "For the next 15 sec, your spells deal 30% more damage while costing 30% more mana to cast."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane",
          "requirements": {
            "talentId": 12043,
            "talentRank": 1
          },
          "talentLink": "Presence of Mind"
        },
        {
          "id": 90001,
          "name": "Arcane Instability",
          "x": 2,
          "y": 5,
          "maxRank": 3,
          "minPointsRequired": 25,
          "iconName": "spell_shadow_teleport",
          "spellIds": [
            15058
          ],
          "descriptions": [
            "Increases the damage done by your spells by 1% and your critical strike chance by 1%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90002,
          "name": "Arcane Mind",
          "x": 2,
          "y": 4,
          "maxRank": 5,
          "minPointsRequired": 20,
          "iconName": "spell_shadow_charm",
          "spellIds": [
            11232
          ],
          "descriptions": [
            "Increases your Intellect by 10% and increases the critical strike damage bonus of your Arcane spells by 100%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90003,
          "name": "Presence of Mind",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_enchantarmor",
          "spellIds": [
            12043
          ],
          "descriptions": [
            "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90004,
          "name": "Missile Barrage",
          "x": 3,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_mage_missilebarrage",
          "spellIds": [
            400588
          ],
          "descriptions": [
            "Gives your Arcane Blast spell a 40% chance, and your Fireball, Frostbolt, and Frostfire Bolt spells a 20% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90005,
          "name": "Arcane Meditation",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_siphonmana",
          "spellIds": [
            18462
          ],
          "descriptions": [
            "Allows 50% of your Mana regeneration to continue while casting."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane",
          "requirements": {
            "talentId": 11213,
            "talentRank": 5
          },
          "talentLink": "Arcane Concentration"
        },
        {
          "id": 90006,
          "name": "Improved Counterspell",
          "x": 1,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_frost_iceshock",
          "spellIds": [
            11255
          ],
          "descriptions": [
            "Your Counterspell also Silences the target for 4 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90007,
          "name": "Arcane Shielding",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_detectlesserinvisibility",
          "spellIds": [
            11252
          ],
          "descriptions": [
            "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by 33% and increases the resistances granted by your Mage Armor spell by 50%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90008,
          "name": "Arcane Blast",
          "x": 3,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_arcane_blast",
          "spellIds": [
            400574
          ],
          "descriptions": [
            "Blasts the target with energy, dealing <!--ppl20:28:54:90-->57 to 65 Arcane damage. Each time you cast Arcane Blast, the damage of all your other spells is increased by 10% and the mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 8 sec or until any other damage spell is cast."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90009,
          "name": "Arcane Impact",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_nature_wispsplode",
          "spellIds": [
            11242
          ],
          "descriptions": [
            "Increases the critical strike chance of your Arcane spells by 6%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90010,
          "name": "Arcane Geometry",
          "x": 0,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "inv_ability_mage_radiantspark",
          "spellIds": [
            11247
          ],
          "descriptions": [
            "Increases the range of your Arcane spells by 6 yards."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90011,
          "name": "Arcane Resilience",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_arcane_arcaneresilience",
          "spellIds": [
            28574
          ],
          "descriptions": [
            "Increases your Armor by an amount equal to 50% of your Intellect."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90012,
          "name": "Arcane Concentration",
          "x": 2,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_shadow_manaburn",
          "spellIds": [
            11213
          ],
          "descriptions": [
            "Gives you a 100% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90013,
          "name": "Magic Absorption",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_astralrecalgroup",
          "spellIds": [
            29441
          ],
          "descriptions": [
            "Increases all your resistances by 2 and causes all spells you fully resist to restore 1% of your total mana. Cannot trigger more often than 1 time per sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90014,
          "name": "Arcane Subtlety",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_holy_dispelmagic",
          "spellIds": [
            11210
          ],
          "descriptions": [
            "Reduces your target's resistance to all your spells by 15 and reduces the threat caused by your Arcane spells by 30%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90015,
          "name": "Improved Channeling",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_starfall",
          "spellIds": [
            11237
          ],
          "descriptions": [
            "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 14% chance while casting Arcane Blast."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90016,
          "name": "Arcane Focus",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_holy_devotion",
          "spellIds": [
            11222
          ],
          "descriptions": [
            "Improves your chance to hit with Arcane spells by 2%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        },
        {
          "id": 90017,
          "name": "Wand Specialization",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "inv_wand_01",
          "spellIds": [
            6057
          ],
          "descriptions": [
            "Increases your damage with Wands by 13%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Arcane"
        }
      ]
    },
    {
      "name": "Arcane & Shadow",
      "icon": "spell_holy_magicalsentry",
      "talents": [
        {
          "id": 90100,
          "name": "Combustion",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_fire_sealoffire",
          "spellIds": [
            11129
          ],
          "descriptions": [
            "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 3 non-periodic critical strikes with Fire spells."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire",
          "requirements": {
            "talentId": 11115,
            "talentRank": 3
          },
          "talentLink": "Critical Mass"
        },
        {
          "id": 90101,
          "name": "Fire Power",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_fire_immolation",
          "spellIds": [
            11124
          ],
          "descriptions": [
            "Increases the damage done by your Fire spells by 2%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90102,
          "name": "Blast Wave",
          "x": 2,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_holy_excorcism_02",
          "spellIds": [
            11113
          ],
          "descriptions": [
            "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for <!--ppl30:36:163:100-->154 to 184 Fire damage, and Dazing them for 50% reduced movement speed for 6 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90103,
          "name": "Critical Mass",
          "x": 1,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_nature_wispheal",
          "spellIds": [
            11115
          ],
          "descriptions": [
            "Increases the critical strike chance of your Fire spells by 2%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90104,
          "name": "Master of Elements",
          "x": 3,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_fire_masterofelements",
          "spellIds": [
            29074
          ],
          "descriptions": [
            "Your Fire and Frost critical strikes will refund 10% of their base mana cost."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90105,
          "name": "Heating Up",
          "x": 2,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_fire_firebolt",
          "spellIds": [
            400624
          ],
          "descriptions": [
            "Non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch reduce the cast time of your next Pyroblast cast within 20 sec by 25%, stacking up to 3 times."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire",
          "requirements": {
            "talentId": 11366,
            "talentRank": 1
          },
          "talentLink": "Pyroblast"
        },
        {
          "id": 90106,
          "name": "Improved Fire Ward",
          "x": 1,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_fire_firearmor",
          "spellIds": [
            11094
          ],
          "descriptions": [
            "Causes your Fire Ward to have a 20% chance to reflect Fire spells while active."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90107,
          "name": "Improved Scorch",
          "x": 0,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_fire_windsofwoe",
          "spellIds": [
            11095
          ],
          "descriptions": [
            "Your Scorch spell has a 100% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90108,
          "name": "Burning Soul",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_fire_fire",
          "spellIds": [
            11083
          ],
          "descriptions": [
            "Gives your Fire spells a 70% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 30%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90109,
          "name": "Pyroblast",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_fire_fireball02",
          "spellIds": [
            11366
          ],
          "descriptions": [
            "Hurls an immense fiery boulder that causes <!--ppl20:24:110:150-->101 to 131 Fire damage and an additional 44 Fire damage over 12 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90110,
          "name": "Improved Flamestrike",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_fire_selfdestruct",
          "spellIds": [
            11108
          ],
          "descriptions": [
            "Increases the critical strike chance of your Flamestrike spell by 15%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90111,
          "name": "Impact",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_fire_meteorstorm",
          "spellIds": [
            11103
          ],
          "descriptions": [
            "Gives your Fire spells a 10% chance to stun the target for 2 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90112,
          "name": "Flame Throwing",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_fire_flare",
          "spellIds": [
            11100
          ],
          "descriptions": [
            "Increases the range of your Fire spells by 6 yards."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90113,
          "name": "Ignite",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_fire_incinerate",
          "spellIds": [
            11119
          ],
          "descriptions": [
            "Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90114,
          "name": "Improved Fireball",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_fire_flamebolt",
          "spellIds": [
            11069
          ],
          "descriptions": [
            "Reduces the casting time of your Fireball and Frostfire Bolt spells by 1 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90115,
          "name": "Incineration",
          "x": 1,
          "y": 0,
          "maxRank": 3,
          "minPointsRequired": 0,
          "iconName": "spell_fire_flameshock",
          "spellIds": [
            18459
          ],
          "descriptions": [
            "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 6%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        },
        {
          "id": 90116,
          "name": "Wake of Fire",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_fire_lavaspawn",
          "spellIds": [
            11078
          ],
          "descriptions": [
            "Reduces the cooldown of your Fire Blast spell by 2 sec. Killing a non-trivial target increases the critical strike chance of your next Fire Blast cast within 30 sec by 50%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Fire"
        }
      ]
    },
    {
      "name": "Holy & Nature",
      "icon": "spell_holy_holyprotection",
      "talents": [
        {
          "id": 90200,
          "name": "Ice Barrier",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_ice_lament",
          "spellIds": [
            11426
          ],
          "descriptions": [
            "Instantly shields you, absorbing <!--ppl40:46:431:280-->448 damage. Lasts 1 min. While the shield holds, your spellcasts will not be interrupted or delayed from taking damage."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost",
          "requirements": {
            "talentId": 12472,
            "talentRank": 1
          },
          "talentLink": "Cold Snap"
        },
        {
          "id": 90201,
          "name": "Winter's Chill",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_frost_chillingblast",
          "spellIds": [
            11180
          ],
          "descriptions": [
            "Gives your Frost damage spells a 0% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to 5 times."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90202,
          "name": "Fingers of Frost",
          "x": 2,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_mage_wintersgrasp",
          "spellIds": [
            400647
          ],
          "descriptions": [
            "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 <!--singular:spell:spells-->spells<!--singular--> cast as if the target were Frozen. Lasts 15 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost",
          "requirements": {
            "talentId": 1312002,
            "talentRank": 1
          },
          "talentLink": "Ice Lance"
        },
        {
          "id": 90203,
          "name": "Improved Cone of Cold",
          "x": 0,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_frost_glacier",
          "spellIds": [
            11190
          ],
          "descriptions": [
            "Increases the damage dealt by your Cone of Cold spell by 15%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90204,
          "name": "Cold Snap",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_frost_wizardmark",
          "spellIds": [
            12472
          ],
          "descriptions": [
            "Finishes the remaining cooldown on all your other Frost spells."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90205,
          "name": "Ice Lance",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_frost_frostblast",
          "spellIds": [
            1312002
          ],
          "descriptions": [
            "Deals <!--ppl20:26:28:35-->28 to 32 Frost damage to an enemy target. Deals 300% increased damage to Frozen targets."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90206,
          "name": "Shatter",
          "x": 3,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_frost_frostshock",
          "spellIds": [
            11170
          ],
          "descriptions": [
            "Increases the critical strike chance of all your spells against Frozen targets by 1%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90207,
          "name": "Ice Block",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_frost_frost",
          "spellIds": [
            11958
          ],
          "descriptions": [
            "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move, or cast spells."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90208,
          "name": "Arctic Reach",
          "x": 0,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "spell_shadow_darkritual",
          "spellIds": [
            16757
          ],
          "descriptions": [
            "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90209,
          "name": "Improved Blizzard",
          "x": 3,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_frost_icestorm",
          "spellIds": [
            11185
          ],
          "descriptions": [
            "Adds a Chill effect to your Blizzard spell. This effect lowers the target's movement speed by 40% for 1.5 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90210,
          "name": "Frost Channeling",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_frost_stun",
          "spellIds": [
            11160
          ],
          "descriptions": [
            "Reduces the mana cost of your Frost spells by 15% and reduces the threat caused by your Frost spells by 30%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90211,
          "name": "Piercing Ice",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_frost_frostbolt",
          "spellIds": [
            11151
          ],
          "descriptions": [
            "Increases the damage done by your Frost spells by 2%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90212,
          "name": "Frostbite",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_frost_frostarmor",
          "spellIds": [
            11071
          ],
          "descriptions": [
            "Gives your Chill effects a 15% chance to Freeze the target for 5 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90213,
          "name": "Improved Frost Nova",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_frost_freezingbreath",
          "spellIds": [
            11165
          ],
          "descriptions": [
            "Reduces the cooldown of your Frost Nova spell by 4 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90214,
          "name": "Permafrost",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_frost_wisp",
          "spellIds": [
            11175
          ],
          "descriptions": [
            "Increases the duration of your Chill effects by 33% and reduces the target's speed by an additional 10%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90215,
          "name": "Ice Shards",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_frost_iceshard",
          "spellIds": [
            11207
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Frost spells by 100%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90216,
          "name": "Elemental Precision",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_ice_magicdamage",
          "spellIds": [
            29438
          ],
          "descriptions": [
            "Improves your chance to hit with Frost and Fire spells by 6%."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90217,
          "name": "Improved Frostbolt",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_frost_frostbolt02",
          "spellIds": [
            11070
          ],
          "descriptions": [
            "Reduces the casting time of your Frostbolt spell by 0 sec."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        },
        {
          "id": 90218,
          "name": "Frost Warding",
          "x": 0,
          "y": 0,
          "maxRank": 2,
          "minPointsRequired": 0,
          "iconName": "spell_frost_frostward",
          "spellIds": [
            11189
          ],
          "descriptions": [
            "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active."
          ],
          "sourceClass": "Mage",
          "sourceTree": "Frost"
        }
      ]
    }
  ]
};
