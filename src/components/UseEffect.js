import React, { useState, useEffect } from "react";

function UseEffect() {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState('orphan');

    useEffect(() => {
        console.log('component mount edildi')
    }, [])

    useEffect(() => {
        console.log('state güncellendi ' + number);
    }, [number]);

    useEffect(() => {
        console.log('state güncellendi ' + name);
    }, [name]);

    return (
        <div>

            <h2> {number} </h2>
            <button onClick={() => setNumber(number + 1)}>
                arttir
            </button>

            <hr />

            <h2> {name} </h2>
            <button onClick={() => setName('aaron')}>
                set name
            </button>

        </div>
    );

}

export default UseEffect;