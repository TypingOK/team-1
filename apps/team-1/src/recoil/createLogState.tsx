import { API_SERVER } from "@/constants";
import { logDataTypes } from "@/types";
import { atom } from "recoil";

interface createLogTypes extends logDataTypes {
  images: string[];
}

export const createLog = atom<createLogTypes>({
  key: "createLogKey",
  default: {
    userId: "",
    series: "선택안함",
    title: "",
    content: "",
    private: false,
    tags: "",
    thumbnail: `${API_SERVER}/api/files/zo06l8flba88ig0/3euo9p40b2z6yq3/spring_boot_5nStMEoVTh.png`,
    images: [],
  },
});
