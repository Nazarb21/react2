import React, { useState } from 'react';

const CreateCommentForm = () => {
    const [commentData, setCommentData] = useState({
        postId: '',
        name: '',
        email: '',
        body: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCommentData((prevCommentData) => ({
            ...prevCommentData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                body: JSON.stringify(commentData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (!response.ok) {
                throw new Error('Не вдалося створити коментар');
            }
            const data = await response.json();
            console.log('Новий коментар:', data);
            setCommentData({
                postId: '',
                name: '',
                email: '',
                body: '',
            });
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    return (
        <div>
            <h2>Створення нового коментаря</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="postId">ID поста:</label>
                    <input
                        type="text"
                        id="postId"
                        name="postId"
                        value={commentData.postId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={commentData.name}
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
                        value={commentData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">Текст коментаря:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={commentData.body}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Створити</button>
            </form>
        </div>
    );
};

export default CreateCommentForm;
