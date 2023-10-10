import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import style from "./SearchingForm.module.scss";

type FormData = {
  field: string;
};

interface IProp {
  getMovieName: (movie: string) => void;
}
export default function SearchingForm({ getMovieName }: IProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data.field);
    getMovieName(data.field);

  });
  return (
    <form onSubmit={onSubmit} className={style.container}>
      <div className={style.containerInput}>
        <label htmlFor="field">movies...</label>
        <input
          id="field"
          type="text"
          {...register("field")}
          className={style.input}
        />
      </div>
       <Button type="submit">to search</Button>
    </form>
  );
}
