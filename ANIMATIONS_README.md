# Science Olympiads Center - Animations & Interactive Map

This project has been enhanced with smooth animations using Framer Motion and an interactive map using React Leaflet.

## 🎨 Animation Features

### Framer Motion Integration

- **Smooth page transitions** with fade-in/fade-out effects
- **Scroll-triggered animations** that activate when elements come into view
- **Hover animations** for interactive elements
- **Staggered animations** for lists and grids
- **Loading animations** with custom spinners

### Animation Components

#### `AnimatedWrapper` (`components/ui/animated-wrapper.tsx`)

A reusable wrapper component that provides scroll-triggered animations:

- `AnimatedSection` - For full sections with fade-in-up animation
- `AnimatedCard` - For cards with scale and fade effects
- `AnimatedText` - For text elements with subtle animations
- `AnimatedButton` - For buttons with scale effects

#### `PageTransition` (`components/ui/page-transition.tsx`)

Provides smooth page transitions:

- `PageTransition` - Main page transition wrapper
- `StaggeredContainer` - Container for staggered animations
- `StaggeredItem` - Individual items in staggered animations

#### `LoadingSpinner` (`components/ui/loading-spinner.tsx`)

Custom loading animations:

- `LoadingSpinner` - Rotating spinner with customizable size and color
- `LoadingDots` - Animated dots loading indicator
- `LoadingPulse` - Pulsing circle loading animation

### Animation Variants (`lib/animations.ts`)

Predefined animation variants for consistent animations:

- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `scaleInUp`
- `staggerContainer`, `staggerItem`
- `hoverScale`, `hoverLift`
- `slideInLeft`, `slideInRight`
- `bounceIn`, `pulse`
- `textReveal`, `cardFlip`
- `parallaxScroll`, `spinner`
- `pageTransition`

## 🗺️ Interactive Map Features

### Contact Section with Map

The interactive map has been transformed into a contact section showing the main office location in Tashkent, Uzbekistan.

#### Features:

- **Single location marker** for the main office
- **Contact information** display with office hours and services
- **Interactive popup** with detailed information
- **Responsive design** that works on all devices
- **Custom markers** with different colors for different location types

#### Map Components:

- `InteractiveMap` - Main map component with contact information
- Custom Leaflet markers with different icons
- Responsive popup with contact details
- Office hours and services information

### Map Data

- **Location**: Tashkent, Uzbekistan (41.2995, 69.2401)
- **Address**: 123 Science Street, Tashkent, Uzbekistan
- **Phone**: +998 71 123 4567
- **Email**: info@scienceolympiad.uz
- **Website**: https://scienceolympiad.uz

## 🚀 Usage

### Adding Animations to Components

```tsx
import { AnimatedSection } from "@/components/ui/animated-wrapper";

export function MyComponent() {
  return (
    <AnimatedSection delay={0.2}>
      <div>Your content here</div>
    </AnimatedSection>
  );
}
```

### Using Page Transitions

```tsx
import { PageTransition } from "@/components/ui/page-transition";

export default function MyPage() {
  return (
    <PageTransition>
      <div>Page content</div>
    </PageTransition>
  );
}
```

### Custom Animation Variants

```tsx
import { fadeInUp, hoverScale } from "@/lib/animations";
import { motion } from "framer-motion";

export function AnimatedElement() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      Content
    </motion.div>
  );
}
```

## 📦 Dependencies

### New Dependencies Added:

- `framer-motion` - For animations
- `react-leaflet` - For interactive maps
- `leaflet` - Map library
- `@types/leaflet` - TypeScript types for Leaflet

### Installation:

```bash
npm install framer-motion react-leaflet leaflet @types/leaflet
```

## 🎯 Key Features Implemented

1. **Smooth Animations**: All sections now have smooth entrance animations
2. **Interactive Map**: Contact section with office location
3. **Loading States**: Custom loading animations for better UX
4. **Hover Effects**: Interactive elements respond to user interaction
5. **Responsive Design**: All animations work on mobile and desktop
6. **Performance Optimized**: Animations use hardware acceleration where possible

## 🎨 CSS Enhancements

### Global Styles (`app/globals.css`)

- Leaflet map styling
- Custom scrollbar hiding
- Smooth scrolling behavior
- Custom animation utilities
- Float and pulse animations

## 🔧 Customization

### Changing Animation Timing

Modify the `delay` and `duration` props in animation components:

```tsx
<AnimatedSection delay={0.5} duration={1.0}>
  Content
</AnimatedSection>
```

### Adding New Map Locations

Update the `locations` array in `interactive-map.tsx`:

```tsx
const locations: Location[] = [
  {
    id: 1,
    name: "Your Location",
    type: "science-center",
    coordinates: [latitude, longitude],
    description: "Description",
    address: "Address",
    phone: "Phone",
    email: "Email",
    website: "Website",
    programs: ["Program 1", "Program 2"],
  },
];
```

### Custom Animation Variants

Add new variants to `lib/animations.ts`:

```tsx
export const customAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
```

## 🎉 Result

The Science Olympiads Center website now features:

- ✨ Smooth, professional animations throughout
- 🗺️ Interactive contact map with office location
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎯 Enhanced user experience

All animations are subtle and enhance the user experience without being distracting, while the interactive map provides clear contact information and location details.
