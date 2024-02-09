import React, { useState } from 'react';

const CarActions = () => {
    const [carData, setCarData] = useState({
        id: '',
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevCarData) => ({
            ...prevCarData,
            [name]: value,
        }));
    };

    const handleCreate = async () => {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
                method: 'POST',
                body: JSON.stringify({ name: carData.name }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Не вдалося створити машину');
            }
            const data = await response.json();
            console.log('Нова машина:', data);
            // Скинути форму після успішного створення
            setCarData({
                id: '',
                name: '',
            });
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carData.id}`, {
                method: 'PUT',
                body: JSON.stringify({ name: carData.name }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Не вдалося оновити машину');
            }
            const data = await response.json();
            console.log('Оновлена машина:', data);
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carData.id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Не вдалося видалити машину');
            }
            console.log(`Машина з ID ${carData.id} була успішно видалена.`);
            setCarData({
                id: '',
                name: '',
            });
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    return (
        <div>
            <h2>Дії з машинами</h2>
            <div>
                <label htmlFor="id">ID машини:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={carData.id}
                    onChange={handleChange}
                    placeholder="ID машини"
                />
            </div>
            <div>
                <label htmlFor="name">Назва машини:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={carData.name}
                    onChange={handleChange}
                    placeholder="Назва машини"
                />
            </div>
            <button onClick={handleCreate}>Створити</button>
            <button onClick={handleUpdate}>Оновити</button>
            <button onClick={handleDelete}>Видалити</button>
        </div>
    );
};

export default CarActions;
