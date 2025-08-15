import { Flame, Cookie } from "lucide-react"
import { useState } from "react";


export const TDEESection = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(null);
    const [activity, setActivityLevel] = useState(1.2);
    const [res, setRes] = useState(null);
    const [goal, setGoal] = useState("maintaining");
    const [weeksToLose10, setWeeksToLose10] = useState(null);
    const [targetCals, setTargetCals] = useState(null);


    const GOAL_SETTINGS = {
        cutting:       { delta: -500,  label: "Cutting — ~−500 kcal/day (~1 lb/week)" },
        heavyCutting:  { delta: -1000, label: "Heavy Cutting — ~−1000 kcal/day (~2 lb/week)" },
        bulking:       { delta: +300,  label: "Bulking — ~+300 kcal/day" },
        heavyBulking:  { delta: +600,  label: "Heavy Bulking — ~+600 kcal/day" },
        maintaining:   { delta: 0,     label: "Maintaining — ~0 kcal/day" },
    };
    let tdee = 0;
    const handleSubmit = (e) => {
        e.preventDefault()
        if(gender === "male") {
            const maleBMR = 66 + ( 6.23 * weight ) + ( 12.7 * height ) - ( 6.8 * age );
            tdee = Math.round(maleBMR * activity);
            setRes(tdee);
        } else {
            const womenBMR = 655 + ( 4.35 * weight ) + ( 4.7 * height ) - ( 4.7 * age );
            tdee = Math.round(womenBMR * activity);
            setRes(tdee);
        }
        const { delta } = GOAL_SETTINGS[goal] ?? GOAL_SETTINGS.maintaining;
        const target = tdee + delta;
        setTargetCals(target);

        if (delta < 0) {
            const weeks = 35000 / (Math.abs(delta) * 7);
            setWeeksToLose10(Math.ceil(weeks));
        } else {
            setWeeksToLose10(null);
        }

    }

    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <Cookie
                    className="inline-block w-10 h-10 align-middle mx-1 text-secondary"
                    strokeWidth={2.5}
                    ></Cookie>
                    Total Daily Energy Expenditure
                    <Flame
                    className="inline-block w-10 h-10 align-middle mx-1 text-primary"
                    strokeWidth={2.5}  
                    ></Flame>
                </h2>
                <div className="flex justify-center">
                    {/* Warning Text */}
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border">
                        <h3 className="text-xl font-bold mb-4 text-center">
                            Calculate Your TDEE!
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                htmlFor="goal"
                                className="block text-lg font-semibold font-medium mb-2"
                                >
                                {" "}
                                Desired Fitness Goal:
                                </label>
                                <select
                                id="goal"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                >
                                    <option value="cutting">Cutting</option>
                                    <option value="heavyCutting">Heavy Cutting</option>
                                    <option value="bulking">Bulking</option>
                                    <option value="heavyBulking">Heavy Bulking</option>
                                    <option value="maintaining">Maintaining</option>
                                </select>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {GOAL_SETTINGS[goal].label}
                                </p>
                            </div>

                            <div>
                                <label 
                                htmlFor="gender"
                                className="block text-lg font-semibold font-medium mb-2"
                                >
                                {" "}
                                Your Gender:
                                </label>
                                <input 
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2 w-6 h-6"
                                />
                                Male
                                <input 
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                                className="ml-8 mr-2 w-6 h-6"
                                />
                                Female
                            </div>
                            <div>
                                <label 
                                htmlFor="age" 
                                className="block text-lg font-semibold font-medium mb-2">
                                    {" "}
                                    Age:
                                </label>
                                    <input 
                                    id="age" 
                                    type="number"
                                    name="age"
                                    required
                                    value={age ?? ""}
                                    onChange={(e) => setAge(Number(e.target.value))}
                                    className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                    placeholder="Enter your age"
                                    />
                            </div>

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
                                    required
                                    value={weight ?? ""}
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                    className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                    placeholder="Enter your weight in Lbs"
                                    />
                            </div>


                            <div>
                                <label 
                                htmlFor="height"
                                className="block text-lg font-semibold font-medium mb-2"
                                >
                                    {" "}
                                    Height:
                                </label>
                                    <input
                                    type="number" 
                                    id="height"
                                    name="height"
                                    value={height ?? ""}
                                    onChange={(e) => setHeight(Number(e.target.value))}
                                    required
                                    className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                    placeholder="Enter height in inches"
                                    />
                            </div>

                                                        <div>
                                <label 
                                htmlFor="activity"
                                className="block text-lg font-semibold font-medium mb-2"
                                >
                                {" "}
                                Weekly Activity
                                </label>
                                <select
                                id="activity"
                                value={activity}
                                onChange={(e) => setActivityLevel(Number(e.target.value))}
                                className="w-100 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-accent"
                                >
                                    <option value={1.2}>Sedentary — little to no exercise</option>
                                    <option value={1.375}>Lightly active — 1–3 days/week of light activity or gym</option>
                                    <option value={1.55}>Moderately active — 3–5 days/week of moderate activity or gym</option>
                                    <option value={1.725}>Very active — 6–7 days/week of hard exercise</option>
                                    <option value={1.9}>Extra active — hard exercise daily & physical job</option>
                                </select>
                            </div>

                            <button 
                            type="submit"
                            className="w-100 py-3 px-4 bg-accent text-accent-foreground font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-colors"
                            >
                                Calculate TDEE
                            </button>
                            {res !== null && (
                                <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-lg text-center">
                                    <div>Estimated TDEE: <span className="font-bold">{res}</span> kcal/day</div>
                                    <div>Target intake: <span className="font-bold">{targetCals}</span> kcal/day</div>
                                    {weeksToLose10 !== null && (
                                    <div className="mt-1 text-sm">
                                        ~{weeksToLose10} week{weeksToLose10 > 1 ? "s" : ""} to lose 10 lb
                                    </div>
                                    )}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}