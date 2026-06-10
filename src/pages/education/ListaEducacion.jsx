import "./listaEducacion.css";
import { useTranslation } from "react-i18next";

const items = [
  {
    key: "universidad",
    titleKey: "education.uniTitle",
    subKey: "education.uniSub",
    timeKey: "education.uniTime",
    current: true,
  },
  {
    key: "tecnologo",
    titleKey: "education.firstTitle",
    subKey: "education.uniInst1",
    timeKey: "education.firstTime",
    current: false,
  },
  {
    key: "bootcamp",
    titleKey: "education.secondTitle",
    timeKey: "education.secondTime",
    current: false,
  },
  {
    key: "tecnico",
    titleKey: "education.thirdTitle",
    subKey: "education.uniInst1",
    timeKey: "education.thirdTime",
    current: false,
  },
];

const ListaEducacion = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-label">
        <span className="before-section-label" />
        {t("sobremi.title")}
      </div>
      <div className="section-title">Educación</div>
      <div className="edu-timeline ">
        <div className="edu-line" />

        {items.map((item, i) => (
          <div
            key={item.key}
            className="edu-item animate-fade-in-down"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div
              className={`edu-dot ${item.current ? "edu-dot--active" : ""}`}
            />

            <div
              className={`edu-card ${item.current ? "edu-card--active" : ""}`}
            >
              <div className="edu-card-header">
                <span className="edu-title">{t(item.titleKey)}</span>
                {item.current && (
                  <span className="edu-badge">{t("education.latest")}</span>
                )}
              </div>
              {item.subKey && <span className="edu-sub">{t(item.subKey)}</span>}
              <time className="edu-time">{t(item.timeKey)}</time>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaEducacion;
