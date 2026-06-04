# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Interaction model:** hover on links

## DOM Structure
```
<footer>
  <!-- Service Tiles Row -->
  <div> (4-column grid, white bg, border-bottom)
    <div> icon + heading + text + link  × 4
  </div>

  <!-- Newsletter -->
  <div> (flex row, border-bottom, padding 32px)
    <p> "Get the latest on products and styling"
    <form> <input type="email" placeholder="Email"> <button>Subscribe</button>
  </div>

  <!-- Nav Columns -->
  <div> (grid 5 cols: Contact + Shop By + Support + Services + About)
    Contact: WhatsApp, Call, Email
    Shop By: Suits, Jackets & Blazers, Trousers, Shirts, Coats
    Support: Shipping, Returns, Fit Guides, FAQ, Terms, Accessibility
    Services: Plan Visit, Custom Suits, Alterations, Size Passport, Gift Cards
    About: Store Experience, Our Story, Press, Sustainability, Careers
  </div>

  <!-- Bottom bar -->
  <div> (flex row, justify space-between, border-top, padding 24px 32px)
    <div> location icon + "India" + language "English"
    <div> social icons: Facebook, Instagram, TikTok, YouTube
    <div> "Privacy Statement" · "Terms & Conditions"
  </div>
</footer>
```

## Computed Styles

### Footer
- backgroundColor: rgb(255,255,255)
- color: rgb(45,45,44)

### Service tile
- padding: 32px
- borderRight: 1px solid rgb(225,225,225)
- display: flex; flexDirection: column; gap: 12px

### Service heading
- fontSize: 14px; fontWeight: 500; color: rgb(45,45,44)

### Service text / link
- fontSize: 14px; fontWeight: 300; color: rgb(137,137,137)

### Newsletter row
- display: flex; alignItems: center; justifyContent: space-between
- padding: 24px 32px; borderBottom: 1px solid rgb(225,225,225)

### Newsletter text
- fontSize: 14px; fontWeight: 300

### Email input
- border: 1px solid rgb(225,225,225); padding: 8px 16px
- fontSize: 14px; outline: none

### Subscribe button
- backgroundColor: rgb(45,45,44); color: white
- padding: 8px 24px; fontSize: 14px; fontWeight: 500
- border: none; cursor: pointer

### Nav columns container
- display: grid; gridTemplateColumns: repeat(5, 1fr)
- padding: 32px; gap: 32px; borderBottom: 1px solid rgb(225,225,225)

### Column heading
- fontSize: 13px; fontWeight: 500; textTransform: uppercase
- letterSpacing: 0.05em; marginBottom: 16px; color: rgb(45,45,44)

### Column link
- display: block; fontSize: 14px; fontWeight: 300
- color: rgb(137,137,137); textDecoration: none
- marginBottom: 8px

### Column link hover
- color: rgb(45,45,44); textDecoration: underline

## Service Tiles Content
1. Icon: store_location | "Find your nearest store" | "Visit one of our 150 stores worldwide for customizations, fittings & styling advice." | Link: "Find store"
2. Icon: style_expert | "Get personal style advice" | "Have a style or fit question? Chat online or book an appointment in our store." | Link: "Ask a style expert"
3. Icon: delivery | "Free shipping & returns" | "Enjoy free shipping on every order. Or pick-up in your nearest store." | Link: "Learn more"
4. Icon: alterations | "Get your perfect fit" | "In-store alterations done within 30 minutes to 3 days." | Link: "Learn more"

## Responsive Behavior
- Desktop: 4-col service tiles, 5-col nav columns
- Mobile: service tiles stack 2x2, nav columns stack to 2 cols
