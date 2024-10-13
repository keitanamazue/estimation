"use client";

import { atom, useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { useRouter } from "next/navigation";

import { contactFormAtom } from "@/app/jotai"; // jotaiのatomをインポート
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import { CalendarInput } from "@/components/CalendarInput";
import { SelectInput } from "@/components/SelectInput";

function EstimateForm() {
	const router = useRouter();
	const [value, setValue] = useAtom(contactFormAtom);
	const [formValue, setFormValue] = useState(value);

	const onHandleNextPage = () => {
		console.log({ formValue });

		setValue(formValue);
		router.push("/estimation");
	};

	console.log({ formValue });

	return (
		<div>
			<Card className="w-full max-w-4xl mx-auto">
				<CardHeader className="bg-blue-400 text-white text-center py-4">
					<CardTitle className="text-2xl font-bold">御見積書</CardTitle>
				</CardHeader>
				<CardContent className="p-4">
					<div className="grid grid-cols-4 gap-2">
						{/* お客さん */}
						<div className="col-span-2">
							<Label htmlFor="clientName" className="text-xs">
								お客様名
							</Label>
							<Input
								id="property_name"
								value={formValue.customer.name}
								onChange={(e) =>
									setFormValue({
										...formValue,
										customer: { ...value.customer, name: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						{/* お客さん */}

						{/* 仲介会社 */}
						<div className="col-span-2">
							<Label htmlFor="clientName" className="text-xs">
								ブローカー名
							</Label>
							<Input
								id="property_name"
								value={formValue.broker.name}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: { ...formValue.broker, name: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div className="col-span-2">
							<Label htmlFor="brokerTel" className="text-xs">
								ブローカー電話番号
							</Label>
							<Input
								id="brokerTel"
								value={formValue.broker.tel}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: { ...formValue.broker, tel: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div className="col-span-2">
							<Label htmlFor="brokerFax" className="text-xs">
								ブローカーファックス
							</Label>
							<Input
								id="brokerFax"
								value={formValue.broker.fax}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: { ...formValue.broker, fax: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div className="col-span-2">
							<Label htmlFor="brokerEmail" className="text-xs">
								ブローカーメール
							</Label>
							<Input
								id="brokerEmail"
								value={formValue.broker.email}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: { ...formValue.broker, email: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div className="col-span-2">
							<Label htmlFor="brokerAddress" className="text-xs">
								ブローカー住所
							</Label>
							<Input
								id="brokerAddress"
								value={formValue.broker.address}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: { ...formValue.broker, address: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>

						{/* 仲介会社 */}
						<div className="col-span-2">
							<Label htmlFor="company_name" className="text-xs">
								仲介業者
							</Label>
							<Input
								id="company_name"
								value={formValue.broker.company_name}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: {
											...formValue.broker,
											company_name: e.target.value,
										},
									})
								}
								className="h-8 text-sm"
							/>
						</div>

						{/* 仲介会社 */}
						<div className="col-span-2">
							<Label htmlFor="license" className="text-xs">
								免許
							</Label>
							<Input
								id="license"
								value={formValue.broker.license}
								onChange={(e) =>
									setFormValue({
										...formValue,
										broker: { ...formValue.broker, license: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>

						{/* 仲介会社 */}

						<div className="col-span-2">
							<Label htmlFor="propertyType" className="text-xs">
								物件タイプ
							</Label>
							<SelectInput
								formValue={formValue}
								setFormValue={setFormValue}
								category="property"
								name="type"
							/>
						</div>
						<div className="col-span-2 flex flex-col">
							<Label htmlFor="creationDate" className="text-xs">
								作成日
							</Label>
							<CalendarInput
								formValue={formValue}
								setFormValue={setFormValue}
								category="property"
								name="creationDate"
							/>
						</div>
						<div className="col-span-2">
							<Label htmlFor="expirationDate" className="text-xs">
								有効期限
							</Label>

							<CalendarInput
								formValue={formValue}
								setFormValue={setFormValue}
								category="property"
								name="expirationDate"
							/>
						</div>
						<div className="col-span-4">
							<Label htmlFor="propertyName" className="text-xs">
								物件名
							</Label>
							<Input
								id="propertyName"
								value={formValue.property.name}
								onChange={(e) =>
									setFormValue({
										...formValue,
										property: { ...formValue.property, name: e.target.value },
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div>
							<Label htmlFor="moveInDate" className="text-xs">
								入居予定日
							</Label>
							<CalendarInput
								formValue={formValue}
								setFormValue={setFormValue}
								category="property"
								name="moveInDate"
							/>
						</div>
						<div>
							<Label htmlFor="contractPeriod" className="text-xs">
								契約期間
							</Label>
							<Input
								id="contractPeriod"
								value={formValue.property.contractPeriod}
								onChange={(e) =>
									setFormValue({
										...formValue,
										property: {
											...formValue.property,
											contractPeriod: e.target.value,
										},
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div>
							<Label htmlFor="basicRent" className="text-xs">
								基本賃料 (円)
							</Label>
							<Input
								id="basicRent"
								type="text"
								value={formValue.property.basicRent}
								onChange={(e) =>
									setFormValue({
										...formValue,
										property: {
											...formValue.property,
											basicRent: Number(e.target.value),
										},
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div>
							<Label htmlFor="managementFee" className="text-xs">
								共益管理費 (円)
							</Label>
							<Input
								id="managementFee"
								type="text"
								value={formValue.property.managementFee}
								onChange={(e) =>
									setFormValue({
										...formValue,
										property: {
											...formValue.property,
											managementFee: Number(e.target.value),
										},
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div>
							<Label htmlFor="parkingFee" className="text-xs">
								駐車場料金 (円)
							</Label>
							<Input
								id="parkingFee"
								type="text"
								value={formValue.property.parkingFee}
								onChange={(e) =>
									setFormValue({
										...formValue,
										property: {
											...formValue.property,
											parkingFee: Number(e.target.value),
										},
									})
								}
								className="h-8 text-sm"
							/>
						</div>
						<div>
							<Label htmlFor="contractRenewalFee" className="text-xs">
								契約更新料 (円)
							</Label>
							<Input
								id="contractRenewalFee"
								type="text"
								value={formValue.property.contractRenewalFee}
								onChange={(e) =>
									setFormValue({
										...formValue,
										property: {
											...formValue.property,
											contractRenewalFee: Number(e.target.value),
										},
									})
								}
								className="h-8 text-sm"
							/>
						</div>
					</div>
					<div className="space-y-4 mt-8">
						<div className="grid grid-cols-8 gap-4 items-center font-bold mb-2">
							<div>項目</div>
							<div>金額</div>
							<div>単位</div>
							<div className="col-span-2">費用タイプ</div>
							<div>初期費用合計</div>
							<div>月次費用合計</div>
							<div>備考</div>
						</div>

						{formValue.costs.map((cost, index) => (
							<div
								key={cost.項目}
								className="grid grid-cols-8 gap-4 items-center"
							>
								<Label className="text-sm font-medium">{cost.項目}</Label>
								<Input
									type="text"
									value={cost.金額}
									onChange={(e) =>
										setFormValue({
											...formValue,
											costs: formValue.costs.map((c, i) =>
												i === index
													? { ...c, 金額: Number(e.target.value) }
													: c,
											),
										})
									}
									className="col-span-1"
								/>
								<div className="flex items-center space-x-2">
									<Select
										value={cost.単位}
										onValueChange={(val) =>
											setFormValue({
												...formValue,
												costs: formValue.costs.map((c, i) =>
													i === index ? { ...c, 単位: val } : c,
												),
											})
										}
									>
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="Theme" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="円">円</SelectItem>
											<SelectItem value="月">月</SelectItem>
											<SelectItem value="ヶ月">ヶ月</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox
										id={`initialCost-${index}`}
										checked={cost.初期費用}
										onCheckedChange={(checked) => {
											const newCosts = formValue.costs
												.map((c, i) =>
													i === index ? { ...c, 初期費用: !!checked } : c,
												)
												.map((c) => ({
													...c,
													初期費用合計: c.初期費用 ? c.金額 : 0,
												}));
											setFormValue({
												...formValue,
												costs: newCosts,
											});
										}}
									/>
									<Label htmlFor={`initialCost-${index}`} className="text-sm">
										初期費用
									</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox
										id={`monthlyCost-${index}`}
										checked={cost.月次費用}
										onCheckedChange={(checked) => {
											const newCosts = formValue.costs
												.map((c, i) =>
													i === index ? { ...c, 月次費用: !!checked } : c,
												)
												.map((c) => ({
													...c,
													月次費用合計: c.月次費用 ? c.金額 : 0,
												}));
											setFormValue({
												...formValue,
												costs: newCosts,
											});
										}}
									/>
									<Label htmlFor={`monthlyCost-${index}`} className="text-sm">
										月次費用
									</Label>
								</div>
								<Input
									type="text"
									value={cost.初期費用合計}
									onChange={(e) =>
										setFormValue({
											...formValue,
											costs: formValue.costs.map((c, i) =>
												i === index
													? { ...c, 初期費用合計: Number(e.target.value) }
													: c,
											),
										})
									}
									className="col-span-1"
								/>
								<Input
									type="text"
									value={cost.月次費用合計}
									onChange={(e) =>
										setFormValue({
											...formValue,
											costs: formValue.costs.map((c, i) =>
												i === index
													? { ...c, 月次費用合計: Number(e.target.value) }
													: c,
											),
										})
									}
									className="col-span-1"
								/>
								<Input
									type="text"
									value={cost.備考}
									onChange={(e) =>
										setFormValue({
											...formValue,
											costs: formValue.costs.map((c, i) =>
												i === index ? { ...c, 備考: e.target.value } : c,
											),
										})
									}
									className="col-span-1"
								/>
							</div>
						))}
					</div>
					<div className="mt-4">
						<Label htmlFor="remarks" className="text-xs">
							備考・注意事項
						</Label>
						<Textarea
							id="remarks"
							value={formValue.remarks}
							onChange={(e) =>
								setFormValue({ ...formValue, remarks: e.target.value })
							}
							className="h-24 text-sm"
						/>
					</div>
				</CardContent>
				<CardFooter className="bg-gray-800 py-2 px-4 text-white text-center text-xl font-bold">
					<button type="button" onClick={onHandleNextPage} className="w-full">
						次へ
					</button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default function Component() {
	return <EstimateForm />;
}
