"use client";

import { toHtmlFormat } from "@/utility/objectFormat";
import { sendMessageToTelegram } from "@/utility/sendMessage";
import InputClasic from "../contact-page/InputClasic";
import RadioTogglePrivacy from "../contact-page/RadioTogglePrivacy";
import Button from "../utils/Button";
import React, { useState } from "react";
import { ModalBodyProps } from "@/types/modal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { notify } from "@/utility/notifications";

const MainModalBody: React.FC<ModalBodyProps> = ({ closeModal }) => {
  const [agreed, setAgreed] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const title = "Модальное окно обратной связи";
    const detailsToSend = {
      Имя: data.firstName,
      Телефон: data.phoneNumber,
      Коментарий: data.message,
    };
    if (data.phoneNumber.length < 18) {
      return notify("warning", "Внимание!", "Введите коректный номер телефона");
    }
    if (agreed) {
      return await sendMessageToTelegram(toHtmlFormat(title, detailsToSend))
        .then(() => {
          notify("success", "Успешно!", "Ожидайте звонка специалиста");
        })
        .catch(() => {
          notify("error", "Ошибка!", "Отправка не удалась");
        })
        .finally(() => {
          reset();
          closeModal();
        });
    }
    return notify(
      "warning",
      "Внимание!",
      "Поставьте галочку согласия с Политикой конфиденциальности."
    );
  };

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <InputClasic
          id="firstName"
          label="Имя"
          type="text"
          className="sm:col-span-2"
          register={register}
          errors={errors}
          required
        />
        <InputClasic
          id="phoneNumber"
          label="Номер телефона"
          type="number"
          className="sm:col-span-2"
          register={register}
          errors={errors}
          required
        />
        <InputClasic
          id="message"
          label="Коментарий (необезательно)"
          type="textarea"
          className="sm:col-span-2"
          register={register}
          errors={errors}
          placeholder="Если вам необходимо, чтобы мы позвонили в удобное для вас время, пожалуйста, можете указать его здесь."
        />
        <RadioTogglePrivacy value={agreed} setValue={setAgreed} />
      </div>

      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-4">
        <Button
          onClick={handleSubmit(onSubmit)}
          label="Отправить"
          className="text-center sm:ml-3 inline-flex justify-center w-full sm:w-auto"
        />
        <Button
          onClick={closeModal}
          style="stroke"
          label="Отмена"
          className="mt-3 text-center inline-flex justify-center w-full sm:mt-0 sm:w-auto"
        />
      </div>
    </>
  );
};

export default MainModalBody;
