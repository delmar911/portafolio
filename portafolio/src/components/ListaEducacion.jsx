import React from "react";
import "./css/listaEducacion.css";
import { useTranslation } from 'react-i18next';

const ListaEducacion = () => {
  const { t } = useTranslation();
  return (
    <ol className="relative border-s border-gray-200">
      <li className="mb-10 ms-6 relative animate-fade-in-down">
        <span className="absolute left-0 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -translate-x-10 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          {t('education.firstTitle')}{" "}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {t('education.latest')}
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-white">
        {t('education.firstTime')}
        </time>
        <p className="mb-4 text-base font-normal text-slate-300">
        {t('education.firstDescription')} <br />
        {t('education.secondDescription')}
        </p>
      </li>
      <li className="mb-10 ms-6 relative animate-fade-in-down delay-200">
        <span className="absolute left-0 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -translate-x-10 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-white">
        {t('education.secondTitle')}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-slate-300">
        {t('education.secondTime')}
        </time>
        <p className="text-base font-normal text-slate-300">
        {t('education.thirdDescription')} <br />
        {t('education.fourthDescription')}
        </p>
      </li>
      <li className="ms-6 relative animate-fade-in-down delay-400">
        <span className="absolute left-0 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -translate-x-10 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {t('education.thirdTitle')}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-slate-300">
        {t('education.thirdTime')}
        </time>
        <p className="text-base font-normal text-slate-300">
        {t('education.fifthDescription')} <br />
        {t('education.sixthDescription')}
        </p>
      </li>
    </ol>
  );
};

export default ListaEducacion;
