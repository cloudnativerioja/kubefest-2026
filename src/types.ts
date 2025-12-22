export interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
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
  city: string;
  venue: string;
  image: string;
  colorClass: string;
}

export interface Organizer {
  name: string;
  role: string;
  title: string;
  image: string;
}

export interface SponsorIcon {
  icon: string;
  name: string;
}
