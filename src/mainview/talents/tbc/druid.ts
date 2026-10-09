import { ClassData } from "../../../types";

export const druidData: ClassData = {
  name: "Druid",
  talentTrees: [
    {
      "name": "Balance",
      "talents": [
        {
          "id": 761,
          "name": "Nature's Grasp",
          "maxRank": 1,
          "minPointsRequired": 0,
          "spellIds": [
            16689
          ],
          "descriptions": [
            "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec."
          ],
          "iconName": "spell_nature_natureswrath",
          "y": 0,
          "x": 1
        },
        {
          "id": 762,
          "name": "Starlight Wrath",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16814,
            16815,
            16816,
            16817,
            16818
          ],
          "descriptions": [
            "Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.",
            "Reduces the cast time of your Wrath and Starfire spells by 0.2 sec.",
            "Reduces the cast time of your Wrath and Starfire spells by 0.3 sec.",
            "Reduces the cast time of your Wrath and Starfire spells by 0.4 sec.",
            "Reduces the cast time of your Wrath and Starfire spells by 0.5 sec."
          ],
          "iconName": "spell_nature_abolishmagic",
          "y": 0,
          "x": 0
        },
        {
          "id": 763,
          "name": "Improved Moonfire",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            16821,
            16822
          ],
          "descriptions": [
            "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
            "Increases the damage and critical strike chance of your Moonfire spell by 10%."
          ],
          "iconName": "spell_nature_starfall",
          "y": 1,
          "x": 2
        },
        {
          "id": 764,
          "name": "Nature's Reach",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            16819,
            16820
          ],
          "descriptions": [
            "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 10%.",
            "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 20%."
          ],
          "iconName": "spell_nature_naturetouchgrow",
          "y": 2,
          "x": 3
        },
        {
          "id": 782,
          "name": "Brambles",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            16836,
            16839,
            16840
          ],
          "descriptions": [
            "Increases damage caused by your Thorns and Entangling Roots spells by 25%.",
            "Increases damage caused by your Thorns and Entangling Roots spells by 50%.",
            "Increases damage caused by your Thorns and Entangling Roots spells by 75%."
          ],
          "iconName": "spell_nature_thorns",
          "y": 2,
          "x": 0
        },
        {
          "id": 783,
          "name": "Moonglow",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            16845,
            16846,
            16847
          ],
          "descriptions": [
            "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%.",
            "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 6%.",
            "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%."
          ],
          "iconName": "spell_nature_sentinal",
          "y": 4,
          "x": 2
        },
        {
          "id": 784,
          "name": "Celestial Focus",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            16850,
            16923,
            16924
          ],
          "descriptions": [
            "Gives your Starfire spell a 5% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 25%.",
            "Gives your Starfire spell a 10% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 50%.",
            "Gives your Starfire spell a 15% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 70%."
          ],
          "iconName": "spell_arcane_starfire",
          "y": 3,
          "x": 2
        },
        {
          "id": 787,
          "name": "Control of Nature",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16918,
            16919,
            16920
          ],
          "descriptions": [
            "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
            "Gives you a 100% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone."
          ],
          "iconName": "spell_nature_stranglevines",
          "y": 1,
          "x": 0
        },
        {
          "id": 788,
          "name": "Insect Swarm",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            5570
          ],
          "descriptions": [
            "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 108 Nature damage over 12 sec."
          ],
          "iconName": "spell_nature_insectswarm",
          "y": 2,
          "x": 2
        },
        {
          "id": 789,
          "name": "Nature's Grace",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            16880
          ],
          "descriptions": [
            "All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec."
          ],
          "iconName": "spell_nature_naturesblessing",
          "y": 4,
          "x": 1
        },
        {
          "id": 790,
          "name": "Moonfury",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            16896,
            16897,
            16899,
            16900,
            16901
          ],
          "descriptions": [
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 2%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 4%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 8%.",
            "Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%."
          ],
          "iconName": "spell_nature_moonglow",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 789,
            "talentRank": 1
          },
          // "talentLink": "Nature's Grace"
        },
        {
          "id": 792,
          "name": "Vengeance",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            16909,
            16910,
            16911,
            16912,
            16913
          ],
          "descriptions": [
            "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 20%.",
            "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 40%.",
            "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 60%.",
            "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 80%.",
            "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 100%."
          ],
          "iconName": "spell_nature_purge",
          "y": 3,
          "x": 1,
          "requirements": {
            "talentId": 1822,
            "talentRank": 2
          },
          "talentLink": "Focused Starlight"
        },
        {
          "id": 793,
          "name": "Moonkin Form",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            24858
          ],
          "descriptions": [
            "Shapeshift into Moonkin Form.  While in this form the armor contribution from items is increased by 400%, attack power is increased by 150% of your level and all party members within 30 yards have their spell critical chance increased by 5%.  Melee attacks in this form have a chance on hit to regenerate mana based on attack power.  The Moonkin can only cast Balance and Remove Curse spells while shapeshifted.<br /><br />The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
          ],
          "iconName": "spell_nature_forceofnature",
          "y": 6,
          "x": 1
        },
        {
          "id": 921,
          "name": "Improved Nature's Grasp",
          "maxRank": 4,
          "minPointsRequired": 0,
          "spellIds": [
            17245,
            17247,
            17248,
            17249
          ],
          "descriptions": [
            "Increases the chance for your Nature's Grasp to entangle an enemy by 15%.",
            "Increases the chance for your Nature's Grasp to entangle an enemy by 30%.",
            "Increases the chance for your Nature's Grasp to entangle an enemy by 45%.",
            "Increases the chance for your Nature's Grasp to entangle an enemy by 65%."
          ],
          "iconName": "spell_nature_natureswrath",
          "y": 0,
          "x": 2,
          "requirements": {
            "talentId": 761,
            "talentRank": 1
          }
        },
        {
          "id": 1782,
          "name": "Lunar Guidance",
          "maxRank": 3,
          "minPointsRequired": 20,
          "spellIds": [
            33589,
            33590,
            33591
          ],
          "descriptions": [
            "Increases your spell damage and healing by 8% of your total Intellect.",
            "Increases your spell damage and healing by 16% of your total Intellect.",
            "Increases your spell damage and healing by 25% of your total Intellect."
          ],
          "iconName": "ability_druid_lunarguidance",
          "y": 4,
          "x": 0
        },
        {
          "id": 1783,
          "name": "Balance of Power",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            33592,
            33596
          ],
          "descriptions": [
            "Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by 2%.",
            "Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by 4%."
          ],
          "iconName": "ability_druid_balanceofpower",
          "y": 5,
          "x": 2
        },
        {
          "id": 1784,
          "name": "Dreamstate",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            33597,
            33599,
            33956
          ],
          "descriptions": [
            "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
            "Regenerate mana equal to 7% of your Intellect every 5 sec, even while casting.",
            "Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting."
          ],
          "iconName": "ability_druid_dreamstate",
          "y": 6,
          "x": 0
        },
        {
          "id": 1785,
          "name": "Improved Faerie Fire",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            33600,
            33601,
            33602
          ],
          "descriptions": [
            "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 1%.",
            "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 2%.",
            "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 3%."
          ],
          "iconName": "spell_nature_faeriefire",
          "y": 6,
          "x": 2
        },
        {
          "id": 1786,
          "name": "Wrath of Cenarius",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            33603,
            33604,
            33605,
            33606,
            33607
          ],
          "descriptions": [
            "Your Starfire spell gains an additional 4% and your Wrath gains an additional 2% of your bonus damage effects.",
            "Your Starfire spell gains an additional 8% and your Wrath gains an additional 4% of your bonus damage effects.",
            "Your Starfire spell gains an additional 12% and your Wrath gains an additional 6% of your bonus damage effects.",
            "Your Starfire spell gains an additional 16% and your Wrath gains an additional 8% of your bonus damage effects.",
            "Your Starfire spell gains an additional 20% and your Wrath gains an additional 10% of your bonus damage effects."
          ],
          "iconName": "ability_druid_twilightswrath",
          "y": 7,
          "x": 1
        },
        {
          "id": 1787,
          "name": "Force of Nature",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            33831
          ],
          "descriptions": [
            "Summons 3 treants to attack enemy targets for 30 sec."
          ],
          "iconName": "ability_druid_forceofnature",
          "y": 8,
          "x": 1
        },
        {
          "id": 1822,
          "name": "Focused Starlight",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            35363,
            35364
          ],
          "descriptions": [
            "Increases the critical strike chance of your Wrath and Starfire spells by 2%.",
            "Increases the critical strike chance of your Wrath and Starfire spells by 4%."
          ],
          "iconName": "inv_staff_01",
          "y": 1,
          "x": 1
        }
      ]
    },
    {
      "name": "Feral Combat",
      "talents": [
        {
          "id": 794,
          "name": "Thick Hide",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16929,
            16930,
            16931
          ],
          "descriptions": [
            "Increases your Armor contribution from items by 4%.",
            "Increases your Armor contribution from items by 7%.",
            "Increases your Armor contribution from items by 10%."
          ],
          "iconName": "inv_misc_pelt_bear_03",
          "y": 1,
          "x": 2
        },
        {
          "id": 795,
          "name": "Feral Aggression",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16858,
            16859,
            16860,
            16861,
            16862
          ],
          "descriptions": [
            "Increases the attack power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%.",
            "Increases the attack power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%.",
            "Increases the attack power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%.",
            "Increases the attack power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%.",
            "Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%."
          ],
          "iconName": "classic_ability_druid_demoralizingroar",
          "y": 0,
          "x": 2
        },
        {
          "id": 796,
          "name": "Ferocity",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            16934,
            16935,
            16936,
            16937,
            16938
          ],
          "descriptions": [
            "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy.",
            "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy."
          ],
          "iconName": "ability_hunter_pet_hyena",
          "y": 0,
          "x": 1
        },
        {
          "id": 797,
          "name": "Brutal Impact",
          "maxRank": 2,
          "minPointsRequired": 5,
          "spellIds": [
            16940,
            16941
          ],
          "descriptions": [
            "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.",
            "Increases the stun duration of your Bash and Pounce abilities by 1 sec."
          ],
          "iconName": "ability_druid_bash",
          "y": 1,
          "x": 1
        },
        {
          "id": 798,
          "name": "Sharpened Claws",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            16942,
            16943,
            16944
          ],
          "descriptions": [
            "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
            "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 4%.",
            "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 6%."
          ],
          "iconName": "inv_misc_monsterclaw_04",
          "y": 2,
          "x": 2
        },
        {
          "id": 799,
          "name": "Feral Instinct",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16947,
            16948,
            16949
          ],
          "descriptions": [
            "Increases threat caused in Bear and Dire Bear Form by 5% and reduces the chance enemies have to detect you while Prowling.",
            "Increases threat caused in Bear and Dire Bear Form by 10% and reduces the chance enemies have to detect you while Prowling.",
            "Increases threat caused in Bear and Dire Bear Form by 15% and reduces the chance enemies have to detect you while Prowling."
          ],
          "iconName": "ability_ambush",
          "y": 1,
          "x": 0
        },
        {
          "id": 801,
          "name": "Primal Fury",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            37116,
            37117
          ],
          "descriptions": [
            "Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point.",
            "Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point."
          ],
          "iconName": "ability_racial_cannibalize",
          "y": 3,
          "x": 2,
          "requirements": {
            "talentId": 798,
            "talentRank": 3
          },
          // "talentLink": "Sharpened Claws"
        },
        {
          "id": 802,
          "name": "Shredding Attacks",
          "maxRank": 2,
          "minPointsRequired": 15,
          "spellIds": [
            16966,
            16968
          ],
          "descriptions": [
            "Reduces the energy cost of your Shred ability by 9 and the rage cost of your Lacerate ability by 1.",
            "Reduces the energy cost of your Shred ability by 18 and the rage cost of your Lacerate ability by 2."
          ],
          "iconName": "spell_shadow_vampiricaura",
          "y": 3,
          "x": 0
        },
        {
          "id": 803,
          "name": "Predatory Strikes",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            16972,
            16974,
            16975
          ],
          "descriptions": [
            "Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 50% of your level.",
            "Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 100% of your level.",
            "Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 150% of your level."
          ],
          "iconName": "ability_hunter_pet_cat",
          "y": 3,
          "x": 1
        },
        {
          "id": 804,
          "name": "Feral Charge",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            16979
          ],
          "descriptions": [
            "Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec."
          ],
          "iconName": "ability_hunter_pet_bear",
          "y": 2,
          "x": 1
        },
        {
          "id": 805,
          "name": "Savage Fury",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            16998,
            16999
          ],
          "descriptions": [
            "Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 10%.",
            "Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 20%."
          ],
          "iconName": "ability_druid_ravage",
          "y": 4,
          "x": 0
        },
        {
          "id": 807,
          "name": "Feral Swiftness",
          "maxRank": 2,
          "minPointsRequired": 10,
          "spellIds": [
            17002,
            24866
          ],
          "descriptions": [
            "Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 2%.",
            "Increases your movement speed by 30% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%."
          ],
          "iconName": "spell_nature_spiritwolf",
          "y": 2,
          "x": 0
        },
        {
          "id": 808,
          "name": "Heart of the Wild",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            17003,
            17004,
            17005,
            17006,
            24894
          ],
          "descriptions": [
            "Increases your Intellect by 4%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 2%.",
            "Increases your Intellect by 8%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your attack power is increased by 4%.",
            "Increases your Intellect by 12%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your attack power is increased by 6%.",
            "Increases your Intellect by 16%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your attack power is increased by 8%.",
            "Increases your Intellect by 20%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your attack power is increased by 10%."
          ],
          "iconName": "spell_holy_blessingofagility",
          "y": 5,
          "x": 1,
          "requirements": {
            "talentId": 803,
            "talentRank": 3
          },
          "talentLink": "Predatory Strikes"
        },
        {
          "id": 809,
          "name": "Leader of the Pack",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            17007
          ],
          "descriptions": [
            "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 5%."
          ],
          "iconName": "spell_nature_unyeildingstamina",
          "y": 6,
          "x": 1
        },
        {
          "id": 1162,
          "name": "Faerie Fire (Feral)",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            16857
          ],
          "descriptions": [
            "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible."
          ],
          "iconName": "spell_nature_faeriefire",
          "y": 4,
          "x": 2
        },
        {
          "id": 1792,
          "name": "Nurturing Instinct",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            33872,
            33873
          ],
          "descriptions": [
            "Increases your healing spells by up to 50% of your Agility, and increases healing done to you by 10% while in Cat form.",
            "Increases your healing spells by up to 100% of your Agility, and increases healing done to you by 20% while in Cat form."
          ],
          "iconName": "ability_druid_healinginstincts",
          "y": 4,
          "x": 3
        },
        {
          "id": 1793,
          "name": "Primal Tenacity",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            33851,
            33852,
            33957
          ],
          "descriptions": [
            "Increases your chance to resist Stun and Fear mechanics by 5%.",
            "Increases your chance to resist Stun and Fear mechanics by 10%.",
            "Increases your chance to resist Stun and Fear mechanics by 15%."
          ],
          "iconName": "ability_druid_primaltenacity",
          "y": 6,
          "x": 0
        },
        {
          "id": 1794,
          "name": "Survival of the Fittest",
          "maxRank": 3,
          "minPointsRequired": 25,
          "spellIds": [
            33853,
            33855,
            33856
          ],
          "descriptions": [
            "Increases all attributes by 1% and reduces the chance you'll be critically hit by melee attacks by 1%.",
            "Increases all attributes by 2% and reduces the chance you'll be critically hit by melee attacks by 2%.",
            "Increases all attributes by 3% and reduces the chance you'll be critically hit by melee attacks by 3%."
          ],
          "iconName": "ability_druid_enrage",
          "y": 5,
          "x": 2
        },
        {
          "id": 1795,
          "name": "Predatory Instincts",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            33859,
            33866,
            33867,
            33868,
            33869
          ],
          "descriptions": [
            "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 2% and your chance to avoid area effect attacks by 3%.",
            "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 4% and your chance to avoid area effect attacks by 6%.",
            "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 6% and your chance to avoid area effect attacks by 9%.",
            "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 8% and your chance to avoid area effect attacks by 12%.",
            "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 10% and your chance to avoid area effect attacks by 15%."
          ],
          "iconName": "ability_druid_predatoryinstincts",
          "y": 7,
          "x": 2
        },
        {
          "id": 1796,
          "name": "Mangle",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            33917
          ],
          "descriptions": [
            "Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 12 sec.  This ability can be used in Cat Form or Dire Bear Form."
          ],
          "iconName": "ability_druid_mangle2",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 809,
            "talentRank": 1
          },
          "talentLink": "Leader of the Pack"
        },
        {
          "id": 1798,
          "name": "Improved Leader of the Pack",
          "maxRank": 2,
          "minPointsRequired": 30,
          "spellIds": [
            34297,
            34300
          ],
          "descriptions": [
            "Your Leader of the Pack ability also causes affected targets to have a 100% chance to heal themselves for 2% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.",
            "Your Leader of the Pack ability also causes affected targets to have a 100% chance to heal themselves for 4% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec."
          ],
          "iconName": "spell_nature_unyeildingstamina",
          "y": 6,
          "x": 2,
          "requirements": {
            "talentId": 809,
            "talentRank": 1
          },
          "talentLink": "Leader of the Pack"
        }
      ]
    },
    {
      "name": "Restoration",
      "talents": [
        {
          "id": 821,
          "name": "Improved Mark of the Wild",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            17050,
            17051,
            17053,
            17054,
            17055
          ],
          "descriptions": [
            "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 7%.",
            "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 14%.",
            "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 21%.",
            "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 28%.",
            "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 35%."
          ],
          "iconName": "spell_nature_regeneration",
          "y": 0,
          "x": 1
        },
        {
          "id": 822,
          "name": "Furor",
          "maxRank": 5,
          "minPointsRequired": 0,
          "spellIds": [
            17056,
            17058,
            17059,
            17060,
            17061
          ],
          "descriptions": [
            "Gives you 20% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 40% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 60% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 80% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.",
            "Gives you 100% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form."
          ],
          "iconName": "spell_holy_blessingofstamina",
          "y": 0,
          "x": 2
        },
        {
          "id": 823,
          "name": "Nature's Focus",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            17063,
            17065,
            17066,
            17067,
            17068
          ],
          "descriptions": [
            "Gives you a 14% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 28% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 42% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 56% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells."
          ],
          "iconName": "spell_nature_healingwavegreater",
          "y": 1,
          "x": 1
        },
        {
          "id": 824,
          "name": "Naturalist",
          "maxRank": 5,
          "minPointsRequired": 5,
          "spellIds": [
            17069,
            17070,
            17071,
            17072,
            17073
          ],
          "descriptions": [
            "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases the damage you deal with physical attacks in all forms by 2%.",
            "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases the damage you deal with physical attacks in all forms by 4%.",
            "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases the damage you deal with physical attacks in all forms by 6%.",
            "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases the damage you deal with physical attacks in all forms by 8%.",
            "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases the damage you deal with physical attacks in all forms by 10%."
          ],
          "iconName": "spell_nature_healingtouch",
          "y": 1,
          "x": 0
        },
        {
          "id": 825,
          "name": "Improved Regrowth",
          "maxRank": 5,
          "minPointsRequired": 25,
          "spellIds": [
            17074,
            17075,
            17076,
            17077,
            17078
          ],
          "descriptions": [
            "Increases the critical effect chance of your Regrowth spell by 10%.",
            "Increases the critical effect chance of your Regrowth spell by 20%.",
            "Increases the critical effect chance of your Regrowth spell by 30%.",
            "Increases the critical effect chance of your Regrowth spell by 40%.",
            "Increases the critical effect chance of your Regrowth spell by 50%."
          ],
          "iconName": "spell_nature_resistnature",
          "y": 5,
          "x": 2,
          "requirements": {
            "talentId": 830,
            "talentRank": 3
          },
          "talentLink": "Improved Rejuvenation"
        },
        {
          "id": 826,
          "name": "Natural Shapeshifter",
          "maxRank": 3,
          "minPointsRequired": 5,
          "spellIds": [
            16833,
            16834,
            16835
          ],
          "descriptions": [
            "Reduces the mana cost of all shapeshifting by 10%.",
            "Reduces the mana cost of all shapeshifting by 20%.",
            "Reduces the mana cost of all shapeshifting by 30%."
          ],
          "iconName": "spell_nature_wispsplode",
          "y": 1,
          "x": 2
        },
        {
          "id": 827,
          "name": "Omen of Clarity",
          "maxRank": 1,
          "minPointsRequired": 10,
          "spellIds": [
            16864
          ],
          "descriptions": [
            "Imbues the Druid with natural energy.  Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 30 min."
          ],
          "iconName": "spell_nature_crystalball",
          "y": 2,
          "x": 2
        },
        {
          "id": 828,
          "name": "Gift of Nature",
          "maxRank": 5,
          "minPointsRequired": 20,
          "spellIds": [
            17104,
            24943,
            24944,
            24945,
            24946
          ],
          "descriptions": [
            "Increases the effect of all healing spells by 2%.",
            "Increases the effect of all healing spells by 4%.",
            "Increases the effect of all healing spells by 6%.",
            "Increases the effect of all healing spells by 8%.",
            "Increases the effect of all healing spells by 10%."
          ],
          "iconName": "spell_nature_protectionformnature",
          "y": 4,
          "x": 1
        },
        {
          "id": 829,
          "name": "Intensity",
          "maxRank": 3,
          "minPointsRequired": 10,
          "spellIds": [
            17106,
            17107,
            17108
          ],
          "descriptions": [
            "Allows 10% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 4 rage.",
            "Allows 20% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 7 rage.",
            "Allows 30% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 10 rage."
          ],
          "iconName": "spell_frost_windwalkon",
          "y": 2,
          "x": 0
        },
        {
          "id": 830,
          "name": "Improved Rejuvenation",
          "maxRank": 3,
          "minPointsRequired": 15,
          "spellIds": [
            17111,
            17112,
            17113
          ],
          "descriptions": [
            "Increases the effect of your Rejuvenation spell by 5%.",
            "Increases the effect of your Rejuvenation spell by 10%.",
            "Increases the effect of your Rejuvenation spell by 15%."
          ],
          "iconName": "spell_nature_rejuvenation",
          "y": 3,
          "x": 2
        },
        {
          "id": 831,
          "name": "Nature's Swiftness",
          "maxRank": 1,
          "minPointsRequired": 20,
          "spellIds": [
            17116
          ],
          "descriptions": [
            "When activated, your next Nature spell becomes an instant cast spell."
          ],
          "iconName": "spell_nature_ravenform",
          "y": 4,
          "x": 0,
          "requirements": {
            "talentId": 829,
            "talentRank": 3
          },
          "talentLink": "Intensity"
        },
        {
          "id": 841,
          "name": "Subtlety",
          "maxRank": 5,
          "minPointsRequired": 10,
          "spellIds": [
            17118,
            17119,
            17120,
            17121,
            17122
          ],
          "descriptions": [
            "Reduces the threat generated by your spells by 4% and reduces the chance your spells will be dispelled by 6%.",
            "Reduces the threat generated by your spells by 8% and reduces the chance your spells will be dispelled by 12%.",
            "Reduces the threat generated by your spells by 12% and reduces the chance your spells will be dispelled by 18%.",
            "Reduces the threat generated by your spells by 16% and reduces the chance your spells will be dispelled by 24%.",
            "Reduces the threat generated by your spells by 20% and reduces the chance your spells will be dispelled by 30%."
          ],
          "iconName": "ability_eyeoftheowl",
          "y": 2,
          "x": 1
        },
        {
          "id": 842,
          "name": "Improved Tranquility",
          "maxRank": 2,
          "minPointsRequired": 20,
          "spellIds": [
            17123,
            17124
          ],
          "descriptions": [
            "Reduces threat caused by Tranquility by 50%.",
            "Reduces threat caused by Tranquility by 100%."
          ],
          "iconName": "spell_nature_tranquility",
          "y": 4,
          "x": 3
        },
        {
          "id": 843,
          "name": "Tranquil Spirit",
          "maxRank": 5,
          "minPointsRequired": 15,
          "spellIds": [
            24968,
            24969,
            24970,
            24971,
            24972
          ],
          "descriptions": [
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%."
          ],
          "iconName": "spell_holy_elunesgrace",
          "y": 3,
          "x": 1
        },
        {
          "id": 844,
          "name": "Swiftmend",
          "maxRank": 1,
          "minPointsRequired": 30,
          "spellIds": [
            18562
          ],
          "descriptions": [
            "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth."
          ],
          "iconName": "inv_relics_idolofrejuvenation",
          "y": 6,
          "x": 1,
          "requirements": {
            "talentId": 828,
            "talentRank": 5
          },
          "talentLink": "Gift of Nature"
        },
        {
          "id": 1788,
          "name": "Empowered Touch",
          "maxRank": 2,
          "minPointsRequired": 25,
          "spellIds": [
            33879,
            33880
          ],
          "descriptions": [
            "Your Healing Touch spell gains an additional 10% of your bonus healing effects.",
            "Your Healing Touch spell gains an additional 20% of your bonus healing effects."
          ],
          "iconName": "ability_druid_empoweredtouch",
          "y": 5,
          "x": 0
        },
        {
          "id": 1789,
          "name": "Empowered Rejuvenation",
          "maxRank": 5,
          "minPointsRequired": 35,
          "spellIds": [
            33886,
            33887,
            33888,
            33889,
            33890
          ],
          "descriptions": [
            "The bonus healing effects of your healing over time spells is increased by 4%.",
            "The bonus healing effects of your healing over time spells is increased by 8%.",
            "The bonus healing effects of your healing over time spells is increased by 12%.",
            "The bonus healing effects of your healing over time spells is increased by 16%.",
            "The bonus healing effects of your healing over time spells is increased by 20%."
          ],
          "iconName": "ability_druid_empoweredrejuvination",
          "y": 7,
          "x": 1
        },
        {
          "id": 1790,
          "name": "Natural Perfection",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            33881,
            33882,
            33883
          ],
          "descriptions": [
            "Your critical strike chance with all spells is increased by 1% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 2%.  Stacks up to 3 times.  Lasts 8 sec.",
            "Your critical strike chance with all spells is increased by 2% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 3%.  Stacks up to 3 times.  Lasts 8 sec.",
            "Your critical strike chance with all spells is increased by 3% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 4%.  Stacks up to 3 times.  Lasts 8 sec."
          ],
          "iconName": "ability_druid_naturalperfection",
          "y": 6,
          "x": 2
        },
        {
          "id": 1791,
          "name": "Tree of Life",
          "maxRank": 1,
          "minPointsRequired": 40,
          "spellIds": [
            33891
          ],
          "descriptions": [
            "Shapeshift into the Tree of Life.  While in this form you increase healing received by 25% of your total Spirit for all party members within 45 yards, your movement speed is reduced by 20%, and you can only cast Swiftmend, Innervate, Nature's Swiftness, Rebirth, Barkskin, poison removing and healing over time spells, but the mana cost of these spells is reduced by 20%.<br /><br />The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
          ],
          "iconName": "ability_druid_treeoflife",
          "y": 8,
          "x": 1,
          "requirements": {
            "talentId": 1789,
            "talentRank": 5
          },
          // "talentLink": "Empowered Rejuvenation"
        },
        {
          "id": 1797,
          "name": "Living Spirit",
          "maxRank": 3,
          "minPointsRequired": 30,
          "spellIds": [
            34151,
            34152,
            34153
          ],
          "descriptions": [
            "Increases your total Spirit by 5%.",
            "Increases your total Spirit by 10%.",
            "Increases your total Spirit by 15%."
          ],
          "iconName": "spell_nature_giftofthewaterspirit",
          "y": 6,
          "x": 0
        }
      ]
    }
  ]
};
