import React, { useEffect, useState} from "react"
import { WiMoonAltWaningCrescent4} from "react-icons/wi";

const Themetoggle = () => {
    const [theme, settheme] = useState(localStorage.getItem("theme"));
    const Themetoggle = () => {
        settheme(theme === "dark" ? "light" : "dark");
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]); 
    return (
        <div className="nav_ac" onClick={Themetoggle}>
            <WiMoonAltWaningCrescent4/>
        </div>
    );
};

export default Themetoggle;
