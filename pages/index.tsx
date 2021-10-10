import type {NextPage} from 'next'
import {PointsGraph} from "../src/components/PointsGraph";
import {Paper} from "../src/components/Paper";
import usePoints from "../src/hooks/usePoints";
import {PointsForm} from "../src/components/PointsForm";
import React from "react";
import {ToastContainer} from "react-toastify";
import Head from "next/head";
import {ProgressBar} from "../src/components/ProgressBar";
import {Header} from "../src/components/Header";
import useShow from "../src/hooks/useShow";
import {ShowWrapper} from "../src/components/ShowWrapper";
import {AdaptiveLayout} from "../src/components/AdaptiveLayout";

const Home: NextPage = () => {
    const {points, generatePoints, stopGeneration, progress, duration} = usePoints();
    const [showMenu, toggle] = useShow();
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <title>Sensors</title>
            </Head>
            <Header onToggle={toggle} show={showMenu}/>
            <div className="container px-4 mx-auto grid grid-cols-3 md:space-x-7 md:my-12 items-start relative">
                <AdaptiveLayout
                    resetClassName="col-span-3 md:col-span-2 order-3 md:order-1"
                    className="text-center col-span-full mt-7 md:mt-0"
                    reset={showMenu}
                >
                    <Paper>
                        <h1 className="text-xl font-bold text-gray-700">График</h1>
                        <PointsGraph points={points}/>
                    </Paper>
                </AdaptiveLayout>

                <AdaptiveLayout
                    className="my-7 md:my-0"
                    resetClassName="order-2 col-span-3 md:col-span-1"
                    reset={showMenu}
                >
                    {/*<ShowWrapper show={showMenu}>*/}
                    {
                        showMenu &&
                        <>
                            <PointsForm onCancel={stopGeneration} onSubmit={(values) => generatePoints(values)}/>
                            {progress && <ProgressBar width={progress} duration={duration}/>}
                        </>
                    }
                    {/*</ShowWrapper>*/}
                </AdaptiveLayout>

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
