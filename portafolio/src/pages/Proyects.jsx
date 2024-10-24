import { useTranslation } from "react-i18next";
import { Data } from "../proyects/proyects";

export const Proyects = () => {
  const { t } = useTranslation("global");

  return (
    <main className="pt-4 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((project) => (
          <div key={project.id} className="bg-indigo-950 border border-gray-200 rounded-lg shadow">
            <a href={project.deploy}>
              <img
                className="rounded-t-lg w-full"
                src={project.img}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.deploy}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">
                {project.description}
              </p>
              
              {/* Tecnologías usadas */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.type.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de sitioweb y GitHub */}
              <div className="flex gap-4">
                
                <a  href={project.deploy}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Sitio web
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                
                 <a href={project.github}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Proyects;