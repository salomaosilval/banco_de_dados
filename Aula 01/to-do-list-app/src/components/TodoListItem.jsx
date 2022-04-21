import { useState } from "react";

export function TodoListItem ({ id, text, checked}) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckBoxValue () {
        setCheckedState(!checkedState);
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckBoxValue} checked={ checkedState }/>
            <label htmlFor={`check-${id}`}>{ text }</label><br/>
        </>
    );
}
