import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <>
            <header className="bg-blue-500">
                <div className="container mx-auto sticky py-3">
                    Header
                </div>
            </header>
            <div className="container mx-auto grid grid-cols-3 space-x-7 my-6">
                <div className="col-span-2 bg-gray-500 text-center">Graph</div>
                <div className="bg-red-500">Buttons</div>
            </div>
        </>
    )
}

export default Home
