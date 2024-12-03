import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, Minus, Plus, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { StoreContext } from "../../../store/storeContext";
import { setIsAdd } from "../../../store/storeAction";

const ModalAddRecipe = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => dispatch(setIsAdd(false));
  return (
    <ModalWrapper>
      <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1300px] w-full rounded-md border border-line">
        <div className="modeal-header flex gap-2 p-2 items-center border-b border-line mb-2">
          <span className="text-body">Delete</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-4">
          <form action="">
            <div className="grid grid-cols-[1fr,_1.5fr_1.5fr] gap-5">
              <div className="info">
                <h3 className="mb-0">Information</h3>
                <div className="input-wrap relative  group input-photo-wrap h-[150px] pb-5">
                  <label htmlFor="">Photo</label>
                  {true ? (
                    <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
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
                      // src={
                      //   itemEdit === null
                      //     ? URL.createObjectURL(photo) // preview
                      //     : imgPath + "/" + itemEdit?.menu_image // check db
                      // }
                      alt="employee photo"
                      className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                    />
                  )}
                  {/* <InputPhotoUpload
                    name="photo"
                    type="file"
                    id="photo"
                    accept="image/*"
                    title="Upload photo"
                    onChange={(e) => handleChangePhoto(e)}
                    onDrop={(e) => handleChangePhoto(e)}
                    className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full`}
                  /> */}
                </div>

                <div className="input-wrap">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>

                <div className="input-wrap">
                  <label htmlFor="">Category</label>
                  <select name="" id="">
                    <option value="" hidden>
                      Select Category
                    </option>
                    <option value="chicken">Chicken</option>
                    <option value="pasta">Pasta</option>
                    <option value="beef">Beef</option>
                  </select>
                </div>

                <div className="input-wrap">
                  <label htmlFor="">Category</label>
                  <select name="" id="">
                    <option value="" hidden>
                      Select Level
                    </option>
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="difficult">Difficult</option>
                  </select>
                </div>

                <div className="input-wrap">
                  <label htmlFor="">Serving</label>
                  <input type="text" />
                </div>

                <div className="input-wrap">
                  <label htmlFor="">Prep Time</label>
                  <input type="text" />
                </div>
              </div>
              <div className="ingredient ">
                <div className="input-wrap">
                  <div className="flex justify-between items-center">
                    <h3>Ingredients</h3>
                    <button className="bg-yellow-600 p-1 px-2 text-sm rounded-md">
                      Add
                    </button>
                  </div>

                  <div className="overflow-y-auto custom-scroll max-h-[500px] h-full pr-2">
                    {Array.from(Array(20).keys()).map((i) => (
                      <div
                        className="grid grid-cols-[1fr,_.3fr,_.8fr,_.2fr] gap-3 mt-2"
                        key={i}
                      >
                        <div>
                          <label htmlFor="">Ingredients</label>
                          <input type="text" />
                        </div>

                        <div>
                          <label htmlFor="">Amount</label>
                          <input type="text" />
                        </div>

                        <div className="self-end">
                          <label htmlFor="Unit"></label>
                          <select name="" id="">
                            <option value="">tbsp</option>
                            <option value="">tsp</option>
                            <option value="">cup</option>
                            <option value="">oz</option>
                          </select>
                        </div>

                        <button className="size-[33px] bg-accent text-white rounded-md self-end center-all">
                          <Minus />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="instruction">
                <h3>Description</h3>
                <textarea className="pr-2 overflow-y-auto custom-scroll p-2 max-h-[120px] outline-none bg-primary border border-line text-body h-full w-full resize-none rounded-md"></textarea>
                
                <h3>Instruction</h3>
                <textarea className="pr-2 overflow-y-auto custom-scroll p-2 max-h-[300px] outline-none bg-primary border border-line text-body h-full w-full resize-none rounded-md"></textarea>

              </div>
            </div>
          </form>
          <p className="mb-0 text-center"></p>
          <div className="flex justify-end gap-3 mt-5">
            <button className="btn btn-alert">
              <SpinnerButton />
              Add
            </button>
            <button className="btn btn-cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddRecipe;
