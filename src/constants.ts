import type { AgendaItem, Organizer, PreviousEdition, Speaker } from "./types";

export const SPEAKERS: Speaker[] = [
  {
    name: "Sarah Chen",
    role: "Principal Engineer",
    company: "Google Cloud",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBINgIrMf3lFpF7CjthUWgGz6UYT5CEmCKZ7c7Zxjuei6z8OHm5UuyE-UA79g7GQydPf5RLqSoM-kzc8IOicv13sXCdOS0neLMirmITNzNBA9e9mXAqGR11wt8kGpakPdcc0y3dgwRkM-ZqIb4rhF01B1yPLb2xFGBw4tHVjSeIMTa4w2GpVBOc8PAAepH4YKj6MN_hdDlkmmDCI2kF6M14fIWUNlv7tAKRweDL_aOgJlHONeDtIft2jb6jj89pHjvOEJ7X_tYOpA",
  },
  {
    name: "David Miller",
    role: "Staff SRE Lead",
    company: "Spotify",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeot_gAS2NpKoqNqmwaZeiPW-FOGyDu8sOWoRzq7ME8JPNIx6k5Hqpcvq3GJXs7sYw1K_WJZDpdQeBwz8Vc0nGIdvOcnXqoLsCyOAKVxMuJ_dDP_buhbOxvZhoXz-GGUm0qfzArXJR2xUe9i1nJBP82BWyaD7cp10RIg0XUJNdITPy8gI5whmEcp3uZBmjIkszXNbFOe3y1jnr11q9G3za5s6nAViOO1dIYR77WDxPTsnDkMhEl1AfMVOiUXE68Ck3wpSSp-XOTw",
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Architect",
    company: "Red Hat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfbCJxJJYFQnmUUNIdoqV3AgoNfBuA6EVq82e1GKDCJE4gTsxgzLoQ6QgUf0AJMyTVscVDkdk7z6_YCAiY5zcktRfr4mPkzje92LAxJX8oWRJQRM5T1u6-qty-QY8ogdUg8s-cSsONvibZ-SoB-UYHgeaBw6nBFATjkcIkClelvnK35uLMqey5iTJwql_gtYsMT1gpE2RV30Em2WwenozvvCkWr24pPXzNibfoidaUTuUU1TrEMr1wdKVz703Dlr217iw2C5Bl1A",
  },
  {
    name: "Marcus Johnson",
    role: "Performance Eng.",
    company: "Netflix",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLX6ii2-c8DdXSRLFyyR_5flBmcTaLpJ2Ot9CTk65qnalu1OvkWqysvPyuIGVT4BzTA-HcykdS2S0s6k8USaTPgBAt_013zwNkXSp-rI3NhRfl8ZEZZLJTcS5qTKzVSGyai80055wPxBxvBP_IWzn0znSWD6zzHLq3d_BB71DX2t2Is0JLYi8RjhSZsm_d2ct5tC6dmbPJGin12DWOsrzLxcDoOtspKUEGLY7wzc1w5zHFthaTj4FzU8sX8vKShdbB_xYHJYWHgw",
  },
  {
    name: "Sofia Mendez",
    role: "AI Researcher",
    company: "Microsoft",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFGGnBCSEEkXsR5tICLyFA45t6TyUMc_H2ykl64TqQr8wqcOilSP2nBANv7OwDwez_cXwRI9lxwiMzPZ2BJ5Y1zbetzbonVikLo3I-qi4UiaSgUARNYgYHKbeQzcYv5vvCXrdyXQs_c-GwqQOV_91jRT0qhwqli96TyDhrGxIZWSqQq7mTCSVhOUUqh2r-rEHESsZtugojf4hDpB3E26NNPzLiz3kRownysLjCVDheJBjOtBNoDdX3eK2q38-8DeFIvmnZ4kWfVw",
  },
  {
    name: "Raj Patel",
    role: "Cloud Architect",
    company: "Amazon",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLJ0XUwYBRHqWPkgvruSDxMhs27JB5Je9TseQ0KvfAt2Tg59Xoh_43CjMes63B_SsM0kNgh17DThn1aavHNNQp6RBtzEGn1e4sJ-aj1QYlp7m_4y6ZFc85HoJIBcgU5cs7DxoTK6Jc3t-DgaT_AqszPDkDLNXzwb29zwxAohHYroR8G7OPVfV031efS8Z94h61f7DCgHcTR2GbCby9ICLc1Sh8tJUbddTSptMF_I12yT5kXkJu_AeYSzA4QlinX0OFRIQMRBpjlw",
  },
  {
    name: "Claire Dubois",
    role: "Dev Advocate",
    company: "Docker",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc0pzO1XSQ6jCNKrhK3RtZGN9ps0n0la0Pg2CwOC-R4AJWcGS2jaIY2RZO9XiU9KG0mxshh6VfX44kxAxKBOhbZEmpZOjew77dqHPUwldp-rbVDuqiFwNyGzRe3Qtf-ksaO3M5aTcINpzFYW_B2gi15p6WKfnPnRIcKL0CHgh8EI9GHmIwNdO-R8qms1kz12PcWl53kDV8cogamWkRP-XSk2t51YPIdctMjtcbUP9wna2cT9K9t0F3k1jHyAG8qivNDoLFlxIM4A",
  },
];

