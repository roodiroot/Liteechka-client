"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { sendMessageToTelegram } from "@/utility/sendMessage";
import { toHtmlFormat } from "@/utility/objectFormat";
import InputCastom from "../contact-page/InputCastom";
import { notify } from "@/utility/notifications";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const title = "Обратная связь";
    const detailsToSend = {
      Телефон: data.phoneNumber,
    };

    if (data.phoneNumber.length < 18) {
      return notify("warning", "Внимание!", "Введите коректный номер телефона");
    }
    await sendMessageToTelegram(toHtmlFormat(title, detailsToSend))
      .then(() => {
        notify("success", "Успешно!", "Ожидайте звонка специалиста");
      })
      .catch(() => {
        notify("error", "Ошибка!", "Отправка не удалась");
      })
      .finally(() => reset());
  };

  return (
    <form className="max-w-md mt-10 mx-auto flex gap-4">
      <label htmlFor="emailAdres" className="sr-only">
        Email address
      </label>
      <InputCastom
        id="phoneNumber"
        type="number"
        className={`
            min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 
            text-white ring-1 ring-inset sm:text-sm sm:leading-6 
            placeholder:font-light placeholder:text-white/50
            ${errors["phoneNumber"] ? "ring-rose-500" : "ring-white/10"}
        `}
        placeholder="Введите ваш номер телефона"
        register={register}
        required
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        style="white"
        label="Отправить"
      />
    </form>
  );
};

export default FeedbackForm;
