# 🎨 Prompts para Diseñadores

Esta carpeta contiene templates de prompts específicamente diseñados para generar assets de diseño con IA.

## 📁 Estructura

Cada archivo `.md` contiene prompts probados para diferentes necesidades de diseño.

---

## 🖼️ DS-01: Iconos con DALL-E

### Prompt Base para Iconos
```
Create a minimalist icon set in {estilo} style.

Theme: {tema}
Colors: {paleta de colores específica}
Style: flat design, simple shapes, no gradients
Background: transparent
Size: 512x512px

Icons needed:
1. {descripción icon 1}
2. {descripción icon 2}
3. {descripción icon 3}

Requirements:
- Consistent visual language
- 2-3 colors maximum per icon
- Recognizable at 32x32px
- Suitable for dark and light backgrounds
```

### Ejemplo Real
```
Create a minimalist icon set in geometric style.

Theme: Productivity app
Colors: #6366F1 (primary), #8B5CF6 (accent), #1F2937 (text)
Style: flat design, rounded corners, simple shapes
Background: transparent
Size: 512x512px

Icons:
1. Task list - checkmark with parallel lines
2. Calendar - grid with highlighted date
3. Timer - clock with progress arc
4. Focus mode - eye with rays
5. Analytics - bar chart ascending
6. Settings - gear wheel

All icons should share similar stroke width and corner radius.
```

---

## 🌈 DS-02: Paletas de Color

### Prompt para Generar Paletas
```
Generate a color palette for {tipo de proyecto}.

Brand personality: {adjetivos}
Industry: {industria}
Target audience: {audiencia}

Provide:
1. Primary color (main brand color)
2. Secondary color (complements primary)
3. Accent color (CTAs, highlights)
4. Semantic colors:
   - Success (green shade)
   - Warning (yellow/orange)
   - Error (red shade)
   - Info (blue shade)
5. Neutral palette (6-8 grays from light to dark)

For each color include:
- HEX code
- RGB values
- Usage recommendation
- Accessibility: contrast ratio with white/black text
```

---

## ✏️ DS-03: UX Copy

### Botones de Acción
```
Write button text for {acción}.

Context: {dónde está el botón}
Action: {qué hace}
Tone: {profesional/casual/urgente}

Provide:
1. Primary text (1-3 words)
2. Alternative if too long
3. Loading state text
4. Success state text
5. Microcopy for tooltip (if needed)

Requirements:
- Action-oriented (start with verb)
- Clear outcome
- Under 20 characters
```

### Mensajes de Error
```
Write error message for: {escenario de error}

User action that failed: {acción}
Root cause: {causa técnica}
Tone: empathetic and helpful

Include:
1. What happened (1 sentence, user-friendly)
2. Why it happened (if helpful to user)
3. How to fix it (clear steps)
4. What to do if fix doesn't work

Avoid:
- Technical jargon
- Blame language
- Vague messages like "Error occurred"
```

---

## 🎭 DS-04: User Personas

### Prompt para Personas
```
Create a user persona for {producto/servicio}.

Demographics:
- Age range: {rango}
- Location: {ubicación}
- Occupation: {profesión}
- Tech savviness: {nivel}

Provide:
1. Name and photo description
2. Background (brief bio)
3. Goals (what they want to achieve)
4. Frustrations (current pain points)
5. Motivations (why they'd use product)
6. Tech stack (tools they use daily)
7. Quote (in their voice)
8. Scenario (typical use case)

Make it realistic and specific, not generic.
```

---

## 📐 DS-05: Wireframes Descriptivos

### Prompt para Layouts
```
Describe a wireframe layout for {tipo de página}.

Purpose: {objetivo de la página}
Key actions: {acciones principales}
Content: {tipos de contenido}
Priority: {qué es más importante}

Describe:
1. Layout structure (header, main, sidebar, footer)
2. Grid system (columns, spacing)
3. Component hierarchy (what's prominent)
4. Navigation pattern
5. Interactive elements (buttons, forms, etc.)
6. Responsive behavior (mobile considerations)

Use clear sectioning markers like [Header], [Hero], [Content], etc.
```

### Ejemplo
```
Describe a wireframe for SaaS landing page.

Purpose: Convert visitors to trial signups
Key actions: Start trial, See demo, View pricing
Content: Hero image, feature list, pricing table, testimonials
Priority: Call-to-action above fold

Layout:
[Header]
- Logo left
- Nav links center (Features, Pricing, About)
- "Start Trial" button right (primary color)

[Hero - Full width]
- Headline (1 sentence value prop)
- Subheadline (2-3 sentences)
- CTA button "Start Free Trial"
- Hero image right (product screenshot)

[Features - 3 columns]
- Icon + headline + description
- Each feature = 1 card
- Alternating background colors

[Social Proof]
- Logos of customers (grayscale)
- 1-line testimonials below logos

[Pricing - 3 tiers]
- Free, Pro, Enterprise
- Feature comparison table
- "Most Popular" badge on Pro

[CTA Section]
- Background: gradient
- Headline + button (repeat CTA)

[Footer]
- Links, social icons, copyright
```

---

## 💡 Tips Generales

### Para DALL-E / Midjourney
- **Sé específico con estilos**: "flat design", "3D render", "hand-drawn"
- **Menciona colores por HEX o nombre**: "#6366F1" or "indigo blue"
- **Define proporciones**: "square icon", "widescreen banner", "portrait"
- **Evita texto en imágenes**: DALL-E no es bueno generando texto legible

### Para ChatGPT (Copy/Design Systems)
- **Provee contexto de marca**: tono, valores, audiencia
- **Da ejemplos**: "similar to Stripe's copy style"
- **Especifica limitaciones**: caracteres máximos, idioma
- **Pide alternativas**: siempre útil tener 2-3 opciones

### Iteración
Si el output no es perfecto:
1. **Sé más específico**: agrega más detalles
2. **Da feedback**: "Hazlo más minimalista", "Menos formal"
3. **Usa referencias**: "Similar al diseño de {app conocida}"
4. **Ajusta parámetros**: cambia colores, tamaños, proporciones

---

## 🌟 Ejemplos por Nivel

### Junior (Empezando)
- Usa prompts con valores predefinidos
- Copia templates exactos
- Modifica solo 1-2 variables a la vez

### Mid (Experimentando)
- Combina múltiples prompts
- Crea variaciones del mismo concepto
- Ajusta basado en feedback

### Senior (Dominando)
- Diseña tus propios prompts modulares
- Crea sistemas de prompts encadenados
- Optimiza para consistencia cross-brand

---

**Contribuye**: ¿Encontraste un prompt especialmente útil? ¡Agrégalo!
