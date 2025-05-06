export interface BaseCardContent {
  imageUrl: string;
  title: string;
  date: string;
}


export interface WithBadge {
  badgeText: string;
}


export interface WithId {
  id: string;
}

export interface WithExtra {
  extra?: string;
  titleSizeClass?: string;
  dateSizeClass?: string;
  extraSizeClass?: string;
}



export interface HeroFeatureType extends BaseCardContent, WithBadge,WithId {}

export interface CardItem extends BaseCardContent, WithId {
  category: string;
}

export interface OverLaySectionProps extends BaseCardContent, WithBadge, WithId {
  height?: string;
}

export interface CardData extends BaseCardContent, WithId, WithExtra,WithBadge {}

export interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

export interface ButtonProps {
  type: "submit" | "button" | "reset";
  className?: string;
  children: React.ReactNode;
  width?: string;
}
