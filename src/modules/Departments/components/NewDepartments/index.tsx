import React from "react";
import Typography from "../../../../common/shared/Typography/index.tsx";
import Button from "../../../../common/shared/Button/Button.tsx";
import { Formik } from "formik";
import Input from "../../../../common/shared/Input/index.tsx";
import Modal from "../../../../common/shared/Modal/index.tsx";
import Select from "../../../../common/shared/Select/index.tsx";
import { DEPARTMENT_HEADS } from "../../../../common/constants/departments.ts";
import {
  createDepartments,
  updateDepartments,
} from "../../services/departmentService.ts";
import { IDepartmentData } from "../../common/models.ts";
import { useDispatch } from "react-redux";
import { setAllDepartments } from "../../store/departmentsSlice.ts";
import "./styles.scss";

interface INewDepartmentsProps {
  handleClose: () => void;
  dep: IDepartmentData | null;
  handleChange: () => void;
}

const NewDepartments = ({
  handleClose,
  handleChange,
  dep,
}: INewDepartmentsProps) => {
  const dispatch = useDispatch();

  const onUpdate = (values, dep) => {
    updateDepartments({
      ...values,
      id: dep.id,
      status: dep.status,
      branches: dep.branches,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(setAllDepartments(res.departments));
          handleClose();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onCreate = (values) => {
    createDepartments(values)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setAllDepartments(res.departments));
          handleChange();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Modal close={handleClose}>
      <Typography variant="titleMd">
        {dep?.name ? "Edit" : "Create"} Department
      </Typography>
      <Formik
        initialValues={dep ?? { name: "", description: "", head: "" }}
        onSubmit={(values) => {
          dep?.name ? onUpdate(values, dep) : onCreate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="new-department-wrapper">
            <Input
              variant={"text"}
              label={"Department name *"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              name="name"
              errors={errors}
              touched={touched}
              placeholder="Department name *"
            />
            <Input
              variant={"textarea"}
              label={"Descrption"}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.description}
              name="description"
              errors={errors}
              touched={touched}
              placeholder="Descriptiopn text for department"
            />
            <Select
              name="head"
              label="Select Option"
              placeholder="Assign department head"
              handleChange={handleChange}
              value={values.head}
              errors={errors}
              touched={touched}
              options={DEPARTMENT_HEADS}
            />
            <div className="btns-wrapper">
              <Button
                type={"button"}
                disabled={false}
                text="Cancel"
                className={"light"}
                onClick={handleClose}
              />
              <Button
                type={"submit"}
                disabled={values.name.length < 2}
                text={dep?.name ? "Edit" : "Create"}
                className={"secondary"}
              />
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default NewDepartments;
