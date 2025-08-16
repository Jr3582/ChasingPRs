import { Trophy } from "lucide-react"

export const SplitSection = () => {
 return (
        <section className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5x1">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Workout <span className="text-accent">Splits</span> & <span className="text-accent"> PR's</span>
                    <Trophy className="inline-block w-10 h-10 align-middle mx-1"></Trophy>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
                    {/* Warning Text */}
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border h-full">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            My Weekly Workout Splits
                        </h3>

                        <ul className="list-disc list-outside pl-3 space-y-2 text-gray-800 text-left">
                            <li className="text-2xl">Monday - <span className="text-accent">Arms</span></li>
                            <li className="text-2xl">Tuesday - <span className="text-secondary">Back</span></li>
                            <li className="text-2xl">Wednesday - <span className="text-primary">Chest</span></li>
                            <li className="text-2xl">Thursday - <span className="text-accent">Arms</span></li>
                            <li className="text-2xl">Friday - <span className="text-secondary">Back</span></li>
                            <li className="text-2xl">Saturday - <span className="text-primary">Chest</span></li>
                            <li className="text-2xl">Sunday - <span className="text-neutral">Rest Day</span></li>
                        </ul>
                        
                    </div>
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border h-full">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            My PR's
                        </h3>

                        <ul className="list-disc list-outside pl-3 space-y-2 text-gray-800 text-left">
                            <li className="text-2xl">Bench Press - 325 LBS</li>
                            <li className="text-2xl">Deadlift - 385 LBS</li>
                            <li className="text-2xl">Squat - 250 LBS</li>
                            <li className="text-2xl">Fastest Mile - 9:58 Minutes</li>
                        </ul>
                    </div>
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border h-full">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            My Equipment
                        </h3>
                        <p className="text-xl mb-2">
                            I am not sponsored in any way to promote these products, they're just what I use and what I would recommend.
                        </p>

                        <ul className="list-disc list-outside pl-3 space-y-2 text-gray-800 text-left">
                            <li className="text-2xl"><a href="https://wolfmentalityclothing.com/products/wm-wrist-warps" className="hover:text-accent text-accent2" target="_blank">Wrist Wraps</a></li>
                            <li className="text-2xl"><a href="https://www.gymreapers.com/products/10mm-lever-belt-black" className="hover:text-accent text-accent2" target="_blank">Lever Belt</a></li>
                            <li className="text-2xl"><a href="https://www.etsy.com/listing/1591663113/gudetama-chalk-bag" className="hover:text-accent text-accent2" target="_blank">Chalk Bag</a></li>
                            <li className="text-2xl"><a href="https://www.amazon.com/adidas-Diablo-Duffel-Bag-Black-Size/dp/B000CCZU1K/ref=sr_1_3?c=ts&dib=eyJ2IjoiMSJ9.9wShvspwNGAZEuaLtOKg015jSVe65pDEG698oYaGX4QtlYPg3LU9OgMuBP6T0_r121dYqgKqLcyrhEizIWYDb8hqIYh_G4azJ6AYQxxZvQI0sUKPKcg2yJQJnwcb8ldDougF1T4TUM-xK0eMja2RDuajwMI63kntAyN5UgQxq1dQwcjc0QkIb8KhtN85ZPxpzCQKxEYnzupLy3vE9rd7dFr6A2GSvLabwsOB-Xxj35-kEKKLZpvqf4HO79grfM2pUi_MKJXEILIfmH353t2_0hn24Z7aC44Z1TQ_sl28aVE.0KL-8BT6rTcyvV4q02dTn9olXrOvrcDuAPf-_yHIfTw&dib_tag=se&keywords=Gym%2BBags&qid=1755300219&refinements=p_89%3Aadidas&s=apparel&sr=1-3&ts_id=15743181&th=1&psc=1" className="hover:text-accent text-accent2" target="_blank">Gym Bag</a></li>
                            <li className="text-2xl"><a href="https://www.amazon.com/LEEKEY-Resistance-Assistance-Full-Body-Multi-Level/dp/B0CGR9P7KH/ref=sr_1_4?crid=HXC4CY6TMT6V&dib=eyJ2IjoiMSJ9.wo2UH8bNqZwfrPxGn6GRO3eP2F-B9ZeIF73hZd2-1eXH7aoUDx34MIt86P24LDqPD4Wzm3FqmTSHK9JjEBuj4sgOass8SBsK8IwKt7AkWx_DJk9ubuEITb4PVUOVhVb5nSmaFAV4XcichMCSAzXyPe86QWHcwBOmJB164rqv_X532YovZTkiXP0mml2rTABp9J1IIUe-LG-0OwLSoWeYqNoluZ8gC5R8wBaZRUkVmw3UTE8ar_xzgyahYVaI2acgaBCInT-iJPsS_oXe4OW0ivHZzzqqr63Dc58obf5FfEI.0bJbD5efvfTZlX4SFw1PSNUZGgPZD7U24aUlYL9MiKI&dib_tag=se&keywords=LEEKEY%2BResistance%2BBands%2BSet%2Bfor%2BPull-Up%2BAssistance%2B%26%2BFull-Body%2BTraining%2C%2BMulti-Level%2BExercise%2BBands%2Bwith%2BBag%2Bfor%2BHome%2BWorkouts%2C%2BPhysical%2BTherapy%2C%2BStrength%2BTraining%2B(Men%2FWomen)&qid=1755300551&s=sporting-goods&sprefix=leekey%2Bresistance%2Bbands%2Bset%2Bfor%2Bpull-up%2Bassistance%2B%26%2Bfull-body%2Btraining%2C%2Bmulti-level%2Bexercise%2Bbands%2Bwith%2Bbag%2Bfor%2Bhome%2Bworkouts%2C%2Bphysical%2Btherapy%2C%2Bstrength%2Btraining%2Bmen%2Fwomen%2B%2Csporting%2C119&sr=1-4&th=1" className="hover:text-accent text-accent2" target="_blank">Resistance Band</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
 )
}