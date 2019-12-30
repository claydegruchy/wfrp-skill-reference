// console.log("loaded")

var dataTalents = [
    ["Accurate Shot", "BSB", "+1 dmg on all ranged weapons."],
    ["Acute Sense", "IB", "Perception; Choose 1 sense. Perception test using sense to spot imperceptible detail."],
    ["Aethyric Attunement", "IB", "Channeling; No miscast if double rolled on successful channel test."],
    ["Alley Cat", "IB", "Stealth (Urban); Stealth (Urban) reverse dice of any failed test to check success."],
    ["Ambidextrous", "2", "Off hand -10. (0 if taken twice)."],
    ["Animal Affinity", "WPB", "Charm Animal; All Bestial Trait creatures calm in your presence."],
    ["Argumentative", "FelB", "Charm (debating); Choose either rolled SL or number rolled onunits die."],
    ["Arcane Magic (Lore)", "IntB", "Know 1 of the 8 Arcane Lores of magic."],
    ["Artistic", "DexB", "Trade (Artist); Produce precise sketches. Add Trade (Artist) to any career."],
    ["Attractive", "FelB", "Charm (to attracted); Choose either rolled SL or number rolled onunits die."],
    ["Battle Rage", "WPB", "Melee (Frenzied); You can end your Frenzy with successful Cool Test at end of round."],
    ["Beneath Notice", "FelB", "Stealth (in plain sight); Higher status tier ignore you / don't get advantage in combat with you."],
    ["Beat Blade", "WSB", "Melee (fencing); Before attack, perform Melee(fencing) test. Opponent - 1 Advantage (extra per SL)."],
    ["Berserk Charge", "SB", "Melee; + 1 damage on charge per times taken."],
    ["Blather", "FelB", "Charm (to blather); Opposed Blather/ intelligence to giveopponent stunned condition."],
    ["Bless", "1", "You can empower prayers."],
    ["Bookish", "IntB", "Research; Reverse dice of any failed test to check success."],
    ["Break and Enter", "SB", "Melee (vs inanimate); +1dmg vs objects per times taken."],
    ["Briber", "FelB", "Bribery; Reduce base cost of bribe by 10%."],
    ["Cardsharp", "IntB", "Gamble / Sleight of Hand; Use either rolled SL or units die num."],
    ["Careful Strike", "IB", "Modify hit loc. +/- 10 per times taken."],
    ["Carouser", "TB", "Consume alcohol; Reverse dice of failed Consume Alcohol Test to score Success."],
    ["Catfall", "AgB", "Athletics (on falling); Reduce fall by 1 yard + 1 per SL for damage"],
    ["Cat Tongued", "FelB", "Charm (on lying); Listeners do not oppose on intuition."],
    ["Chaos Magic (Lore)", "0", "Learn chaos magic spells!"],
    ["Combat Aware", "IB", "Perception (Melee); Challenging Perception Test to ignore surprise."],
    ["Combat Master", "AgiB", "Each time taken, count as +1 person for outnumbered."],
    ["Combat Reflexes", "IB", "Initiative counts as 10 for combat."],
    ["Commanding Presence", "FelB", "Leadership; Lower status cannot resist leadership with opposed willpower."],
    ["Concot", "1", "1/2 time taken to use Trade(apothecary)."],
    ["Contortionist", "AgiB", "When using contort; Squeeze and bend through unlikely gaps."],
    ["Cool Headed", "1", "Permanent +5 to starting Willpower."],
    ["Crack the whip", "DexB", "Drive / Ride; Fleeing/running animal +1 Movement with whip."],
    ["Craftsman (Trade)", "DexB", "Trade; Add trade skill or -5xp cost to career"],
    ["Criminal", "0", "Take extra money as income. Because of your obvious criminal nature, others consider you lower Status than them unless they also have the Criminal Talent, where Status is compared as normal — perhaps you have gang tattoos, look shifty, or are just rough around the edges, it’s your choice. Because of this, local law enforcers are always suspicious of you and suspect your motivations, which only gets worse the more times you have this Talent, with the exact implications determined by the GM. Lawbreakers without the Criminal Talent earn significantly less coin but are not obviously the sort to be breaking the law, so maintain their Status. With GM consent, you may spend XP to remove levels of the Criminal Talent for the same XP it cost to buy."],
    ["Deadeye Shot", "1", "Don't reverse die for location, pick."],
    ["Dealmaker", "FelB", "Haggle Reduce or increase price 10%."],
    ["Detect Artefact", "IntB", "Intuition test determines if item is magical."],
    ["Diceman", "IntB", "Gamble / Sleight of Hand; Use either rolled SL or number on units die for success."],
    ["Dirty Fighting", "WSB", "Melee (Brawling); +1 dmg for melee(Brawling) for each level."],
    ["Disarm", "IB", "Melee (while disarming); Use action for opposed melee, opponent loses held weapon."],
    ["Distract", "AgiB", "Athletics (while distracting); Use move to opposed Athletics/cool. Opponent cannot gain advantage til next round."],
    ["Doomed", "1", "If character dies in this manner, 1/2 xp goes to next one."],
    ["Drilled", "WSB", "Melee besides ally When standing next to Ally with drilled and lose Advantage, keep 1."],
    ["Dual Wielder", "AgiB", "Melee Attack with both weapons"],
    ["Embezzle", "IntB", "Embezzling Opposed intelligence test against employer to skim money."],
    ["Enclosed Fighter", "AgiB", "Dodge Ignore melee penalties in enclosed spaces."],
    ["Etiquette", "FelB", "Charm/ gossip Blend into chosen group"],
    ["Fast Hands", "DexB", "Sleight of hand/ fist No passive perception test against sleight of hand skill."],
    ["Fast Shot", "AgiB", "Ranged (reloading); If loaded, fire outside of normal initiative order."],
    ["Fearless", "WPB", "Cool; With average cool test, ignore psychology against specific enemy."],
    ["Feint", "WSB", "Fencing (Feinting); Feint as action, opposed melee test, attack before next round cannot be opposed."],
    ["Field Dressing", "IntB", "Heal; You may reverse dice results if it results in success."],
    ["Fisherman", "IntB", "Fishing; Find enough fish to feed your party."],
    ["Flagellant", "TB", "Resisting ruinous powers Pray number of wounds equal to level in flagellant. Frenzy immediately without testing."],
    ["Flee", "AgiB", "Athletics (fleeing); Movement +1 when fleeing"],
    ["Fleet Footed", "1", "+1 to Movement Attribute"],
    ["Frenzy", "1", "You can Frenzy"],
    ["Frightening", "SB", "Fear rating of +1 per times taken"],
    ["Furious Assault", "AgiB", "Melee (on extra attacks); Spend advantage or move to make extra attack."],
    ["Gregarious", "FelB", "Gossip; Reverse dice if allows a success"],
    ["Gunner", "DexB", "Add SL to gunner level in extended reload"],
    ["Hardy", "TB", "Add TB to wounds"],
    ["Hatred", "WPB", "Willpower Hatred for chosen group"],
    ["Holy Hatred", "FelB", "+1dmg with miracles per level"],
    ["Holy Rage", "WPB", "Pray when frenzied Can invoke blessings and miracles when frenzied"],
    ["Holy Visions", "IB", "Intuition Intuition test to receive visions"],
    ["Huffer", "IB", "Lore on rivers Easier to traverse dangerous rivers"],
    ["Hunter's Eye", "IB", "Trail Test Hunt down enough game to feed your group"],
    ["Impassioned Zeal", "FelB", "Charm Double Fel to determine public influenced by your speech."],
    ["Implacable", "TB", "Ignore Wound loss from bleeding"],
    ["In-Fighter", "DexB", "Infighting No penalties for fighting against opponent with longer weapon. +10 to hit opponent in infighting."],
    ["Inspiring", "FelB", "Leadership Increase amount of people influenced in war."],
    ["Invoke Divine Lore", "0", "Perform miracles for 1 god."],
    ["Instinctive Diction", "IB", "Lenguage (Magick); No miscast rolling double on sucessfull test."],
    ["Iron Jaw", "TB", "Endurance Challenging endurance test to resist Stunned condition"],
    ["Iron Will", "WPB", "Cool Vs Intimidate; Intimidate skill does not cause you Fear."],
    ["Jump up", "AgiB", "Athletics (Jumping); Challenging agility test to regain feet when Prone."],
    ["Kingpin", "1", "Ignore status loss of Criminal Talent"],
    ["Lightning reflexes", "1", "Permanent +5 to starting Agility"],
    ["Lip Reading", "IB", "Perception Perception test to understand what is said"],
    ["Linguistics", "IntB", "Language; Language exposed to counts as basic instead of advanced with successful intelligence check."],
    ["Luck", "FelB", "Fortune max == Fate max + Luck level"],
    ["Magic Resistance", "1", "Must Oppose any spell with Willpower, may never learn magic"],
    ["Magical Sense", "IB", "Intuition detect wizards Average intuition check when encounter spellcaster"],
    ["Magnum Opus", "0", "Create a high value piece of work."],
    ["Marksman", "1", "Permanent + 5 to BS"],
    ["Master of Disguise", "FelB", "Entertain (Acting); Expert at disguising yourself"],
    ["Master Orator", "FelB", "SL bonus equal to Master Orator Level to charm in public speaking"],
    ["Master Tradesman", "DexB", "Reduce required SL of extended test of trade skill by talent level"],
    ["Menacing", "SB", "When using Intimidate, gain SL bonus == Menacing levels"],
    ["Mimic", "IB", "Entertain (Acting); Replicate any accent with an initiative test"],
    ["Nimble Fingered", "1", "Permanent +5 to starting dex"],
    ["Night Vision", "IB", "Perception (in low light); See clearly for 20y per Night vision level"],
    ["Noble Blood", "1", "Any influenced by status Considered higher status than everyone else unless they have Noble Blood Talent"],
    ["Nose for Trouble", "IB", "Test to spot troublemakers; Intuition test to spot those seeking to cause trouble. Opposed if hiding"],
    ["Numismatics", "IB", "Evaluate worth of coins Judge value of coins without test and can spot forged coins easily"],
    ["Old Salt", "AgiB", "Sail Ignore negative modifiers at sailing tests."],
    ["Orientation", "IB", "Navigation You automatically know which way is north"],
    ["Panhandle", "FelB", "Charm(begging) Charm test to be every half hour instead of full hour"],
    ["Perfect Pitch", "TB", "Entertain/ language You can replicate notes perfectly and add performer(sing) to your career"],
    ["Petty Magic", "WPB", "You may cast a number of petty magics"],
    ["Pharmacist", "IntB", "Trade (Apothecary) Reverse any failed Apothecary tests if it means it will succeed"],
    ["Pilot", "IB", "Reverse test to navigate any dangerous waters if it will succeed"],
    ["Public Speaker", "FelB", "Influence a larger number of people when publicly speaking"],
    ["Pure Soul", "WPB", "Gain extra Corruption Points equal to Pure Soul level before taking a corruption test."],
    ["Rapid Reload", "DexB", "Add SL equal to Rapid Reload level to any test to reload."],
    ["Reaction Strike", "IB", "Initiative tests When charged, may attempt a Challenging Initiative test to gain immediate free attack."],
    ["Read/Write", "1", "You can read/write all of the languages you can speak."],
    ["Relentless", "AgiB", "When using advantage to disengage, you may keep advantage equal to Relentless level."],
    ["Resolute", "SB", "Add level of Resolute to Strength bonus on Charge."],
    ["Resistance(Threat)", "TB", "Tests to resist threat You automatically pass the first test to resist specified threat."],
    ["Reversal", "WSB", "Melee defending IF you win opposed test, you may take all opponents advantage instead of gaining +1."],
    ["Riposte", "AgiB", "Melee defending If weapon has fast quality, you may cause damage when defending against attacks == to riposte level"],
    ["Robust", "TB", "Reduce all incoming damage by extra +1, but still suffer minimum of 1 wound."],
    ["Rough Rider", "AgiB", "Ride(horse) in combat You can direct your mount to take an action, not just a move."],
    ["Rover", "AgiB", "Stealth in rural environment; By standers do not get passive perception to spot stealth in rural environment."],
    ["Savvy", "1", "Permanent +5 bonus to starting intelligence."],
    ["Savant (Lore)", "IntB", "Lore (chosen Lore) You automatically know a correct number of pieces of information about the relevant issue without Lore test."],
    ["Scale Sheer surface", "SB", "Climb Ignore climb test penalties to climb sheer surfaces."],
    ["Schemer", "IntB", "Intelligence tests GM will provide you with observations about current situation based on SL."],
    ["Sea Legs", "TB", "Tests to resist sea sickness; Ignore penalties to tests to ignore sea sickness."],
    ["Seasoned Traveller", "IntB", "Lore local Add lore Local to current career."],
    ["Secret Identity", "IntB", "Entertain Acting You may use social status of disguised career."],
    ["Second Sight", "IB", "Detect winds of magic You now have the sight."],
    ["Shadow", "AgiB", "Any skill shadowing Use shadowing rules without doing combined test. Use perception or stealth."],
    ["Sharp", "1", "Gain a permanent +5 to starting initiative."],
    ["Sharpshooter", "IB", "Ignore size penalties to ranged tests."],
    ["Shieldsman", "AgiB", "Parry test with shield When using Melee(Parry) with shield, you gain advantage equal to this talent if you lose."],
    ["Sixth Sense", "IB", "Intuition You get a strange feeling when you are in danger. You may ignore surprise on Intuition Test."],
    ["Slayer", "1", "On dmg SB is increased to opponent's TB if lower."],
    ["Small", "1", "You are small."],
    ["Sniper", "4", "Ranged No penalties for long range, 1/2 penalties for extreme range."],
    ["Speed reader", "IntB", "Language Research and language Read and understand number of pages == SL + speed reader level."],
    ["Sprinter", "AgiB", "Athletics (running); Movement counts as 1 higher when running."],
    ["Strider (terrain)", "AgiB", "Athletics (to cross terrain); You ignore movement penalties in chosen terrain."],
    ["Step Aside", "AgiB", "Dodge tests If you use Dodge to defend and win opposed test, you may move up to 2 yards without free attack penalty."],
    ["Strike Mighty Blow", "SB", "Add Strike Mighty Blow level to Dmg."],
    ["Strike to Stun", "WSB", "Melee (to stun tests); Ignore called shot penalty to use head hit location with weapon with pummel quality."],
    ["Stone Soup", "TB", "Endurance to resist hunger; 1/2 food required to avoid penalties, test for starvation every 3 days."],
    ["Strong Back", "SB", "Row and swim; Add levels in Strong Back to Opposed strength tests and carry additional encumbrance."],
    ["Strong Legs", "SB", "Add Strong legs level to SL in Athletics tests in leaping."],
    ["Strong Swimmer", "SB", "Swim; Add Strong Swimmer level to TB for holding breath."],
    ["Strong Minded", "WPB", "Add Strong Minded level to maximum resolve pool."],
    ["Stout Hearted", "WPB", "Cool Tests to remove broken May attempt cool test at the end of each of your turns as well as at the end of the round."],
    ["Sturdy", "SB", "Strength test when lifting; Increase Encumbrance points by sturdy *2."],
    ["Suave", "1", "Permanent +5 to starting Fellowship."],
    ["Suffuse with Ulgu", "1", "Sthealth (Any); Can use Channelling (Ulgu) instead of Stealth skill."],
    ["Super Numerate", "IB", "Evaluate, Gamble; You may use a simple calculator to represent what your PC is capable of mentally thinking."],
    ["Supportive", "FelB", "Social test to influence superior Use either SL or units rolled to influence superior."],
    ["Sure Shot", "IB", "You may ignore armour points == Sure shot level."],
    ["Surgery", "IntB", "Heal (outside combat); Treat any critical wound marked as needing surgery. Extended Challenging Heal test to resolve internal healing issues."],
    ["Tenacious", "TB", "Endurance; Double the length of time needed to perform successful Endurance tests."],
    ["Tinker", "TB", "Trade to repair broken items All non magical trade skills count as basic when repairing broken items."],
    ["Tower of Memories", "IntB", "Perfectly recall a sequence of facts as long as your intelligence without having to make a test."],
    ["Trapper", "", "Set Trap Perception to spot traps/ set traps; Can make perception tests automatically without telling the GM of your intention."],
    ["Trick Riding", "AgiB", "Dodge (test on horseback); Use perform and dodge skill whilst mounted. You can also move at start of round instead of your turn."],
    ["Tunnel Rat", "AgiB", "Stealth tests underground By standers get no passive perception test on your stealth underground."],
    ["Unshakable", "WPB", "Cool test to resist Black Powder Panic; You only need to take a cool test to resist broken Condition if you are wounded by black powder weapon."],
    ["Very resilient", "1", "Permanent +5 to starting Toughness Characteristic."],
    ["Very Strong", "1", "Permanent +5 to starting Strength Characteristic."],
    ["War Leader", "FelB", "Command tests during war; All subordinates add your level in War leader to their SL in a Willpower Test."],
    ["Warrior Born", "1", "Permanent +5 to starting Weapon Skill Characteristic."],
    ["War Wizard", "1", "Cast a spell with Casting number of 5 or less without using your action."],
    ["Waterman", "AgiB", "Sail test Ignore negatives to tests when on a barge."],
    ["Wealthy", "0", "When earning you secure +1 GC per times wealthy is taken."],
    ["Well Prepared", "IB", "You may pull the trapping required for any situation provided it has Encumbrance of 0."],
    ["Witch!", "WPB", "Add Language (Magick) to any career, lower cost, can Lear spells spending Resilience."]
];

