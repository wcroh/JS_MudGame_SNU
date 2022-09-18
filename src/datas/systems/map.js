const EventType = Object.freeze({
  NOTHING: "nothing", // 아무 일도 일어나지 않음
  BATTLE: "battle", // 몬스터를 불러와서 연산
  ITEM: "item", // 아이템을 불러와서 연산
  RECOVER: "recover", // 체력 회복
});

export const createMap = () => {
  const map = [
    [
      { row: 0, col: 0, type: EventType.BATTLE, monster: 1, percent: 50 },
      { row: 0, col: 1, type: EventType.ITEM, item: 3, percent: 70 },
      { row: 0, col: 2, type: EventType.BATTLE, monster: 1, percent: 70 },
      { row: 0, col: 3, type: EventType.BATTLE, monster: 1, percent: 70 },
      { row: 0, col: 4, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 0, col: 5, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 0, col: 6, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 0, col: 7, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 0, col: 8, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 0, col: 9, type: EventType.BATTLE, monster: 3, percent: 70 },
    ],
    [
      { row: 1, col: 0, type: EventType.ITEM, item: 2, percent: 70 },
      { row: 1, col: 1, type: EventType.RECOVER, percent: 70 },
      { row: 1, col: 2, type: EventType.BATTLE, monster: 1, percent: 70 },
      { row: 1, col: 3, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 1, col: 4, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 1, col: 5, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 1, col: 6, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 1, col: 7, type: EventType.ITEM, item: 1, percent: 70 },
      { row: 1, col: 8, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 1, col: 9, type: EventType.BATTLE, monster: 3, percent: 70 },
    ],
    [
      { row: 2, col: 0, type: EventType.BATTLE, monster: 1, percent: 70 },
      { row: 2, col: 1, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 2, col: 2, type: EventType.ITEM, item: 0, percent: 70 },
      { row: 2, col: 3, type: EventType.BATTLE, monster: 1, percent: 70 },
      { row: 2, col: 4, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 2, col: 5, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 2, col: 6, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 2, col: 7, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 2, col: 8, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 2, col: 9, type: EventType.BATTLE, monster: 4, percent: 70 },
    ],
    [
      { row: 3, col: 0, type: EventType.BATTLE, monster: 1, percent: 70 },
      { row: 3, col: 1, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 3, col: 2, type: EventType.ITEM, item: 4, percent: 70 },
      { row: 3, col: 3, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 3, col: 4, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 3, col: 5, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 3, col: 6, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 3, col: 7, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 3, col: 8, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 3, col: 9, type: EventType.BATTLE, monster: 4, percent: 70 },
    ],
    [
      { row: 4, col: 0, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 4, col: 1, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 4, col: 2, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 4, col: 3, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 4, col: 4, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 4, col: 5, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 4, col: 6, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 4, col: 7, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 4, col: 8, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 4, col: 9, type: EventType.BATTLE, monster: 4, percent: 70 },
    ],
    [
      { row: 5, col: 0, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 5, col: 1, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 5, col: 2, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 5, col: 3, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 5, col: 4, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 5, col: 5, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 5, col: 6, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 5, col: 7, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 5, col: 8, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 5, col: 9, type: EventType.BATTLE, monster: 5, percent: 70 },
    ],
    [
      { row: 6, col: 0, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 6, col: 1, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 6, col: 2, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 6, col: 3, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 6, col: 4, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 6, col: 5, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 6, col: 6, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 6, col: 7, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 6, col: 8, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 6, col: 9, type: EventType.BATTLE, monster: 5, percent: 70 },
    ],
    [
      { row: 7, col: 0, type: EventType.BATTLE, monster: 2, percent: 70 },
      { row: 7, col: 1, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 7, col: 2, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 7, col: 3, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 7, col: 4, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 7, col: 5, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 7, col: 6, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 7, col: 7, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 7, col: 8, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 7, col: 9, type: EventType.BATTLE, monster: 5, percent: 70 },
    ],
    [
      { row: 8, col: 0, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 8, col: 1, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 8, col: 2, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 8, col: 3, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 8, col: 4, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 8, col: 5, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 8, col: 6, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 8, col: 7, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 8, col: 8, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 8, col: 9, type: EventType.BATTLE, monster: 5, percent: 70 },
    ],
    [
      { row: 9, col: 0, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 9, col: 1, type: EventType.BATTLE, monster: 3, percent: 70 },
      { row: 9, col: 2, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 9, col: 3, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 9, col: 4, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 9, col: 5, type: EventType.BATTLE, monster: 4, percent: 70 },
      { row: 9, col: 6, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 9, col: 7, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 9, col: 8, type: EventType.BATTLE, monster: 5, percent: 70 },
      { row: 9, col: 9, type: EventType.BATTLE, monster: 5, percent: 70 },
    ],
  ];

  return map;
};

// [0, 0, "평원의 시작점이다.", [0, 1, 1, 0], []],
//     [
//       1,
//       0,
//       "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
//       [0, 0, 1, 1],
//       [
//         { type: EventType.BATTLE, monster: 1, percent: 70 },
//         { type: EventType.ITEM, item: 1, percent: 30 },
//       ],
//     ],
//     [
//       0,
//       1,
//       "행운이 찾아올 것 같다.",
//       [1, 1, 0, 0],
//       [
//         { type: "item", item: 1, percent: 70 },
//         { type: "battle", enemy: 1, percent: 30 },
//       ],
//     ],
//     [1, 1, "아무것도 없다.", [1, 0, 0, 1], [], []],