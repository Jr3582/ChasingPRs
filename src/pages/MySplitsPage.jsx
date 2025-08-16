import { PRSection } from "../components/PRSection"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { MainBackground } from "../components/MainBackground"
import { SplitSection } from "../components/SplitSection"
import { WorkoutSplitsSection } from "../components/WorkoutSplitsSection"

export const MySplitsPage = () => {
    return (
    <div className="min-h-screen">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Background */}
        <MainBackground></MainBackground>
        {/* Split Section */}
        <SplitSection></SplitSection>
        {/* Workout Splits Section */}
        <WorkoutSplitsSection></WorkoutSplitsSection>
        {/* Footer */}
        <Footer></Footer>

    </div>
    )
}