# Suitsupply.com Page Topology

## URL
https://suitsupply.com/en-in/

## Viewport: 1440px desktop

## Page Sections (top to bottom)

| # | Name | Y | Height | Type |
|---|------|---|--------|------|
| 0 | SiteHeader | fixed | 52px | fixed overlay |
| 1 | HeroBanner | 0 | 1354px | full-width hero + category nav |
| 2 | CarouselLatestSuits | 1354 | 730px | 2-up image carousel |
| 3 | CarouselWedding | 2084 | 730px | full-width image carousel |
| 4 | CarouselLinenShortSleeve | 2813 | 730px | 2-up split carousel (2 labels) |
| 5 | StoryboardSection | 3543 | 879px | black bg, large link list |
| 6 | SiteFooter | 4422 | ~800px | service tiles + columns + legal |

## Layout Structure
- Body: white bg (#ffffff), scroll container is the window
- No smooth scroll library detected
- No scroll-snap on body
- Header hides on scroll down (transform: translateY(-100%)) and reappears on scroll up

## Z-Index Layers
- Header: z-index 10, fixed top 0
- All sections: flow content

## Interaction Model
- Header: scroll-driven hide/show (CSS class toggled via JS)
- Hero: static (image + text overlay + category nav)
- Carousels: static (no click/hover switching - pure display)
- Storyboard: hover state on links (underline)
- Footer: hover on links

## Color Palette
- Primary text: #2d2d2c (rgb 45,45,44)
- Secondary text: #898989 (rgb 137,137,137)
- Outline: #e1e1e1
- Background grey: #efefef
- Background light: #fafafa
- Surface white: #ffffff
- Brand blue: #0c31b6 (rgb 12,49,182)
- Black: #000000

## Typography
- Font: "GT America" (self-hosted) — use Inter as fallback
- Body: 16px, weight 300/400
- Hero label / Storyboard links: 28px, weight 500
- Carousel labels: 20px, weight 500
- Footer headings: 14px, weight 500
- Footer links: 14px, weight 300

## Transitions
- In: 0.4s cubic-bezier(0.4,0.4,0,1)
- Out: 0.2s cubic-bezier(0.6,0,0.2,1)
- Header hide: transform 0.3s cubic-bezier(0.49,0.03,0.13,0.99)
