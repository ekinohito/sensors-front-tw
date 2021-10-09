import React from 'react';
import {Control, useController} from "react-hook-form";
import {PointsFormData} from "../types/PointsFormData";

type DataInputProps = {
    name: keyof PointsFormData,
    label: string,
    control: Control<PointsFormData>,
    defaultValue?: number,
}

export const DataInput: React.FC<DataInputProps> =(
    {name, label, control, defaultValue}
) => {
    const {field} = useController({
        name,
        control,
        rules: {required: false},
        defaultValue
    });
    return (
        <label className="flex flex-col text-gray-700 font-sans mb-4">
            <span className="font-bold mb-2 text-sm">{label}</span>
            <input
                type="text"
                {...field}
                className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring"
                placeholder={label}
            />
        </label>
    )
}
