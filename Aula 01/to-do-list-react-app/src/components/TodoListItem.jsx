import { useState } from "react";

export function TodoListItem ({ id, text, checked, updateChecked}) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckBoxValue () {
        setCheckedState(!checkedState);
        updateChecked(id, checkedState);
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckBoxValue} checked={ checkedState }/>
            <label htmlFor={`check-${id}`}>{ text }</label><br/>
        </>
    );
}
