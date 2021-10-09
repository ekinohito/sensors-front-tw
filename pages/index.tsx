import type {NextPage} from 'next'
import {PointsGraph} from "../src/components/PointsGraph";
import {Paper} from "../src/components/Paper";
import usePoints from "../src/hooks/usePoints";

const Home: NextPage = () => {
    const {points, generatePoints, dropPoints} = usePoints()
    return (
        <>
            <header className="bg-blue-500">
                <div className="container mx-auto sticky py-3">
                    Header
                </div>
            </header>
            <div className="container mx-auto grid grid-cols-3 space-x-7 md:my-12">
                <Paper className="col-span-3 md:col-span-2 text-center order-3 md:order-1">
                    Graph
                    <PointsGraph points={points}/>
                    <button className="" onClick={() => {dropPoints(); generatePoints({})}}>Gen</button>
                </Paper>
                <div className="order-2 col-span-3 md:col-span-1 my-7 md:my-0"><Paper>
                    Buttons
                </Paper></div>
            </div>
        </>
    )
}

export default Home
