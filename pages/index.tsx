import type {NextPage} from 'next'
import {PointsGraph} from "../src/components/PointsGraph";
import {Paper} from "../src/components/Paper";
import usePoints from "../src/hooks/usePoints";
import {PointsForm} from "../src/components/PointsForm";
import React from "react";
import {ToastContainer} from "react-toastify";

const Home: NextPage = () => {
    const {points, generatePoints, dropPoints} = usePoints()
    return (
        <>
            <header className="bg-blue-500">
                <div className="container px-4 mx-auto sticky py-3 text-white text-2xl font-bold">
                    Sensors
                </div>
            </header>
            <div className="container px-4 mx-auto grid grid-cols-3 space-x-7 md:my-12 items-start">
                <Paper className="col-span-3 md:col-span-2 text-center order-3 md:order-1">
                    <h1 className="text-xl font-bold text-gray-700">График</h1>
                    <PointsGraph points={points}/>
                </Paper>
                <div className="order-2 col-span-3 md:col-span-1 my-7 md:my-0">
                    <PointsForm onSubmit={(values) => generatePoints(values)}/>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
            />
        </>
    )
}

export default Home
