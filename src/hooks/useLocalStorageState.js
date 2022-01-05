import { useState, useEffect } from 'react';

// this function is like useState with the addition of setting to LS
// key either connects to LS, but then sets to local storage on rerenders
export default function useLocalStorageState(key, defaultVal){
    // setting the LSstate to what is in LS (or default),
    //  by passing in a function to determine what we would usually pass in as the useState arg
   const [state, setState] = useState(() => {
       let val;
       try{
        //    searching for the key in local Storage or the string of defaultVal
            val = JSON.parse(window.localStorage.getItem(key)|| String(defaultVal) )
       }
    //    need to check from LS, LS requires array/obj format stringified
       catch(e){
            val= defaultVal;
       }
       return val;
   });


// UseEffect runs, but does not effect the basic setState from useState
    // useEffect to update localStorage when the particular state changes
   useEffect(() =>{
       window.localStorage.setItem(key, JSON.stringify(state));
   }, [state]);
   
   return [state, setState];
}