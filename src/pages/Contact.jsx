import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const LINKS = [
  {
    icon: faEnvelope,
    label: "mariadelmar.artunduaga911@gmail.com",
    href: "mailto:mariadelmar.artunduaga911@gmail.com",
  },
  {
    icon: faLinkedinIn,
    label: "linkedin.com/in/mariadelmarartunduaga",
    href: "https://www.linkedin.com/in/mariadelmarartunduaga/",
  },
  {
    icon: faGithub,
    label: "github.com/delmar911",
    href: "https://github.com/delmar911",
  },
  {
    icon: faWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/qr/UIUPFYPPGGOFE1",
  },
];

export const Contact = () => {
  const { t } = useTranslation("global");
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-wine py-20 px-10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-16 items-center">

        {/* Izquierda — info de contacto */}
        <div>
          <div className="text-xs text-blush tracking-[0.15em] uppercase mb-2 flex items-center gap-2">
            <span className="w-8 h-px bg-blush block" />
            Contacto
          </div>
          <h2 className="font-dm-serif text-[2.4rem] text-pale leading-[1.15] mb-4">
            Trabajemos juntas
          </h2>
          <p className="text-blush/70 text-sm font-light leading-relaxed mb-8">
            {t("contact.paragrah")}
          </p>

          <div className="flex flex-col gap-4">
            {LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blush hover:text-pale transition-colors duration-200 no-underline group"
              >
                <span className="w-8 h-8 border border-blush/20 rounded flex items-center justify-center group-hover:border-blush/50 transition-colors">
                  <FontAwesomeIcon icon={icon} className="text-xs" />
                </span>
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Derecha — formulario */}
        <div className="bg-blush/[0.06] border border-blush/10 rounded-xl p-8">
          <p className="text-blush/60 text-xs tracking-widest uppercase mb-6">
            Envíame un mensaje
          </p>

          {/* data-netlify="true" y name son obligatorios para que Netlify detecte el form */}
          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Campo oculto requerido por Netlify */}
            <input type="hidden" name="form-name" value="contacto" />

            <div>
              <label className="block text-blush text-xs tracking-wide uppercase mb-1.5">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                required
                placeholder="Tu nombre"
                className="w-full bg-blush/5 border border-blush/15 rounded px-4 py-2.5 text-pale text-sm placeholder-blush/30 outline-none focus:border-blush/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-blush text-xs tracking-wide uppercase mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full bg-blush/5 border border-blush/15 rounded px-4 py-2.5 text-pale text-sm placeholder-blush/30 outline-none focus:border-blush/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-blush text-xs tracking-wide uppercase mb-1.5">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows={4}
                required
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-blush/5 border border-blush/15 rounded px-4 py-2.5 text-pale text-sm placeholder-blush/30 outline-none focus:border-blush/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-pale text-wine py-3 rounded-sm text-sm font-medium tracking-wide hover:bg-cream transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "ok" && (
              <p className="text-xs text-rose text-center mt-1">
                ¡Mensaje enviado! Te respondo pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-rose text-center mt-1">
                Algo falló. Escríbeme directamente al correo.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;