import React from "react";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { StoreContext } from "@/components/store/storeContext";
import LoadMore from "../partials/LoadMore";
import ModalArchive from "../partials/modals_Old/ModalArchive";
import ModalDelete from "../partials/modals_Old/ModalDelete";
import ModalRestore from "../partials/modals_Old/ModalRestore";
import Status from "../partials/Status";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import SearchBarWithFilterStatus from "../partials/SearchBarWithFilterStatus";

const CategoryTable = ({ setIsCategoryEdit }) => {
  const [id, setIsId] = React.useState("");
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState("");
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();

  let counter = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["category", onSearch, isFilter, statusFilter],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        "/v2/category/search",
        `/v2/category/page/${pageParam}`,
        isFilter || store.isSearch,
        {
          isFilter,
          statusFilter,
          searchValue: search?.current.value,
          id: "",
        } // payload
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  // handle
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setIsCategoryEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.category_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.category_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.category_aid);
  };

  return (
    <>
      <div className="mt-5">
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
          setPage={setPage}
        />
      </div>
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
                      {item.category_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="inactive" />
                      )}
                    </td>
                    <td>{item.category_title}</td>
                    <td>
                      <ul className="table-action">
                        {item.category_is_active ? (
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

          <div className="pb-10 text-center flex items-center ">
            <Loadmore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/category/${id}`}
          queryKey={"category"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/category/active/${id}`}
          queryKey={"category"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/category/active/${id}`}
          queryKey={"category"}
        />
      )}
    </>
  );
};

export default CategoryTable;
