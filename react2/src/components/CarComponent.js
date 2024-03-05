import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, removeCar, updateCar } from './reducers/carsSlice';

function CarComponent() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars);

    const handleAddCar = () => {
        dispatch(addCar({ id: 1, name: 'New Car' }));
    };

    const handleRemoveCar = id => {
        dispatch(removeCar(id));
    };

    const handleUpdateCar = (id, updatedCar) => {
        dispatch(updateCar({ id, updatedCar }));
    };

    return (
        <div>
            <button onClick={handleAddCar}>Add Car</button>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.name}
                        <button onClick={() => handleRemoveCar(car.id)}>Remove</button>
                        <button onClick={() => handleUpdateCar(car.id, { ...car, name: 'Updated Car' })}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarComponent;
