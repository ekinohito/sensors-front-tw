import { NextPage } from "next";
import React from "react";
import { PointsForm } from "../src/components/PointsForm";

const Test: NextPage = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-3 col-start-2">
                    <PointsForm onSubmit={() => null}/>
                </div>
            </div>
        </div>
    )
}

export default Test
