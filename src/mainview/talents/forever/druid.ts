import { ClassData } from "../../../types";

export const druidData: ClassData = {
  "name": "Druid",
  "talentTrees": [
    {
      "name": "Balance",
      "talents": [
        {
          "id": 16814,
          "name": "Improved Wrath",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_abolishmagic",
          "spellIds": [
            16814
          ],
          "descriptions": [
            "Reduces the cast time of your Wrath spell by 0.1 sec.",
            "Reduces the cast time of your Wrath spell by 0.2 sec.",
            "Reduces the cast time of your Wrath spell by 0.3 sec.",
            "Reduces the cast time of your Wrath spell by 0.4 sec.",
            "Reduces the cast time of your Wrath spell by 0.5 sec."
          ]
        },
        {
          "id": 1223081,
          "name": "Genesis",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_arcane_arcane03",
          "spellIds": [
            1223081
          ],
          "descriptions": [
            "Increases the periodic damage and healing done by your spells and abilities by 1%.",
            "Increases the periodic damage and healing done by your spells and abilities by 2%.",
            "Increases the periodic damage and healing done by your spells and abilities by 3%.",
            "Increases the periodic damage and healing done by your spells and abilities by 4%.",
            "Increases the periodic damage and healing done by your spells and abilities by 5%."
          ]
        },
        {
          "id": 16845,
          "name": "Moonglow",
          "x": 0,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_sentinal",
          "spellIds": [
            16845
          ],
          "descriptions": [
            "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%.",
            "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 6%.",
            "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%."
          ]
        },
        {
          "id": 16918,
          "name": "Improved Entangling Roots",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_nature_stranglevines",
          "spellIds": [
            16918
          ],
          "descriptions": [
            "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting Entangling Roots.",
            "Gives you a 100% chance to avoid interruption caused by damage while casting Entangling Roots."
          ]
        },
        {
          "id": 1223082,
          "name": "Nature's Majesty",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "inv_staff_01",
          "spellIds": [
            1223082
          ],
          "descriptions": [
            "Increases your critical strike chance with spells and melee attacks by 1%.",
            "Increases your critical strike chance with spells and melee attacks by 2%."
          ]
        },
        {
          "id": 1223083,
          "name": "Nature's Splendor",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_nature_natureresistancetotem",
          "spellIds": [
            1223083
          ],
          "descriptions": [
            "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec."
          ],
          "requirements": {
            "talentId": 1223082,
            "talentRank": 2
          },
          "talentLink": "Nature's Majesty"
        },
        {
          "id": 16819,
          "name": "Nature's Reach",
          "x": 3,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_naturetouchgrow",
          "spellIds": [
            16819
          ],
          "descriptions": [
            "Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by 10%.",
            "Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by 20%."
          ]
        },
        {
          "id": 5570,
          "name": "Insect Swarm",
          "x": 0,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_nature_insectswarm",
          "spellIds": [
            5570
          ],
          "descriptions": [
            "The enemy target is swarmed by insects, decreasing their chance to hit with attacks by 2% and causing 48 Nature damage over <!--sp1223083:0-->12 sec<!--sp1223083-->."
          ]
        },
        {
          "id": 16821,
          "name": "Improved Moonfire",
          "x": 1,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_starfall",
          "spellIds": [
            16821
          ],
          "descriptions": [
            "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
            "Increases the damage and critical strike chance of your Moonfire spell by 10%."
          ]
        },
        {
          "id": 16909,
          "name": "Vengeance",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_nature_purge",
          "spellIds": [
            16909
          ],
          "descriptions": [
            "Gives you a 3% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
            "Gives you a 6% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
            "Gives you a 9% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
            "Gives you a 12% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.",
            "Gives you a 15% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability."
          ],
          "requirements": {
            "talentId": 16821,
            "talentRank": 2
          },
          "talentLink": "Improved Moonfire"
        },
        {
          "id": 16850,
          "name": "Improved Starfire",
          "x": 2,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_arcane_starfire",
          "spellIds": [
            16850
          ],
          "descriptions": [
            "Reduces the cast time of Starfire by 0.1 sec and has a 3% chance to stun the target for 3 sec.",
            "Reduces the cast time of Starfire by 0.2 sec and has a 6% chance to stun the target for 3 sec.",
            "Reduces the cast time of Starfire by 0.3 sec and has a 9% chance to stun the target for 3 sec.",
            "Reduces the cast time of Starfire by 0.4 sec and has a 12% chance to stun the target for 3 sec.",
            "Reduces the cast time of Starfire by 0.5 sec and has a 15% chance to stun the target for 3 sec."
          ]
        },
        {
          "id": 16880,
          "name": "Nature's Grace",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_naturesblessing",
          "spellIds": [
            16880
          ],
          "descriptions": [
            "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec."
          ]
        },
        {
          "id": 408248,
          "name": "Eclipse",
          "x": 2,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "ability_druid_eclipse",
          "spellIds": [
            408248
          ],
          "descriptions": [
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0 sec. Stores up to 4 charges. Lasts 15 sec.",
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.1 sec. Stores up to 4 charges. Lasts 30 sec.",
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.1 sec. Stores up to 4 charges. Lasts 45 sec."
          ]
        },
        {
          "id": 16896,
          "name": "Moonfury",
          "x": 1,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_nature_moonglow",
          "spellIds": [
            16896
          ],
          "descriptions": [
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 2%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 4%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 8%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%."
          ]
        },
        {
          "id": 24858,
          "name": "Moonkin Form",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "spell_nature_forceofnature",
          "spellIds": [
            24858
          ],
          "descriptions": [
            "Shapeshift into Moonkin Form, increasing Omen of Clarity's chance to trigger by 100%, Armor contribution from items by 360%, and all party members within 45 yards have their Critical Strike chance increased by 3%, exclusive with Leader of the Pack.  Also protects the caster from Polymorph effects and prevents the use of healing spells.<br /><br />The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
          ]
        },
        {
          "id": 17245,
          "name": "Overgrowth",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "inv_misc_herb_15",
          "spellIds": [
            17245
          ],
          "descriptions": [
            "Increases the maximum number of targets you may have affected by Entangling Roots by 2.",
            "Increases the maximum number of targets you may have affected by Entangling Roots by 2."
          ]
        }
      ]
    },
    {
      "name": "Feral Combat",
      "talents": [
        {
          "id": 16934,
          "name": "Ferocity",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "ability_hunter_pet_hyena",
          "spellIds": [
            16934
          ],
          "descriptions": [
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by 5 Rage or Energy."
          ]
        },
        {
          "id": 17003,
          "name": "Heart of the Wild",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_holy_blessingofagility",
          "spellIds": [
            17003
          ],
          "descriptions": [
            "Increases your Intellect by 4%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 4%.",
            "Increases your Intellect by 8%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your Strength is increased by 8%.",
            "Increases your Intellect by 12%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your Strength is increased by 12%.",
            "Increases your Intellect by 16%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your Strength is increased by 16%.",
            "Increases your Intellect by 20%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your Strength is increased by 20%."
          ]
        },
        {
          "id": 16947,
          "name": "Feral Instinct",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_ambush",
          "spellIds": [
            16947
          ],
          "descriptions": [
            "Increases threat caused in Bear and Dire Bear Form by 5% and reduces the chance enemies have to detect you while Prowling.",
            "Increases threat caused in Bear and Dire Bear Form by 10% and reduces the chance enemies have to detect you while Prowling.",
            "Increases threat caused in Bear and Dire Bear Form by 15% and reduces the chance enemies have to detect you while Prowling."
          ]
        },
        {
          "id": 16940,
          "name": "Brutal Impact",
          "x": 2,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "ability_druid_bash",
          "spellIds": [
            16940
          ],
          "descriptions": [
            "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.",
            "Increases the stun duration of your Bash and Pounce abilities by 1 sec."
          ]
        },
        {
          "id": 16929,
          "name": "Thick Hide",
          "x": 3,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "inv_misc_pelt_bear_03",
          "spellIds": [
            16929
          ],
          "descriptions": [
            "Increases the Armor rating of your pets by 10%.",
            "Increases the Armor rating of your pets by 20%.",
            "Increases the Armor rating of your pets by 30%."
          ]
        },
        {
          "id": 17002,
          "name": "Feral Swiftness",
          "x": 0,
          "y": 1,
          "maxRank": 2,
          "minPointsRequired": 5,
          "iconName": "spell_nature_spiritwolf",
          "spellIds": [
            17002
          ],
          "descriptions": [
            "Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 2%.",
            "Increases your movement speed by 30% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%."
          ]
        },
        {
          "id": 1238122,
          "name": "Feral Charge",
          "x": 2,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "ability_hunter_pet_bear",
          "spellIds": [
            1238122
          ],
          "descriptions": [
            "<!--sp9634:0--><!--sp9634--><!--sp5487:0--><span style=\"color: #FF2020\">Requires Bear Form, Dire Bear Form</span><!--sp5487--><br />Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec.<br /><br /><br /><table><tr><td><b>Feral Charge (Cat)</b><br />8 - 25 yd range<table width=\"100%\"><tr><td>Instant</td><th>30 sec cooldown</th></tr></table>Requires Druid<br />Requires level 1</td></tr></table><table><tr><td>Requires Cat Form<br /><span class=\"q\">Leap behind an enemy.</span></td></tr></table>"
          ]
        },
        {
          "id": 16966,
          "name": "Shredding Attacks",
          "x": 0,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_shadow_vampiricaura",
          "spellIds": [
            16966
          ],
          "descriptions": [
            "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 6.",
            "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 6.",
            "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 6."
          ]
        },
        {
          "id": 16942,
          "name": "Sharpened Claws",
          "x": 3,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "inv_misc_monsterclaw_04",
          "spellIds": [
            16942
          ],
          "descriptions": [
            "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 2%.",
            "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 4%."
          ]
        },
        {
          "id": 16958,
          "name": "Blood Frenzy",
          "x": 3,
          "y": 3,
          "maxRank": 2,
          "minPointsRequired": 15,
          "iconName": "ability_ghoulfrenzy",
          "spellIds": [
            16958
          ],
          "descriptions": [
            "Your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point.",
            "Your critical strikes from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point."
          ],
          "requirements": {
            "talentId": 16942,
            "talentRank": 2
          },
          "talentLink": "Sharpened Claws"
        },
        {
          "id": 16998,
          "name": "Savage Fury",
          "x": 1,
          "y": 2,
          "maxRank": 2,
          "minPointsRequired": 10,
          "iconName": "ability_druid_ravage",
          "spellIds": [
            16998
          ],
          "descriptions": [
            "Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by 10%.",
            "Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by 20%."
          ]
        },
        {
          "id": 407995,
          "name": "Primal Bite",
          "x": 1,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "ability_racial_cannibalize",
          "spellIds": [
            407995
          ],
          "descriptions": [
            "Bite the target, dealing 100% normal damage plus 26 and generating a high amount of threat.<!--cooldown:417141:until canceled-->"
          ],
          "requirements": {
            "talentId": 16998,
            "talentRank": 2
          },
          "talentLink": "Savage Fury"
        },
        {
          "id": 1223242,
          "name": "Natural Instinct",
          "x": 3,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_druid_predatoryinstincts",
          "spellIds": [
            1223242
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your melee abilities by 10% and increases your spell healing by 12.5% of your Intellect.",
            "Increases the critical strike damage bonus of your melee abilities by 20% and increases your spell healing by 25% of your Intellect."
          ]
        },
        {
          "id": 1322605,
          "name": "Shifting Power",
          "x": 0,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "spell_druid_displacement",
          "spellIds": [
            1322605
          ],
          "descriptions": [
            "Instantly convert 0 Mana into 40 Energy. Shifting Power's cost is reduced by effects that reduce the cost of Shapeshifting."
          ],
          "requirements": {
            "talentId": 16966,
            "talentRank": 3
          },
          "talentLink": "Shredding Attacks"
        },
        {
          "id": 16972,
          "name": "Predatory Strikes",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "ability_hunter_pet_cat",
          "spellIds": [
            16972
          ],
          "descriptions": [
            "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 50% of your level.",
            "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 100% of your level.",
            "Increases your melee attack power in Cat, Bear and Dire Bear Forms by 150% of your level."
          ]
        },
        {
          "id": 1223246,
          "name": "Rend and Tear",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "ability_druid_primalagression",
          "spellIds": [
            1223246
          ],
          "descriptions": [
            "Increases damage done by your melee abilities on Bleeding targets by 4%.",
            "Increases damage done by your melee abilities on Bleeding targets by 8%.",
            "Increases damage done by your melee abilities on Bleeding targets by 12%.",
            "Increases damage done by your melee abilities on Bleeding targets by 16%.",
            "Increases damage done by your melee abilities on Bleeding targets by 20%."
          ],
          "requirements": {
            "talentId": 16972,
            "talentRank": 3
          },
          "talentLink": "Predatory Strikes"
        },
        {
          "id": 417051,
          "name": "Natural Reaction",
          "x": 0,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "ability_bullrush",
          "spellIds": [
            417051
          ],
          "descriptions": [
            "Increases your dodge chance by 0%, and gives you a 3% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 0%, and gives you a 6% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 0%, and gives you a 9% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 0%, and gives you a 12% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 0%, and gives you a 15% chance to gain 5 Rage each time you dodge."
          ]
        },
        {
          "id": 17007,
          "name": "Leader of the Pack",
          "x": 1,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_unyeildingstamina",
          "spellIds": [
            17007
          ],
          "descriptions": [
            "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the critical strike chance of all party members within 45 yards by 3%, exclusive with Moonkin Aura."
          ]
        },
        {
          "id": 417141,
          "name": "Berserk",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_druid_berserk",
          "spellIds": [
            417141
          ],
          "descriptions": [
            "<!--sp9634:0--><!--sp9634--><!--sp3025:0--><!--sp3025--><!--sp5487:0--><span style=\"color: #FF2020\">Requires Cat Form, Bear Form, Dire Bear Form</span><!--sp5487--><br />Causes your Primal Bite ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec."
          ],
          "requirements": {
            "talentId": 17007,
            "talentRank": 1
          },
          "talentLink": "Leader of the Pack"
        },
        {
          "id": 1322670,
          "name": "Improved Shifting Power",
          "x": 0,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "ability_hunter_aspectmastery",
          "spellIds": [
            1322670
          ],
          "descriptions": [
            "Reduces the cooldown of your Shifting Power spell by 0 sec.",
            "Reduces the cooldown of your Shifting Power spell by 0 sec."
          ],
          "requirements": {
            "talentId": 1322605,
            "talentRank": 1
          },
          "talentLink": "Shifting Power"
        }
      ]
    },
    {
      "name": "Restoration",
      "talents": [
        {
          "id": 17123,
          "name": "Improved Tranquility",
          "x": 3,
          "y": 4,
          "maxRank": 2,
          "minPointsRequired": 20,
          "iconName": "spell_nature_tranquility",
          "spellIds": [
            17123
          ],
          "descriptions": [
            "Reduces threat caused by Tranquility by 50%.",
            "Reduces threat caused by Tranquility by 100%."
          ]
        },
        {
          "id": 408120,
          "name": "Wild Growth",
          "x": 1,
          "y": 6,
          "maxRank": 1,
          "minPointsRequired": 30,
          "iconName": "ability_druid_flourish",
          "spellIds": [
            408120
          ],
          "descriptions": [
            "Heals the target and their party for 336 over 7 sec. Party members must be within 43.5 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration."
          ],
          "requirements": {
            "talentId": 1309631,
            "talentRank": 3
          },
          "talentLink": "Living Spirit"
        },
        {
          "id": 1309631,
          "name": "Living Spirit",
          "x": 1,
          "y": 4,
          "maxRank": 3,
          "minPointsRequired": 20,
          "iconName": "spell_nature_giftofthewaterspirit",
          "spellIds": [
            1309631
          ],
          "descriptions": [
            "Increases your total Spirit by 5%.",
            "Increases your total Spirit by 10%.",
            "Increases your total Spirit by 15%."
          ]
        },
        {
          "id": 18562,
          "name": "Swiftmend",
          "x": 3,
          "y": 3,
          "maxRank": 1,
          "minPointsRequired": 15,
          "iconName": "inv_relics_idolofrejuvenation",
          "spellIds": [
            18562
          ],
          "descriptions": [
            "Instantly heals a target with an active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of one of those spells."
          ]
        },
        {
          "id": 17074,
          "name": "Improved Regrowth",
          "x": 2,
          "y": 5,
          "maxRank": 5,
          "minPointsRequired": 25,
          "iconName": "spell_nature_resistnature",
          "spellIds": [
            17074
          ],
          "descriptions": [
            "Increases the critical effect chance of your Regrowth spell by 10%.",
            "Increases the critical effect chance of your Regrowth spell by 20%.",
            "Increases the critical effect chance of your Regrowth spell by 30%.",
            "Increases the critical effect chance of your Regrowth spell by 40%.",
            "Increases the critical effect chance of your Regrowth spell by 50%."
          ],
          "requirements": {
            "talentId": 17111,
            "talentRank": 3
          },
          "talentLink": "Improved Rejuvenation"
        },
        {
          "id": 17111,
          "name": "Improved Rejuvenation",
          "x": 2,
          "y": 3,
          "maxRank": 3,
          "minPointsRequired": 15,
          "iconName": "spell_nature_rejuvenation",
          "spellIds": [
            17111
          ],
          "descriptions": [
            "Increases the effect of your Rejuvenation spell by 5%.",
            "Increases the effect of your Rejuvenation spell by 10%.",
            "Increases the effect of your Rejuvenation spell by 15%."
          ]
        },
        {
          "id": 24968,
          "name": "Tranquil Spirit",
          "x": 1,
          "y": 3,
          "maxRank": 5,
          "minPointsRequired": 15,
          "iconName": "spell_holy_elunesgrace",
          "spellIds": [
            24968
          ],
          "descriptions": [
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%."
          ]
        },
        {
          "id": 17104,
          "name": "Gift of Nature",
          "x": 2,
          "y": 2,
          "maxRank": 5,
          "minPointsRequired": 10,
          "iconName": "spell_nature_protectionformnature",
          "spellIds": [
            17104
          ],
          "descriptions": [
            "Increases the effect of all healing spells by 2%.",
            "Increases the effect of all healing spells by 4%.",
            "Increases the effect of all healing spells by 6%.",
            "Increases the effect of all healing spells by 8%.",
            "Increases the effect of all healing spells by 10%."
          ]
        },
        {
          "id": 17106,
          "name": "Reflection",
          "x": 1,
          "y": 2,
          "maxRank": 3,
          "minPointsRequired": 10,
          "iconName": "spell_frost_windwalkon",
          "spellIds": [
            17106
          ],
          "descriptions": [
            "Allows 5% of your Mana regeneration to continue while casting.",
            "Allows 10% of your Mana regeneration to continue while casting.",
            "Allows 15% of your Mana regeneration to continue while casting."
          ]
        },
        {
          "id": 414673,
          "name": "Gift of the Earthmother",
          "x": 3,
          "y": 2,
          "maxRank": 1,
          "minPointsRequired": 10,
          "iconName": "spell_nature_spiritarmor",
          "spellIds": [
            414673
          ],
          "descriptions": [
            "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells."
          ]
        },
        {
          "id": 16833,
          "name": "Natural Shapeshifter",
          "x": 2,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "spell_nature_wispsplode",
          "spellIds": [
            16833
          ],
          "descriptions": [
            "Reduces the mana cost of all shapeshifting by 10%.",
            "Reduces the mana cost of all shapeshifting by 20%.",
            "Reduces the mana cost of all shapeshifting by 30%."
          ]
        },
        {
          "id": 17118,
          "name": "Subtlety",
          "x": 1,
          "y": 1,
          "maxRank": 3,
          "minPointsRequired": 5,
          "iconName": "ability_eyeoftheowl",
          "spellIds": [
            17118
          ],
          "descriptions": [
            "Reduces the threat generated by your Nature and Arcane spells by 10%.",
            "Reduces the threat generated by your Nature and Arcane spells by 20%.",
            "Reduces the threat generated by your Nature and Arcane spells by 30%."
          ]
        },
        {
          "id": 17116,
          "name": "Nature's Swiftness",
          "x": 0,
          "y": 4,
          "maxRank": 1,
          "minPointsRequired": 20,
          "iconName": "spell_nature_ravenform",
          "spellIds": [
            17116
          ],
          "descriptions": [
            "When activated, your next Nature spell becomes an instant cast spell."
          ],
          "requirements": {
            "talentId": 17069,
            "talentRank": 5
          },
          "talentLink": "Naturalist"
        },
        {
          "id": 17069,
          "name": "Naturalist",
          "x": 0,
          "y": 1,
          "maxRank": 5,
          "minPointsRequired": 5,
          "iconName": "spell_nature_healingtouch",
          "spellIds": [
            17069
          ],
          "descriptions": [
            "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases the damage you deal with physical attacks in all forms by 2%.",
            "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases the damage you deal with physical attacks in all forms by 4%.",
            "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases the damage you deal with physical attacks in all forms by 6%.",
            "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases the damage you deal with physical attacks in all forms by 8%.",
            "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases the damage you deal with physical attacks in all forms by 10%."
          ]
        },
        {
          "id": 17063,
          "name": "Nature's Focus",
          "x": 1,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_nature_healingwavegreater",
          "spellIds": [
            17063
          ],
          "descriptions": [
            "Gives you a 14% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 28% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 42% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 56% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells."
          ]
        },
        {
          "id": 17056,
          "name": "Furor",
          "x": 2,
          "y": 0,
          "maxRank": 5,
          "minPointsRequired": 0,
          "iconName": "spell_holy_blessingofstamina",
          "spellIds": [
            17056
          ],
          "descriptions": [
            "Gives you 20% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 40% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 60% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 80% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 100% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form."
          ]
        }
      ]
    }
  ]
};
