import React from "react";
import { useForm } from "react-hook-form";
import style from "./SearchingForm.module.scss";

type FormData = {
  field: string;
};
export default function SearchingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <div className={style.containerInput}>
        <label htmlFor="field">movies...</label>
        <input
          id="field"
          type="text"
          {...register("field")}
          className={style.input}
        />
      </div>
      <button type="submit">to search</button>
    </form>
  );
}
