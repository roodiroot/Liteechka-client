import { Switch } from "@headlessui/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface RadioTogglePrivacyProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  className?: string;
}
const RadioTogglePrivacy: React.FC<RadioTogglePrivacyProps> = ({
  value,
  setValue,
  className,
}) => {
  return (
    <div className={`sm:col-span-2 ${className}`}>
      <Switch.Group as="div" className="flex gap-x-4">
        <div className="flex h-6 items-center">
          <Switch
            checked={value}
            onChange={setValue}
            className={`
                        ${value ? "bg-lime-500" : "bg-gray-200"}
                        flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500
                        `}
          >
            <span className="sr-only">
              Политика по использованию персональных данных.
            </span>
            <span
              aria-hidden="true"
              className={`
                        ${value ? "translate-x-3.5" : "translate-x-0"}
                        h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out
                        `}
            />
          </Switch>
        </div>
        <Switch.Label className="text-sm leading-6 text-gray-600">
          Согласие с{" "}
          <Link
            href="/privacy/personal"
            className="font-semibold text-lime-500"
          >
            Политикой конфиденциальности
          </Link>
          .
        </Switch.Label>
      </Switch.Group>
    </div>
  );
};

export default RadioTogglePrivacy;
