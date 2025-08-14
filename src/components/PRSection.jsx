import { Dumbbell } from "lucide-react"
import { useState } from "react";


export const PRSection = () => {
    const [weight, setWeight] = useState(null);
    const [maxReps, setMaxReps] = useState(null);
    const [oneRepMax, setOneRepMax] = useState(null);
    const [type, setType] = useState("lbs");


    const handleSubmit = (e) => {
        e.preventDefault();
        const pr = weight * (1 + maxReps / 30);
        setOneRepMax(pr);

    }

    return (
        <section className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5x1">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Personal Record <span className="text-accent">Calcuations</span>
                    <Dumbbell className="inline-block w-10 h-10 align-middle mx-1"></Dumbbell>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Warning Text */}
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border">
                        <h3 className="text-xl font-bold mb-4 text-center">
                            Careful Considerations!
                        </h3>

                        <ul className="list-disc list-outside pl-3 space-y-2 text-gray-800">
                            <li className="text-xl">These calculations are meant to help gaduge your current strengths relative to your rep range maxes</li>
                            <li className="text-xl">Consider these calculations with a grain of salt, as actual results may vary based on individual factors</li>
                            <li className="text-xl">I am not responsible for any unforseen injuries or potential damages as a result of using this calculator</li>
                            <li className="text-xl">Also, please note this PR calculation is primarily for the <span className="text-primary">Squat</span>, <span className="text-primary">Bench</span>, and <span className="text-primary">Deadlift</span></li>
                        </ul>
                    </div>
                    {/* Calculator */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border mb-0">
                        <h3 className="text-xl font-bold mb-4 text-center"> Calculate Your PR!</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                htmlFor="weight" 
                                className="block text-lg font-semibold font-medium mb-2">
                                    {" "}
                                    Weight:
                                </label>
                                    <input 
                                    id="weight" 
                                    type="number"
                                    name="weight"
                                    value={weight ?? ""}
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                    required
                                    className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                    placeholder="100lbs"
                                    />
                            </div>

                            <div>
                                <label 
                                htmlFor="type"
                                className="block text-lg font-semibold font-medium mb-2"
                                >
                                {" "}
                                Type:
                                </label>
                                <input 
                                type="radio"
                                id="type"
                                name="type"
                                value="lbs"
                                checked={type === "lbs"}
                                onChange={(e) => setType(e.target.value)}
                                className="mr-2 w-6 h-6"
                                />
                                lbs
                                <input 
                                type="radio"
                                id="type"
                                name="type"
                                value="kgs"
                                checked={type === "kgs"}
                                onChange={(e) => setType(e.target.value)}
                                className="ml-8 mr-2 w-6 h-6"
                                />
                                kgs
                            </div>

                            <div>
                                <label 
                                htmlFor="maxReps"
                                className="block text-lg font-semibold font-medium mb-2"
                                >
                                    {" "}
                                    Max Repititions:
                                </label>
                                    <input
                                    type="number" 
                                    id="maxReps"
                                    name="maxReps"
                                    value={maxReps ?? ""}
                                    onChange={(e) => setMaxReps(Number(e.target.value))}
                                    required
                                    className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                    placeholder="5 repitions"
                                    />
                            </div>

                            <button 
                            type="submit"
                            className="w-100 py-3 px-4 bg-accent text-accent-foreground font-semibold rounded-lg shado-md hover:bg-accent/90 transition-colors"
                            >
                                Calculate PR
                            </button>
                            {oneRepMax !== null && (
                                <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg text-center max-w-xs mx-auto">
                                    {" "}
                                    <span className="font-bold text-2xl">{oneRepMax.toFixed(1)}</span> {type}

                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}