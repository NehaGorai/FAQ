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

    useEffect(() => {
        const rgbColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
        setRgb(rgbColor);

        const hexColor = rgbHex(colors.red, colors.green, colors.blue).toString().toUpperCase();
        setHex(`#${hexColor}`);
    }, [colors]);

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        // setColors((prevColors) => ({
        //     ...prevColors,
        //     [color]: Number(value),
        // }));
        const localColor = { ...colors };
        localColor[name] = Number(value);
        setColors({ ...localColor });
    };

    // function createColorHandler(color) { //red,blue,green
    //     return function (event) {
    //         const value = event.target.value;  // 0-2
    //         handleColorChange(color, value);
    //     };
    // }

    const listing = {
        title: "Color Controls",
        displayVal: "Value:",
        colorSupport: ["RGB Color", "Hex Color"],
        colorSlides: [
            { label: "Red (0-255)", key: "red" },
            { label: "Green (0-255)", key: "green" },
            { label: "Blue (0-255)", key: "blue" },
        ]
    };

    return (
        <div className="flex h-screen">
            {/* Left Column */}
            <div
                style={{ backgroundColor: rgb }}
                className="flex-1 flex flex-col items-center justify-center"
            >
            </div>

            {/* Right Column */}
            <div className="w-1/5 bg-gray-100 p-4">
                <h2 className="text-xl font-semibold mb-6 text-center">{listing.title}</h2>
                <div className="flex flex-col gap-2">
                    {listing.colorSlides.map(({ label, key }) => (
                        <div key={key}>
                            <label className="block text-sm font-semibold mb-2">
                                {label}
                            </label>
                            <input
                                name={key}
                                type="range"
                                min="0"
                                max="255"
                                value={colors[key]}  //red,blue,green
                                onChange={handleColorChange}
                                className="w-full"
                            />
                            <span className="text-sm">{listing.displayVal} {colors[key]}</span>
                        </div>
                    ))}
                    <div>
                        <p className="text-sm">{listing.colorSupport[0]}: <span className='font-bold'>{rgb}</span></p>
                        <p className="text-sm">{listing.colorSupport[1]}: <span className='font-bold'>{hex}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;

