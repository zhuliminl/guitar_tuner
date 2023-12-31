// 乐器数据

// 总类别
export enum categoryEnum {
  '吉他' = '吉他',
  '贝斯' = '贝斯',
  '尤克里里' = '尤克里里',
  '提琴' = '提琴',
  // 后面再加
  '4弦小吉他' = '4弦小吉他',
  '曼陀林琴' = '曼陀林琴',
  '巴拉莱卡琴' = '巴拉莱卡琴',
  '班卓琴' = '班卓琴',
}

// 子类别
export enum subCategoryEnum {
  '吉他6弦' = '吉他6弦',
  '吉他7弦' = '吉他7弦',
  '吉他12弦' = '吉他12弦',
  '贝斯4弦' = '贝斯4弦',
  '贝斯5弦' = '贝斯5弦',
  '尤克里里' = '尤克里里',
  '小提琴' = '小提琴',
  '中提琴' = '中提琴',
  '大提琴' = '大提琴',
  '民族小提琴' = '民族小提琴',
  '4弦小吉他' = '4弦小吉他',
  '曼陀林琴' = '曼陀林琴',
}

export interface InstrumentInterface {
  id: string;
  category: categoryEnum;
  subCategory: subCategoryEnum;
  label: string;
  desc: string;
  onlyOneSide?: boolean | undefined;
  notes: Array<string>;
}

