import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, Minus, Plus, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/storeAction";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "Yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";
import useQueryData from "@/components/custom-hook/useQueryData";
const ModalAddClothes = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [value, setValue] = React.useState("");
  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v2/upload-photo");

  const {
    isLoading,
    isFetching,
    error,
    data: categ,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/clothes/${itemEdit.clothes_aid}` : `/v2/clothes`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["clothes"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClose = () => dispatch(setIsAdd(false));
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const initVal = {
    clothes_title: itemEdit ? itemEdit.clothes_title : "",
    clothes_price: itemEdit ? itemEdit.clothes_price : "",
    clothes_size: itemEdit ? itemEdit.clothes_size : "",
    clothes_category_id: itemEdit ? itemEdit.clothes_category_id : "",
  };
  const yupSchema = Yup.object({
    clothes_title: Yup.string().required("required"),
    clothes_price: Yup.string().required("required"),
    clothes_size: Yup.string().required("required"),
    clothes_category_id: Yup.string().required("required"),
  });

  return (
    <ModalWrapper>
      <div
        className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
      -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line"
      >
        <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2 ">
          <span className="text-body">Add Clothes</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-4 ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
                clothes_image:
                  (itemEdit?.clothes_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && itemEdit?.clothes_image !== photo?.name)
                    ? photo?.name || ""
                    : itemEdit?.clothes_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="gap-5">
                    <div className="info">
                      <h3 className="mb-0">Information</h3>
                      <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                        {itemEdit === null && photo === null ? (
                          <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                            <ImagePlusIcon
                              size={50}
                              strokeWidth={1}
                              className="opacity-20 group-hover:opacity-50 transition-opacity"
                            />
                            <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                              Upload Photo
                            </small>
                          </div>
                        ) : (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : imgPath + "/" + itemEdit?.clothes_image // check db
                            }
                            alt="clothes photo"
                            className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${
                              mutation.isPending
                                ? "opacity-40 pointer-events-none"
                                : ""
                            }`}
                          />
                        )}

                        <InputPhotoUpload
                          name="photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                            mutation.isPending ? "pointer-events-none" : ""
                          }`}
                        />
                      </div>

                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="clothes_title"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Price"
                          type="text"
                          name="clothes_price"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Size"
                          type="text"
                          name="clothes_size"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputSelect
                          label="Clothes Category"
                          name="clothes_category_id"
                          onChange={handleChange}
                        >
                          <option value="hidden"></option>
                          {categ?.data.map((item, key) => {
                            return (
                              <>
                                {item.category_is_active === 1 && (
                                  <option key={key} value={item.category_aid}>
                                    {item.category_title}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </InputSelect>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-5">
                    <button className="btn btn-accent" type="submit">
                      {mutation.isPending && <SpinnerButton />}
                      {itemEdit ? "Save" : "Add"}
                    </button>
                    <button
                      className="btn btn-cancel"
                      onClick={handleClose}
                      type="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddClothes;
