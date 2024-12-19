import { setIsAdd } from "@/components/store/storeAction";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import SearchBar from "../partials/SearchBar";
import SideNavigation from "../partials/SideNavigation";
import ToastSuccess from "../partials/ToastSuccess";
import LevelTable from "./LevelTable";
import ModalAddLevel from "./ModalAddLevel";
import { StoreContext } from "../../../store/storeContext";

const Level = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const [isLevelEdit, setIsLevelEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsLevelEdit(null);
  };

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="level" submenu="read" />
          <main>
            <Header title="Level" subtitle="Manage Recipe Level" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <div></div>

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <LevelTable
                isLevelEdit={isLevelEdit}
                setIsLevelEdit={setIsLevelEdit}
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
        <ModalAddLevel
          isLevelEdit={isLevelEdit}
          setIsLevelEdit={setIsLevelEdit}
        />
      )}
    </>
  );
};

export default Level;
