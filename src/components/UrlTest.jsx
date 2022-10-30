import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Input from "./Input"

export default function UrlTest() {
    const [searchParams, setSearchParams] = useSearchParams();
    let protons = "";
    let electrons = "";

    if (searchParams.get('protons')) { protons = searchParams.get('protons'); }

    const handleChange = (event, value) => {
        if (event.target.value) { setSearchParams(value + "=" + event.target.value); }
    }

    return (
        <>
            <Input particle="proton" type="number" onChange={(e) => handleChange(e, "proton")} />
            <Input particle="elektron" type="number" onChange={(e) => handleChange(e, "electron")}  />
        </>
    )
}