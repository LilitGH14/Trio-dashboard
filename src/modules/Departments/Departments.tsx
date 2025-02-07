import React, { lazy, useState } from "react";
import NoDepartments from "./components/NoDepartments/index.tsx";
import DataTable from "../../common/shared/Table/index.tsx";
import { IDepartmentData, IFilter } from "./models/index.ts";
import PageHeader from "./components/PageHeader/index.tsx";
import { DEPARTMENT_HEADERS } from "../../common/constants/departments.ts";
import { getDepartments } from "./services/departmentService.ts";
import Modal from "../../common/shared/Modal/index.tsx";
import Filters from "./components/Filters/index.tsx";
import "./styles.scss";

const NewDepartments = lazy(
  () => import("./components/NewDepartments/index.tsx")
);

const SuccessCard = lazy(
  () => import("../../common/shared/SuccessCard/index.tsx")
);

const Departments = () => {
  const [depUpdatedSuccessFully, setDepIsUpdatedSuccessFully] = useState(false);
  const [openNewForm, setOpenNewForm] = useState(false);
  const [departments, setDepartments] = useState<IDepartmentData[] | null>(
    null
  );
  const [_departments, _setDepartments] = useState<IDepartmentData[] | null>(
    null
  );
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
    let _filteredDeps = (_departments as IDepartmentData[])?.filter(
      (item: any) => {
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
              .includes(
                filters.description.replaceAll(" ", "").toLowerCase()
              )) &&
          (filters.head === null ||
            item.head
              .replaceAll(" ", "")
              .toLowerCase()
              .includes(filters.head.replaceAll(" ", "").toLowerCase()))
        );
      }
    );

    setDepartments(_filteredDeps);

    // in real case as we can deal with a huge data, we should use API
    // getFilteredDepartments(filters)
    //   .then((res) => {
    //     if (!!res) {
    //       setDepartments(res);
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const resetDepsFilters = () => {
    setDepartments(_departments);
  };

  const filterByStatus = (status: string) => {
    setDepartments(
      status === "all"
        ? _departments
        : (_departments as IDepartmentData[])?.filter(
            (f) => f.status === status
          )
    );
  };

  const getDeps = () => {
    getDepartments()
      .then((res) => {
        if (!!res) {
          setDepartments(res);
          _setDepartments(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useState(() => {
    getDeps();
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
            data={departments}
            selectDep={updateDepartment}
          />
        </>
      )}
      {!departments && <NoDepartments open={setOpenNewForm} />}

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
