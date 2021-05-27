import React, { useEffect } from "react";

const ToTopBtn = () => {
    const scrolHandler = () => {
        const path = window.location.pathname;
        if (path === "/") {
            const mybutton = document.getElementById("myBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    };

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrolHandler);
    }, []);
    return (
        <button onClick={handleToTop} id="myBtn" title="Go to top">
            Top
        </button>
        // <button  id="myBtn" title="Go to top">Top</button>
    );
};

export default ToTopBtn;
