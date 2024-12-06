import React, { useState } from 'react';
import rgbHex from 'rgb-hex';
const listing = {
    tabs: [{ id: "background", name: "Background" }, { id: "text", name: "Text" }],
    activeTab: "background",
    title: "Color Controls",
    controls: [
        { label: "Red (0-255)", id: "red" },
        { label: "Green (0-255)", id: "green" },
        { label: "Blue (0-255)", id: "blue" },
    ]
};

function ColorPicker() {
    const [activeTab, setActiveTab] = useState(listing.activeTab);
    const [state, setState] = useState({
        background: { red: 0, green: 0, blue: 0, hex: "#000000", rgb: "rgb(0,0,0)" },
        text: { red: 0, green: 0, blue: 0, hex: "#000000", rgb: "rgb(0,0,0)" }
    });



    const onColorChange = (e) => {
        const { name, value } = e.target;
        const localState = { ...state };
        localState[activeTab] = {
            ...localState[activeTab],
            [name]: +value
        };
        const rgbColor = `rgb(${localState[activeTab].red}, ${localState[activeTab].green}, ${localState[activeTab].blue})`;
        const hexColor = rgbHex(localState[activeTab].red, localState[activeTab].green, localState[activeTab].blue).toUpperCase();
        localState[activeTab].rgb = rgbColor;
        localState[activeTab].hex = hexColor;

        console.log(name, value, localState);
        setState({ ...localState });
    };

    return (
        <div className="flex h-screen">
            {/* Left_________________ */}
            <div
                style={{ backgroundColor: state.background.rgb, color: state.text.rgb }}
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
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`px-4 py-2 text-sm font-semibold ${activeTab === item.id
                                ? " border-b-2 border-blue-500"
                                : ""
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div>
                    <div>
                        {listing.controls.map((item) => (
                            <div key={item.id} className="mb-4">
                                <label className="block text-sm font-semibold mb-2">
                                    {item.label}
                                </label>
                                <input
                                    name={item.id}
                                    type="range"
                                    min="0"
                                    max="255"
                                    value={state[activeTab][item.id]}
                                    onChange={onColorChange}
                                    className="w-full"
                                />
                                <span className="text-sm">
                                    Value: {state[activeTab][item.id]}
                                </span>
                            </div>
                        ))}

                        {listing.tabs.map((item) => <>
                            <p>{item.name}</p>
                            <p className="text-sm">RGB: <span className="font-bold">{state[item.id].rgb}</span></p>
                            <p className="text-sm">Hex: <span className="font-bold">{state[item.id].hex}</span></p>
                        </>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;

