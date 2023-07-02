"use client";

import { Switch } from "@headlessui/react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../utils/Button";
import Link from "next/link";
import { useState } from "react";
import InputClasic from "./InputClasic";
import { sendMessageToTelegram } from "@/utility/sendMessage";
import { toHtmlFormat } from "@/utility/objectFormat";
import { notify } from "@/utility/notifications";
import RadioTogglePrivacy from "./RadioTogglePrivacy";

const ContactForm = () => {
  const [agreed, setAgreed] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const title = "Отправка со страници контакты";
    const detailsToSend = {
      Имя: data.firstName,
      Фамилия: data.lastName,
      Телефон: data.phoneNumber,
      Почта: data.email,
      Коментарий: data.message,
    };
    if (agreed) {
      return await sendMessageToTelegram(toHtmlFormat(title, detailsToSend))
        .then(() => {
          notify("success", "Успешно!", "Спасибо за обратную связь.");
        })
        .catch(() => {
          notify("error", "Ошибка!", "Отправка не удалась");
        })
        .finally(() => reset());
    }
    return notify(
      "warning",
      "Внимание!",
      "Поставьте галочку согласия с Политикой конфиденциальности."
    );
  };

  return (
    <form action="" className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <InputClasic
          register={register}
          errors={errors}
          required
          id="firstName"
          label="Имя"
          type="text"
        />
        <InputClasic
          register={register}
          errors={errors}
          id="lastName"
          label="Фамилия"
          type="text"
        />
        <InputClasic
          register={register}
          errors={errors}
          required
          id="email"
          label="Электронная почта"
          type="email"
          className="sm:col-span-2"
        />
        <InputClasic
          register={register}
          errors={errors}
          id="phoneNumber"
          label="Номер телефона"
          type="number"
          className="sm:col-span-2"
        />
        <InputClasic
          register={register}
          errors={errors}
          required
          id="message"
          label="Сообщение"
          type="textarea"
          className="sm:col-span-2"
        />
        <RadioTogglePrivacy
          value={agreed}
          setValue={setAgreed}
          className="flex gap-x-4"
        />
      </div>
      <div className="mt-10">
        <Button
          onClick={handleSubmit(onSubmit)}
          label="Отправить"
          className="text-center block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
