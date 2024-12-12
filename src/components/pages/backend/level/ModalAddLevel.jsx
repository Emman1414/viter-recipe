import useQueryData from "@/components/custom-hook/useQueryData";
import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/storeAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { X } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import { StoreContext } from "../../../store/storeContext";
import ModalWrapper from "../partials/modals/ModalWrapper";
import SpinnerButton from "../partials/spinners/SpinnerButton";

const ModalAddLevel = ({ isLevelEdit, setIsLevelEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [value, setValue] = React.useState("");

  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: results,
  } = useQueryData(
    `/v2/level`, // endpoint
    "get", // method
    "level" // key
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        isLevelEdit
          ? `/v2/level/${isLevelEdit.level_aid}`
          : "/v2/level",
        isLevelEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["level"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Successful!"));
      }
    },
  });

  const initVal = {
    level_level: isLevelEdit ? isLevelEdit.level_level : "",
  };
  const yupSchema = Yup.object({
    level_level: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add Level</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap">
                        <InputText
                          label="Recipe Level"
                          type="text"
                          name="level_level"
                          onChange={handleChange}
                        />
                      </div>


                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                      <button className="btn btn-add" type="submit">
                        {mutation.isPending ? <SpinnerButton /> : "Add"}
                      </button>
                      <button
                        className="btn btn-cancel"
                        onClick={handleClose}
                        type="reset"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddLevel;
