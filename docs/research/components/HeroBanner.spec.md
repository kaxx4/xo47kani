# HeroBanner Specification

## Overview
- **Target file:** `src/components/HeroBanner.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> (1354px tall, relative)
  <div> (bg #efefef, overflow hidden, relative, full height)
    <div> (absolute, top 0, left 0, full width, 730px tall — image area)
      <picture>
        <img src="hero.jpg" alt="New Arrivals" object-cover full-width 730px>
      </picture>
      <div> (absolute, bottom 0, left 0, padding 32px — label overlay)
        <a> "New Arrivals" (white, 28px, weight 500)
      </div>
    </div>
    <nav> (padding 32px, margin-top 730px — category links)
      <ul> (flex row, flex-wrap, gap 8px 16px, list-none)
        <li> × 12 (category links)
      </ul>
    </nav>
  </div>
</section>
```

## Computed Styles

### Outer section
- position: relative
- height: 1354px (730px image + 624px nav area)
- width: 100%
- backgroundColor: rgba(0,0,0,0)

### Inner wrapper
- backgroundColor: rgb(239,239,239) — #efefef
- overflow: hidden
- position: relative
- height: 100%

### Image wrapper (absolute, top area)
- position: absolute
- top: 0; left: 0
- width: 100%
- height: 730px

### Hero image
- width: 100%
- height: 730px
- objectFit: cover
- objectPosition: center
- display: block

### Label overlay (bottom-left of image)
- position: absolute
- bottom: 0px; left: 0px
- padding: 32px

### Label link text
- color: rgb(255,255,255)
- fontSize: 28px
- fontWeight: 500
- lineHeight: 36px
- fontFamily: "GT America", Arial, sans-serif
- textDecoration: none
- display: block

### Category nav
- position: relative
- marginTop: 730px  [pushes below image within relative container]
- padding: 32px 32px 32px 32px

### Category nav ul
- display: flex
- flexWrap: wrap
- gap: 8px 16px
- listStyle: none
- padding: 0; margin: 0

### Category nav link
- color: rgb(45,45,44) — #2d2d2c
- fontSize: 14px
- fontWeight: 300
- textDecoration: none
- whiteSpace: nowrap

## Text Content
Category links (in order):
1. New Arrivals → /men/new-arrivals
2. Suits → /men/suits
3. Knitwear & Sweaters → /men/knitwear
4. Trousers & Shorts → /men/trousers
5. Polos & T-Shirts → /men/polos-t-shirts
6. Shirts → /men/shirts
7. Coats & Vests → /men/coats
8. Jackets & Blazers → /men/jackets
9. Tuxedos → /men/black-tie-collection
10. Shoes → /men/shoes
11. Accessories → /men/accessories

## Assets
- Hero image: https://cdn.suitsupply.com/image/upload/f_auto,h_1798,q_auto,w_3500/suitsupply/homepage/SS26/WK13/Update/01_HP-WK13_desktop_5120x2630-2.jpg

## Responsive Behavior
- Desktop (1440px): image 730px tall, category nav in row
- Tablet (768px): image 500px tall
- Mobile (390px): image 350px tall, category nav horizontally scrollable
