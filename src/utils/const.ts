// 物件タイプのカテゴリごとの型を定義
type ResidentialProperty =
  | "アパート"
  | "マンション"
  | "戸建て住宅"
  | "タウンハウス";

type CommercialProperty =
  | "オフィスビル"
  | "店舗・テナント"
  | "倉庫・工場"
  | "事務所";

type InvestmentProperty = "ワンルームマンション" | "アパート一棟" | "商業施設";

type SpecialUseProperty =
  | "サービスアパートメント"
  | "シェアハウス"
  | "ゲストハウス"
  | "老健施設・介護施設";

type LandProperty = "住宅用地" | "商業用地" | "工業用地";

type OtherProperty = "駐車場" | "リゾート物件" | "文化・教育施設";

// 物件タイプ全体を包括する型
type PropertyType =
  | ResidentialProperty
  | CommercialProperty
  | InvestmentProperty
  | SpecialUseProperty
  | LandProperty
  | OtherProperty;

// 各カテゴリごとのリストを定義
const residentialProperties: ResidentialProperty[] = [
  "アパート",
  "マンション",
  "戸建て住宅",
  "タウンハウス",
];

const commercialProperties: CommercialProperty[] = [
  "オフィスビル",
  "店舗・テナント",
  "倉庫・工場",
  "事務所",
];

const investmentProperties: InvestmentProperty[] = [
  "ワンルームマンション",
  "アパート一棟",
  "商業施設",
];

const specialUseProperties: SpecialUseProperty[] = [
  "サービスアパートメント",
  "シェアハウス",
  "ゲストハウス",
  "老健施設・介護施設",
];

const landProperties: LandProperty[] = ["住宅用地", "商業用地", "工業用地"];

const otherProperties: OtherProperty[] = [
  "駐車場",
  "リゾート物件",
  "文化・教育施設",
];

// すべての物件タイプを統合したリスト
export const allProperties: PropertyType[] = [
  ...residentialProperties,
  ...commercialProperties,
  ...investmentProperties,
  ...specialUseProperties,
  ...landProperties,
  ...otherProperties,
];
