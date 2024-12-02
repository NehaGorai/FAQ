import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinus } from "react-icons/hi";

function Faq() {
    const [showIndex, setShowItems] = useState({});
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        axios.get("http://localhost:4400/faqdata")
            .then((response) => {
                const datas = response.data;
                console.log(datas);
                setData(datas);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    const checking = (index) => {
        const copy = { ...showIndex };
        copy[index] = !copy[index];
        setShowItems({ ...copy });
    };
    const changeHandler = (e) => setLanguage(e.target.value)

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-2 p-[10px]">
                    Select Language:
                    <select value={language} onChange={changeHandler} className="ml-2">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
                {data.map((item, index) => (
                    <div key={index} className="border-b-2 p-[10px] m-2 bg-white">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-lg mb-2">{item.name[language]}</h1> {/* Use selected language */}
                            <div className="cursor-pointer" onClick={() => checking(index)}>
                                {showIndex[index] ? (<HiMinus size={24} />) : (<AiOutlinePlus size={24} />)}
                            </div>
                        </div>
                        {showIndex[index] && (
                            <div className={`overflow-hidden transition-all duration-100 max-h-36 overflow-y-scroll`}>
                                <p className="text-gray-700">{item.details[language]}</p> {/* Use selected language */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Faq;
