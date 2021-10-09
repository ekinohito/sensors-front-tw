import type {NextPage} from 'next'
import {PointsGraph} from "../src/components/PointsGraph";
import {Paper} from "../src/components/Paper";
import usePoints from "../src/hooks/usePoints";
import {PointsForm} from "../src/components/PointsForm";
import React from "react";
import {ToastContainer} from "react-toastify";
import Head from "next/head";
import {ProgressBar} from "../src/components/ProgressBar";

const Home: NextPage = () => {
    const {points, generatePoints, stopGeneration, progress} = usePoints()
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <title>Sensors</title>
            </Head>
            <header className="bg-blue-500">
                <div className="container px-4 mx-auto sticky py-3 text-white text-2xl font-bold">
                    Sensors
                </div>
            </header>
            <div className="container px-4 mx-auto grid grid-cols-3 md:space-x-7 md:my-12 items-start">
                <div className="col-span-3 md:col-span-2 text-center order-3 md:order-1">
                    <Paper>
                        <h1 className="text-xl font-bold text-gray-700">График</h1>
                        <PointsGraph points={points}/>
                    </Paper>
                </div>

                <div className="order-2 col-span-3 md:col-span-1 my-7 md:my-0">
                    <PointsForm onCancel={stopGeneration} onSubmit={(values) => generatePoints(values)}/>
                    {progress?<ProgressBar width={progress}/>:<></>}
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
