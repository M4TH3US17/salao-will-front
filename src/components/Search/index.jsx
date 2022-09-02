import React from "react";
import { Researcher } from "./styled";

export default function Search({isThemeDark}) {
    return (
        <Researcher isThemeDark={isThemeDark}>
            <button className="btn"><i className="bi bi-search"></i></button>
            <input type="text" placeholder=""/>
        </Researcher>
    );
}