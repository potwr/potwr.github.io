const dungeonMap = [
    [
        [
            { coordX: 1, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 4, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 8, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 9, coordY: 9, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 4, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: true, type: "room", description: "" },
            { coordX: 7, coordY: 8, wayUp: false, wayDown: true, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 8, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 9, coordY: 8, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 7, wayUp: false, wayDown: true, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 2, coordY: 7, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 3, coordY: 7, wayUp: false, wayDown: false, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 4, coordY: 7, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 7, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 7, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 7, wayUp: true, wayDown: true, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 8, coordY: 7, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 9, coordY: 7, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 6, wayUp: true, wayDown: true, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 6, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 6, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 4, coordY: 6, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 6, wayUp: false, wayDown: true, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 6, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 6, wayUp: true, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 8, coordY: 6, wayUp: false, wayDown: false, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 9, coordY: 6, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 5, wayUp: true, wayDown: false, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 5, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 5, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 4, coordY: 5, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 5, wayUp: true, wayDown: true, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 5, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 5, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 8, coordY: 5, wayUp: false, wayDown: true, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 9, coordY: 5, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 4, wayUp: false, wayDown: false, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 4, wayUp: false, wayDown: true, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 3, coordY: 4, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 4, coordY: 4, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 4, wayUp: true, wayDown: true, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 6, coordY: 4, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 4, wayUp: false, wayDown: true, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 8, coordY: 4, wayUp: true, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 9, coordY: 4, wayUp: false, wayDown: false, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" }
        ],
        [
            { coordX: 1, coordY: 3, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 3, wayUp: true, wayDown: true, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 3, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 4, coordY: 3, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 3, wayUp: true, wayDown: true, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 3, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 3, wayUp: true, wayDown: true, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 8, coordY: 3, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 9, coordY: 3, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 2, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 2, wayUp: true, wayDown: false, wayLeft: false, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 2, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 4, coordY: 2, wayUp: false, wayDown: false, wayLeft: true, wayRight: true, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 2, wayUp: true, wayDown: true, wayLeft: true, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 6, coordY: 2, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 2, wayUp: true, wayDown: true, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "treasure", description: "" },
            { coordX: 8, coordY: 2, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 9, coordY: 2, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ],
        [
            { coordX: 1, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 2, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 3, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 4, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 5, coordY: 1, wayUp: true, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: true, isExit: false, type: "room", description: "" },
            { coordX: 6, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 7, coordY: 1, wayUp: true, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "monster", description: "" },
            { coordX: 8, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" },
            { coordX: 9, coordY: 1, wayUp: false, wayDown: false, wayLeft: false, wayRight: false, isVisited: false, isEntrance: false, isExit: false, type: "room", description: "" }
        ]
    ]
];