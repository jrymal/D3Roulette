"use strict"

const wizard = {
    "name":"wizard",
    "primary": [
        {
            "name":"Magic Missile",
            "level":1,
            "runes":[
                {
                    "name":"Charged Blast",
                    "level":6
                },
                {
                    "name":"Glacial Spike",
                    "level":13
                },
                {
                    "name":"Split",
                    "level":31
                },
                {
                    "name":"Seeker",
                    "level":42
                },
                {
                    "name":"Conflagrate",
                    "level":52
                }
            ]
        },
        {
            "name":"Shock Pulse",
            "level":3,
            "runes":[
                {
                    "name":"Explosive Bolts",
                    "level":9
                },
                {
                    "name":"Fire Bolts",
                    "level":18
                },
                {
                    "name":"Piercing Orb",
                    "level":33
                },
                {
                    "name":"Power Affinity",
                    "level":47
                },
                {
                    "name":"Living Lightning",
                    "level":54
                }
            ]
        },
        {
            "name":"Spectral Blade",
            "level":11,
            "runes":[
                {
                    "name":"Flame Blades",
                    "level":19
                },
                {
                    "name":"Siphoning Blade",
                    "level":24
                },
                {
                    "name":"Thrown Blade",
                    "level":35
                },
                {
                    "name":"Barrier Blades",
                    "level":51
                },
                {
                    "name":"Ice Blades",
                    "level":57
                }
            ]
        },
        {
            "name":"Electrocute",
            "level":15,
            "runes":[
                {
                    "name":"Chain Lightning",
                    "level":22
                },
                {
                    "name":"Forked Lightning",
                    "level":29
                },
                {
                    "name":"Lightning Blast",
                    "level":36
                },
                {
                    "name":"Surge of Power",
                    "level":44
                },
                {
                    "name":"Arc Lightning",
                    "level":59
                }
            ]
        }
    ],
    "secondary":[
        {
            "name":"Ray of Frost",
            "level": 2,
            "runes":[
                {
                    "name":"Cold Blood",
                    "level":7
                },
                {
                    "name":"Numb",
                    "level":15
                },
                {
                    "name":"Black Ice",
                    "level":28
                },
                {
                    "name":"Sleet Storm",
                    "level":38
                },
                {
                    "name":"Snow Blast",
                    "level":53
                }
            ]
        },
        {
            "name":"Arcane Orb",
            "level": 5,
            "runes":[
                {
                    "name":"Obliteration",
                    "level":11
                },
                {
                    "name":"Arcane Orbit",
                    "level":20
                },
                {
                    "name":"Spark",
                    "level":32
                },
                {
                    "name":"Scorch",
                    "level":45
                },
                {
                    "name":"Frozen Orb",
                    "level":55
                }
            ]
        },
        {
            "name":"Arcane Torrent",
            "level":12,
            "runes":[
                {
                    "name":"Flame Ward",
                    "level":18
                },
                {
                    "name":"Death Blossom",
                    "level":25
                },
                {
                    "name":"Arcane Mines",
                    "level":34
                },
                {
                    "name":"Static Discharge",
                    "level":49
                },
                {
                    "name":"Cascade",
                    "level":57
                }
            ]
        },
        {
            "name":"Disintegrate",
            "level":21,
            "runes":[
                {
                    "name":"Convergence",
                    "level":26
                },
                {
                    "name":"Volatility",
                    "level":30
                },
                {
                    "name":"Entropy",
                    "level":39
                },
                {
                    "name":"Chaos Nexus",
                    "level":48
                },
                {
                    "name":"Intensify",
                    "level":59
                }
            ]
        },
    ],
    "one":{
        "name":"Defensive Skills",
        "skills":[
            {
                "name":"Frost Nova",
                "level":4,
                "runes":[
                    {
                        "name":"Shatter",
                        "level":12
                    },
                    {
                        "name":"Cold Snap",
                        "level":18
                    },
                    {
                        "name":"Frozen Mist",
                        "level":28
                    },
                    {
                        "name":"Deep Freeze",
                        "level":41
                    },
                    {
                        "name":"Bone Chill",
                        "level":51
                    }
                ],
            },
            {
                "name":"Diamond Skin",
                "level":8,
                "runes":[
                    {
                        "name":"Crystal Shell",
                        "level":14
                    },
                    {
                        "name":"Prism",
                        "level":20
                    },
                    {
                        "name":"Sleek Shell",
                        "level":32
                    },
                    {
                        "name":"Enduring Skin",
                        "level":44
                    },
                    {
                        "name":"Diamond Shards",
                        "level":56
                    }
                ],
            },
            {
                "name":"Slow Time",
                "level":16,
                "runes":[
                    {
                        "name":"Time Shell",
                        "level":23
                    },
                    {
                        "name":"Exhaustion",
                        "level":29
                    },
                    {
                        "name":"Time Warp",
                        "level":39
                    },
                    {
                        "name":"Point of No Return",
                        "level":47
                    },
                    {
                        "name":"Stretch Time",
                        "level":53
                    }
                ],
            },
            {
                "name":"Teleport",
                "level":22,
                "runes":[
                    {
                        "name":"Safe Passage",
                        "level":26
                    },
                    {
                        "name":"Wormhole",
                        "level":31
                    },
                    {
                        "name":"Reversal",
                        "level":37
                    },
                    {
                        "name":"Fracture",
                        "level":43
                    },
                    {
                        "name":"Calamity",
                        "level":59
                    }
                ],
            },
        ]
    },
    "two":{
        "name":"Force",
        "skills":[
            {
                "name":"Wave of Force",
                "level":9,
                "runes":[
                    {
                        "name":"mpactful Wave",
                        "level":15
                    },
                    {
                        "name":"Debilitating Force",
                        "level":22
                    },
                    {
                        "name":"Arcane Attunement",
                        "level":32
                    },
                    {
                        "name":"Static Pulse",
                        "level":39
                    },
                    {
                        "name":"Heat Wave",
                        "level":49
                    }
                ],
            },
            {
                "name":"Energy Twister",
                "level":13,
                "runes":[
                    {
                        "name":"Mistral Breeze",
                        "level":19
                    },
                    {
                        "name":"Gale Force",
                        "level":24
                    },
                    {
                        "name":"Raging Storm",
                        "level":36
                    },
                    {
                        "name":"Wicked Wind",
                        "level":41
                    },
                    {
                        "name":"Storm Chaser",
                        "level":52
                    }
                ],
            },
            {
                "name":"Hydra",
                "level":21,
                "runes":[
                    {
                        "name":"Arcane Hydra",
                        "level":26
                    },
                    {
                        "name":"Lightning Hydra",
                        "level":33
                    },
                    {
                        "name":"Blazing Hydra",
                        "level":38
                    },
                    {
                        "name":"Frost Hydra",
                        "level":46
                    },
                    {
                        "name":"Mammoth Hydra",
                        "level":56
                    }
                ],
            },
            {
                "name":"Meteor",
                "level":25,
                "runes":[
                    {
                        "name":"Thunder Crash",
                        "level":29
                    },
                    {
                        "name":"Star Pact",
                        "level":34
                    },
                    {
                        "name":"Comet",
                        "level":43
                    },
                    {
                        "name":"Meteor Shower",
                        "level":67
                    },
                    {
                        "name":"Molten Impact",
                        "level":69
                    }
                ],
            },
            {
                "name":"Blizzard",
                "level":27,
                "runes":[
                    {
                        "name":"Lightning Storm",
                        "level":35
                    },
                    {
                        "name":"Frozen Solid",
                        "level":42
                    },
                    {
                        "name":"Snowbound",
                        "level":37
                    },
                    {
                        "name":"Apocalypse",
                        "level":54
                    },
                    {
                        "name":"Unrelenting Storm",
                        "level":60
                    }
                ],
            },
        ]
    },
    "three":{
        "name":"Conjuration",
        "skills":[
            {
                "name":"Ice Armor",
                "level":14,
                "runes":[
                    {
                        "name":"Chilling Aura",
                        "level":21
                    },
                    {
                        "name":"Crystallize",
                        "level":31
                    },
                    {
                        "name":"Jagged Ice",
                        "level":42
                    },
                    {
                        "name":"Ice Reflect",
                        "level":49
                    },
                    {
                        "name":"Frozen Storm",
                        "level":53
                    }
                ],
            },
            {
                "name":"Storm Armor",
                "level":17,
                "runes":[
                    {
                        "name":"Reactive Armor",
                        "level":23
                    },
                    {
                        "name":"Power of the Storm",
                        "level":33
                    },
                    {
                        "name":"Thunder Storm",
                        "level":37
                    },
                    {
                        "name":"Scramble",
                        "level":43
                    },
                    {
                        "name":"Shocking Aspect",
                        "level":58
                    }
                ],
            },
            {
                "name":"Magic Weapon",
                "level":20,
                "runes":[
                    {
                        "name":"Electrify",
                        "level":27
                    },
                    {
                        "name":"Force Weapon",
                        "level":35
                    },
                    {
                        "name":"Conduit",
                        "level":38
                    },
                    {
                        "name":"Ignite",
                        "level":46
                    },
                    {
                        "name":"Deflection",
                        "level":45
                    }
                ],
            },
            {
                "name":"Familiar",
                "level":22,
                "runes":[
                    {
                        "name":"Sparkflint",
                        "level":30
                    },
                    {
                        "name":"Icicle",
                        "level":40
                    },
                    {
                        "name":"Ancient Guardian",
                        "level":44
                    },
                    {
                        "name":"Arcanot",
                        "level":50
                    },
                    {
                        "name":"Cannoneer",
                        "level":57
                    }
                ],
            },
            {
                "name":"Energy Armor",
                "level":28,
                "runes":[
                    {
                        "name":"Absorption",
                        "level":32
                    },
                    {
                        "name":"Pinpoint Barrier",
                        "level":41
                    },
                    {
                        "name":"Energy Tap",
                        "level":48
                    },
                    {
                        "name":"Force Armor",
                        "level":54
                    },
                    {
                        "name":"Prismatic Armor",
                        "level":60
                    }
                ],
            },
        ]
    },
    "four":{
        "name":"Mastery",
        "skills":[
            {
                "name":"Explosive Blast",
                "level":19,
                "runes":[
                    {
                        "name":"Unleashed",
                        "level":24
                    },
                    {
                        "name":"Flash!",
                        "level":29
                    },
                    {
                        "name":"Short Fuse",
                        "level":39
                    },
                    {
                        "name":"Obliterate",
                        "level":50
                    },
                    {
                        "name":"Chain Reaction",
                        "level":56
                    }
                ],
            },
            {
                "name":"Mirror Image",
                "level":25,
                "runes":[
                    {
                        "name":"Hard Light",
                        "level":31
                    },
                    {
                        "name":"Duplicates",
                        "level":37
                    },
                    {
                        "name":"Mocking Demise",
                        "level":45
                    },
                    {
                        "name":"Extension of Will",
                        "level":51
                    },
                    {
                        "name":"Mirror Mimics",
                        "level":58
                    }
                ],
            },
            {
                "name":"Archon",
                "level":30,
                "runes":[
                    {
                        "name":"Combustion",
                        "level":36
                    },
                    {
                        "name":"Teleport",
                        "level":40
                    },
                    {
                        "name":"Pure Power",
                        "level":46
                    },
                    {
                        "name":"Slow Time",
                        "level":52
                    },
                    {
                        "name":"Improved Archon",
                        "level":60
                    }
                ],
            },
            {
                "name":"Black Hole",
                "level":61,
                "runes":[
                    {
                        "name":"Supermassive",
                        "level":62
                    },
                    {
                        "name":"Absolute Zero",
                        "level":63
                    },
                    {
                        "name":"Event Horizon",
                        "level":65
                    },
                    {
                        "name":"Blazar",
                        "level":67
                    },
                    {
                        "name":"Spellsteal",
                        "level":69
                    }
                ],
            },
        ]
    },
    "Passive Skills":[
        {
            "name":"Power Hungry",
            "level":10
        },
        {
            "name":"Blur",
            "level":10
        },
        {
            "name":"Evocation",
            "level":13
        },
        {
            "name":"Glass Cannon",
            "level":16
        },
        {
            "name":"Prodigy",
            "level":20
        },
        {
            "name":"Astral Presence",
            "level":24
        },
        {
            "name":"Illusionist",
            "level":27
        },
        {
            "name":"Cold Blooded",
            "level":30
        },
        {
            "name":"Conflagration",
            "level":34
        },
        {
            "name":"Paralysis",
            "level":37
        },
        {
            "name":"Galvanizing Ward",
            "level":40
        },
        {
            "name":"Temporal Flux",
            "level":45
        },
        {
            "name":"Dominance",
            "level":50
        },
        {
            "name":"Arcane Dynamo",
            "level":55
        },
        {
            "name":"Unstable Anomaly",
            "level":60
        },
        {
            "name":"Unwavering Will",
            "level":64
        },
        {
            "name":"Audacity",
            "level":66
        },
        {
            "name":"Elemental Exposure",
            "level":68
        },
    ]
};
