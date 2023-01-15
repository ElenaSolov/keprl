import React, { useEffect, useState } from 'react';
import Keplr from './keplr';

function App() {
    const [keplrResponse, setKeplrResponse] = useState();

    async function getKeplr() {

        if (window.keplr) {
            return window.keplr;
        }

        if (document.readyState === "complete") {
            return window.keplr;
        }

        return new Promise((resolve) => {
            const documentStateChange = (event) => {
                if (
                    event.target &&
                    (event.target).readyState === "complete"
                ) {
                    resolve(window.keplr);
                    document.removeEventListener("readystatechange", documentStateChange);
                }
            };

            document.addEventListener("readystatechange", documentStateChange);
        });
    };

    useEffect(() => {
        getKeplr().then(response => {
            setKeplrResponse(response);
        })
    }, [keplrResponse]);

    return (
        <div className="App">
            <div className="container">
                {!keplrResponse && <div className="message">Расширение Keplr не установлено для данного браузера</div>}
                {keplrResponse && <Keplr />}
            </div>
        </div>
    );
}


export default App;