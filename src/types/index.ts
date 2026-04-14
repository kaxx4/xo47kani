export interface NavLink {
  text: string;
  href: string;
}

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface CarouselItem {
  label: string;
  href: string;
  images: CarouselImage[];
}

export interface StoryboardLink {
  text: string;
  href: string;
}

export interface ServiceTile {
  icon: string;
  heading: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
