import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import { InputFilter } from './FilterStyled';

export function Filter() {
  const value = useSelector(getFilter);
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
