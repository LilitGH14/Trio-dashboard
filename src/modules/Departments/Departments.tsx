import React, { lazy, useState } from "react";
import NoDepartments from "./components/NoDepartments/index.tsx";
import DataTable from "../../common/shared/Table/index.tsx";
import { IDepartmentData, IFilter } from "./common/models.ts";
import PageHeader from "./components/PageHeader/index.tsx";
import {
  DEPARTMENT_HEADERS,
  DEPARTMENT_MOBILE_HEADERS,
} from "../../common/constants/departments.ts";
import { getDepartments } from "./services/departmentService.ts";
import Modal from "../../common/shared/Modal/index.tsx";
import Filters from "./components/Filters/index.tsx";
import "./styles.scss";
import { useAppSelector } from "../../common/hooks/useAppSelector.tsx";
import { useDispatch } from "react-redux";
import {
  resetFilterDepartments,
  setFilterDepartments,
} from "./store/departmentsSlice.ts";

const NewDepartments = lazy(
  () => import("./components/NewDepartments/index.tsx")
);

const SuccessCard = lazy(
  () => import("../../common/shared/SuccessCard/index.tsx")
);

const Departments = () => {
  const dispatch = useDispatch();

  const { departments, filteredDepartments } = useAppSelector(
    (state) => state.departments
  );

  const [depUpdatedSuccessFully, setDepIsUpdatedSuccessFully] = useState(false);
  const [openNewForm, setOpenNewForm] = useState(false);
  const [selectedDepartment, setSelectedDepartment] =
    useState<IDepartmentData | null>(null);

  const handelModalClose = () => {
    setOpenNewForm(false);
    setSelectedDepartment(null);
  };

  const handleUpdate = () => {
    setOpenNewForm(false);
    getDeps();
    setDepIsUpdatedSuccessFully(true);
  };

  const updateDepartment = (dep: IDepartmentData) => {
    setOpenNewForm(true);
    setSelectedDepartment(dep);
  };

  const filterDeps = (filters: IFilter) => {
    let _filteredDeps = departments.filter((item: any) => {
      return (
        (filters.name === "" ||
          item.name
            .replaceAll(" ", "")
            .toLowerCase()
            .includes(filters.name.replaceAll(" ", "").toLowerCase())) &&
        (filters.description === "" ||
          item.description
            .replaceAll(" ", "")
            .toLowerCase()
            .includes(filters.description.replaceAll(" ", "").toLowerCase())) &&
        (filters.head === null ||
          item.head
            .replaceAll(" ", "")
            .toLowerCase()
            .includes(filters.head.replaceAll(" ", "").toLowerCase()))
      );
    });

    dispatch(setFilterDepartments(_filteredDeps));

    // in real case as we can deal with a huge data, we should use API getFilteredDepartments(filters)
  };

  const resetDepsFilters = () => {
    dispatch(resetFilterDepartments());
  };

  const filterByStatus = (status: string) => {
    dispatch(
      setFilterDepartments(
        status === "all"
          ? departments
          : departments.filter((f) => f.status === status)
      )
    );
  };

  const getDeps = () => {
    getDepartments()
      .then((res) => {
        if (res === 200) {
          dispatch(setFilterDepartments(res.departments));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useState(() => {
    !departments && getDeps();
  }, []);

  return (
    <div className="dashboard-wrapper">
      {departments && (
        <>
          <PageHeader open={() => setOpenNewForm(true)} />
          <Filters
            filterDeps={filterDeps}
            resetDepsFilters={resetDepsFilters}
            filterByStatus={filterByStatus}
          />
          <DataTable
            headers={DEPARTMENT_HEADERS}
            mobileHeaders={DEPARTMENT_MOBILE_HEADERS}
            data={filteredDepartments ?? departments}
            selectDep={updateDepartment}
          />
        </>
      )}
      {departments === null && <NoDepartments open={setOpenNewForm} />}
      {openNewForm && (
        <NewDepartments
          handleClose={handelModalClose}
          handleChange={handleUpdate}
          dep={selectedDepartment}
        />
      )}

      {depUpdatedSuccessFully && (
        <Modal close={() => setDepIsUpdatedSuccessFully(false)}>
          <SuccessCard
            title="Your “Department name” department was created!"
            subTitle={
              "You successfully cretaed new department. Now you can add members and work efficiently!"
            }
            btnTitle={"Ok, thanks"}
            handleClick={() => setDepIsUpdatedSuccessFully(false)}
            className="modal-card"
          />
        </Modal>
      )}
    </div>
  );
};
export default Departments;
