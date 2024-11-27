import React, { useState } from "react";
import data from "../data/data.json";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";

function FeatureOne() {
    const [showIndex, setShowItems] = useState({});   //here it is on object Lookuup//better performanse//arrry will take time with filter method if there is 500+ data present.. but using object will take less time to retrive the keys..
    const checking = (index) => {
        const copy = { ...showIndex };
        copy[index] = !copy[index];
        setShowItems({ ...copy });
    };
    console.log(showIndex)
    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="border p-[10px] m-4 w-1/2  bg-white">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-xl mb-2">{item.name}</h1>
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
        </>
    );
}

export default FeatureOne;


