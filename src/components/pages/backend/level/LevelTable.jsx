import useQueryData from "@/components/custom-hook/useQueryData";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import { StoreContext } from "../../../store/storeContext";
import LoadMore from "../partials/LoadMore";
import ModalArchive from "../partials/modals/ModalArchive";
import Pills from "../partials/Pills";
import ModalDelete from "../partials/modals/ModalDelete";
import Status from "../partials/Status";
import ModalRestore from "../partials/modals/ModalRestore";

const LevelTable = ({ setIsLevelEdit }) => {
  const [id, setIsId] = React.useState("");
  const { store, dispatch } = React.useContext(StoreContext);

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setIsLevelEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.level_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.level_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.level_aid);
  };

  const {
    isFetching,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/level`, // endpoint
    "get", // method
    "level" // key
  );
  

  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={10} cols={4} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td colSpan={100}>
                  <IconNoData />
                </td>
              </tr>
              <tr>
                <td colSpan={100}>
                  <IconServerError />
                </td>
              </tr> */}

              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      {item.level_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="inactive" />
                      )}
                    </td>
                    <td>{item.level_level}</td>
                    <td>
                      <ul className="table-action">
                        {item.level_is_active ? (
                          <>
                            <li>
                              <button className="tooltip" data-tooltip="Edit">
                                <FilePenLine onClick={() => handleEdit(item)} />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                              >
                                <Archive onClick={() => handleArchive(item)} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                              >
                                <ArchiveRestore
                                  onClick={() => handleRestore(item)}
                                />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tool-tip"
                                data-tooltip="Delete"
                              >
                                <Trash2 onClick={() => handleDelete(item)} />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/level/${id}`}
          queryKey={"level"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/level/active/${id}`}
          queryKey={"level"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/level/active/${id}`}
          queryKey={"level"}
        />
      )}
    </>
  );
};

export default LevelTable;
