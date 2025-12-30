import { useEffect, useState } from "react";

//by using arrow function
let CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("interval has been setup");
        const intervalId = setInterval(() => {
         setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log("Cancel the interval");
        }

    }, []);
    
    return <p>This is the current time: {time.toLocaleDateString()} - {""}
    {time.toLocaleTimeString()}</p>;
};
export default CurrentTime;