var mapper = {


    'BSB': "BS",
    'IB': "I",
    '2': 2,
    'WPB': "WP",
    'FelB': "Fel",
    'IntB': "Int",
    'DexB': "Dex",
    'WSB': "WS",
    'SB': "S",
    '1': 1,
    'TB': "T",
    'AgB': "Ag",
    '0': 0,
    'AgiB': "Ag",
    '4': 4,
    "": 0
}


var r = dataTalents
    // .filter(t=>!t[2].includes('test'))
    // .map(t => (
    //     [
    //         t[0],
    //         mapper[t[1]],
    //         t[2],
    //         (typeof mapper[t[1]] == 'number'?:) mapper[t[1]],

    //     ]))
    // .sort()
    // .reverse()



    .map((item) => ({
        title: item[0],
        description: `${item[2]} - Max selections: ${(typeof mapper[item[1]] == 'number'?mapper[item[1]]:mapper[item[1]]+" Bonus")}`,
        // max:  ,
        tags: "talent tag-" + (typeof mapper[item[1]] == 'number' ?"none":mapper[item[1]])
    }))

// r = [...new Set(r)]
// console.log(r)

// console.log(JSON.stringify(r))

console.log(JSON.stringify({
                attributes: [{
                        title: "Weapon Skill (WS)",
                        description: "",
                        tags: "attribute tag-WS"
                    },
                    {
                        title: "Ballistic Skill (BS)",
                        description: "",
                        tags: "attribute tag-BS"
                    },
                    {
                        title: "Strength (S)",
                        description: "",
                        tags: "attribute tag-S"
                    },
                    {
                        title: "Toughness (T)",
                        description: "",
                        tags: "attribute tag-T"
                    },
                    {
                        title: "Initiative (I)",
                        description: "",
                        tags: "attribute tag-I"
                    },
                    {
                        title: "Agility (Ag)",
                        description: "",
                        tags: "attribute tag-Ag"
                    },
                    {
                        title: "Dexterity (Dex)",
                        description: "",
                        tags: "attribute tag-Dex"
                    },
                    {
                        title: "Intelligence (Int)",
                        description: "",
                        tags: "attribute tag-Int"
                    },
                    {
                        title: "Willpower (WP)",
                        description: "",
                        tags: "attribute tag-WP"
                    },
                    {
                        title: "Fellowship (Fel)",
                        description: "",
                        tags: "attribute tag-Fel"
                    },
                ],
                basicSkills: [
                    { title: "Art (Grouped)", description: "Create works of Art in your chosen medium.", tags: "skill basic tag-Dex" },
                    { title: "Athletics", description: "Impacts on your movement abilities in combat.", tags: "skill basic tag-Ag" },
                    { title: "Bribery", description: "Will tell you if a target may be bribed and allow you to guess a target number.", tags: "skill basic tag-Fel" },
                    { title: "Charm", description: "Opposed Charm/Cool to influence.", tags: "skill basic tag-Fel" },
                    { title: "Charm Animal", description: "Influence an animal.", tags: "skill basic tag-WP" },
                    { title: "Climb", description: "How easy to scale surfaces.", tags: "skill basic tag-S" },
                    { title: "Cool", description: "Resist psychology and charm etc.", tags: "skill basic tag-WP" },
                    { title: "Consume Alcohol", description: "Ability to resist drunkenness.", tags: "skill basic tag-T" },
                    { title: "Dodge", description: "Ability to avoid blows.", tags: "skill basic tag-Ag" },
                    { title: "Drive", description: "Ability to guide vehicles.", tags: "skill basic tag-Ag" },
                    { title: "Endurance", description: "Withstand hardship.", tags: "skill basic tag-T" },
                    { title: "Entertain (Grouped)", description: "Act/sing etc.", tags: "skill basic tag-Fel" },
                    { title: "Gamble", description: "Measure the likelihood of a bet paying off.", tags: "skill basic tag-Int" },
                    { title: "Gossip", description: "Learn interesting information.", tags: "skill basic tag-Fel" },
                    { title: "Haggle", description: "Opposed test to reduce price.", tags: "skill basic tag-Fel" },
                    { title: "Intimidate", description: "Bully your opponent.", tags: "skill basic tag-S" },
                    { title: "Intuition", description: "Suss if something is wrong or give you an advantage in combat.", tags: "skill basic tag-I" },
                    { title: "Leadership", description: "Issue orders or bolster psychology tests.", tags: "skill basic tag-Fel" },
                    { title: "Melee Advanced, (Grouped)", description: "Represents training in weapons.", tags: "skill basic tag-WS" },
                    { title: "Navigation", description: "Find your way around.", tags: "skill basic tag-I" },
                    { title: "Outdoor Survival", description: "Forage, build shelters, fish etc.", tags: "skill basic tag-Int" },
                    { title: "Perception", description: "Ability to spot things/oppose stealth.", tags: "skill basic tag-I" },
                    { title: "Ride (Grouped)", description: "How skilled at riding animals.", tags: "skill basic tag-Ag" },
                    { title: "Row", description: "How effective at rowing in dangerous situations.", tags: "skill basic tag-S" },
                    { title: "Stealth (Grouped)", description: "Concealment vs opposed perception.", tags: "skill basic tag-Ag" },
                ],
                advancedSkills: [{
                        title: 'Animal Care',
                        description: 'Tend animals if they become sick or wounded.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Animal Training (Grouped)',
                        description: 'Train/intimidate animals.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Channelling (Grouped)',
                        description: 'Ability to control the winds of magic.',
                        tags: 'skill advanced tag-WP'
                    },
                    {
                        title: 'Evaluate',
                        description: 'Determine the value of objects.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Heal',
                        description: 'Heal disease, infection, wound pg 123.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Language (Grouped)',
                        description: 'Speak the tongue. Language(Magick) is used to cast spells.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Lore (Grouped)',
                        description: 'formally taught in that area, allowing you to recall facts.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Perform (Grouped)',
                        description: 'Acrobatics, dancing etc.',
                        tags: 'skill advanced tag-Ag'
                    },
                    {
                        title: 'Pick lock',
                        description: 'Breaking into locks.',
                        tags: 'skill advanced tag-Dex'
                    },
                    {
                        title: 'Play (Grouped)',
                        description: 'Playing an instrument.',
                        tags: 'skill advanced tag-Dex'
                    },
                    {
                        title: 'Pray',
                        description: 'Used to pray to a deity with blessings.',
                        tags: 'skill advanced tag-Fel'
                    },
                    {
                        title: 'Ranged (Grouped)',
                        description: 'Applies to using ranged weapons.',
                        tags: 'skill advanced tag-BS'
                    },
                    {
                        title: 'Research',
                        description: 'Pulling information from libraries, scrolls, etc.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Sail (Grouped)',
                        description: 'Manoeuvring with sails.',
                        tags: 'skill advanced tag-Ag'
                    },
                    {
                        title: 'Secret Signs (Grouped)',
                        description: 'How to use special markings or signs in a group.',
                        tags: 'skill advanced tag-Int'
                    },
                    {
                        title: 'Set Trap',
                        description: 'Set and disarm traps',
                        tags: 'skill advanced tag-Dex'
                    },
                    {
                        title: 'Sleight of Hand',
                        description: 'Picking pockets etc',
                        tags: 'skill advanced tag-Dex'
                    },
                    {
                        title: 'Swim',
                        description: 'How well you can swim without drowning.',
                        tags: 'skill advanced tag-S'
                    },
                    {
                        title: 'Track',
                        description: 'Ability to follow trails and signs left by others.',
                        tags: 'skill advanced tag-I'
                    },
                    {
                        title: 'Trade (Grouped)',
                        description: 'Earn money with your service',
                        tags: 'skill advanced tag-Dex'
                    }
                ],
                talents: [{
                        "title": "Accurate Shot",
                        "description": "+1 dmg on all ranged weapons. - Max selections: BS Bonus",
                        "tags": "talent tag-BS"
                    },
                    {
                        "title": "Acute Sense",
                        "description": "Perception; Choose 1 sense. Perception test using sense to spot imperceptible detail. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Aethyric Attunement",
                        "description": "Channeling; No miscast if double rolled on successful channel test. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Alley Cat",
                        "description": "Stealth (Urban); Stealth (Urban) reverse dice of any failed test to check success. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Ambidextrous",
                        "description": "Off hand -10. (0 if taken twice). - Max selections: 2",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Animal Affinity",
                        "description": "Charm Animal; All Bestial Trait creatures calm in your presence. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Argumentative",
                        "description": "Charm (debating); Choose either rolled SL or number rolled onunits die. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Arcane Magic (Lore)",
                        "description": "Know 1 of the 8 Arcane Lores of magic. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Artistic",
                        "description": "Trade (Artist); Produce precise sketches. Add Trade (Artist) to any career. - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Attractive",
                        "description": "Charm (to attracted); Choose either rolled SL or number rolled onunits die. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Battle Rage",
                        "description": "Melee (Frenzied); You can end your Frenzy with successful Cool Test at end of round. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Beneath Notice",
                        "description": "Stealth (in plain sight); Higher status tier ignore you / don't get advantage in combat with you. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Beat Blade",
                        "description": "Melee (fencing); Before attack, perform Melee(fencing) test. Opponent - 1 Advantage (extra per SL). - Max selections: WS Bonus",
                        "tags": "talent tag-WS"
                    },
                    {
                        "title": "Berserk Charge",
                        "description": "Melee; + 1 damage on charge per times taken. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Blather",
                        "description": "Charm (to blather); Opposed Blather/ intelligence to giveopponent stunned condition. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Bless",
                        "description": "You can empower prayers. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Bookish",
                        "description": "Research; Reverse dice of any failed test to check success. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Break and Enter",
                        "description": "Melee (vs inanimate); +1dmg vs objects per times taken. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Briber",
                        "description": "Bribery; Reduce base cost of bribe by 10%. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Cardsharp",
                        "description": "Gamble / Sleight of Hand; Use either rolled SL or units die num. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Careful Strike",
                        "description": "Modify hit loc. +/- 10 per times taken. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Carouser",
                        "description": "Consume alcohol; Reverse dice of failed Consume Alcohol Test to score Success. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Catfall",
                        "description": "Athletics (on falling); Reduce fall by 1 yard + 1 per SL for damage - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Cat Tongued",
                        "description": "Charm (on lying); Listeners do not oppose on intuition. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Chaos Magic (Lore)",
                        "description": "Learn chaos magic spells! - Max selections: 0",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Combat Aware",
                        "description": "Perception (Melee); Challenging Perception Test to ignore surprise. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Combat Master",
                        "description": "Each time taken, count as +1 person for outnumbered. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Combat Reflexes",
                        "description": "Initiative counts as 10 for combat. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Commanding Presence",
                        "description": "Leadership; Lower status cannot resist leadership with opposed willpower. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Concot",
                        "description": "1/2 time taken to use Trade(apothecary). - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Contortionist",
                        "description": "When using contort; Squeeze and bend through unlikely gaps. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Cool Headed",
                        "description": "Permanent +5 to starting Willpower. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Crack the whip",
                        "description": "Drive / Ride; Fleeing/running animal +1 Movement with whip. - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Craftsman (Trade)",
                        "description": "Trade; Add trade skill or -5xp cost to career - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Criminal",
                        "description": "Take extra money as income. Because of your obvious criminal nature, others consider you lower Status than them unless they also have the Criminal Talent, where Status is compared as normal — perhaps you have gang tattoos, look shifty, or are just rough around the edges, it’s your choice. Because of this, local law enforcers are always suspicious of you and suspect your motivations, which only gets worse the more times you have this Talent, with the exact implications determined by the GM. Lawbreakers without the Criminal Talent earn significantly less coin but are not obviously the sort to be breaking the law, so maintain their Status. With GM consent, you may spend XP to remove levels of the Criminal Talent for the same XP it cost to buy. - Max selections: 0",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Deadeye Shot",
                        "description": "Don't reverse die for location, pick. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Dealmaker",
                        "description": "Haggle Reduce or increase price 10%. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Detect Artefact",
                        "description": "Intuition test determines if item is magical. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Diceman",
                        "description": "Gamble / Sleight of Hand; Use either rolled SL or number on units die for success. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Dirty Fighting",
                        "description": "Melee (Brawling); +1 dmg for melee(Brawling) for each level. - Max selections: WS Bonus",
                        "tags": "talent tag-WS"
                    },
                    {
                        "title": "Disarm",
                        "description": "Melee (while disarming); Use action for opposed melee, opponent loses held weapon. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Distract",
                        "description": "Athletics (while distracting); Use move to opposed Athletics/cool. Opponent cannot gain advantage til next round. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Doomed",
                        "description": "If character dies in this manner, 1/2 xp goes to next one. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Drilled",
                        "description": "Melee besides ally When standing next to Ally with drilled and lose Advantage, keep 1. - Max selections: WS Bonus",
                        "tags": "talent tag-WS"
                    },
                    {
                        "title": "Dual Wielder",
                        "description": "Melee Attack with both weapons - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Embezzle",
                        "description": "Embezzling Opposed intelligence test against employer to skim money. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Enclosed Fighter",
                        "description": "Dodge Ignore melee penalties in enclosed spaces. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Etiquette",
                        "description": "Charm/ gossip Blend into chosen group - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Fast Hands",
                        "description": "Sleight of hand/ fist No passive perception test against sleight of hand skill. - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Fast Shot",
                        "description": "Ranged (reloading); If loaded, fire outside of normal initiative order. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Fearless",
                        "description": "Cool; With average cool test, ignore psychology against specific enemy. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Feint",
                        "description": "Fencing (Feinting); Feint as action, opposed melee test, attack before next round cannot be opposed. - Max selections: WS Bonus",
                        "tags": "talent tag-WS"
                    },
                    {
                        "title": "Field Dressing",
                        "description": "Heal; You may reverse dice results if it results in success. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Fisherman",
                        "description": "Fishing; Find enough fish to feed your party. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Flagellant",
                        "description": "Resisting ruinous powers Pray number of wounds equal to level in flagellant. Frenzy immediately without testing. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Flee",
                        "description": "Athletics (fleeing); Movement +1 when fleeing - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Fleet Footed",
                        "description": "+1 to Movement Attribute - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Frenzy",
                        "description": "You can Frenzy - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Frightening",
                        "description": "Fear rating of +1 per times taken - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Furious Assault",
                        "description": "Melee (on extra attacks); Spend advantage or move to make extra attack. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Gregarious",
                        "description": "Gossip; Reverse dice if allows a success - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Gunner",
                        "description": "Add SL to gunner level in extended reload - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Hardy",
                        "description": "Add TB to wounds - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Hatred",
                        "description": "Willpower Hatred for chosen group - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Holy Hatred",
                        "description": "+1dmg with miracles per level - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Holy Rage",
                        "description": "Pray when frenzied Can invoke blessings and miracles when frenzied - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Holy Visions",
                        "description": "Intuition Intuition test to receive visions - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Huffer",
                        "description": "Lore on rivers Easier to traverse dangerous rivers - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Hunter's Eye",
                        "description": "Trail Test Hunt down enough game to feed your group - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Impassioned Zeal",
                        "description": "Charm Double Fel to determine public influenced by your speech. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Implacable",
                        "description": "Ignore Wound loss from bleeding - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "In-Fighter",
                        "description": "Infighting No penalties for fighting against opponent with longer weapon. +10 to hit opponent in infighting. - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Inspiring",
                        "description": "Leadership Increase amount of people influenced in war. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Invoke Divine Lore",
                        "description": "Perform miracles for 1 god. - Max selections: 0",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Instinctive Diction",
                        "description": "Lenguage (Magick); No miscast rolling double on sucessfull test. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Iron Jaw",
                        "description": "Endurance Challenging endurance test to resist Stunned condition - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Iron Will",
                        "description": "Cool Vs Intimidate; Intimidate skill does not cause you Fear. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Jump up",
                        "description": "Athletics (Jumping); Challenging agility test to regain feet when Prone. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Kingpin",
                        "description": "Ignore status loss of Criminal Talent - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Lightning reflexes",
                        "description": "Permanent +5 to starting Agility - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Lip Reading",
                        "description": "Perception Perception test to understand what is said - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Linguistics",
                        "description": "Language; Language exposed to counts as basic instead of advanced with successful intelligence check. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Luck",
                        "description": "Fortune max == Fate max + Luck level - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Magic Resistance",
                        "description": "Must Oppose any spell with Willpower, may never learn magic - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Magical Sense",
                        "description": "Intuition detect wizards Average intuition check when encounter spellcaster - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Magnum Opus",
                        "description": "Create a high value piece of work. - Max selections: 0",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Marksman",
                        "description": "Permanent + 5 to BS - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Master of Disguise",
                        "description": "Entertain (Acting); Expert at disguising yourself - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Master Orator",
                        "description": "SL bonus equal to Master Orator Level to charm in public speaking - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Master Tradesman",
                        "description": "Reduce required SL of extended test of trade skill by talent level - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Menacing",
                        "description": "When using Intimidate, gain SL bonus == Menacing levels - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Mimic",
                        "description": "Entertain (Acting); Replicate any accent with an initiative test - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Nimble Fingered",
                        "description": "Permanent +5 to starting dex - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Night Vision",
                        "description": "Perception (in low light); See clearly for 20y per Night vision level - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Noble Blood",
                        "description": "Any influenced by status Considered higher status than everyone else unless they have Noble Blood Talent - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Nose for Trouble",
                        "description": "Test to spot troublemakers; Intuition test to spot those seeking to cause trouble. Opposed if hiding - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Numismatics",
                        "description": "Evaluate worth of coins Judge value of coins without test and can spot forged coins easily - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Old Salt",
                        "description": "Sail Ignore negative modifiers at sailing tests. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Orientation",
                        "description": "Navigation You automatically know which way is north - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Panhandle",
                        "description": "Charm(begging) Charm test to be every half hour instead of full hour - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Perfect Pitch",
                        "description": "Entertain/ language You can replicate notes perfectly and add performer(sing) to your career - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Petty Magic",
                        "description": "You may cast a number of petty magics - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Pharmacist",
                        "description": "Trade (Apothecary) Reverse any failed Apothecary tests if it means it will succeed - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Pilot",
                        "description": "Reverse test to navigate any dangerous waters if it will succeed - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Public Speaker",
                        "description": "Influence a larger number of people when publicly speaking - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Pure Soul",
                        "description": "Gain extra Corruption Points equal to Pure Soul level before taking a corruption test. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Rapid Reload",
                        "description": "Add SL equal to Rapid Reload level to any test to reload. - Max selections: Dex Bonus",
                        "tags": "talent tag-Dex"
                    },
                    {
                        "title": "Reaction Strike",
                        "description": "Initiative tests When charged, may attempt a Challenging Initiative test to gain immediate free attack. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Read/Write",
                        "description": "You can read/write all of the languages you can speak. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Relentless",
                        "description": "When using advantage to disengage, you may keep advantage equal to Relentless level. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Resolute",
                        "description": "Add level of Resolute to Strength bonus on Charge. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Resistance(Threat)",
                        "description": "Tests to resist threat You automatically pass the first test to resist specified threat. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Reversal",
                        "description": "Melee defending IF you win opposed test, you may take all opponents advantage instead of gaining +1. - Max selections: WS Bonus",
                        "tags": "talent tag-WS"
                    },
                    {
                        "title": "Riposte",
                        "description": "Melee defending If weapon has fast quality, you may cause damage when defending against attacks == to riposte level - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Robust",
                        "description": "Reduce all incoming damage by extra +1, but still suffer minimum of 1 wound. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Rough Rider",
                        "description": "Ride(horse) in combat You can direct your mount to take an action, not just a move. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Rover",
                        "description": "Stealth in rural environment; By standers do not get passive perception to spot stealth in rural environment. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Savvy",
                        "description": "Permanent +5 bonus to starting intelligence. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Savant (Lore)",
                        "description": "Lore (chosen Lore) You automatically know a correct number of pieces of information about the relevant issue without Lore test. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Scale Sheer surface",
                        "description": "Climb Ignore climb test penalties to climb sheer surfaces. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Schemer",
                        "description": "Intelligence tests GM will provide you with observations about current situation based on SL. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Sea Legs",
                        "description": "Tests to resist sea sickness; Ignore penalties to tests to ignore sea sickness. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Seasoned Traveller",
                        "description": "Lore local Add lore Local to current career. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Secret Identity",
                        "description": "Entertain Acting You may use social status of disguised career. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Second Sight",
                        "description": "Detect winds of magic You now have the sight. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Shadow",
                        "description": "Any skill shadowing Use shadowing rules without doing combined test. Use perception or stealth. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Sharp",
                        "description": "Gain a permanent +5 to starting initiative. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Sharpshooter",
                        "description": "Ignore size penalties to ranged tests. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Shieldsman",
                        "description": "Parry test with shield When using Melee(Parry) with shield, you gain advantage equal to this talent if you lose. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Sixth Sense",
                        "description": "Intuition You get a strange feeling when you are in danger. You may ignore surprise on Intuition Test. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Slayer",
                        "description": "On dmg SB is increased to opponent's TB if lower. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Small",
                        "description": "You are small. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Sniper",
                        "description": "Ranged No penalties for long range, 1/2 penalties for extreme range. - Max selections: 4",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Speed reader",
                        "description": "Language Research and language Read and understand number of pages == SL + speed reader level. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Sprinter",
                        "description": "Athletics (running); Movement counts as 1 higher when running. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Strider (terrain)",
                        "description": "Athletics (to cross terrain); You ignore movement penalties in chosen terrain. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Step Aside",
                        "description": "Dodge tests If you use Dodge to defend and win opposed test, you may move up to 2 yards without free attack penalty. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Strike Mighty Blow",
                        "description": "Add Strike Mighty Blow level to Dmg. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Strike to Stun",
                        "description": "Melee (to stun tests); Ignore called shot penalty to use head hit location with weapon with pummel quality. - Max selections: WS Bonus",
                        "tags": "talent tag-WS"
                    },
                    {
                        "title": "Stone Soup",
                        "description": "Endurance to resist hunger; 1/2 food required to avoid penalties, test for starvation every 3 days. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Strong Back",
                        "description": "Row and swim; Add levels in Strong Back to Opposed strength tests and carry additional encumbrance. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Strong Legs",
                        "description": "Add Strong legs level to SL in Athletics tests in leaping. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Strong Swimmer",
                        "description": "Swim; Add Strong Swimmer level to TB for holding breath. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Strong Minded",
                        "description": "Add Strong Minded level to maximum resolve pool. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Stout Hearted",
                        "description": "Cool Tests to remove broken May attempt cool test at the end of each of your turns as well as at the end of the round. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Sturdy",
                        "description": "Strength test when lifting; Increase Encumbrance points by sturdy *2. - Max selections: S Bonus",
                        "tags": "talent tag-S"
                    },
                    {
                        "title": "Suave",
                        "description": "Permanent +5 to starting Fellowship. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Suffuse with Ulgu",
                        "description": "Sthealth (Any); Can use Channelling (Ulgu) instead of Stealth skill. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Super Numerate",
                        "description": "Evaluate, Gamble; You may use a simple calculator to represent what your PC is capable of mentally thinking. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Supportive",
                        "description": "Social test to influence superior Use either SL or units rolled to influence superior. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Sure Shot",
                        "description": "You may ignore armour points == Sure shot level. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Surgery",
                        "description": "Heal (outside combat); Treat any critical wound marked as needing surgery. Extended Challenging Heal test to resolve internal healing issues. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Tenacious",
                        "description": "Endurance; Double the length of time needed to perform successful Endurance tests. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Tinker",
                        "description": "Trade to repair broken items All non magical trade skills count as basic when repairing broken items. - Max selections: T Bonus",
                        "tags": "talent tag-T"
                    },
                    {
                        "title": "Tower of Memories",
                        "description": "Perfectly recall a sequence of facts as long as your intelligence without having to make a test. - Max selections: Int Bonus",
                        "tags": "talent tag-Int"
                    },
                    {
                        "title": "Trapper",
                        "description": "Set Trap Perception to spot traps/ set traps; Can make perception tests automatically without telling the GM of your intention. - Max selections: 0",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Trick Riding",
                        "description": "Dodge (test on horseback); Use perform and dodge skill whilst mounted. You can also move at start of round instead of your turn. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Tunnel Rat",
                        "description": "Stealth tests underground By standers get no passive perception test on your stealth underground. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Unshakable",
                        "description": "Cool test to resist Black Powder Panic; You only need to take a cool test to resist broken Condition if you are wounded by black powder weapon. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    },
                    {
                        "title": "Very resilient",
                        "description": "Permanent +5 to starting Toughness Characteristic. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Very Strong",
                        "description": "Permanent +5 to starting Strength Characteristic. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "War Leader",
                        "description": "Command tests during war; All subordinates add your level in War leader to their SL in a Willpower Test. - Max selections: Fel Bonus",
                        "tags": "talent tag-Fel"
                    },
                    {
                        "title": "Warrior Born",
                        "description": "Permanent +5 to starting Weapon Skill Characteristic. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "War Wizard",
                        "description": "Cast a spell with Casting number of 5 or less without using your action. - Max selections: 1",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Waterman",
                        "description": "Sail test Ignore negatives to tests when on a barge. - Max selections: Ag Bonus",
                        "tags": "talent tag-Ag"
                    },
                    {
                        "title": "Wealthy",
                        "description": "When earning you secure +1 GC per times wealthy is taken. - Max selections: 0",
                        "tags": "talent tag-none"
                    },
                    {
                        "title": "Well Prepared",
                        "description": "You may pull the trapping required for any situation provided it has Encumbrance of 0. - Max selections: I Bonus",
                        "tags": "talent tag-I"
                    },
                    {
                        "title": "Witch!",
                        "description": "Add Language (Magick) to any career, lower cost, can Lear spells spending Resilience. - Max selections: WP Bonus",
                        "tags": "talent tag-WP"
                    }
                ]
            }))

// console.log(dataTalents)
// console.log("comoplete")