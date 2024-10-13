"use client";
import type { ContactFormState } from "@/app/jotai";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { allProperties } from "@/utils/const";
import type { SetStateAction } from "jotai";
import { useState, type Dispatch, type FC } from "react";

interface CalendarInputProps {
	formValue: ContactFormState;
	setFormValue: Dispatch<SetStateAction<ContactFormState>>;
	category: keyof ContactFormState;
	name: string;
}

export const SelectInput: FC<CalendarInputProps> = ({
	formValue,
	setFormValue,
	category,
	name,
}) => {
	return (
		<Select
			value={formValue[category][name]}
			onValueChange={(value) =>
				setFormValue({
					...formValue,
					property: {
						...formValue.property,
						[name]: value,
					},
				})
			}
			defaultValue="マンション"
		>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="マンション" />
			</SelectTrigger>
			<SelectContent>
				{allProperties.map((d, i) => (
					<SelectItem key={i} value={d}>
						{d}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
