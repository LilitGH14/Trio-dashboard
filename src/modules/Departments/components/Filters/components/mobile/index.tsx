import React, { lazy } from "react";
import IconButton from "../../../../../../common/shared/IconButton/index.tsx";
import { useSwipeable } from "react-swipeable";
import { useAppSelector } from "../../../../../../common/hooks/useAppSelector.tsx";
import { useDispatch } from "react-redux";
import {
  closeSearchFilterModal,
  closeStatusFilterModal,
  openSearchFilterModal,
  openStatusFilterModal,
} from "../../../../store/departmentsSlice.ts";
import { HEIGHTS } from "../../../../common/constants.ts";
import ModalWrapper from "./ModalWrapper.tsx";
import "../../styles.scss";

const SearchFilters = lazy(() => import("./SearchFilters.tsx"));
const StatusFilters = lazy(() => import("./StatusFilter.tsx"));

const MobileFilters = () => {
  const dispatch = useDispatch();

  const {
    statusFiltersModalIsOpen,
    searchFiltersModalIsOpen,
    searchFilter,
    statusFilter,
  } = useAppSelector((state) => state.departments);

  const handleDropdownToggle = (selectedFilter: string) => {
    if (selectedFilter === "search") {
      dispatch(openSearchFilterModal({ height: HEIGHTS.search }));
    } else {
      dispatch(openStatusFilterModal({ height: HEIGHTS.filters }));
    }
  };

  const statusSwiperhandler = useSwipeable({
    onSwipedUp: (e) => {},
    onSwipedDown: () => {
      dispatch(closeStatusFilterModal({ height: 0 }));
    },
  });

  const searchSwiperhandler = useSwipeable({
    onSwipedUp: (e) => {},
    onSwipedDown: () => {
      dispatch(closeSearchFilterModal({ height: 0 }));
    },
  });

  return (
    <div className="mobile-filters-wrapper">
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
      <ModalWrapper
        children={<SearchFilters />}
        handler={searchSwiperhandler}
        open={searchFiltersModalIsOpen}
        filter={searchFilter}
      />
      <ModalWrapper
        children={<StatusFilters />}
        handler={statusSwiperhandler}
        open={statusFiltersModalIsOpen}
        filter={statusFilter}
      />
    </div>
  );
};

export default MobileFilters;
