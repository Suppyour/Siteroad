import React from 'react';
import "./Modal.css"
import { Drawer } from "@chakra-ui/react"

const Modal = ({active, setActive, children}) => {
    console.log(active); // Отладка: значение active

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="joepeech">
                    <a>Как вас зовут</a>
                    <input type="text" placeholder="Как вас зовут))" />
<a>Че хотите по услугам</a>
                    <input type="text"></input>
                    <a>Номерок запиши сюда</a>

                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="radio"></input>
                </div>
            </div>
        </div>

    );
}

export default Modal;
