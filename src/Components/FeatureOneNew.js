import axios from "axios";
import React, { useEffect, useState } from "react";
// import data from "../data/data.json";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";

function FeatureOne() {
    const [showIndex, setShowItems] = useState({});
    const [data, SetData] = useState([])
    const checking = (index) => {
        const copy = { ...showIndex };
        copy[index] = !copy[index];
        setShowItems({ ...copy });
    };
    useEffect(() => {
        axios.get("http://localhost:4400/faqdata")
            .then((response) => {
                const datas = response.data
                console.log(datas)
                SetData(datas)
            })
            .catch((e) => {
                console.log(e.message)
            })

    }, [])
    return (
        <>
            <div className="container mx-auto">
                {data.map((item, index) => (
                <div key={index} className=" border-b-2 p-[10px] m-2  bg-white">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-lg mb-2">{item.name}</h1>
                        <div className="cursor-pointer" onClick={() => checking(index)}>
                            {showIndex[index] ? (<HiMinus size={24} />) : (<AiOutlinePlus size={24} />)}
                        </div>
                    </div>
                    {
                        showIndex[index] ? <div className={`overflow-hidden transition-all duration-100 max-h-36 overflow-y-scroll`}>
                            <p className="text-gray-700">{item.details}</p>
                        </div> : null
                    }

                </div>
                ))} 
            </div>
        </>
    );
}

export default FeatureOne;


