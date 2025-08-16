export const WorkoutSplitsSection = () => {
    return (
        <section className="py-24 px-4 relative">
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Workout <span className="text-accent"> Details</span>
            </h2>
            <div className="container mx-auto max-w-4x1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
                        {/* Warning Text */}
                        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border h-full">
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                <span className="text-accent">Arm Day</span>
                            </h3>

                            <ul className="list-none list-outside pl-3 space-y-4 text-gray-800">
                                <li className="text-2xl">Preacher Curls: <br></br>3 sets, rep until failure ~ 100 lbs </li>
                                <li className="text-2xl">Hammer Curls: <br></br>3 sets, 8-12 reps ~ 40 lbs </li>
                                <li className="text-2xl">Seated Bicep Curl Machine: <br></br>2 sets, 8-10 reps ~ 120 lbs </li>
                                <li className="text-2xl">Ticeps Pulldown: <br></br>3 sets, 8-12 reps ~ 80 lbs </li>
                                <li className="text-2xl">Fore Arm Curls: <br></br>2 sets, 20 reps ~ 100 lbs </li>
                            </ul>

                            <h3 className="text-2xl font-bold mt-4 mb-4 text-center">
                                Optional:
                            </h3>

                            <ul className="list-none list-outside pl-3 space-y-4 text-gray-800">
                                <li className="text-2xl">Seated Lateral Raises: <br></br>3 sets, 8-12 reps ~ 150 lbs </li>
                                <li className="text-2xl">Barbell Static Hold: <br></br>1 set, 1 minute hold </li>
                            </ul>
                            
                        </div>
                        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border h-full">
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                <span className="text-primary">Chest Day</span>
                            </h3>

                            <ul className="list-none list-outside pl-3 space-y-4 text-gray-800">
                                <li className="text-2xl">Bench Press: <br></br>4 sets, 3-5 reps ~ 275 lbs <br></br>*last set drop to 225 lbs & rep until failure*</li>
                                <li className="text-2xl">Incline Dumbbell Bench: <br></br>2 sets, 6-8 reps ~ 100 lbs </li>
                                <li className="text-2xl">Dips: <br></br>3 sets, 10 reps ~ body weight </li>
                                <li className="text-2xl">Pec Deck: <br></br>3 sets, 8-12 reps ~ 225 lbs </li>
                            </ul>

                            <h3 className="text-2xl font-bold mt-4 mb-4 text-center">
                                Optional:
                            </h3>

                            <ul className="list-none list-outside pl-3 space-y-4 text-gray-800">
                                <li className="text-2xl">Seated Incline Smith Machine: <br></br>3 sets, 8-12 reps ~ 225 lbs </li>
                                <li className="text-2xl">Seated Chest Press Machine: <br></br>3 sets, 8-10 reps ~ 135 lbs </li>
                            </ul>
                            
                        </div>
                        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border h-full">
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                <span className="text-secondary">Back Day</span>
                            </h3>

                            <ul className="list-none list-outside pl-3 space-y-4 text-gray-800">
                                <li className="text-2xl">Deadlift: <br></br>3 sets, 3 reps ~ 365 lbs</li>
                                <li className="text-2xl">Lat Pulldown Machine : <br></br>3 sets, 6-10 reps ~ 165 lbs </li>
                                <li className="text-2xl">Pull-ups: <br></br>3 sets, 12 reps ~ body weight </li>
                                <li className="text-2xl">Seated Machine Cable Rows: <br></br>3 sets, 8-12 reps ~ 72.5 lbs </li>
                                <li className="text-2xl">Low-row Machine: <br></br>3 sets, 6-8 reps ~ 135 lbs </li>
                            </ul>

                            <h3 className="text-2xl font-bold mt-4 mb-4 text-center">
                                Optional:
                            </h3>

                            <ul className="list-none list-outside pl-3 space-y-4 text-gray-800">
                                <li className="text-2xl">Rear Delt Fly Machine: <br></br>2 sets, 15 reps ~ 90 lbs </li>
                                <li className="text-2xl">Dead Hangs: <br></br>2 sets, 1 Minute Holds </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>

        </section>
    )
}