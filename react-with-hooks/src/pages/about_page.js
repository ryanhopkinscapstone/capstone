import React from "react";


// Creates About Page
function AboutPage() {
    const devName = "Ryan Hopkins";

    return (
        <div id="AboutPage" className="App-page">
            <h1>This is my project.</h1>
        <p>This is a non-elegant React app.</p>
        <p>Lead Developer, Senior Architect, Web Master & CEO: {devName}</p>
        </div>
    );
}

export default AboutPage;