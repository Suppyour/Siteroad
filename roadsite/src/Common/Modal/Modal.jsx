import React from 'react';
import "./Modal.css";

const Modal = ({ active, setActive }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Форма отправлена успешно!");
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="form-container">
                    <p className="centered-title">ЗАКАЖИТЕ УСЛУГУ</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Ваше имя*" required />
                        <input type="email" name="email" placeholder="E-mail*" required />
                        <input type="tel" name="phone" placeholder="Номер телефона" />

                        <select name="services" id="services" required>
                            <option value="">Выберите услугу</option>
                            <option value="consultation">Диагностика автомобильных дорог</option>
                            <option value="repair">Паспортизация автомобильных дорог</option>
                            <option value="delivery">Георадарное обследование</option>
                            <option value="other">Мониторинг дорожного движения</option>
                            <option value="other">Определение допустимых осевых нагрузок автотранспортных средств</option>
                            <option value="other">Разработка КСОДД</option>
                            <option value="other">Геодезические услуги</option>
                            <option value="other">Обследование и паспортизация мостов</option>
                            <option value="other">Транспортная безопасность</option>
                        </select>

                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
