import React, { useState } from 'react';

const CreateUserForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Не вдалося створити користувача');
            }
            const data = await response.json();
            console.log('Новий користувач:', data);
            setUserData({
                name: '',
                username: '',
                email: '',
            });
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    return (
        <div>
            <h2>Створення нового користувача</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Ім'я користувача:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Створити</button>
            </form>
        </div>
    );
};

export default CreateUserForm;
