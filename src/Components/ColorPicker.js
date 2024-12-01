import React, { useEffect, useState } from 'react';

function ColorPicker() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [rgb, setRgb] = useState("");
    // const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    useEffect(() => {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        setRgb(rgbColor);
    }, [red, green, blue]);

    return (
        <div className="container mx-auto mt-10 text-center">
            <h1 className="text-2xl font-bold mb-4">RGB Color Picker</h1>
            <div style={{ backgroundColor: rgb }} className="w-64 h-32 mx-auto mb-4  rounded-md shadow-xl border" ></div>
            <p className="text-lg mb-6">Current Color: <strong>{rgb}</strong></p>

            {/* red__________________________________________________________________ */}
            <div className='flex gap-4 items-center justify-center'>
                <div className="mb-4">
                    <label className=" text-sm font-semibold mb-2">Red(0-255)</label>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={red}
                        onChange={(e) => setRed(e.target.value)}
                        className="w-full"
                    />
                    <span className="text-sm">Value: {red}</span>
                </div>

                {/* Green ____________________________________________________________________ */}
                <div className="mb-4">
                    <label className=" text-sm font-semibold mb-2">Green(0-255)</label>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={green}
                        onChange={(e) => setGreen(e.target.value)}
                        className="w-full"
                    />
                    <span className="text-sm">Value: {green}</span>
                </div>

                {/* Blue ____________________________________________________________________ */}
                <div className="mb-4">
                    <label className=" text-sm font-semibold mb-2">Blue(0-255)</label>
                    <input
                        type="range"
                        min="0"
                        max="255"
                        value={blue}
                        onChange={(e) => setBlue(e.target.value)}
                        className="w-full"
                    />
                    <span className="text-sm">Value: {blue}</span>
                </div>

            </div>
        </div>
    );
}

export default ColorPicker;
