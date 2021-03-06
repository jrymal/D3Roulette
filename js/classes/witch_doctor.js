"use strict"

const witch_doctor = {
    "name":"witch_doctor",
    "primary": [
        {
            "name":"Poison Dart",
            "level":1,
            "runes":[
                {
                    "name":"Splinters",
                    "level":6
                },
                {
                    "name":"Numbing Dart",
                    "level":13
                },
                {
                    "name":"Spined Dart",
                    "level":25
                },
                {
                    "name":"Flaming Dart",
                    "level":43
                },
                {
                    "name":"Snake to the Face",
                    "level":52
                }
            ]
        },
        {
            "name":"Corpse Spiders",
            "level":3,
            "runes":[
                {
                    "name":"Leaping Spiders",
                    "level":9
                },
                {
                    "name":"Spider Queen",
                    "level":18
                },
                {
                    "name":"Widowmakers",
                    "level":33
                },
                {
                    "name":"Medusa Spiders",
                    "level":45
                },
                {
                    "name":"Blazing Spiders",
                    "level":55
                }
            ]
        },
        {
            "name":"Plague of Toads",
            "level":11,
            "runes":[
                {
                    "name":"Explosive Toads",
                    "level":17
                },
                {
                    "name":"Piercing Toads",
                    "level":24
                },
                {
                    "name":"Rain of Toads",
                    "level":35
                },
                {
                    "name":"Addling Toads",
                    "level":51
                },
                {
                    "name":"Toad Affinity",
                    "level":54
                }
            ]
        },
        {
            "name":"Firebomb",
            "level":21,
            "runes":[
                {
                    "name":"Flash Fire",
                    "level":28
                },
                {
                    "name":"Roll the Bones",
                    "level":31
                },
                {
                    "name":"Fire Pit",
                    "level":38
                },
                {
                    "name":"Pyrogeist",
                    "level":47
                },
                {
                    "name":"Ghost Bomb",
                    "level":60
                }
            ]
        }
    ],
    "secondary":[
        {
            "name":"Grasp of the Dead",
            "level": 2,
            "runes":[
                {
                    "name":"Unbreakable Grasp",
                    "level":7
                },
                {
                    "name":"Groping Eels",
                    "level":15
                },
                {
                    "name":"Death Is Life",
                    "level":25
                },
                {
                    "name":"Desperate Grasp",
                    "level":28
                },
                {
                    "name":"Rain of Corpses",
                    "level":53
                }
            ]
        },
        {
            "name":"Firebats",
            "level": 5,
            "runes":[
                {
                    "name":"Dire Bats",
                    "level":11
                },
                {
                    "name":"Vampire Bats",
                    "level":19
                },
                {
                    "name":"Plague Bats",
                    "level":29
                },
                {
                    "name":"Hungry Bats",
                    "level":45
                },
                {
                    "name":"Cloud of Bats",
                    "level":56
                }
            ]
        },
        {
            "name":"Haunt",
            "level":12,
            "runes":[
                {
                    "name":"Stagger",
                    "level":18
                },
                {
                    "name":"Shattered Ground",
                    "level":25
                },
                {
                    "name":"Rumble",
                    "level":35
                },
                {
                    "name":"Strength from Earth",
                    "level":48
                },
                {
                    "name":"Permafrost",
                    "level":57
                }
            ]
        },
        {
            "name":"Locust Swarm",
            "level":21,
            "runes":[
                {
                    "name":"Pestilence",
                    "level":27
                },
                {
                    "name":"Devouring Swarm",
                    "level":33
                },
                {
                    "name":"Cloud of Insects",
                    "level":37
                },
                {
                    "name":"Diseased Swarm",
                    "level":42
                },
                {
                    "name":"Searing Locusts",
                    "level":59
                }
            ]
        },
    ],
    "one":{
        "name":"Defensive Skills",
        "skills":[
            {
                "name":"Summon Zombie Dogs",
                "level":4,
                "runes":[
                    {
                        "name":"Rabid Dogs",
                        "level":12
                    },
                    {
                        "name":"Chilled to the Bone",
                        "level":19
                    },
                    {
                        "name":"Life Link",
                        "level":28
                    },
                    {
                        "name":"Burning Dogs",
                        "level":40
                    },
                    {
                        "name":"Leeching Beasts",
                        "level":54
                    }
                ],
            },
            {
                "name":"Horrify",
                "level":8,
                "runes":[
                    {
                        "name":"Phobia",
                        "level":14
                    },
                    {
                        "name":"Stalker",
                        "level":21
                    },
                    {
                        "name":"Face of Death",
                        "level":34
                    },
                    {
                        "name":"Frightening Aspect",
                        "level":44
                    },
                    {
                        "name":"Ruthless Terror",
                        "level":56
                    }
                ],
            },
            {
                "name":"Spirit Walk",
                "level":16,
                "runes":[
                    {
                        "name":"Jaunt",
                        "level":23
                    },
                    {
                        "name":"Honored Guest",
                        "level":29
                    },
                    {
                        "name":"Umbral Shock",
                        "level":38
                    },
                    {
                        "name":"Severance",
                        "level":47
                    },
                    {
                        "name":"Healing Journey",
                        "level":53
                    }
                ],
            },
            {
                "name":"Hex",
                "level":22,
                "runes":[
                    {
                        "name":"Hedge Magic",
                        "level":26
                    },
                    {
                        "name":"Jinx",
                        "level":31
                    },
                    {
                        "name":"Angry Chicken",
                        "level":36
                    },
                    {
                        "name":"Toad of Hugeness",
                        "level":43
                    },
                    {
                        "name":"Unstable Form",
                        "level":58
                    }
                ],
            },
        ]
    },
    "two":{
        "name":"Terror",
        "skills":[
            {
                "name":"Soul Harvest",
                "level":9,
                "runes":[
                    {
                        "name":"Swallow Your Soul",
                        "level":15
                    },
                    {
                        "name":"Siphon",
                        "level":21
                    },
                    {
                        "name":"Languish",
                        "level":32
                    },
                    {
                        "name":"Soul to Waste",
                        "level":39
                    },
                    {
                        "name":"Vengeful Spirit",
                        "level":49
                    }
                ],
            },
            {
                "name":"Sacrifice",
                "level":13,
                "runes":[
                    {
                        "name":"Blood Law",
                        "level":18
                    },
                    {
                        "name":"Best Served Cold",
                        "level":24
                    },
                    {
                        "name":"Retribution",
                        "level":36
                    },
                    {
                        "name":"Grudge",
                        "level":41
                    },
                    {
                        "name":"Provocation",
                        "level":51
                    }
                ],
            },
            {
                "name":"Mass Confusion",
                "level":22,
                "runes":[
                    {
                        "name":"Unstable Realm",
                        "level":26
                    },
                    {
                        "name":"Devolution",
                        "level":34
                    },
                    {
                        "name":"Mass Hysteria",
                        "level":43
                    },
                    {
                        "name":"Paranoia",
                        "level":46
                    },
                    {
                        "name":"Mass Hallucination",
                        "level":54
                    }
                ],
            },
        ]
    },
    "three":{
        "name":"Decay",
        "skills":[
            {
                "name":"Zombie Charger",
                "level":14,
                "runes":[
                    {
                        "name":"Pile On",
                        "level":21
                    },
                    {
                        "name":"Undeath",
                        "level":27
                    },
                    {
                        "name":"Lumbering Cold",
                        "level":33
                    },
                    {
                        "name":"Explosive Beast",
                        "level":42
                    },
                    {
                        "name":"Zombie Bears",
                        "level":54
                    }
                ],
            },
            {
                "name":"Spirit Barrage",
                "level":17,
                "runes":[
                    {
                        "name":"The Spirit Is Willing",
                        "level":23
                    },
                    {
                        "name":"Well of Souls",
                        "level":32
                    },
                    {
                        "name":"Phantasm",
                        "level":37
                    },
                    {
                        "name":"Phlebotomize",
                        "level":44
                    },
                    {
                        "name":"Manitou",
                        "level":59
                    }
                ],
            },
            {
                "name":"Acid Cloud",
                "level":22,
                "runes":[
                    {
                        "name":"Acid Rain",
                        "level":26
                    },
                    {
                        "name":"Lob Blob Bomb!",
                        "level":30
                    },
                    {
                        "name":"Slow Burn",
                        "level":39
                    },
                    {
                        "name":"Kiss of Death",
                        "level":46
                    },
                    {
                        "name":"Corpse Bomb",
                        "level":55
                    }
                ],
            },
            {
                "name":"Wall of Death",
                "level":28,
                "runes":[
                    {
                        "name":"Ring of Poison",
                        "level":32
                    },
                    {
                        "name":"Wall of Zombies",
                        "level":35
                    },
                    {
                        "name":"Surrounded by Death",
                        "level":41
                    },
                    {
                        "name":"Fire Wall",
                        "level":49
                    },
                    {
                        "name":"Communing with Spirits",
                        "level":60
                    }
                ],
            },
            {
                "name":"Piranhas",
                "level":61,
                "runes":[
                    {
                        "name":"Bogadile",
                        "level":62
                    },
                    {
                        "name":"Zombie Piranhas",
                        "level":63
                    },
                    {
                        "name":"Piranhado",
                        "level":65
                    },
                    {
                        "name":"Wave of Mutilation",
                        "level":67
                    },
                    {
                        "name":"Frozen Piranhas",
                        "level":69
                    }
                ],
            },
        ]
    },
    "four":{
        "name":"Voodoo",
        "skills":[
            {
                "name":"Gargantuan",
                "level":19,
                "runes":[
                    {
                        "name":"Humongoid",
                        "level":22
                    },
                    {
                        "name":"Restless Giant",
                        "level":29
                    },
                    {
                        "name":"Wrathful Protector",
                        "level":39
                    },
                    {
                        "name":"Big Stinker",
                        "level":48
                    },
                    {
                        "name":"Bruiser",
                        "level":56
                    }
                ],
            },
            {
                "name":"Big Bad Voodoo",
                "level":25,
                "runes":[
                    {
                        "name":"Rain Dance",
                        "level":31
                    },
                    {
                        "name":"Slam Dance",
                        "level":37
                    },
                    {
                        "name":"Ghost Trance",
                        "level":44
                    },
                    {
                        "name":"Jungle Drums",
                        "level":50
                    },
                    {
                        "name":"Boogie Man",
                        "level":58
                    }
                ],
            },
            {
                "name":"Fetish Army",
                "level":30,
                "runes":[
                    {
                        "name":"Fetish Ambush",
                        "level":34
                    },
                    {
                        "name":"Devoted Following",
                        "level":40
                    },
                    {
                        "name":"Legion of Daggers",
                        "level":46
                    },
                    {
                        "name":"Tiki Torchers",
                        "level":52
                    },
                    {
                        "name":"Head Hunters",
                        "level":60
                    }
                ],
            },
        ]
    },
    "Passive Skills":[
        {
            "name":"Jungle Fortitude",
            "level":10
        },
        {
            "name":"Circle of Life",
            "level":10
        },
        {
            "name":"Spiritual Attunement",
            "level":13
        },
        {
            "name":"Gruesome Feast",
            "level":16
        },
        {
            "name":"Blood Ritual",
            "level":20
        },
        {
            "name":"Bad Medicine",
            "level":20
        },
        {
            "name":"Zombie Handler",
            "level":24
        },
        {
            "name":"Pierce the Veil",
            "level":27
        },
        {
            "name":"Spirit Vessel",
            "level":30
        },
        {
            "name":"Fetish Sycophants",
            "level":30
        },
        {
            "name":"Rush of Essence",
            "level":36
        },
        {
            "name":"Vision Quest",
            "level":40
        },
        {
            "name":"Fierce Loyalty",
            "level":45
        },
        {
            "name":"Grave Injustice",
            "level":50
        },
        {
            "name":"Tribal Rites",
            "level":55
        },
        {
            "name":"Confidence Ritual",
            "level":60
        },
        {
            "name":"Creeping Death",
            "level":64
        },
        {
            "name":"Swampland Attunement",
            "level":66
        },
        {
            "name":"Midnight Feast",
            "level":68
        },
    ]
};
