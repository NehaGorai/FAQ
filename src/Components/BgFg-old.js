import React, { useEffect, useState } from 'react';
import rgbHex from 'rgb-hex';

function ColorPicker() {
    const [bgColors, setBgColors] = useState({ red: 0, green: 0, blue: 0 });
    const [textColors, setTextColors] = useState({ red: 0, green: 0, blue: 0 });
    const [activeTab, setActiveTab] = useState("Background");
    const [bgRgb, setBgRgb] = useState("");
    const [textRgb, setTextRgb] = useState("");
    const [bgHex, setBgHex] = useState("#000000");
    const [textHex, setTextHex] = useState("#000000");


    useEffect(() => {
        const rgbColor = `rgb(${bgColors.red}, ${bgColors.green}, ${bgColors.blue})`;
        setBgRgb(rgbColor);
        const hexColor = rgbHex(bgColors.red, bgColors.green, bgColors.blue).toUpperCase();
        setBgHex(`#${hexColor}`);
    }, [bgColors]);


    useEffect(() => {
        const rgbColor = `rgb(${textColors.red}, ${textColors.green}, ${textColors.blue})`;
        setTextRgb(rgbColor);
        const hexColor = rgbHex(textColors.red, textColors.green, textColors.blue).toUpperCase();
        setTextHex(`#${hexColor}`);
    }, [textColors]);


    const handleBgColorChange = (e) => {
        const { name, value } = e.target;
        setBgColors((prev) => ({ ...prev, [name]: Number(value) }));
    };


    const handleTextColorChange = (e) => {
        const { name, value } = e.target;
        setTextColors((prev) => ({ ...prev, [name]: Number(value) }));
    };



    const listing = {
        tabs: ["Background", "Text"],
        title: "Color Controls",
        bgControls: [
            { label: "Red (0-255)", key: "red", values: bgColors },
            { label: "Green (0-255)", key: "green", values: bgColors },
            { label: "Blue (0-255)", key: "blue", values: bgColors },
        ],
        textControls: [
            { label: "Red (0-255)", key: "red", values: textColors },
            { label: "Green (0-255)", key: "green", values: textColors },
            { label: "Blue (0-255)", key: "blue", values: textColors },
        ],
    };

    return (
        <div className="flex h-screen">
            {/* Left_________________ */}
            <div
                style={{ backgroundColor: bgRgb, color: textRgb }}
                className="flex-1 flex flex-col items-center justify-center text-5xl font-bold"
            >
                Lorem Ipsum...
            </div>

            {/* Right___________________________ */}
            <div className="w-1/5 bg-gray-100 p-4">
                <h2 className="text-xl font-semibold mb-4 text-center">{listing.title}</h2>

                {/* Tabs________________________- */}
                <div className="flex justify-around mb-4">
                    {listing.tabs.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(item)}
                            className={`px-4 py-2 text-sm font-semibold ${activeTab === item
                                ? " border-b-2 border-blue-500"
                                : ""
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>


                <div>
                    {activeTab === "Background" && (
                        <div>
                            {listing.bgControls.map((item) => (
                                <div key={item.key} className="mb-4">
                                    <label className="block text-sm font-semibold mb-2">
                                        {item.label}
                                    </label>
                                    <input
                                        name={item.key}
                                        type="range"
                                        min="0"
                                        max="255"
                                        value={item.values[item.key]}
                                        onChange={handleBgColorChange}
                                        className="w-full"
                                    />
                                    <span className="text-sm">
                                        Value: {item.values[item.key]}
                                    </span>
                                </div>
                            ))}
                            <p className="text-sm">RGB: <span className="font-bold">{bgRgb}</span></p>
                            <p className="text-sm">Hex: <span className="font-bold">{bgHex}</span></p>
                        </div>
                    )}

                    {activeTab === "Text" && (
                        <div>
                            {listing.textControls.map((item) => (
                                <div key={item.key} className="mb-4">
                                    <label className="block text-sm font-semibold mb-2">
                                        {item.label}
                                    </label>
                                    <input
                                        name={item.key}
                                        type="range"
                                        min="0"
                                        max="255"
                                        value={item.values[item.key]}
                                        onChange={handleTextColorChange}
                                        className="w-full"
                                    />
                                    <span className="text-sm">
                                        Value: {item.values[item.key]}
                                    </span>
                                </div>
                            ))}
                            <p className="text-sm">RGB: <span className="font-bold">{textRgb}</span></p>
                            <p className="text-sm">Hex: <span className="font-bold">{textHex}</span></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;

