import React, { useEffect, useRef } from 'react';

function DoomComponent() {
    const doomRef = useRef(null);

    useEffect(() => {
        if (doomRef.current) {
            const ciPromise = window.Dos(doomRef.current, {
                wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
                onprogress: (stage, total, loaded) => {
                    console.log(stage, total, loaded);
                },
            });

            ciPromise.then((ci) => {
                ci.fs.extract("/src/assets/doom-box.zip").then(() => {
                    ci.main(["-c", "DOOMWEB.bat"]);
                });
            });
        }
    }, []);

    return <canvas ref={doomRef}></canvas>;
}

export default DoomComponent;