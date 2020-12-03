import { AppState } from "app-state";
import React, { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "redux";
import { ExampleForm, ExampleModel } from "../components/ExampleForm";
import { exampleAction } from "../store/actions";
export interface ExampleFormContainerProps { }

export function ExampleFormContainer({ }: ExampleFormContainerProps): JSX.Element {
  const dispatch: React.Dispatch<Action<ExampleModel>> = useDispatch<Dispatch<Action<ExampleModel>>>();

  const handleExample = useCallback(
    (exampleModel: ExampleModel) => dispatch(exampleAction({ email: exampleModel.email, password: exampleModel.password })),
    [dispatch]
  );

  const loading = useSelector<AppState, boolean>((state): boolean => {
    return state.example.status === "running";
  });

  return (
    <ExampleForm
      value={{
        email: "",
        password: ""
      }}
      loading={loading}
      onChange={handleExample}
    />
  );
}
