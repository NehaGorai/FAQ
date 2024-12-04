import React, { useEffect, useState } from 'react';
import rgbHex from 'rgb-hex';

function ColorPicker() {
    const [colors, setColors] = useState({
        red: 0,
        green: 0,
        blue: 0,
    });
    const [rgb, setRgb] = useState("");
    const [hex, setHex] = useState("#000000");
    const [activeTab, setActiveTab] = useState("background");
    const [textColor, setTextColor] = useState("#ffffff");

    useEffect(() => {
        const rgbColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
        const hexColor = rgbHex(colors.red, colors.green, colors.blue).toString().toUpperCase();
        setRgb(rgbColor);
        setHex(`#${hexColor}`);

        if (activeTab === "background") {
            document.body.style.backgroundColor = rgbColor;
        } else if (activeTab === "text") {
            setTextColor(`#${hexColor}`);
        }
    }, [colors, activeTab]);

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setColors({ ...colors, [name]: Number(value) });
    };

    // const handleTabSwitch = (tabName) => {
    //     setActiveTab(tabName);
    // };

    const handleTabSwitch = (tabName) => {
        setActiveTab(tabName);
    };

    const listing = {
        title: "Color Controls",
        displayVal: "Value:",
        colorSupport: ["RGB Color", "Hex Color"],
        colorSlides: [
            { label: "Red (0-255)", key: "red" },
            { label: "Green (0-255)", key: "green" },
            { label: "Blue (0-255)", key: "blue" },
        ],
    };

    // Define your tabs here
    const tabs = [
        { label: "Background", key: "background" },
        { label: "Foreground", key: "text" },
    ];

    return (
        <div className="flex h-screen">
            {/* ____________Left Column___________________________________ */}
            <div
                style={{
                    backgroundColor: activeTab === "background" ? rgb : "#ffffff",
                    color: activeTab === "text" ? textColor : "#000000",
                }}
                className="flex-1 flex flex-col items-center justify-center"
            >
                <h1 className="text-4xl font-bold" style={{ color: textColor }}>
                    Lorem Ipsum.....
                </h1>
            </div>

            {/* _______________Right Column__________________________________ */}
            <div className="w-1/5 bg-gray-100 p-4">
                {/*___________ Tabs___________  */}
                <div className="flex space-x-4 mb-6 justify-center">
                    {tabs.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleTabSwitch(item.key)}
                            className={`px-4 py-2 ${activeTab === item.key ? "border-blue-500 border-b-2" : ""
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* *___________ Color Controls *___________  */}
                <h2 className="text-xl font-semibold mb-6 text-center">{listing.title}</h2>
                <div className="flex flex-col gap-2">
                    {listing.colorSlides.map((item) => (
                        <div key={item.key}>
                            <label className="block text-sm font-semibold mb-2">
                                {item.label}
                            </label>
                            <input
                                name={item.key}
                                type="range"
                                min="0"
                                max="255"
                                value={colors[item.key]}
                                onChange={handleColorChange}
                                className="w-full"
                            />
                            <span className="text-sm">{listing.displayVal} {colors[item.key]}</span>
                        </div>
                    ))}
                    <div>
                        <p className="text-sm">{listing.colorSupport[0]}: <span className="font-bold">{rgb}</span></p>
                        <p className="text-sm">{listing.colorSupport[1]}: <span className="font-bold">{hex}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;
