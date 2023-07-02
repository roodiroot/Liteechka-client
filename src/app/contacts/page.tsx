import ContactBlock from "@/components/contact-page/ContactBlock";

export const metadata = {
  title: "Контакты",
  description:
    "Мы устанавливаем и изготавливаем навесы из поликарбаната различных типов в Саранске и Ресуплики Мордовия",
};

const ContactsPage = () => {
  return (
    <div className="mt-[75px]">
      <ContactBlock />
    </div>
  );
};

export default ContactsPage;
