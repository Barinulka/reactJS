import React, { useContext } from 'react';
import { MyNewContext } from '../../context/newContext';

export const Profile = () => {

    const contextValue = useContext(MyNewContext);

    

    function withLogger(fn) {
        return function(...args) {
          console.log(args);
          return fn(...args);
        }
      }
      
      const foo = (a, b) => a + b;
      const bar = withLogger(foo);
      
      console.log(bar(1, 2));

    return (
        <>
            <h2>Страница профиля</h2>
            <span>{contextValue.mess}</span>
        </>
    );
}