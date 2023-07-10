import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greeting/greetingSlice";

const Greeting = () => {
  const { message, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  } else {
    return <h1>{message}</h1>;
  }
};

export default Greeting;
