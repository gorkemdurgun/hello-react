import React, { useState } from "react";

function State() {
    const [age, setAge] = useState(20);
    const [numbers, setNumbers] = useState([5, 10, 15, 20]);
    const [address, setAddress] = useState({ title: 'Trabzon', zipcode: 61500 });

    return (
        <div>
            <h3> Merhaba {age} </h3>
            <button
                onClick={() => setAge(age + 1)}>
                set age
            </button>

            <hr />

            <h4> {address.title} {address.zipcode} </h4>
            <button
            onClick={()=> setAddress({...address, title: 'İstanbul'}) }>
                set address</button>

            <hr />

            <button
                onClick={() => setNumbers([...numbers, numbers[numbers.length - 1] + 5])}>
                number add</button>

            {
                numbers.map((number, index) =>
                    <div key={index}>
                        <h5> {number} </h5>
                    </div>
                )
            }


        </div>
    );

}

export default State;