import { useState, useCallback } from "react";

export const useToggle = initial => {
  const [open, setOpen] = useState(initial);

  return [open, useCallback(() => setOpen(status => !status))];
};

export default useToggle;

//USAGE
//  DECLARE VARIABLE BEFORE RETURN, ONLY FOR RSC
//  const [open, toggle] = useToggle(false);

//  USE VARIABLES
//  {open && <h1>I'm open!</h1>}
//  <button onClick={toggle}>Toggle Message</button>
