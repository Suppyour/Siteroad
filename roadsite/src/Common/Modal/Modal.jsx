import React from 'react';
import "./Modal.css";

const Modal = ({ active, setActive }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Форма отправлена успешно!");
    };

    return (
        <div className={`modal ${active ? "active" : ""}`} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="form-container">
                    <p className="centered-title">ЗАКАЖИТЕ УСЛУГУ</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя*"
                            className="form-input"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail*"
                            className="form-input"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Номер телефона"
                            className="form-input"
                        />
                        <select
                            name="services"
                            id="services"
                            className="form-select"
                            required
                        >
                            <option value="">Выберите услугу</option>
                            <option value="other">Диагностика автомобильных дорог</option>
                            <option value="other">Паспортизация автомобильных дорог</option>
                            <option value="other">Георадарное обследование</option>
                            <option value="other">Мониторинг дорожного движения</option>
                            <option value="other">Определение допустимых осевых нагрузок автотранспортных средств</option>
                            <option value="other">Разработка КСОДД</option>
                            <option value="other">Геодезические услуги</option>
                            <option value="other">Обследование и паспортизация мостов</option>
                            <option value="other">Транспортная безопасность</option>
                        </select>
                        <button type="submit" className="form-button">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
