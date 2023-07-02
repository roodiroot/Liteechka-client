import {
  XMarkIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import toast from "react-hot-toast";

interface NotificationsProps {
  // success, error, warning
  success?: boolean;
  error?: boolean;
  warning?: boolean;
  title: string;
  description: string;
}
const Notifications: React.FC<NotificationsProps> = ({
  success,
  error,
  warning,
  title,
  description,
}) => {
  return (
    <div className="w-full flex flex-col items-center sm:items-end">
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/10 p-4 flex items-start">
        <div className="shrink-0 ">
          {success && <CheckCircleIcon className="h-6 w-6 text-green-400" />}
          {error && (
            <ExclamationTriangleIcon className="h-6 w-6 text-red-400" />
          )}
          {warning && (
            <ExclamationCircleIcon className="h-6 w-6 text-yellow-400" />
          )}
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className="text-sm font-medium">{title}</p>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        <div className="ml-4 shrink-0 flex">
          <button
            onClick={() => toast.remove()}
            className="inline-flex rounded-md bg-white text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
