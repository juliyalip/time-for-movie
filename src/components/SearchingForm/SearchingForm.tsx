import React, { useEffect } from "react";
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
    reset,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
      getMovieName(data.field);
      reset()
  });


  return (
    <form onSubmit={onSubmit} className={style.container}>
      <div className={style.containerInput}>
        <label htmlFor="field">movies...</label>
        <input
          id="field"
          type="text"
          {...register("field", {
            required: "this field is required",
            minLength: {
              value: 3,
              message: "you neen to enter at least 3 symbols",
            },
          })} style={{borderColor: errors?.field   ?  'red'  : "gray"}}
          className={style.input}
        />
        {errors?.field && (
          <p style={{color: 'red'}}>
            {errors?.field?.message && "You need to enter minimum 3 symbols"}
          </p>
        )}
      </div>
      <Button type="submit" disabled={!isValid}>show</Button>
    </form>
  );
}
