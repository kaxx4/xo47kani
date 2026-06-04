# ImageCarousel Specification

## Overview
- **Target file:** `src/components/ImageCarousel.tsx`
- **Interaction model:** static (no sliding/scrolling)
- **Used for:** 3 carousel sections on homepage

## Variants
1. **2-up** (two images side by side, each 50% width) — "Latest in Suits", "Linen/Short Sleeve"
2. **Full-width** (single image 100% width) — "Wedding Collection"
3. **Split-label** (2-up with separate labels per image) — "Linen Collection / Short Sleeve Edit"

## DOM Structure (2-up variant)
```
<section> (730px tall, relative)
  <div> (flex row, full width, full height)
    <a href="/men/suits"> (block, full width, full height, relative)
      <div> (flex row, full width, full height — image wrapper)
        <picture> (flex, 50% width, 100% height)
          <img src="left.jpg" alt="..." object-cover full size>
        </picture>
        <picture> (flex, 50% width, 100% height)
          <img src="right.jpg" alt="..." object-cover full size>
        </picture>
      </div>
      <div> (absolute, bottom 0, left 0, padding 32px — label)
        <span> "Latest in Suits" (white, 20px, weight 500)
      </div>
    </a>
  </div>
</section>
```

## DOM Structure (full-width variant)
```
<section> (730px tall, relative)
  <div> (flex row, full width, full height)
    <a href="/men/wedding"> (block, full width, full height, relative)
      <div> (flex row, full width, full height)
        <picture> (flex, 100% width, 100% height)
          <img src="wedding.jpg" alt="Wedding Collection" object-cover full size>
        </picture>
      </div>
      <div> (absolute, bottom 0, left 0, padding 32px)
        <span> "Wedding Collection" (white, 20px, weight 500)
      </div>
    </a>
  </div>
</section>
```

## DOM Structure (split-label 2-up variant)
```
<section> (730px tall)
  <div> (flex row, full width, full height)
    <a href="/men/campaign/linen-collection"> (block, 50% width, relative)
      <picture> (100% width, 100% height)
        <img src="linen.jpg" object-cover>
      </picture>
      <div> (absolute, bottom 0, left 0, padding 32px)
        <span> "Linen Collection" (white, 20px, weight 500)
      </div>
    </a>
    <a href="/men/polos-t-shirts/short-sleeve-polos"> (block, 50% width, relative)
      <picture> (100% width, 100% height)
        <img src="shorts.jpg" object-cover>
      </picture>
      <div> (absolute, bottom 0, left 0, padding 32px)
        <span> "Short Sleeve Edit" (white, 20px, weight 500)
      </div>
    </a>
  </div>
</section>
```

## Computed Styles

### Section container
- height: 730px
- position: relative
- width: 100%
- overflow: hidden

### Image wrapper (flex row)
- display: flex
- flexDirection: row
- height: 730px
- width: 100%

### picture element
- display: flex
- height: 730px (100%)
- flex: 1 (50% in 2-up, 100% in full)
- overflow: hidden

### img inside picture
- width: 100%
- height: 100%
- objectFit: cover
- objectPosition: center
- display: block

### Label overlay
- position: absolute
- bottom: 0px
- left: 0px
- padding: 32px
- zIndex: 1

### Label text
- color: rgb(255,255,255)
- fontSize: 20px
- fontWeight: 500
- lineHeight: 28px
- fontFamily: "GT America", Arial, sans-serif

## All Section Data

### Section 1: Latest in Suits
- href: /men/suits
- variant: 2-up (single link wrapping both images)
- image 1: https://cdn.suitsupply.com/image/upload/f_auto,h_3596,q_auto,w_3500/suitsupply/homepage/SS26/WK13/Desktop/02-1_desktop_half_2560x2630.jpg (alt: "Discover Latest Suits")
- image 2: https://cdn.suitsupply.com/image/upload/f_auto,h_3596,q_auto,w_3500/suitsupply/homepage/SS26/WK13/Desktop/02-2_desktop_half_2560x2630.jpg (alt: "Discover Latest Suits")
- label: "Latest in Suits" (bottom-left, over both images combined)

### Section 2: Wedding Collection
- href: /men/wedding
- variant: full-width
- image: https://cdn.suitsupply.com/image/upload/f_auto,h_1798,q_auto,w_3500/suitsupply/homepage/SS26/WK13/Desktop/03_HP-WK13_desktop_5120x2630.jpg (alt: "Wedding Collection")
- label: "Wedding Collection" (bottom-left)

### Section 3: Linen + Short Sleeve (split)
- variant: split-label (2 separate links)
- image 1: https://cdn.suitsupply.com/image/upload/f_auto,h_3596,q_auto,w_3500/suitsupply/homepage/SS26/WK13/Desktop/04_desktop_half_2560x2630.jpg (alt: "")
  - href: /men/campaign/linen-collection
  - label: "Linen Collection"
- image 2: https://cdn.suitsupply.com/image/upload/f_auto,h_3596,q_auto,w_3500/suitsupply/homepage/SS26/WK13/Update/05_desktop_half_2560x2630-2.jpg (alt: "Short Sleeves Polos")
  - href: /men/polos-t-shirts/short-sleeve-polos
  - label: "Short Sleeve Edit"

## Responsive Behavior
- Desktop (1440px): side-by-side or full-width, 730px tall
- Tablet (768px): same layout, image height 500px
- Mobile (390px): stacks to single column, each 350px tall
