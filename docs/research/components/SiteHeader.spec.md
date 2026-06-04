# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/suitsupply.com/header.png`
- **Interaction model:** scroll-driven hide/show

## DOM Structure
```
<header> (fixed, 52px tall, full width, z-10)
  <div> (flex row, justify space-between, align center, full width, px-4)
    <div> (left group: flex row, gap 4px, align center)
      <button> menu icon + "Menu" sr-only
      <button> search icon + "Search" sr-only
    </div>
    <a href="/"> (logo link, centered)
      <img or text> SUITSUPPLY wordmark
    </a>
    <div> (right group: flex row, gap 4px, align center)
      <a href="/account"> profile icon + "Account" sr-only
      <a href="/wishlist"> bookmark icon + "Wishlist" sr-only
      <a href="/bag"> bag icon + "View bag" sr-only
    </div>
  </div>
</header>
```

## Computed Styles

### Header element
- position: fixed
- top: 0px
- left: 0px
- right: 0px
- zIndex: 10
- height: 52px
- display: flex
- alignItems: center
- justifyContent: space-between
- padding: 0px 15px
- backgroundColor: rgba(0,0,0,0) [transparent — overlays hero image]
- transition: transform 0.3s cubic-bezier(0.49,0.03,0.13,0.99)
- color: rgb(255,255,255) [white icons/text on dark hero]

### Logo (centered <a>)
- position: absolute (centered horizontally)
- left: 50%
- transform: translateX(-50%)
- font-family: "GT America Extended", GT America, Arial, sans-serif
- font-size: 13px
- font-weight: 700
- letter-spacing: 0.15em
- text-transform: uppercase
- color: rgb(255,255,255)
- text-decoration: none

### Icon buttons (left/right)
- background: transparent
- border: none
- color: rgb(255,255,255)
- cursor: pointer
- padding: 8px
- display: flex
- alignItems: center
- gap: 4px

## States & Behaviors

### Hidden state (scroll down)
- **Trigger:** window.scrollY > 50, scrolling downward
- **State A:** transform: translateY(0)
- **State B:** transform: translateY(-100%)
- **Transition:** transform 0.3s cubic-bezier(0.49,0.03,0.13,0.99)
- **Implementation:** useEffect scroll listener; track lastScrollY; add/remove hidden class

### Color on white background
- When scrolled past hero (y > 1300), header bg becomes rgba(255,255,255,0.95) with text #000
- When over hero, header is transparent with white text

## Text Content
- Logo: "SUITSUPPLY"
- Left: menu icon (☰), search icon (🔍)
- Right: account icon (👤), bookmark icon (🔖), bag icon (🛍)

## Icons (use Lucide React)
- Menu: `Menu` from lucide-react
- Search: `Search` from lucide-react
- User: `User` from lucide-react
- Bookmark: `Bookmark` from lucide-react
- ShoppingBag: `ShoppingBag` from lucide-react

## Responsive Behavior
- Desktop/Tablet/Mobile: same layout, icons always visible
- Logo always centered via absolute positioning
