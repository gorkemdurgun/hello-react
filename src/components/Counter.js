import React, { useState, useEffect } from "react";

function Counter() {

    const [number, setNumber] = useState(0);

    useEffect(() => {

        console.log('component mount edildi');
    
        const autoIncrease = setInterval(() => {
            setNumber((n) => n + 1);
        }, 2000);

      return () => {
        clearInterval(autoIncrease);
        console.log('component unmount edildi');
      };

    }, []);

    useEffect(() => {
      console.log('state güncellendi ' + number)
    }, [number])
    

    return (
        <div>

            <h2> {number} </h2>
            <button onClick={() => setNumber(number + 1)}>
                arttir
            </button>

        </div>
    );

}

export default Counter;