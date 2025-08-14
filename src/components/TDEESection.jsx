import { Flame, Cookie } from "lucide-react"

export const TDEESection = () => {
    return (
        <div id="tdee" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center pt-10">
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

        </div>
    )
}