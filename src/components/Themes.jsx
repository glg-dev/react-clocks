import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../store';

const Themes = () => {
  const dispatch = useDispatch()
  let radios = [
    {id: 1, value: 'neon-purple', label: 'Neon Purple'},
    {id: 2, value: 'neon-blue', label: 'Neon Blue'},
    {id: 3, value: 'neon-green', label: 'Neon Green'},
    {id: 4, value: 'neon-yellow', label: 'Neon Yellow'},
    {id: 5, value: 'neon-orange', label: 'Neon Orange'},
    {id: 6, value: 'neon-red', label: 'Neon Red'},
    {id: 7, value: 'neon-pink', label: 'Neon Pink'},
    {id: 8, value: 'neon-grey', label: 'Neon Grey'},
  ]
  const [selectedRadio, setSelectedRadio] = useState('neon-blue');

  const handleRadio = (e) => {
    setSelectedRadio(e.target.value);
    dispatch(changeTheme(e.target.value));
  }

  return (
    <div className='themes'>
      <ul>
        {
          radios.map(radio => {
            return (
              <li key={radio.id}>
                <input
                  type='radio'
                  name='theme'
                  value={radio.value}
                  checked={radio.value === selectedRadio}
                  id={radio.value}
                  onChange={handleRadio}
                />
                <label htmlFor={radio.value}>{radio.label}</label>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Themes;