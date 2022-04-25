import { TodoListItem } from '../components/TodoListItem';
import './Home.css';

export function Home() {
    const itemsArray = [
        { id: 1, text: "Acordar 7 horas da manhã", checked: false},
        { id: 2, text: "Lavar Louça", checked: false},
        { id: 3, text: "Levar o cachorro para passear", checked: false},
        { id: 4, text: "Lavar o Carro", checked: true}
    ];

    localStorage.setItem("", "");

    return (
        <div className="container">
            {itemsArray.map(({ id, text, checked }) => {
                return <TodoListItem id={id} text={text} checked={checked} />
            })}
        </div>
    );
}