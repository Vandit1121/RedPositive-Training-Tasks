import { useState,useEffect } from "react";

const useCounter = (check) =>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(check){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else
        {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [check]);

  return counter;
};

export default useCounter;