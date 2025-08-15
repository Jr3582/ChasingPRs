import { PRSection } from "../components/PRSection"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { MainBackground } from "../components/MainBackground"

export const Home = () => {
    return (
    <div className="min-h-screen">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Background */}
        <MainBackground></MainBackground>

        {/* Pr Page */}
        <PRSection></PRSection>

        {/* Footer */}
        <Footer></Footer>

    </div>
    )
}