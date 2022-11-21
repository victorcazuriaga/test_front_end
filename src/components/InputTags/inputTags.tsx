import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { FieldInput, TextField, Box } from "../../styles/dashboard";

export const InputTags = ({ addDay, onDeleteDay, days }: any): JSX.Element => {
  const input = useRef<HTMLInputElement>(null);

  const onEnter = (event: any) => {
    event.code.match("Enter") && addDay(Number(event.target.value));
  };

  return (
    <div>
      <div>
        {days.map((day: number, index: number) => (
          <div key={index}>
            <p> {day}</p>
            <span onClick={() => onDeleteDay(index)}>X</span>
          </div>
        ))}
      </div>
      <FieldInput ref={input} type={"number"} onKeyUp={onEnter} />
      <div>
        <span onClick={() => addDay(Number(input.current?.value))}>
          Adicionar
        </span>
      </div>
    </div>
  );
};
