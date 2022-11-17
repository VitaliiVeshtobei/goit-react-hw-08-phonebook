import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/slices/filterSlice';

import { InputFilter, Label } from './FilterStyled';

export function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <InputFilter
        type="text"
        value={value}
        onChange={evt => {
          dispatch(setFilter(evt.currentTarget.value));
        }}
      ></InputFilter>
    </Label>
  );
}
