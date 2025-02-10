import React from "react";
import { IIconProps } from "../models/route";

const UserManagementIcon = ({ fillColor }: IIconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7573 13.4866C11.621 12.7606 12.2405 11.7865 12.5319 10.6965C12.8232 9.60644 12.7722 8.45316 12.3859 7.39306C11.9995 6.33296 11.2965 5.41734 10.3721 4.77036C9.4477 4.12339 8.34669 3.77637 7.21838 3.77637C6.09007 3.77637 4.98906 4.12339 4.06467 4.77036C3.14027 5.41734 2.43722 6.33296 2.05087 7.39306C1.66452 8.45316 1.61355 9.60644 1.90488 10.6965C2.19622 11.7865 2.81575 12.7606 3.67947 13.4866C2.33075 14.0965 1.16195 15.0436 0.285802 16.2366C0.123979 16.4571 0.0563818 16.7329 0.0978815 17.0032C0.139381 17.2736 0.286579 17.5164 0.507092 17.6782C0.727605 17.84 1.00337 17.9076 1.27372 17.8661C1.54408 17.8246 1.78687 17.6774 1.94869 17.4569C2.55519 16.6286 3.34841 15.9549 4.264 15.4905C5.17959 15.0261 6.19176 14.7841 7.21838 14.7841C8.24501 14.7841 9.25717 15.0261 10.1728 15.4905C11.0884 15.9549 11.8816 16.6286 12.4881 17.4569C12.6499 17.6775 12.8927 17.8249 13.1632 17.8664C13.4336 17.908 13.7095 17.8405 13.9301 17.6786C14.1507 17.5168 14.298 17.274 14.3396 17.0035C14.3812 16.7331 14.3136 16.4572 14.1518 16.2366C13.2752 15.0437 12.1061 14.0967 10.7573 13.4866ZM3.78088 9.28083C3.78088 8.60096 3.98249 7.93635 4.3602 7.37106C4.73792 6.80576 5.27479 6.36517 5.90291 6.10499C6.53103 5.84482 7.22219 5.77674 7.889 5.90938C8.55581 6.04202 9.16832 6.36941 9.64906 6.85015C10.1298 7.33089 10.4572 7.9434 10.5898 8.61021C10.7225 9.27702 10.6544 9.96818 10.3942 10.5963C10.134 11.2244 9.69345 11.7613 9.12815 12.139C8.56286 12.5167 7.89825 12.7183 7.21838 12.7183C6.3067 12.7183 5.43236 12.3562 4.7877 11.7115C4.14304 11.0669 3.78088 10.1925 3.78088 9.28083ZM21.4926 17.6743C21.3834 17.7546 21.2595 17.8125 21.128 17.8448C20.9964 17.8771 20.8597 17.8832 20.7258 17.8627C20.5919 17.8422 20.4633 17.7955 20.3475 17.7253C20.2316 17.6551 20.1307 17.5627 20.0506 17.4535C19.4426 16.6267 18.649 15.9542 17.7338 15.49C16.8185 15.0258 15.8071 14.7829 14.7809 14.7808C14.5074 14.7808 14.2451 14.6722 14.0517 14.4788C13.8583 14.2854 13.7496 14.0231 13.7496 13.7496C13.7496 13.4761 13.8583 13.2138 14.0517 13.0204C14.2451 12.827 14.5074 12.7183 14.7809 12.7183C15.2695 12.7175 15.7523 12.6124 16.1971 12.4103C16.6419 12.2081 17.0385 11.9135 17.3604 11.546C17.6824 11.1784 17.9223 10.7465 18.0641 10.279C18.206 9.81145 18.2466 9.31904 18.1832 8.83458C18.1197 8.35013 17.9538 7.88476 17.6963 7.46951C17.4389 7.05425 17.0958 6.69865 16.6901 6.42641C16.2844 6.15417 15.8253 5.97154 15.3435 5.89071C14.8616 5.80987 14.3681 5.83269 13.8957 5.95763C13.7638 5.99579 13.6256 6.00722 13.4892 5.99125C13.3528 5.97528 13.2209 5.93222 13.1014 5.86461C12.9819 5.79699 12.877 5.70618 12.7931 5.59751C12.7091 5.48883 12.6477 5.36448 12.6124 5.23175C12.5772 5.09902 12.5688 4.96058 12.5878 4.82457C12.6067 4.68855 12.6527 4.55769 12.7229 4.43967C12.7931 4.32165 12.8862 4.21885 12.9967 4.13729C13.1072 4.05573 13.2329 3.99707 13.3663 3.96473C14.5742 3.6447 15.855 3.74547 16.9979 4.25045C18.1408 4.75543 19.0777 5.63452 19.6543 6.743C20.231 7.85147 20.413 9.12326 20.1704 10.349C19.9279 11.5747 19.2752 12.6813 18.3198 13.4866C19.6685 14.0965 20.8373 15.0436 21.7135 16.2366C21.8741 16.4568 21.9411 16.7316 21.8997 17.001C21.8583 17.2705 21.7119 17.5125 21.4926 17.6743Z"
        fill="white"
      />
    </svg>
  );
};

export default UserManagementIcon;
