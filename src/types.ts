export interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  link: string;
}

export interface AgendaItem {
  time: string;
  period: "AM" | "PM" | "min" | "END";
  title: string;
  subtitle: string;
  type?: "Keynote" | "Security" | "Scaling" | "Architecture" | "Cloud Native";
  speaker?: Speaker;
  isBreak?: boolean;
}

export interface PreviousEdition {
  year: string;
  name: string;
  location: string;
  image: string;
  colorClass: string;
  link: string;
}

export interface Organizer {
  name: string;
  role: string;
  image: string;
  link: string;
}

export interface SponsorIcon {
  icon: string;
  name: string;
}
