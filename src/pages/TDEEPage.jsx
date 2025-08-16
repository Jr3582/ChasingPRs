import { Navbar } from "../components/Navbar"
import { TDEESection } from "../components/TDEESection"
import { MainBackground } from "../components/MainBackground"
import { Footer } from "../components/Footer"

export const TDEEPage = () => {
    return (
    <div className="min-h-screen">
        <Navbar></Navbar>
        
        <MainBackground></MainBackground>

        <TDEESection></TDEESection>

        <Footer></Footer>
    </div>
    )
}