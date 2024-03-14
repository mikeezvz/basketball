import './basketball_court.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function App() {
    var [teamname1, setTeamname1] = useState("");
    var [teamname2, setTeamname2] = useState("");
    const [scoreTeam1, setScoreTeam1] = useState(0);
    const [scoreTeam2, setScoreTeam2] = useState(0);
    const [name, setName] = useState("");
    const [otherInput, setOtherInput] = useState(""); // Example of another input state
    const [isThrown, setIsThrown] = useState(0);
    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);


    const handleClick = () => {
        ThrowTeam1();
    };

    const handleClick2 = () => {
        ThrowTeam2();{
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTeamname1(name);
    }



    const handleOtherSubmit = (event) => {
        event.preventDefault();
        setTeamname2(otherInput);
        // Handle second form submission logic here
    };

    var i = 0;
    function move() {
        if (scoreTeam1 > 0 && scoreTeam1 <= 100) { // Überprüfe, ob scoreTeam1 im gültigen Bereich liegt
            var elem = document.getElementById("myBar");
            var width = scoreTeam1; // Setze width auf den Wert von scoreTeam1
            elem.style.width = scoreTeam1 + "%";
            elem.innerHTML = width + "%";
        }
    }

    window.onload = function() {
        move(); // move() beim Laden der Seite aufrufen, um die Fortschrittsleiste zu starten
    };


if (scoreTeam1 === 12) {
    setScoreTeam1(0)
    setScoreTeam2(0)
    setIsThrown(0)
}
if (progress === 100) {
    setProgress(0)
    setProgress1(0)
}

    if (scoreTeam2 === 12) {
        setScoreTeam1(0)
        setScoreTeam2(0)
        setIsThrown(0)
    }
    if (progress1 === 100) {
        setProgress1(0)
        setProgress(0)
    }

    function ThrowTeam1() {
        if (isThrown === 0) {
            let randomNum = Math.floor(Math.random() * 2);

            if (randomNum === 1) {
                setScoreTeam1(scoreTeam1 + 3); // Score um 3 erhöhen
                console.log("Treffer für Team 1! Punktestand: " + (scoreTeam1 + 3)); // Ausgabe für die Konsole
                if (progress + 25 <= 100) {
                    setProgress(progress + 25);
                }
            } else {
                console.log("Kein Treffer für Team 1! Punktestand: " + scoreTeam1); // Ausgabe für die Konsole
            }
            setIsThrown(isThrown+1)
        }
    }

        function ThrowTeam2() {
            if (isThrown === 1) {
                let randomNum2 = Math.floor(Math.random() * 2);

                if (randomNum2 === 1) {
                    setScoreTeam2(scoreTeam2 + 3); // Score um 3 erhöhen
                    console.log("Treffer für Team 2! Punktestand: " + (scoreTeam2 + 3)); // Ausgabe für die Konsole
                    if (progress1 + 25 <= 100) {
                        setProgress1(progress1 + 25);
                    }
                } else {
                    console.log("Kein Treffer für Team 2! Punktestand: " + scoreTeam2); // Ausgabe für die Konsole
                }
                setIsThrown(isThrown-1)
            }
        }

    return (
        <div>
            <body>
    <head>
                <title>Basketball-Game</title>
            </head>
            <div className="grid-container">
                <div className="grid-item">
                    Team 1: {teamname1} - {scoreTeam1} points
                    </div>
                <div className="grid-item">
                    <h1>
                        BASKETBALL GAME
                    </h1>
                    </div>
                <div className="grid-item">
                    Team 2: {teamname2} - {scoreTeam2} point
                </div>
                <div className="grid-item">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your team name:
                    <br/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </label>
            </form>
                    <br/>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p class="teamname">{teamname1}</p>
                </div>
                <div className="grid-item"><img id="basketball_court" src="/img/basketball_court.jpg"/></div>
                <div className="grid-item">
            <form>
                <label>
                    Enter your team name:
                    <br/>
                    <input
                        type="text"
                        value={otherInput}
                        onChange={(e) => setOtherInput(e.target.value)}
                    />
                </label>
            </form>
                    <br/>
                    <button
                    type="submit"
                    onClick={handleOtherSubmit}
                    >
                        Submit
                    </button>
                    <br/>
                    <br/>
                    <p class="teamname">{teamname2}</p>
                </div>
                <div className="grid-item">
                <button onClick={handleClick}>Throw</button>
                    </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <button onClick={handleClick2}>Throw</button>
                </div>
                <div className="grid-item">
                    <div>
                        {/* Fortschrittsleiste */}
                        <div style={{ width: '100%', backgroundColor: '#ccc', height: '20px', margin: '10px 0', position: 'relative' }}>
                            <div style={{ width: `${progress}%`, backgroundColor: '#4caf50', height: '100%', position: 'absolute', left: 0, top: 0 }}></div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">Status</div>
                <div className="grid-item">   <div>
                    {/* Fortschrittsleiste */}
                    <div style={{ width: '100%', backgroundColor: '#ccc', height: '20px', margin: '10px 0', position: 'relative' }}>
                        <div style={{ width: `${progress1}%`, backgroundColor: '#4caf50', height: '100%', position: 'absolute', left: 0, top: 0 }}></div>
                    </div>
                </div></div>
                <div className="grid-item">
                    <img src="/img/lone_wolf_tree.png"/>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"><img src="/img/lone_wolf_motorcycle.jpg"/></div>
            </div>
            </body>
            </div>
    );
}

export default App;
