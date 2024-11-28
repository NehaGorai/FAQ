import React, { useState } from 'react';
import data from '../data/featureTwo.json';
console.log(data)
function FeatureTwo() {
    const [selectedCategory, setSelectedCategory] = useState('popular');

    return (
        <div className="container mx-auto border mt-8 rounded-3xl shadow-md">
            <h1 className="text-3xl font-medium pl-6  mt-6 ">Electric Cars</h1>
            <div className="flex border-b-[1px]  mb-8">
                <button
                    onClick={() => setSelectedCategory('popular')}
                    className={`px-6 py-2 rounded ${selectedCategory === 'popular'
                        ? 'underline underline-offset-[12px] decoration-2 decoration-orange-600 font-medium'
                        : ' text-gray-500 font-normal hover:text-gray-600 '
                        }`}
                >
                    Popular
                </button>
                <button
                    onClick={() => setSelectedCategory('upcoming')}
                    className={`px-6 py-2 rounded ${selectedCategory === 'upcoming'
                        ? 'underline underline-offset-[12px] decoration-2 decoration-orange-600 font-medium'
                        : ' text-gray-500 font-normal hover:text-gray-600 '
                        }`}
                >
                    Upcoming
                </button>
                <button
                    onClick={() => setSelectedCategory('latest')}
                    className={`px-6 py-2 rounded ${selectedCategory === 'latest'
                        ? 'underline underline-offset-[12px] decoration-2 decoration-orange-600 font-medium'
                        : ' text-gray-500 font-normal hover:text-gray-600 '
                        }`}
                >
                    Latest
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-4">
                {data[selectedCategory].map((car) => (
                    <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden w-72">
                        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-base font-semibold text-gray-800">{car.name}</h3>
                            <p className="text-base font-semibold mt-2 text-gray-800">
                                {car.price.includes("Estimated Price") ? (
                                    <>
                                        {car.price.split("Estimated Price")[0]}
                                        <span className="text-[10px] font-semibold text-gray-500">Estimated Price</span>
                                    </>
                                ) : (
                                    car.price
                                )}
                            </p>
                            {car.date && (
                                <p className="text-xs font-medium mt-2 text-gray-800">
                                    {car.date}
                                </p>
                            )}
                            <a href={car.offerUrl} className="inline-block text-center mt-4 px-6 py-2 border text-orange-600 w-full border-orange-600 rounded-lg ">
                                {car.offerUrl}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeatureTwo;