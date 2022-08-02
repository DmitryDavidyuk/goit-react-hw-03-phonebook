import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Пошук контактів за іменами
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
