import { setIsAdd } from "@/components/store/storeAction";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import ToastSuccess from "../partials/ToastSuccess";
import CategoryTable from "./CategoryTable";
import ModalAddCategory from "./ModalAddCategory";
import { StoreContext } from "../../../store/storeContext";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isCategoryEdit, setIsCategoryEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsCategoryEdit(null);
  };

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="category" submenu="read" />
          <main>
            <Header title="Category" subtitle="Manage Kiosk Category" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <div></div>

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <CategoryTable
                isCategoryEdit={isCategoryEdit}
                setIsCategoryEdit={setIsCategoryEdit}
              />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {/* <SpinnerWindow /> */}

      {store.isAdd && (
        <ModalAddCategory
          isCategoryEdit={isCategoryEdit}
          setIsCategoryEdit={setIsCategoryEdit}
        />
      )}
    </>
  );
};

export default Category;
