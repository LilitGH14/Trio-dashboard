import React, { lazy, useState } from "react";
import { Formik } from "formik";
import IconButton from "../../../../../common/shared/IconButton/index.tsx";
import { IFilter } from "../../../common/models.ts";
import { useSwipeable } from "react-swipeable";
import "../styles.scss";

const DepSearchFilters = lazy(() => import("./DepSearchFilters.tsx"));
const MobileStatusFilters = lazy(() => import("./MobileStatusFilter.tsx"));

const HEIGHTS = {
  search: 350,
  filters: 212,
};

interface IFiltersProps {
  filterDeps: (filters: IFilter) => void;
  filterByStatus: (status: string) => void;
  resetDepsFilters: () => void;
}
const MobileFilters = ({
  filterDeps,
  filterByStatus,
  resetDepsFilters,
}: IFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState("");
  const [height, setHeight] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const closeFilterModal = () => {
    setSelectedFilters("");
    setIsOpen(false);
    setHeight(0);
  };

  const handleDropdownToggle = (selectedFilter: string) => {
    setSelectedFilters((prev) =>
      prev === selectedFilter ? "" : selectedFilter
    );
    setIsOpen(true);
    setHeight((prev) =>
      prev === HEIGHTS[selectedFilter] ? 0 : HEIGHTS[selectedFilter]
    );
  };

  const handleFilterByStatus = (status: string) => {
    filterByStatus(status);
    setSelectedStatus(status);
    closeFilterModal();
  };

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (height !== HEIGHTS[selectedFilters]) {
        setHeight(HEIGHTS[selectedFilters]);
      } else {
        setIsOpen(false);
      }
    },
    onSwipedDown: () => {
      closeFilterModal();
    },
  });

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        head: "",
      }}
      onSubmit={(values) => {
        if (
          values.name.length > 2 ||
          values.description.length > 2 ||
          values.head
        ) {
          filterDeps(values);
        }
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        isValid,
      }) => (
        <>
          <div className="header">
            <div className="header-btns">
              <IconButton
                disabled={false}
                icon={"/assets/svg/general-icons/search.svg"}
                name={"Search icon"}
                text="Search"
                onClick={() => handleDropdownToggle("search")}
              />
              <IconButton
                disabled={false}
                icon={"/assets/svg/general-icons/filter.svg"}
                name={"Filters"}
                text="Filters"
                onClick={() => handleDropdownToggle("filters")}
              />
            </div>
          </div>
          <>
            <div
              className={`content ${isOpen ? "open" : "closed"}`}
              {...handlers}
              style={{ height: `${height}px` }}
            >
              {selectedFilters === "search" && (
                <DepSearchFilters
                  resetFilters={() => {
                    resetDepsFilters();
                    resetForm();
                  }}
                  handleBlur={handleBlur}
                  values={values}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isValid={isValid}
                  close={closeFilterModal}
                />
              )}
              {selectedFilters === "filters" && (
                <MobileStatusFilters
                  handleFilterByStatus={handleFilterByStatus}
                  close={closeFilterModal}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                />
              )}
            </div>
            {isOpen && <div className="overlay"></div>}
          </>
        </>
      )}
    </Formik>
  );
};

export default MobileFilters;
