# Tailwind CSS Component Patterns & Best Practices

## Common Section Pattern

All sections should follow this structure for consistency:

```tsx
export function SectionName() {
  return (
    <section id="section-id" className="relative overflow-hidden section-py bg-white">
      {/* Background Elements (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-safe max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-gradient-text mb-4">Section Title</h2>
          <p className="text-lg text-slate-600">Descriptive subtitle</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cards go here */}
        </div>
      </div>
    </section>
  );
}
```

---

## Card Component Pattern

```tsx
// Reusable Card
function Card({ title, description, icon: Icon }) {
  return (
    <div className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-smooth">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex-center mb-4 group-hover:bg-primary-600 transition-smooth">
        <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-smooth" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
```

---

## Button Patterns

```tsx
// Primary Button
<button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-smooth flex items-center gap-2">
  Action
  <ArrowRight className="w-5 h-5" />
</button>

// Secondary Button
<button className="px-8 py-3 bg-white border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-smooth">
  Learn More
</button>

// Icon Button
<button className="p-2 hover:bg-slate-100 rounded-lg transition-smooth">
  <Icon className="w-5 h-5 text-slate-600 hover:text-primary-600" />
</button>
```

---

## Form Input Pattern

```tsx
<div className="space-y-2">
  <label htmlFor="name" className="block text-sm font-medium text-slate-900">
    Full Name
  </label>
  <input
    id="name"
    type="text"
    placeholder="John Doe"
    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus-ring bg-white transition-smooth"
  />
</div>
```

---

## Typography Examples

```tsx
// Section with gradient text
<div>
  <p className="text-sm font-medium text-primary-600 mb-4">SECTION LABEL</p>
  <h2 className="text-4xl font-bold text-slate-900 mb-6">
    Main Heading with <span className="gradient-text">Accent Color</span>
  </h2>
  <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
    Body text with proper contrast and readability.
  </p>
</div>
```

---

## Grid & Layout Patterns

```tsx
// Responsive Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
  {/* Items */}
</div>

// Two-Column Layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>{/* Left Content */}</div>
  <div>{/* Right Content */}</div>
</div>

// Feature List
<ul className="space-y-4">
  {features.map((feature) => (
    <li key={feature.id} className="flex gap-3">
      <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
      <span className="text-slate-700">{feature.text}</span>
    </li>
  ))}
</ul>
```

---

## Hover & Transition Patterns

```tsx
// Link with underline on hover
<a href="#" className="text-primary-600 hover:text-primary-700 hover:underline transition-smooth">
  Link Text
</a>

// Card with elevation on hover
<div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-smooth">
  Content
</div>

// Button with transform
<button className="hover:scale-105 transition-smooth">
  Hover for scale effect
</button>
```

---

## Gradient Patterns

```tsx
// Gradient background
className="bg-gradient-to-r from-primary-600 to-accent-600"

// Gradient text
className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"

// Gradient border (via background)
className="bg-gradient-to-r from-primary-600 to-accent-600 p-0.5 rounded-lg"
<div className="bg-white rounded-lg p-6">Content</div>
```

---

## Spacing Guidelines

```tsx
// Horizontal spacing
// Small: gap-3
// Medium: gap-4 md:gap-6
// Large: gap-6 md:gap-8 lg:gap-12

// Vertical spacing between sections
// Small: mb-4 md:mb-6
// Medium: mb-8 md:mb-12
// Large: mb-12 md:mb-16 lg:mb-20

// Padding inside containers
// Regular: p-6 md:p-8
// Large: p-8 md:p-12
```

---

## Glass Morphism Pattern

```tsx
<div className="glass rounded-xl p-6">
  Content with semi-transparent background and blur
</div>

// Expands to:
<div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl p-6">
  Content
</div>
```

---

## Animation Patterns

```tsx
// Fade in
className="animate-fade"

// Slide up
className="animate-slide-up"

// Smooth transition
className="transition-smooth"

// Custom hover
className="hover:text-primary-600 transition-colors duration-200"
```

---

## Color Application Rules

1. **Primary (Blue):** Main CTAs, highlights, links
2. **Accent (Green):** Secondary CTAs, success, wellness theme
3. **Slate-900:** Main text, headings
4. **Slate-600:** Secondary text, descriptions
5. **Slate-50:** Light backgrounds, section alternation
6. **White:** Content backgrounds

---

## Responsive Naming Convention

```
Base (mobile): No prefix
Small/tablet: sm:
Medium/tablet: md:
Large/desktop: lg:
XL/large desktop: xl:

Example:
className="w-full md:w-1/2 lg:w-1/3 gap-4 md:gap-6 lg:gap-8"
```

---

## Common Mistakes to Avoid

❌ Don't:
- Use `#` colors instead of Tailwind color names
- Mix responsive prefixes inconsistently
- Forget `max-w-` on container content
- Use `px-` without responsive adjustments
- Forget `transition-smooth` on hover states

✅ Do:
- Use Tailwind color scale (primary-50 through 900)
- Apply responsive prefixes consistently (mobile-first)
- Constrain content width with `max-w-7xl`
- Use `container-safe` for consistent padding
- Add transitions to all interactive elements

---

## Performance Tips

- Use `.group` and `.group-hover:` for related hover states
- Lazy load images and heavy components
- Utilize Next.js Image component for optimization
- Keep animations subtle (duration-300, ease-out)
- Test on low-end devices periodically
