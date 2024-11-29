import React, { useEffect, useState } from 'react';
import namings from '../data/featureTwo.json';
const langList = Object.keys(namings) 

function FeatureTwo() {
    const [selectedLang, setSelectedLang] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [data, setData] = useState({});
    const [tabs, setTabs] = useState([]);
    useEffect(() => {
        const lang = langList[0];
        setSelectedLang(lang);
        const dataLocal = namings[lang];
        setData({ ...dataLocal });
        const tabsLocal = Object.keys(dataLocal.cars).map((key) => ({ name: key, id: key }));
        setTabs([...tabsLocal]);
        setSelectedCategory(tabsLocal[0].id)
    }, []);
    const onSelectLang = (e) => {
        const lang = e.target.value
        setSelectedLang(lang);
        const dataLocal = namings[lang];
        setData({ ...dataLocal });
        const tabsLocal = Object.keys(dataLocal.cars).map((key) => ({ name: key, id: key }));
        setTabs([...tabsLocal]);
        setSelectedCategory(tabsLocal[0].id) //if this we set on state we dont need to use && for data.cars && data.cars below
    }
    return (
        <div className="container mx-auto border mt-8 rounded-3xl shadow-md">
            <div className='flex justify-between'>
                <h1 className="text-3xl font-medium pl-6  mt-6 ">  {data.title} - {selectedLang}</h1>
                <div className="p-4">
                    <label htmlFor="languageselect" className="mr-4 font-medium text-gray-700">
                        Select Language:
                    </label>
                    <select
                        id="languageselect"
                        value={selectedLang}
                        onChange={onSelectLang}
                        className="px-4 py-2  border border-orange-600 focus:outline-none focus:ring-0  rounded-md text-gray-700"
                    >
                        {langList.map((litem) => (
                            <option key={litem} value={litem}>
                                {litem}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex border-b-[1px]  mb-8">
                {tabs.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedCategory(item.id)}
                        className={`px-6 py-2 rounded ${selectedCategory === item.id
                            ? 'underline underline-offset-[12px] decoration-2 decoration-orange-600 font-medium'
                            : ' text-gray-500 font-normal hover:text-gray-600 '
                            }`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            {/* data.cars && data.car this check can be removed if we set it into state */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-4">
                {data.cars && data.cars[selectedCategory] ? <> 
                    {data.cars[selectedCategory].map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden w-72">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-base font-semibold mt-2 text-gray-800">
                                    {item.price} {item.estimate ? (<span className='text-xs font-semibold text-gray-500'>{item.estimate}</span>) : null}
                                </p>
                                {item.date && (
                                    <p className="text-xs font-medium mt-2 text-gray-800">
                                        {item.date}
                                    </p>
                                )}
                                <a href={item.offerUrl} className="inline-block text-center mt-4 px-6 py-2 border text-orange-600 w-full border-orange-600 rounded-lg whitespace-nowrap  ">
                                    {item.offerUrl}
                                </a>
                            </div>
                        </div>
                    ))}
                </> : null}
            </div>
        </div>
    );
}

export default FeatureTwo;
