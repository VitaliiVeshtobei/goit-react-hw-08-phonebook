import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/slices/filterSlice';

import { InputFilter } from './FilterStyled';

export function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <InputFilter
        type="text"
        value={value}
        onChange={evt => {
          dispatch(setFilter(evt.currentTarget.value));
        }}
      ></InputFilter>
    </label>
  );
}