export const AGENDA: AgendaItem[] = [
  {
    time: "09:00",
    period: "min",
    title: "Bienvenida y Apertura",
    subtitle: "Organización KubeFest",
  },
  {
    time: "09:30",
    period: "AM",
    type: "Keynote",
    title: "Estado de la IA en Infraestructura",
    subtitle: "Visiones futuras: Cómo Kubernetes impulsa la revolución de la Inteligencia Artificial.",
    speaker: SPEAKERS[0], // Sarah Chen
  },
  {
    time: "",
    period: "min", // Represents break
    title: "Pausa para el café (30 min)",
    subtitle: "",
    isBreak: true,
  },
  {
    time: "10:45",
    period: "AM",
    type: "Security",
    title: "Seguridad Zero Trust en Modelos LLM",
    subtitle: "Protegiendo la infraestructura de IA en entornos de alto riesgo.",
    speaker: SPEAKERS[2], // Elena Rodriguez
  },
  {
    time: "11:30",
    period: "AM",
    type: "Scaling",
    title: "Escalado de Inferencias con KEDA",
    subtitle: "Autoscaling dirigido por eventos para workloads de IA.",
    speaker: SPEAKERS[1], // David Miller
  },
  {
    time: "",
    period: "min",
    title: "Pausa para el café (30 min)",
    subtitle: "",
    isBreak: true,
  },
  {
    time: "12:45",
    period: "PM",
    type: "Architecture",
    title: "Microservicios Inteligentes",
    subtitle: "Integrando agentes de IA en arquitecturas de microservicios.",
    speaker: SPEAKERS[3], // Marcus Johnson
  },
  {
    time: "13:30",
    period: "PM",
    type: "Cloud Native",
    title: "Serverless y GPUs",
    subtitle: "Optimizando costes de computación para entrenamiento de modelos.",
    speaker: SPEAKERS[6], // Claire Dubois
  },
  {
    time: "14:15",
    period: "END",
    title: "Networking & Cierre",
    subtitle: "Espacio para conectar en el ecosistema de Logroño.",
  },
];

export const PREVIOUS_EDITIONS: PreviousEdition[] = [
  {
    year: "2024",
    city: "KubeFest Madrid",
    venue: "Palacio de Congresos",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM8Vjjr2TrWrVWDDWIrZ8k-eTesEhWy-FuEBtu-apz7wMgd13TCdzir3EvjmnGi2Cr8Qm1jorC2ObfLbtOuuXuWO_6HS-J5vaz7wjbjvcZ4ZCOGou50fFD3oSCjnsjYzQ1hjczzW5A1WuKNQNv32-wC7-JU80GnS2Fyqd8IVBW2bWqj0v1yjOqBcJY_54rhWQ0FpmwP0i_RA7stmhRNTmcnISXv_7XjkLEpiy39B6R-6Y_npSCQG_6BKUNI48KNLVLEOVXzHsRFg",
    colorClass: "bg-cncf-blue/80",
  },
  {
    year: "2025",
    city: "KubeFest Valencia",
    venue: "Ciudad de las Artes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrQAsYiKPvQEOFPZxFUpn4UnkpIlLJoTcFZoQF9Rrt209DT8FpRwCJ9BCy0c8yAZv5WtBsNMzZI0fdTHozjOrbj0Mpy__kNG3ruWnwqD_QHA4fzBRtjzAoUMMPMx4P3eawxOpZuICClZzWD2_luIQb2O95n6E6r7f2h2U-9GbuW3Y5C2lu8Je46ZHrvRuYXH_zlseM--gck8XXspCTasD_mySgH-_cTFKCCjiRdIFc-22njlsAfA6_DRr8eMeP6mssYBknm6QwLg",
    colorClass: "bg-secondary/80",
  },
];

export const ORGANIZERS: Organizer[] = [
  {
    name: "Ana García",
    role: "Director of Engineering @ TechRioja",
    title: "General Chair",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBINgIrMf3lFpF7CjthUWgGz6UYT5CEmCKZ7c7Zxjuei6z8OHm5UuyE-UA79g7GQydPf5RLqSoM-kzc8IOicv13sXCdOS0neLMirmITNzNBA9e9mXAqGR11wt8kGpakPdcc0y3dgwRkM-ZqIb4rhF01B1yPLb2xFGBw4tHVjSeIMTa4w2GpVBOc8PAAepH4YKj6MN_hdDlkmmDCI2kF6M14fIWUNlv7tAKRweDL_aOgJlHONeDtIft2jb6jj89pHjvOEJ7X_tYOpA",
  },
  {
    name: "Carlos Ruiz",
    role: "Senior DevOps @ WineTech",
    title: "Program Lead",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeot_gAS2NpKoqNqmwaZeiPW-FOGyDu8sOWoRzq7ME8JPNIx6k5Hqpcvq3GJXs7sYw1K_WJZDpdQeBwz8Vc0nGIdvOcnXqoLsCyOAKVxMuJ_dDP_buhbOxvZhoXz-GGUm0qfzArXJR2xUe9i1nJBP82BWyaD7cp10RIg0XUJNdITPy8gI5whmEcp3uZBmjIkszXNbFOe3y1jnr11q9G3za5s6nAViOO1dIYR77WDxPTsnDkMhEl1AfMVOiUXE68Ck3wpSSp-XOTw",
  },
  {
    name: "Laura Mensi",
    role: "Product Manager @ LogroSoft",
    title: "Logistics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfbCJxJJYFQnmUUNIdoqV3AgoNfBuA6EVq82e1GKDCJE4gTsxgzLoQ6QgUf0AJMyTVscVDkdk7z6_YCAiY5zcktRfr4mPkzje92LAxJX8oWRJQRM5T1u6-qty-QY8ogdUg8s-cSsONvibZ-SoB-UYHgeaBw6nBFATjkcIkClelvnK35uLMqey5iTJwql_gtYsMT1gpE2RV30Em2WwenozvvCkWr24pPXzNibfoidaUTuUU1TrEMr1wdKVz703Dlr217iw2C5Bl1A",
  },
];
