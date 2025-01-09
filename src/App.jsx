import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import AgeCheckModal from "./components/AgeCheckModal.component.jsx";
import Cookies from "./components/Cookies.component.jsx";
import Header from './components/Header.component.jsx';
import SectionOne from "./components/SectionOne.component.jsx";
import SectionTwo from "./components/SectionTwo.component.jsx";
import SectionThree from "./components/SectionThree.component.jsx";
import SectionFour from "./components/SectionFour.component.jsx";
import SectionFive from "./components/SectionFive.component.jsx";
import Footer from './components/Footer.component.jsx';

import GamePage from "./components/GamePage.component.jsx";
import Privacy from "./components/Privacy.component.jsx";
import Terms from "./components/Terms.component.jsx";

function App() {
    const [ageVerified, setAgeVerified] = React.useState(false);

    const handleAgeVerified = () => {
        setAgeVerified(true);
    };

    return (
        <Router>
            <AgeCheckModal onAgeVerified={handleAgeVerified} />
            {ageVerified && <Cookies />}

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <SectionOne />
                            <SectionTwo />
                            <SectionThree />
                            <SectionFour />
                            <SectionFive />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/game"
                    element={
                        <>
                            <Header />
                            <GamePage />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/privacy"
                    element={
                        <>
                            <Header />
                            <Privacy />
                            <SectionFive />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/terms"
                    element={
                        <>
                            <Header />
                            <Terms />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
