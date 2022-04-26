import { useEffect, useState } from 'react';
import { TodoListItem } from '../components/TodoListItem';
import './Home.css';

export function Home() {
    const [itemsArray, setItemsArray] = useState( () => {
        let array = [
            { id: 1, text: "Acordar 7 horas da manhã", checked: false},
            { id: 2, text: "Lavar Louça", checked: false},
            { id: 3, text: "Levar o cachorro para passear", checked: false},
            { id: 4, text: "Lavar o Carro", checked: true}
        ];
        const storedArray = localStorage.getItem("itemsArray");

        if(storedArray != null) {
            array = JSON.parse(storedArray);
        } else {
            const itemsArrayString = JSON.stringify(array);
            localStorage.setItem("itemsArray", itemsArrayString);
        }
        return array;
    });

    // useEffect(() => {
    //     const storedArray = localStorage.getItem("itemsArray");

    //     if(storedArray != null) {
    //         setItemsArray(JSON.parse(storedArray));
    //     } else {
    //         const itemsArrayString = JSON.stringify(itemsArray);
    //         localStorage.setItem("itemsArray", itemsArrayString);
    //     }
    // }, [])

    function updateChecked(id, checked) {
        const buscaIndex = itemsArray.findIndex(item => {
            return item.id == id;
        });
        itemsArray[buscaIndex].checked = checked;
        console.log(itemsArray);
        localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
    }

    return (
        <div className="container">
            {itemsArray.map(({ id, text, checked }) => {
                return <TodoListItem id={id} text={text} checked={checked} updateChecked={updateChecked}/>
            })}
            {/* <input type="button" onClick={addItemToDoList}/> */}
        </div>
    );
}