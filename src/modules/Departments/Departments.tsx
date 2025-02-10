import React, { lazy, useState } from "react";
import NoDepartments from "./components/NoDepartments/index.tsx";
import DataTable from "../../common/shared/Table/index.tsx";
import { IDepartmentData } from "./common/models.ts";
import PageHeader from "./components/PageHeader/index.tsx";
import {
  DEPARTMENT_HEADERS,
  DEPARTMENT_MOBILE_HEADERS,
} from "../../common/constants/departments.ts";
import { getDepartments } from "./services/departmentService.ts";
import Modal from "../../common/shared/Modal/index.tsx";
import Filters from "./components/Filters/index.tsx";
import { useAppSelector } from "../../common/hooks/useAppSelector.tsx";
import { useDispatch } from "react-redux";
import { setAllDepartments } from "./store/departmentsSlice.ts";
import "./styles.scss";

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
  const { user } = useAppSelector((state) => state.general);

  const [depUpdatedSuccessFully, setDepIsUpdatedSuccessFully] = useState("");
  const [openNewForm, setOpenNewForm] = useState(false);
  const [selectedDepartment, setSelectedDepartment] =
    useState<IDepartmentData | null>(null);

  const handelModalClose = () => {
    setOpenNewForm(false);
    setSelectedDepartment(null);
  };

  const handleUpdate = () => {
    setOpenNewForm(false);
  };

  const updateDepartment = (dep: IDepartmentData) => {
    setOpenNewForm(true);
    setSelectedDepartment(dep);
  };

  const getDeps = () => {
    getDepartments(user)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setAllDepartments(res.departments));
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
      {departments?.length > 0 && (
        <>
          <PageHeader open={() => setOpenNewForm(true)} />
          <Filters />
          <DataTable
            headers={DEPARTMENT_HEADERS}
            mobileHeaders={DEPARTMENT_MOBILE_HEADERS}
            data={filteredDepartments ?? departments}
            selectDep={updateDepartment}
          />
        </>
      )}

      {departments?.length === 0 && <NoDepartments open={setOpenNewForm} />}

      {openNewForm && (
        <NewDepartments
          handleClose={handelModalClose}
          handleChange={handleUpdate}
          dep={selectedDepartment}
          showSuccessPopup={setDepIsUpdatedSuccessFully}
        />
      )}

      {depUpdatedSuccessFully && (
        <Modal close={() => setDepIsUpdatedSuccessFully("")}>
          <SuccessCard
            title={`Your ${depUpdatedSuccessFully} department was created!`}
            subTitle={
              "You successfully cretaed new department. Now you can add members and work efficiently!"
            }
            btnTitle={"Ok, thanks"}
            handleClick={() => setDepIsUpdatedSuccessFully("")}
            className="modal-card"
          />
        </Modal>
      )}
    </div>
  );
};
export default Departments;
