import { atom } from "jotai";

// // Atoms for each form field
// export const clientNameAtom = atom("");
// export const propertyTypeAtom = atom("");
// export const creationDateAtom = atom("");
// export const expirationDateAtom = atom("2024年7月10日");
// export const propertyNameAtom = atom("ロイヤルパークスER万代1217");
// export const initialCostAtom = atom(645120);
// export const monthlyFeeAtom = atom(160893);
// export const moveInDateAtom = atom("2024年7月15日");
// export const contractPeriodAtom = atom("2年");
// export const contractRenewalFeeAtom = atom(129000);
// export const basicRentAtom = atom(129000);
// export const managementFeeAtom = atom(16000);
// export const parkingFeeAtom = atom(14300);
// export const initialGuaranteeFeeAtom = atom(35000);
// export const monthlyGuaranteeFeeAtom = atom(1593);
// export const remarksAtom = atom(
//   "契約年数及び更新費用：当物件の契約年数は2年間とし、契約更新料は129000円となります。\n保証会社契約関連：保証会社契約金として初回契約時に35000円が必要となります。"
// );
// export const costBreakdownAtom = atom(initialCosts);
const initialCosts = [
  "賃料",
  "日割り家賃",
  "敷金",
  "礼金（税込）",
  "保証金・解約引",
  "共益費（税込）",
  "駐車場利用料",
  "駐車場保証金",
  "駐車場礼金",
  "バイク置場利用料",
  "駐輪場利用料",
  "更新料・更新事務手数料",
  "鍵交換費用",
  "室内消毒費用",
  "24時間駆け付けサポート",
  "電子ロック初期費用",
  "CATV",
  "月額保証料/保険料",
  "カードキー発行手数料",
].map((item) => ({
  項目: item,
  金額: 0,
  単位: "円",
  初期費用: false,
  月次費用: false,
  初期費用合計: 0,
  月次費用合計: 0,
  備考: "",
}));

type ContactFormState = {
  customer: {
    name: string;
  };
  broker: {
    name: string;
    tel: string;
    fax: string;
    email: string;
    address: string;
  };
  property: {
    name: string;
    type: string;
    creationDate: string;
    expirationDate: string;
    moveInDate: string;
    contractPeriod: string;
    contractRenewalFee: number;
    basicRent: number;
    managementFee: number;
    parkingFee: number;
    initialGuaranteeFee: number;
    monthlyGuaranteeFee: number;
  };
  costs: Array<{
    項目: string;
    金額: number;
    単位: string;
    初期費用: boolean;
    月次費用: boolean;
    初期費用合計: number;
    月次費用合計: number;
    備考: string;
  }>;
  remarks: string;
};

export const contactFormAtom = atom<ContactFormState>({
  customer: {
    name: "高山様",
  },
  broker: {
    name: "仲介太郎",
    tel: "",
    fax: "",
    email: "",
    address: "",
  },
  property: {
    name: "ロイヤルパークスER万代1217",
    type: "",
    creationDate: "",
    expirationDate: "2024年7月10日",
    moveInDate: "2024年7月15日",
    contractPeriod: "2年",
    contractRenewalFee: 129000,
    basicRent: 129000,
    managementFee: 16000,
    parkingFee: 14300,
    initialGuaranteeFee: 35000,
    monthlyGuaranteeFee: 1593,
  },
  costs: initialCosts,
  remarks:
    "契約年数及び更新費用：当物件の契約年数は2年間とし、契約更新料は129000円となります。\n保証会社契約関連：保証会社契約金として初回契約時に35000円が必要となります。",
});
