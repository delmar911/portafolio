import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export const Contact = () => {
  const { t } = useTranslation("global");
  return (
    <main className="pt-4 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-center w-full p-8 text-white h-96">
        <div className="">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold pb-7">{t("header.contactme")}</h1>
            <p className=" text-center w-96 pb-7">
              {t("contact.paragrah")}
            </p>
          </div>

          <div className="space-x-10 flex justify-center pt-8">
            <a href="mailto:mariadelmar.artunduaga911@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-12"
              />
            </a>
            <a href="https://github.com/delmar911">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-12"
              />
            </a>
            <a href="https://wa.me/qr/UIUPFYPPGGOFE1">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="h-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/mariadelmarartunduaga/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
