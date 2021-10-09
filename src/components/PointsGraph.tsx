import React from 'react';
import {CartesianGrid, Line, ResponsiveContainer, XAxis, YAxis, LineChart} from "recharts";
import {Point} from "../types/Point";

export const PointsGraph: React.FC<{points: Point[]}> = ({points}) => {
    return <ResponsiveContainer width="100%" height={400} minWidth={200}>
            <LineChart data={points} margin={{top: 40, right: 30, left: 0, bottom: 0}}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" isAnimationActive={false}/>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="x" type="number"/>
                <YAxis/>
            </LineChart>
        </ResponsiveContainer>
}
