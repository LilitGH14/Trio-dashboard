import React from "react";
import { IIconProps } from "../models/route";

const ArchiveIcon = ({ fillColor }: IIconProps) => {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16732 6.41634H20.834V3.66634H4.16732V6.41634ZM20.834 8.24967V19.2497C20.834 19.4928 20.7242 19.7259 20.5289 19.8979C20.3335 20.0698 20.0686 20.1663 19.7923 20.1663H5.20898C4.93272 20.1663 4.66777 20.0698 4.47241 19.8979C4.27706 19.7259 4.16732 19.4928 4.16732 19.2497V8.24967H3.12565C2.84938 8.24967 2.58443 8.1531 2.38908 7.98119C2.19373 7.80928 2.08398 7.57612 2.08398 7.33301V2.74967C2.08398 2.50656 2.19373 2.2734 2.38908 2.10149C2.58443 1.92958 2.84938 1.83301 3.12565 1.83301H21.8757C22.1519 1.83301 22.4169 1.92958 22.6122 2.10149C22.8076 2.2734 22.9173 2.50656 22.9173 2.74967V7.33301C22.9173 7.57612 22.8076 7.80928 22.6122 7.98119C22.4169 8.1531 22.1519 8.24967 21.8757 8.24967H20.834ZM6.25065 18.333H18.7507V8.24967H6.25065V18.333ZM10.4173 14.6663H14.584C14.8603 14.6663 15.1252 14.7629 15.3206 14.9348C15.5159 15.1067 15.6257 15.3399 15.6257 15.583C15.6257 15.8261 15.5159 16.0593 15.3206 16.2312C15.1252 16.4031 14.8603 16.4997 14.584 16.4997H10.4173C10.1411 16.4997 9.8761 16.4031 9.68075 16.2312C9.4854 16.0593 9.37565 15.8261 9.37565 15.583C9.37565 15.3399 9.4854 15.1067 9.68075 14.9348C9.8761 14.7629 10.1411 14.6663 10.4173 14.6663Z"
        fill="white"
      />
    </svg>
  );
};

export default ArchiveIcon;