export const instruments: Array<InstrumentInterface> = [
  {
    id: '1',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦',
    desc: '标准',
    notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  },
  {
    id: '2',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Drop D',
    notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  },
  {
    id: '3',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Double Drop D',
    notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'D4'],
  },
  {
    id: '4',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'D modal',
    notes: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'],
  },
  {
    id: '5',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Double Daddy',
    notes: ['D2', 'A2', 'D3', 'D3', 'A3', 'D4'],
  },
  {
    id: '6',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Drop C#',
    notes: ['C2#', 'G2#', 'C3#', 'F3#', 'A3#', 'D4#'],
  },
  {
    id: '7',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Drop C',
    notes: ['C2', 'G2', 'C3', 'F3', 'A3', 'D4'],
  },
  {
    id: '8',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Drop B',
    notes: ['B1', 'F2#', 'B2', 'E3', 'G3#', 'C4#'],
  },
  {
    id: '9',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-重力',
    desc: 'Drop A',
    notes: ['A1', 'E2', 'A2', 'D3', 'F#3', 'B3'],
  },
  // 开放
  {
    id: '10',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open C',
    notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'E4'],
  },
  {
    id: '11',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open E',
    notes: ['E2', 'B2', 'E3', 'G3#', 'B3', 'E4'],
  },
  {
    id: '12',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open F',
    notes: ['C2', 'F2', 'C3', 'F3', 'A3', 'F4'],
  },
  {
    id: '13',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open G',
    notes: ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'],
  },
  {
    id: '14',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open A',
    notes: ['E2', 'A2', 'C3#', 'E3', 'A3', 'E4'],
  },
  {
    id: '15',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open A2',
    notes: ['E2', 'A2', 'E3', 'A3', 'C4#', 'E4'],
  },
  {
    id: '16',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open Am',
    notes: ['E2', 'A2', 'E3', 'A3', 'C4', 'E4'],
  },
  {
    id: '17',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open Em',
    notes: ['E2', 'B2', 'E3', 'G3', 'B3', 'E4'],
  },
  {
    id: '18',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open D',
    notes: ['D2', 'A2', 'D3', 'F3#', 'A3', 'D4'],
  },
  {
    id: '19',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他6弦,
    label: '吉他6弦-开放',
    desc: 'Open Dm',
    notes: ['D2', 'A2', 'D3', 'F3', 'A3', 'D4'],
  },
  // 其他重力。后面再补充
  // {
  //   category: categoryEnum.吉他,
  //   subCategory: subCategoryEnum.吉他6弦,
  //   label: '吉他6弦-开放',
  //   desc: 'Open Dm',
  //   notes: ['D2', 'A2', 'D3', 'F3', 'A3', 'D4'],
  // },

  // 七弦吉他
  {
    id: '20',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他7弦,
    label: '吉他7弦',
    desc: '标准',
    notes: ['B1', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  },
  {
    id: '21',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他7弦,
    label: '吉他7弦',
    desc: 'Drop A',
    notes: ['A1', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  },
  {
    id: '22',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他7弦,
    label: '吉他7弦',
    desc: '俄罗斯吉他',
    notes: ['D2', 'G2', 'B2', 'D3', 'G3', 'B3', 'D4'],
  },
  {
    id: '23',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他7弦,
    label: '吉他7弦',
    desc: '巴西吉他',
    notes: ['C2', 'E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  },
  // 12 弦吉他
  {
    id: '24',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: '标准',
    notes: [
      'E3',
      'E2',
      'A3',
      'A2',
      'D4',
      'D3',
      'G4',
      'G3',
      'B3',
      'B3',
      'E4',
      'E4',
    ],
  },
  {
    id: '25',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Drop D',
    notes: [
      'D3',
      'D2',
      'A3',
      'A2',
      'D4',
      'D3',
      'G4',
      'G3',
      'B3',
      'B3',
      'E4',
      'E4',
    ],
  },
  {
    id: '26',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Double Drop D',
    notes: [
      'D3',
      'D2',
      'A3',
      'A2',
      'D4',
      'D3',
      'G4',
      'G3',
      'B3',
      'B3',
      'D4',
      'D4',
    ],
  },
  {
    id: '27',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'D modal',
    notes: [
      'D3',
      'D2',
      'A3',
      'A2',
      'D4',
      'D3',
      'G4',
      'G3',
      'A3',
      'A3',
      'D4',
      'D4',
    ],
  },
  {
    id: '28',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Drop C',
    notes: [
      'C3',
      'C2',
      'G3',
      'G2',
      'C4',
      'C3',
      'F4',
      'F3',
      'A3',
      'A3',
      'D4',
      'D4',
    ],
  },
  {
    id: '29',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Drop C#',
    notes: [
      'C3#',
      'C2#',
      'G3#',
      'G2#',
      'C4#',
      'C3#',
      'F4#',
      'F3#',
      'A3#',
      'A3#',
      'D4#',
      'D4#',
    ],
  },
  {
    id: '30',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Drop B',
    notes: [
      'B2',
      'B1',
      'F3#',
      'F2#',
      'B3',
      'B2',
      'E4',
      'E3',
      'G3#',
      'G3#',
      'C4#',
      'C4#',
    ],
  },
  {
    id: '31',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Open D',
    notes: [
      'D3',
      'D2',
      'A3',
      'A2',
      'D4',
      'D3',
      'F4#',
      'F3#',
      'A3',
      'A3',
      'D4',
      'D4',
    ],
  },
  {
    id: '32',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Open C',
    notes: [
      'C3',
      'C2',
      'G3',
      'G2',
      'C4',
      'C3',
      'G4',
      'G3',
      'C4',
      'C4',
      'E4',
      'E4',
    ],
  },
  {
    id: '33',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Open G',
    notes: [
      'D3',
      'D2',
      'G3',
      'G2',
      'D4',
      'D3',
      'G4',
      'G3',
      'B3',
      'B3',
      'D4',
      'D4',
    ],
  },
  {
    id: '34',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Open E',
    notes: [
      'E3',
      'E2',
      'B3',
      'B2',
      'E4',
      'E3',
      'G4#',
      'G3#',
      'B3',
      'B3',
      'E4',
      'E4',
    ],
  },
  {
    id: '35',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: '-1;Eb;"降半音“',
    notes: [
      'D3#',
      'D2#',
      'G3#',
      'G2#',
      'C4#',
      'C3#',
      'F4#',
      'F3#',
      'A3#',
      'A3#',
      'D4#',
      'D4#',
    ],
  },
  {
    id: '36',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: '-2;"降全音“',
    notes: [
      'D3',
      'D2',
      'G3',
      'G2',
      'C4',
      'C3',
      'F4',
      'F3',
      'A3',
      'A3',
      'D4',
      'D4',
    ],
  },
  {
    id: '37',
    category: categoryEnum.吉他,
    subCategory: subCategoryEnum.吉他12弦,
    label: '吉他12弦',
    desc: 'Drop A',
    notes: [
      'A2',
      'A1',
      'E3',
      'E2',
      'A3',
      'A2',
      'D4',
      'D3',
      'F3#',
      'F3#',
      'B3',
      'B3',
    ],
  },
  // 贝斯
  {
    id: '38',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯4弦,
    label: '贝斯4弦',
    desc: '标准',
    notes: ['E1', 'A1', 'D2', 'G2'],
  },
  {
    id: '39',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯4弦,
    label: '贝斯4弦',
    desc: 'Drop D',
    notes: ['D1', 'A1', 'D2', 'G2'],
  },
  {
    id: '40',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯4弦,
    label: '贝斯4弦',
    desc: 'E flat',
    notes: ['D1#', 'G1#', 'C2#', 'F2#'],
  },
  {
    id: '41',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯4弦,
    label: '贝斯4弦',
    desc: 'Drop C',
    notes: ['C1', 'G1', 'C2', 'F2'],
  },
  {
    id: '42',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯4弦,
    label: '贝斯4弦',
    desc: 'Low C',
    notes: ['C1', 'A1', 'D2', 'G2'],
  },
  {
    id: '43',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯4弦,
    label: '贝斯4弦',
    desc: 'Low B',
    notes: ['B0', 'E1', 'A1', 'D2'],
  },
  {
    id: '44',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯5弦,
    label: '贝斯5弦',
    desc: '标准',
    notes: ['B0', 'E1', 'A1', 'D2', 'G2'],
  },
  {
    id: '45',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯5弦,
    label: '贝斯5弦',
    desc: 'Low Bb',
    notes: ['A0#', 'D1#', 'G1#', 'C2#', 'F2#'],
  },
  {
    id: '46',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯5弦,
    label: '贝斯5弦',
    desc: 'Low A',
    notes: ['A0', 'D1', 'G1', 'C2', 'F2'],
  },
  {
    id: '47',
    category: categoryEnum.贝斯,
    subCategory: subCategoryEnum.贝斯5弦,
    label: '贝斯5弦',
    desc: 'High C',
    notes: ['E1', 'A1', 'D2', 'G2', 'C3'],
  },
  // 尤克里里
  {
    id: '48',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: '标准',
    notes: ['G4', 'C4', 'E4', 'A4'],
  },
  {
    id: '49',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: 'D Soprano',
    notes: ['A4', 'D4', 'F4#', 'B4'],
  },
  {
    id: '50',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: 'Low G',
    notes: ['G3', 'C4', 'E4', 'A4'],
  },
  {
    id: '51',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: 'Low A',
    notes: ['A3', 'D4', 'F4#', 'B4'],
  },
  {
    id: '52',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: '夏威夷松弦',
    notes: ['A3', 'D4', 'F4#', 'B4'],
  },
  {
    id: '53',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: 'B 调弦 -1',
    notes: ['F4#', 'B3', 'D4#', 'G4#'],
  },
  {
    id: '54',
    category: categoryEnum.尤克里里,
    subCategory: subCategoryEnum.尤克里里,
    label: '尤克里里',
    desc: 'C#调弦 +1',
    notes: ['G4#', 'C4#', 'F4', 'A4#'],
  },
  // 提琴
  {
    id: '55',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.小提琴,
    label: '小提琴',
    desc: '标准',
    notes: ['G3', 'D4', 'A4', 'E5'],
  },
  {
    id: '56',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.中提琴,
    label: '中提琴',
    desc: '标准',
    notes: ['C3', 'G3', 'D4', 'A4'],
  },
  {
    id: '57',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.大提琴,
    label: '大提琴',
    desc: '标准',
    notes: ['C2', 'G2', 'D3', 'A3'],
  },
  {
    id: '58',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: '标准',
    notes: ['G3', 'D4', 'A4', 'E5'],
  },
  {
    id: '59',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: '卡津音乐',
    notes: ['F3', 'C4', 'G4', 'D5'],
  },
  {
    id: '60',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: 'Open G',
    notes: ['G3', 'D4', 'G4', 'B4'],
  },
  {
    id: '61',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: 'Sawmill',
    notes: ['G3', 'D4', 'G4', 'D5'],
  },
  {
    id: '62',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: 'Gee-dad',
    notes: ['G3', 'D4', 'A4', 'D5'],
  },
  {
    id: '63',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: 'Open D',
    notes: ['D3', 'D4', 'A4', 'D5'],
  },
  {
    id: '64',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: '较高的低音',
    notes: ['A3', 'D4', 'A4', 'E5'],
  },
  {
    id: '65',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: '交叉调谐',
    notes: ['A3', 'E4', 'A4', 'E5'],
  },
  {
    id: '66',
    category: categoryEnum.提琴,
    subCategory: subCategoryEnum.民族小提琴,
    label: '民族小提琴',
    desc: 'Calico',
    notes: ['A3', 'E4', 'A4', 'C5#'],
  },
  // 4弦小吉他
];
