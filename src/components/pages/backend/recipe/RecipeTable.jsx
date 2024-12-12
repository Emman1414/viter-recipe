import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
} from "@/components/store/storeAction";

import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import useQueryData from "../../../custom-hook/useQueryData";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import LoadMore from "../partials/LoadMore";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalDelete from "../partials/modals/ModalDelete";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import Status from "../partials/Status";
import TableLoader from "../partials/TableLoader";
import { setIsArchive, setIsRestore } from "../../../store/storeAction";
import ModalRestore from "../partials/modals/ModalRestore";
import { StoreContext } from "../../../store/storeContext";
import ModalArchive from "../partials/modals/ModalArchive";

const RecipeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const [isActive, setIsActive] = React.useState(0);
  const [id, setId] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/recipe`, // endpoint
    "get", // method
    "recipe"
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.recipe_aid);
  };
  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    // setIsActive(1);
    setId(item.recipe_aid);
  };
  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    // setIsActive(0);
    setId(item.recipe_aid);
  };

  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* {!isLoading || (isFetching && <SpinnerTable />)}{" "} */}
        <div className="table-wrapper custom-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th className="w-[20%]">Title</th>
                <th className="w-[10%]">Category</th>
                <th>Level</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {((isLoading && !isFetching) || result?.data.length === 0) && (
                <tr>
                  <td colSpan="100%">
                    {isLoading ? (
                      <TableLoader count={30} cols={6} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}

              {result?.count > 0 &&
                result.data.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{counter++}.</td>
                      <td>
                        {item.recipe_is_active === 1 ? (
                          <Status text="Active" />
                        ) : (
                          <Status text="Inactive" />
                        )}
                      </td>
                      <td className="capitalize" title={`${item.recipe_title}`}>
                        {item.recipe_title}
                      </td>
                      <td
                        className="capitalize"
                        title={`${item.recipe_category_id}`}
                      >
                        {item.category_title}
                      </td>
                      <td
                        className="capitalize"
                        title={`${item.recipe_level_id}`}
                      >
                        {item.level_level}
                      </td>

                      <td>
                        <ul className="table-action">
                          {item.recipe_is_active === 1 ? (
                            <>
                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Edit"
                                  onClick={() => handleEdit(item)}
                                >
                                  <FilePenLine />
                                </button>
                              </li>
                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Archive"
                                  onClick={() => handleArchive(item)}
                                >
                                  <Archive />
                                </button>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Restore"
                                  onClick={() => handleRestore(item)}
                                >
                                  <ArchiveRestore />
                                </button>
                              </li>
                              <li>
                                <button
                                  className="tool-tip"
                                  data-tooltip="Delete"
                                  onClick={() => handleDelete(item)}
                                >
                                  <Trash2 />
                                </button>
                              </li>
                            </>
                          )}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/recipe/${id}`}
          queryKey={"recipe"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/recipe/active/${id}`}
          queryKey={"recipe"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/recipe/active/${id}`}
          queryKey={"recipe"}
        />
      )}
    </>
  );
};

export default RecipeTable;
