"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ja } from "date-fns/locale";
import type { FC, Dispatch, SetStateAction } from "react";
import type { ContactFormState } from "@/app/jotai";

interface CalendarInputProps {
	formValue: ContactFormState;
	setFormValue: Dispatch<SetStateAction<ContactFormState>>;
	category: keyof ContactFormState;
	name: string;
}

export const CalendarInput: FC<CalendarInputProps> = ({
	formValue,
	setFormValue,
	category,
	name,
}) => {
	const [date, setDate] = React.useState<Date>(formValue[category][name]);

	console.log({ date });

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-full justify-start text-left font-normal mt-1",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? (
						typeof date === "string" &&
						/^\d{4}年\d{1,2}月\d{1,2}日$/.test(date) ? (
							date
						) : (
							format(date, "yyyy年MM月dd日")
						)
					) : (
						<span>日付を選択</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full">
				<Calendar
					locale={ja}
					mode="single"
					selected={date}
					onSelect={(d) => {
						if (!d) return;
						setDate(d);
						setFormValue({
							...formValue,
							[category]: {
								...(typeof formValue[category] === "object"
									? formValue[category]
									: {}),
								[name]: format(d, "yyyy年MM月dd日"),
							},
						});
					}}
					initialFocus
					className="w-full"
				/>
			</PopoverContent>
		</Popover>
	);
};
