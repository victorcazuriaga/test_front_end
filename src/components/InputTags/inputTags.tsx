import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { FieldInput, TextField, Box } from "../../styles/dashboard";

export const InputTags = (register: any): JSX.Element => {
  const [tags, setTags] = useState<Array<number>>([]);
  const input = useRef<HTMLInputElement>(null);
  const addTag = (event: any, value: number) => {
    console.log(tags);
    setTags((prevState) => [...prevState, value]);
  };
  const onEnter = (event: any) => {
    event.code.match("Enter") && addTag(event, event.target.value);
  };

  const onDelete = (index: number) => {
    setTags((prevState) => {
      prevState.splice(index, 1);
      return [...prevState];
    });
  };
  console.log(register);
  return (
    <div>
      <div>
        {tags.map((tag, index) => (
          <div key={index}>
            <p> {tag}</p>
            <span onClick={() => onDelete(index)}>X</span>
          </div>
        ))}
      </div>
      <FieldInput ref={input} type={"number"} onKeyUp={onEnter} {...register} />
      <div>
        <span onClick={(e) => addTag(e, Number(input.current?.value))}>
          Adicionar
        </span>
      </div>
    </div>
  );
};
