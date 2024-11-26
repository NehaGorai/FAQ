import React, { useState } from "react";
import data from "../data/data.json";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";

function FeatureOne() {
    const [showItems, setShowItems] = useState([]);
    const checking = (index) => {
        if (showItems.includes(index)) {
            setShowItems(showItems.filter((itemIndex) => itemIndex !== index));
        } else {
            setShowItems([...showItems, index]);
        }
    };

    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="border p-[10px] m-4 w-1/2  bg-white">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-xl mb-2">{item.name}</h1>
                        <div className="cursor-pointer" onClick={() => checking(index)}>
                            {showItems.includes(index) ? (<HiMinus size={24} />) : (<AiOutlinePlus size={24} />)}
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-100 ${showItems.includes(index) ? "max-h-36 overflow-y-scroll" : "h-0"}`}>
                        <p className="text-gray-700">{item.details}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default FeatureOne;


