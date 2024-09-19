import { atom } from "jotai";

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
    company_name: string;
    tel: string;
    fax: string;
    email: string;
    address: string;
    license: string;
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
    name: "",
  },
  broker: {
    name: "鯰江",
    company_name: "合同会社RHY",
    tel: "",
    fax: "",
    email: "",
    address: "大阪府大阪市東成区深江北1-3-5三好ビル306",
    license: "大阪府知事(1)第65124号",
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
