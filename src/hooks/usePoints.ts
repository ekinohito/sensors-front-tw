import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import {toast} from 'react-toastify'
import {Point} from "../types/Point";
import {PointsFormData} from "../types/PointsFormData";

const socket = io(process.env.NEXT_PUBLIC_SOCKETIO_URL || '/');

const connPromise = () => new Promise((resolve) => {
    socket.once('connect', () => resolve(socket))
})

export default function usePoints() {
    const [points, setPoints] = useState<Point[]>([]);
    const [quantity, setQuantity] = useState<number | null>(null);
    useEffect(() => {
        toast.promise(connPromise, {
            pending: 'Подключение к серверу',
            error: 'Ошибка подключения',
            success: 'Подключено к серверу'
        }).then()
    }, []);
    const generatePoints = (data: PointsFormData) => {setQuantity(data.quantity); socket.emit('generate_points', data)}
    const stopGeneration = () => socket.emit('stop_generation');
    useEffect(() => {
        socket.on('new_point', point => {
            setPoints(points => [...points, point])
        });
        socket.on('new_graph', () => {setPoints([])})
    }, []);
    const dropPoints = () => setPoints([])
    const progress = quantity && (points.length / quantity)
    return {points, generatePoints, dropPoints, stopGeneration, progress}
}