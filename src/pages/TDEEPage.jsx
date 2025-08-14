import { Navbar } from "../components/NavBar"
import { TDEESection } from "../components/TDEESection"
import { MainBackground } from "../components/MainBackground"

export const TDEEPage = () => {
    return (
    <div className="min-h-screen">
        <Navbar></Navbar>
        
        <MainBackground></MainBackground>

        <TDEESection></TDEESection>
    </div>
    )
}