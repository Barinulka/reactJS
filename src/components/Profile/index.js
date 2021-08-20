import { Checkbox } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_SHOW_NAME } from '../../store/action';

export const Profile = () => {

  const toggleName = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = () => {
    dispatch({
      type: PROFILE_SHOW_NAME,
    });
  }
  console.log(toggleName);

  return (
      <>
        <h2>Страница профиля</h2>
        <span >Показать/скрыть имя</span>
        <Checkbox onChange={setShowName} ></Checkbox>
        {toggleName.showName && <span>{ toggleName.name }</span>}
      </>
  );
}