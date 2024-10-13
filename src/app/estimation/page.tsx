"use client";
import { contactFormAtom } from "@/app/jotai";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useAtom } from "jotai";

export default function Page() {
	const [value, setValue] = useAtom(contactFormAtom);

	return (
		<Card className="w-full max-w-7xl mx-auto">
			<CardHeader className="bg-black text-white text-center py-6">
				<CardTitle className="text-2xl font-bold">御見積書</CardTitle>
			</CardHeader>
			<CardContent className="p-6">
				<div className="flex justify-between items-start mb-4">
					<div>
						<h2 className="text-2xl font-bold">{value.property.name}</h2>
						<p>{value.property.type}</p>
					</div>
					<div className="text-right">
						<p>作成日 {value.property.creationDate}</p>
						<p>有効期限 {value.property.expirationDate}</p>
					</div>
				</div>
				<div className="flex justify-between items-center mb-4">
					<div>
						<h3 className="font-bold">物件名：{value.property.name}</h3>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="bg-gray-100 py-4 pl-4 pr-24 mb-4 flex flex-col items-start gap-4">
						<p className="text-xl font-bold">
							初期費用（税込） ¥
							{value.costs
								.reduce((acc, cost) => acc + cost.初期費用合計, 0)
								.toLocaleString()}
						</p>
						<p className="text-xl">
							月額費（税込） ¥
							{value.costs
								.reduce((acc, cost) => acc + cost.月次費用合計, 0)
								.toLocaleString()}
							/月
						</p>
					</div>
					<div>
						<div className="space-y-2 text-sm text-right">
							<p className="text-xl font-bold">
								仲介業者: {value.broker.company_name}
							</p>
							<p>住所: {value.broker.address}</p>
							<p>TEL: {value.broker.tel}</p>
							<p>FAX: {value.broker.fax}</p>
							<p>メールアドレス: {value.broker.email}</p>
							<p>免許: {value.broker.license}</p>
							<p>担当: {value.broker.name}</p>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<p>入居予定日：{value.property.moveInDate}</p>
					<p>契約期間：{value.property.contractPeriod}</p>
					<p>
						契約更新料：¥{value.property.contractRenewalFee.toLocaleString()}
					</p>
				</div>
				<div className="grid grid-cols-2 gap-2 mb-2">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead colSpan={2} className="text-center">
									基本情報
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>基本賃料</TableCell>
								<TableCell>
									¥{value.property.basicRent.toLocaleString()}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>共益管理費</TableCell>
								<TableCell>
									¥{value.property.managementFee.toLocaleString()}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>駐車場利用料金</TableCell>
								<TableCell>
									¥{value.property.parkingFee.toLocaleString()}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>契約期間</TableCell>
								<TableCell>{value.property.contractPeriod}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>更新料</TableCell>
								<TableCell>
									¥{value.property.contractRenewalFee.toLocaleString()}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead colSpan={2} className="text-center">
									保証契約関連
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>初回保証料</TableCell>
								<TableCell>
									¥{value.property.initialGuaranteeFee.toLocaleString()}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>月次保証料</TableCell>
								<TableCell>
									¥{value.property.monthlyGuaranteeFee.toLocaleString()}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>項目</TableHead>
							<TableHead>金額</TableHead>
							<TableHead>単位</TableHead>
							<TableHead>初期費用</TableHead>
							<TableHead>月次費用</TableHead>
							<TableHead>初期費用合計</TableHead>
							<TableHead>月次費用合計</TableHead>
							<TableHead>備考</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{value.costs.map((item) => (
							<TableRow key={item.項目}>
								<TableCell>{item.項目}</TableCell>
								<TableCell>{item.金額.toLocaleString()}円</TableCell>
								<TableCell>{item.単位}</TableCell>
								<TableCell>{item.初期費用 ? "✓" : ""}</TableCell>
								<TableCell>{item.月次費用 ? "✓" : ""}</TableCell>
								<TableCell>{item.初期費用合計.toLocaleString()}円</TableCell>
								<TableCell>{item.月次費用合計.toLocaleString()}円</TableCell>
								<TableCell>{item.備考}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="mt-4 flex justify-end gap-4 text-xl border-y-2 py-2">
					<p>
						月額合計：¥
						{value.costs
							.reduce((acc, cost) => acc + cost.月次費用合計, 0)
							.toLocaleString()}
					</p>
					<p className="font-bold">
						初期費用合計：¥
						{value.costs
							.reduce((acc, cost) => acc + cost.初期費用合計, 0)
							.toLocaleString()}
					</p>
				</div>
			</CardContent>
			<CardHeader className="bg-black  py-2 px-4 text-white">
				<h2 className="text-lg font-semibold flex justify-center">
					備考・注意事項
				</h2>
			</CardHeader>
			<CardContent className="p-4 space-y-2">
				<p className="text-sm">{value.remarks}</p>
			</CardContent>
			<CardFooter className="bg-black  text-white  py-2 px-4 text-sm flex justify-center">
				合同会社RHY
			</CardFooter>
		</Card>
	);
}
