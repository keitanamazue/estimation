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

function EstimateForm() {
  const [value, setValue] = useAtom(contactFormAtom);

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
                value={value.customer.name}
                onChange={(e) =>
                  setValue({
                    ...value,
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
                value={value.broker.name}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, name: e.target.value },
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
                value={value.broker.tel}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, tel: e.target.value },
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
                value={value.broker.fax}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, fax: e.target.value },
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
                value={value.broker.email}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, email: e.target.value },
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
                value={value.broker.address}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, address: e.target.value },
                  })
                }
                className="h-8 text-sm"
              />
            </div>

            {/* 仲介会社 */}
            <div className="col-span-2">
              <Label htmlFor="company_name" className="text-xs">
                会社名
              </Label>
              <Input
                id="company_name"
                value={value.broker.company_name}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, company_name: e.target.value },
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
                value={value.broker.license}
                onChange={(e) =>
                  setValue({
                    ...value,
                    broker: { ...value.broker, license: e.target.value },
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
              <Input
                id="propertyType"
                value={value.property.type}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: { ...value.property, type: e.target.value },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="creationDate" className="text-xs">
                作成日
              </Label>
              <Input
                id="creationDate"
                value={value.property.creationDate}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      creationDate: e.target.value,
                    },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="expirationDate" className="text-xs">
                有効期限
              </Label>
              <Input
                id="expirationDate"
                value={value.property.expirationDate}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      expirationDate: e.target.value,
                    },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            <div className="col-span-4">
              <Label htmlFor="propertyName" className="text-xs">
                物件名
              </Label>
              <Input
                id="propertyName"
                value={value.property.name}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: { ...value.property, name: e.target.value },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            {/* <div>
              <Label htmlFor="initialCost" className="text-xs">
                初期費用 (円)
              </Label>
              <Input
                id="initialCost"
                type="text"
                value={value.property.initialCost}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      initialCost: Number(e.target.value),
                    },
                  })
                }
                className="h-8 text-sm"
              />
            </div> */}
            {/* <div>
              <Label htmlFor="monthlyFee" className="text-xs">
                月額費 (円)
              </Label>
              <Input
                id="monthlyFee"
                type="text"
                value={value.property.monthlyFee}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      monthlyFee: Number(e.target.value),
                    },
                  })
                }
                className="h-8 text-sm"
              />
            </div> */}
            <div>
              <Label htmlFor="moveInDate" className="text-xs">
                入居予定日
              </Label>
              <Input
                id="moveInDate"
                value={value.property.moveInDate}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: { ...value.property, moveInDate: e.target.value },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="contractPeriod" className="text-xs">
                契約期間
              </Label>
              <Input
                id="contractPeriod"
                value={value.property.contractPeriod}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
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
                value={value.property.basicRent}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
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
                value={value.property.managementFee}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
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
                value={value.property.parkingFee}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
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
                value={value.property.contractRenewalFee}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      contractRenewalFee: Number(e.target.value),
                    },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="initialGuaranteeFee" className="text-xs">
                初回保証料 (円)
              </Label>
              <Input
                id="initialGuaranteeFee"
                type="text"
                value={value.property.initialGuaranteeFee}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      initialGuaranteeFee: Number(e.target.value),
                    },
                  })
                }
                className="h-8 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="monthlyGuaranteeFee" className="text-xs">
                月次保証料 (円)
              </Label>
              <Input
                id="monthlyGuaranteeFee"
                type="text"
                value={value.property.monthlyGuaranteeFee}
                onChange={(e) =>
                  setValue({
                    ...value,
                    property: {
                      ...value.property,
                      monthlyGuaranteeFee: Number(e.target.value),
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

            {value.costs.map((cost, index) => (
              <div
                key={cost.備考}
                className="grid grid-cols-8 gap-4 items-center"
              >
                <Label className="text-sm font-medium">{cost.項目}</Label>
                <Input
                  type="text"
                  value={cost.金額}
                  onChange={(e) =>
                    setValue({
                      ...value,
                      costs: value.costs.map((c, i) =>
                        i === index ? { ...c, 金額: Number(e.target.value) } : c
                      ),
                    })
                  }
                  className="col-span-1"
                />
                <div className="flex items-center space-x-2">
                  <Select
                    value={cost.単位}
                    onValueChange={(val) =>
                      setValue({
                        ...value,
                        costs: value.costs.map((c, i) =>
                          i === index ? { ...c, 単位: val } : c
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
                      const newCosts = value.costs
                        .map((c, i) =>
                          i === index ? { ...c, 初期費用: !!checked } : c
                        )
                        .map((c) => ({
                          ...c,
                          初期費用合計: c.初期費用 ? c.金額 : 0,
                        }));
                      setValue({
                        ...value,
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
                      const newCosts = value.costs
                        .map((c, i) =>
                          i === index ? { ...c, 月次費用: !!checked } : c
                        )
                        .map((c) => ({
                          ...c,
                          月次費用合計: c.月次費用 ? c.金額 : 0,
                        }));
                      setValue({
                        ...value,
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
                    setValue({
                      ...value,
                      costs: value.costs.map((c, i) =>
                        i === index
                          ? { ...c, 初期費用合計: Number(e.target.value) }
                          : c
                      ),
                    })
                  }
                  className="col-span-1"
                />
                <Input
                  type="text"
                  value={cost.月次費用合計}
                  onChange={(e) =>
                    setValue({
                      ...value,
                      costs: value.costs.map((c, i) =>
                        i === index
                          ? { ...c, 月次費用合計: Number(e.target.value) }
                          : c
                      ),
                    })
                  }
                  className="col-span-1"
                />
                <Input
                  type="text"
                  value={cost.備考}
                  onChange={(e) =>
                    setValue({
                      ...value,
                      costs: value.costs.map((c, i) =>
                        i === index ? { ...c, 備考: e.target.value } : c
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
              value={value.remarks}
              onChange={(e) => setValue({ ...value, remarks: e.target.value })}
              className="h-24 text-sm"
            />
          </div>
        </CardContent>
        <CardFooter className="bg-gray-800 py-2 px-4 text-white text-center text-xl font-bold">
          <Link href="/estimation" className="w-full">
            次へ
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Component() {
  return <EstimateForm />;
}
