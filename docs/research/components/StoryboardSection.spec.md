# StoryboardSection Specification

## Overview
- **Target file:** `src/components/StoryboardSection.tsx`
- **Interaction model:** hover on individual links

## DOM Structure
```
<section> (879px tall, black bg)
  <div> (centered container, full height, flex col, justify center, padding 80px 32px)
    <a href="..."> "Don't just fit in, find your own perfect fit." (large white link)
    <a href="..."> "Get personalized styling and fit advice."
    <a href="..."> "The most comprehensive Custom Made program."
    <a href="..."> "Skip the fitting room with Size Passport."
    <a href="..."> "Alterations by our expert in-store tailors."
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(0,0,0) — #000000
- height: 879px
- display: flex
- alignItems: center

### Links container
- display: flex
- flexDirection: column
- padding: 80px 32px
- width: 100%
- maxWidth: 1200px
- margin: 0 auto

### Each link
- display: block
- color: rgb(255,255,255)
- fontSize: 28px
- fontWeight: 500
- lineHeight: 1.4
- fontFamily: "GT America", Arial, sans-serif
- textDecoration: none
- padding: 20px 0
- borderTop: 1px solid rgba(255,255,255,0.15) [first link has no top border or it has border-bottom on last]
- cursor: pointer

### Link hover state
- textDecoration: underline
- transition: none (instant)

## Text Content (verbatim)
1. "Don't just fit in, find your own perfect fit." → href: /men/new-arrivals
2. "Get personalized styling and fit advice." → href: /journal/store-experience.html
3. "The most comprehensive Custom Made program." → href: /journal/custom-made.html
4. "Skip the fitting room with Size Passport." → href: /journal/size-passport.html
5. "Alterations by our expert in-store tailors." → href: /journal/alter-your-fit.html

## Responsive Behavior
- Desktop: 879px tall, full-width black bg, links centered with max-width
- Mobile (390px): same but font-size reduces to 20px, padding 40px 16px
