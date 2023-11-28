export interface Faq {
  id: number;
  title: string;
  description: string;
}

export interface Dictionary {
  title: string;
  description: string;
  button: {
      install: string;
      donate: string;
  };
  browserlistTitle: string;
  faq: Faq[];
}