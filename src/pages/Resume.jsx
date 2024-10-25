import React from 'react'
import { useTranslation } from 'react-i18next';
import ListaEducacion from "../components/ListaEducacion";

export const Resume = () => {
  const { t } = useTranslation('global'); 
  return (
    <main className="pt-4 px-4 md:px-8 lg:px-16">
      <div className="flex justify-center pt-8">

      <ListaEducacion/>
      </div>
    </main>
  )
}