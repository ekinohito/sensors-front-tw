import React from 'react';
import {DataInput} from "./DataInput";
import {useForm} from "react-hook-form";
import {PointsFormData} from "../types/PointsFormData";

interface PointsFormProps {
    onSubmit: (data: PointsFormData) => void
}

export const PointsForm: React.FC<PointsFormProps> = ({onSubmit}) => {
    const {control, handleSubmit} = useForm<PointsFormData>();
    return (
        <form
            className="flex flex-col rounded-xl shadow-xl p-4 border"
            onSubmit={() => handleSubmit((values) => onSubmit(values))}
        >
            <DataInput name="min_x" label="Минимум x" control={control}/>
            <DataInput name="max_x" label="Максимум x" control={control}/>
            <DataInput name="min_y" label="Минимум y" control={control}/>
            <DataInput name="max_y" label="Максимум x" control={control}/>
            <DataInput name="quantity" label="Количество точек" control={control}/>
            <DataInput name="sleep" label="Интервал передачи" control={control}/>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end"
            >
                НАЧАТЬ!
            </button>
        </form>
    )
}
