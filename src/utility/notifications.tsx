import Notifications from "@/components/utils/Notifications";
import React from "react";
import toast from "react-hot-toast";

interface NotifiProps {
  type: string;
  title: string;
  description: string;
}

export const notify: any = (
  type: string,
  title: string,
  description: string
) => {
  switch (type) {
    case "success":
      toast.custom(
        <Notifications success title={title} description={description} />
      );
      break;
    case "warning":
      toast.custom(
        <Notifications warning title={title} description={description} />
      );
      break;
    case "error":
      toast.custom(
        <Notifications error title={title} description={description} />
      );
      break;
    default:
      toast.custom(
        <Notifications success title={title} description={description} />
      );
  }
};
