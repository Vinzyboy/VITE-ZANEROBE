import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Form, Formik } from "formik";
import { InputPhotoUpload, InputText } from "@/components/helpers/FormInputs";
import * as Yup from "Yup";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general";

const ModalAddCategory = ({ isCategoryEdit, setIsCategoryEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");
  const [value, setValue] = React.useState("");

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: results,
  // } = useQueryData(
  //   `/v2/category`, // endpoint
  //   "get", // method
  //   "category" // key
  // );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        isCategoryEdit
          ? `/v2/category/${isCategoryEdit.category_aid}`
          : "/v2/category",
        isCategoryEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["category"] });

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
    category_title: isCategoryEdit ? isCategoryEdit.category_title : "",
  };
  const yupSchema = Yup.object({
    category_title: Yup.string().required("Required"),
  });
  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary  h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add Category</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              // mutate data
              mutation.mutate({
                ...values,
                category_image:
                  (isCategoryEdit?.category_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && isCategoryEdit?.category_image !== photo?.name)
                    ? photo?.name || ""
                    : isCategoryEdit?.category_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[80vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="category_title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-action flex p-4 justify-end gap-3">
                      <button className="btn btn-add" type="submit">
                        {mutation.isPending && <SpinnerButton />}
                        Save
                      </button>
                      <button className="btn btn-cancel" onClick={handleClose}>
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

export default ModalAddCategory;
