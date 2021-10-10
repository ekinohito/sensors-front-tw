import React from 'react';
import {DataInput} from "./DataInput";
import {useForm} from "react-hook-form";
import {PointsFormData} from "../types/PointsFormData";
import {Paper} from "./Paper";

interface PointsFormProps {
    onSubmit: (data: PointsFormData) => void,
    onCancel: () => void,
    canCancel?: boolean
}

export const PointsForm: React.FC<PointsFormProps> = ({onSubmit, onCancel, canCancel=true}) => {
    const {control, handleSubmit} = useForm<PointsFormData>();
    return (
        <Paper>
            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <DataInput name="min_x" label="Минимум x" control={control} defaultValue={0}/>
                <DataInput name="max_x" label="Максимум x" control={control} defaultValue={10}/>
                <DataInput name="min_y" label="Минимум y" control={control} defaultValue={1}/>
                <DataInput name="max_y" label="Максимум x" control={control} defaultValue={6}/>
                <DataInput name="quantity" label="Количество точек" control={control} defaultValue={11}/>
                <DataInput name="sleep" label="Интервал передачи" control={control} defaultValue={0.5}/>
                <div className="flex flex-row justify-around flex-wrap">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white
                         font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 flex-grow">
                        НАЧАТЬ!
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className={`bg-red-500 hover:bg-red-700 text-white
                            font-bold py-2 px-4 rounded focus:outline-none
                            focus:shadow-outline m-2 flex-grow ${canCancel?'':'hidden'}`}>
                        ЗАКОНЧИТЬ!
                    </button>
                </div>

            </form>
        </Paper>

    )
}
