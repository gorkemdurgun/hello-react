import React, { useState } from "react";

function InputState() {

    const [form, setForm] = useState({ company: '', since: '' });

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div>

            <input
                name="company"
                value={form.company}
                onChange={onChangeInput} />

            <br />

            <input
                name="since"
                value={form.since}
                onChange={onChangeInput} />

            <hr />

            <h5> {form.company} ürünleri {form.since} yıldır hizmetinizde... </h5>

        </div>
    );
}

export default InputState;