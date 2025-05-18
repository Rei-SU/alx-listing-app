export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
