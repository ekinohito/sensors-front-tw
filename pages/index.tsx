import type {NextPage} from 'next'
import {PointsGraph} from "../src/components/PointsGraph";
import {Paper} from "../src/components/Paper";

const Home: NextPage = () => {
    return (
        <>
            <header className="bg-blue-500">
                <div className="container mx-auto sticky py-3">
                    Header
                </div>
            </header>
            <div className="container mx-auto grid grid-cols-3 space-x-7 my-6">
                <Paper className="col-span-2 text-center">
                    Graph
                    <PointsGraph points={[{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 1}]}/>
                </Paper>

                <div><Paper>
                    Buttons
                </Paper></div>
            </div>
        </>
    )
}

export default Home
