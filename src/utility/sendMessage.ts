export const sendMessageToTelegram = async (text: string) => {
  const res = await fetch("/api/send-message", {
    method: "POST",
    body: JSON.stringify({ text, parseMode: "html" }),
  });
  return res;
};
