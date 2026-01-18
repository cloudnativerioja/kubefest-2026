import type { AgendaItem, Organizer, PreviousEdition, Speaker } from "./types";
import kubefest2024 from "./images/editions/kubefest-2024.webp";
import kubefest2025 from "./images/editions/kubefest-2025.webp";
import marioEzquerro from "./images/people/mario-ezquerro.jpeg";
import diegoCristobalHerreros from "./images/people/diego-cristobal.jpeg";
import adrianBarrioAndres from "./images/people/adrian-barrio.jpeg";

// Event date: February 21, 2026 at 9:00 AM (local time in Logroño, Spain - Europe/Madrid timezone)
export const EVENT_DATE = new Date("2026-02-28T09:00:00+01:00");

// Tickets/Registration link
export const TICKETS_URL = "https://community.cncf.io/events/details/cncf-cloud-native-rioja-presents-kubefest-2026/";

export const SPEAKERS: Speaker[] = [
  {
    name: "Jorge Turrado",
    role: "Principal SRE",
    company: "SCRM Lidl International Hub - KEDA maintainer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGd8ifkzxzkyA/profile-displayphoto-scale_200_200/B4DZmK5NKOIgAY-/0/1758971877301?e=1770249600&v=beta&t=dZgUnshjkM7GcoJ7Lx_38mMhrpznyc82rXr-c8P4UH4",
    link: "https://www.linkedin.com/in/jorge-turrado-ferrero/",
  },
  {
    name: "Enrique Hormilla",
    role: "Platform Engineer",
    company: "Troop",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEP0ueQaPhuRQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690453544873?e=1770249600&v=beta&t=xIgCwRdbXl_W9hwWMp3nf1PwwndIny9SXSFYWuIKxD0",
    link: "https://www.linkedin.com/in/enrique-hormilla/",
  },
  {
    name: "Jorge Pérez",
    role: "Kubernetes Architect",
    company: "Bosonit",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGBbpogrTtA8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711650504093?e=1770249600&v=beta&t=ngD2WqlrDjaZV8DXd2f3-w28pD23hYTc5Y_EzlzfW04",
    link: "https://www.linkedin.com/in/jorge-p-275960300/",
  },
  {
    name: "Toni de la Fuente",
    role: "Creator of Prowler, Founder and CEO",
    company: "Prowler",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEC9geOTeaI3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700745483658?e=1770249600&v=beta&t=2ZMCHkvPhYCBjtvtsa0o0T_vmD0DtSq_lyWLK0Xk6ZI",
    link: "https://www.linkedin.com/in/toniblyx/",
  },
];

export const AGENDA: AgendaItem[] = [
  {
    time: "09:00",
    period: "AM",
    title: "Bienvenida y Apertura",
    subtitle: "Organización KubeFest",
  },
  {
    time: "09:30",
    period: "AM",
    type: "Cloud Native",
    title: "Funciona en mi máquina... y también en producción",
    subtitle: "Aprende a crear entornos efímeros que replican fielmente la producción. Descubre cómo usar Tilt.dev para desarrollar y probar aplicaciones en entornos replicados basados en Kubernetes, eliminando las sorpresas al desplegar.",
    speaker: SPEAKERS[1],
  },
  {
    time: "10:15",
    period: "AM",
    type: "Architecture",
    title: "Nginx ha muerto. Larga vida a Gateway Api",
    subtitle: "El nuevo estándar para exponer servicios en Kubernetes. Descubre cómo Gateway API está revolucionando el enrutamiento y la gestión del tráfico, ofreciendo mayor flexibilidad, portabilidad y capacidades avanzadas de configuración.",
    speaker: SPEAKERS[2],
  },
  {
    time: "",
    period: "min",
    title: "Pausa para el café (30 min)",
    subtitle: "",
    isBreak: true,
  },
  {
    time: "11:30",
    period: "AM",
    type: "Scaling",
    title: "Más Allá del HPA",
    subtitle: "A medida que las cargas de trabajo evolucionan, las métricas de CPU y Memoria ya no son suficientes. Presentamos KEDA, el estándar de la industria para el autoescalado basado en eventos. Exploraremos el estado del arte del autoescalado: triggers complejos, seguridad, mejores prácticas y cómo transformar aplicaciones en cargas de trabajo eficientes, rentables y resilientes, ya sea para trabajos por lotes o APIs de alto tráfico.",
    speaker: SPEAKERS[0],
  },
  {
    time: "12:15",
    period: "PM",
    type: "Security",
    title: "Holistic Cloud Security with Prowler",
    subtitle: "Descubre cómo Prowler (herramienta Open Source) permite abordar la seguridad cloud de forma holística, integrando detección continua, cumplimiento y gestión de riesgos. Exploraremos cómo la Infraestructura como Código (IaC) y la Inteligencia Artificial, mediante Prowler MCP y Prowler Lighthouse AI, mejoran la priorización de hallazgos y el cumplimiento continuo sin comprometer agilidad.",
    speaker: SPEAKERS[3],
  },
  {
    time: "13:00",
    period: "END",
    title: "Networking & Cierre",
    subtitle: "Espacio para conectar en el ecosistema de Logroño.",
  },
];

export const PREVIOUS_EDITIONS: PreviousEdition[] = [
  {
    year: "2024",
    name: "KubeFest",
    location: "Logroño (Federación de Empresas de La Rioja)",
    image: kubefest2024.src,
    colorClass: "bg-cncf-blue/80",
    link: "https://2024.kubefest.com",
  },
  {
    year: "2025",
    name: "KubeFest",
    location: "Logroño (La Barra de SDi)",
    image: kubefest2025.src,
    colorClass: "bg-secondary/80",
    link: "https://2025.kubefest.com",
  },
];

export const ORGANIZERS: Organizer[] = [
  {
    name: "Adrián Barrio Andrés",
    role: "Sr. Site Reliability Engineer @ Oracle",
    image: adrianBarrioAndres.src,
    link: "https://www.linkedin.com/in/adrianbarrio/",
  },
  {
    name: "Diego Cristobal Herreros",
    role: "Sr. Manager Quality Assurance @ IONOS",
    image: diegoCristobalHerreros.src,
    link: "https://www.linkedin.com/in/diego-cristobal-herreros-60886a80/",
  },
  {
    name: "Mario Ezquerro Sáenz",
    role: "Sr. Unix System Administrator @ Bosonit",
    image: marioEzquerro.src,
    link: "https://www.linkedin.com/in/mario-ezquerro-s%C3%A1enz-a239b270/",
  }
];
