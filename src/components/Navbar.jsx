import { BicepsFlexed, Calculator, Hamburger } from "lucide-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="w-full bg-accent2 text-white px-8 py-5 flex items-center justify-between">
            {/* Left side: Logo / brand */}
            <div className="text-2xl font-extrabold tracking-tight">
                Chasing<span className="text-accent">PRs</span>
                <BicepsFlexed
                className="inline-block w-6 h-6 align-middle mx-1"
                strokeWidth={2.5} 
                />
            </div>

            {/* Right side: Nav links */}
            <div className="flex gap-15 text-xl font-semibold">
                <Link to="/" className="hover:text-accent font-bold transition-colors">
                PR Calculation
                <Calculator
                className="inline-block w-6 h-6 align-middle mx-1"
                strokeWidth={2.5} 
                />
                </Link>
                <Link to="/tdee" className="hover:text-accent font-bold transition-colors">
                TDEE Calculation
                <Hamburger
                className="inline-block w-6 h-6 align-middle mx-1"
                strokeWidth={2.5} 
                />
                </Link>
            </div>
        </nav>
    )
}