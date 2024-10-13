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
	"初回保証料 ",
	"月次保証料",
].map((item) => ({
	項目: item,
	金額: process.env.NODE_ENV === "development" ? 1000 : 0,
	単位: process.env.NODE_ENV === "development" ? "円" : "円",
	初期費用: process.env.NODE_ENV === "development" ? false : false,
	月次費用: process.env.NODE_ENV === "development" ? false : false,
	初期費用合計: process.env.NODE_ENV === "development" ? 1000 : 0,
	月次費用合計: process.env.NODE_ENV === "development" ? 1000 : 0,
	備考: process.env.NODE_ENV === "development" ? "" : "",
}));

export type ContactFormState = {
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
		name: process.env.NODE_ENV === "development" ? "ダミー顧客" : "",
	},
	broker: {
		name: "鯰江",
		company_name: "合同会社RHY",
		tel: process.env.NODE_ENV === "development" ? "000-0000-0000" : "",
		fax: process.env.NODE_ENV === "development" ? "000-0000-0000" : "",
		email: process.env.NODE_ENV === "development" ? "dummy@example.com" : "",
		address: "大阪府大阪市東成区深江北1-3-5三好ビル306",
		license: "大阪府知事(1)第65124号",
	},
	property: {
		name: "ロイヤルパークスER万代1217",
		type: "マンション",
		creationDate: "",
		expirationDate:
			process.env.NODE_ENV === "development" ? "2024年7月10日" : "",
		moveInDate: process.env.NODE_ENV === "development" ? "2024年7月15日" : "",
		contractPeriod: process.env.NODE_ENV === "development" ? "2年" : "",
		contractRenewalFee: process.env.NODE_ENV === "development" ? 129000 : 0,
		basicRent: process.env.NODE_ENV === "development" ? 129000 : 0,
		managementFee: process.env.NODE_ENV === "development" ? 16000 : 0,
		parkingFee: process.env.NODE_ENV === "development" ? 14300 : 0,
		initialGuaranteeFee: process.env.NODE_ENV === "development" ? 35000 : 0,
		monthlyGuaranteeFee: process.env.NODE_ENV === "development" ? 1593 : 0,
	},
	costs: initialCosts,
	remarks:
		process.env.NODE_ENV === "development"
			? "契約年数及び更新費用：当物件の契約年数は2年間とし、契約更新料は129000円となります。\n保証会社契約関連：保証会社契約金として初回契約時に35000円が必要となります。"
			: "",
});
