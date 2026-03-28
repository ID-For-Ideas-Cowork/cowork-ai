# 🎨 Designer - CoWork AI

**Aprende Prompt Engineering para diseño**

---

## 🎯 Objetivo

Dominar prompts para generación de assets, crear design systems con IA, generar UX copy, y optimizar flujos de diseño con LLMs.

---

## 📋 Roadmap

1. **DS-01**: Guía completa de prompts para diseño
2. **DS-02**: Design system generado con IA
3. **DS-03**: Galería de iconos con DALL-E
4. **DS-04**: UX Copy generado por IA
5. **DS-05**: Wireframes asistidos por IA
6. **DS-06**: Generador de User Personas

---

## 🚀 Setup

No necesitas programar! Usa:
- ChatGPT / Claude
- DALL-E / Midjourney
- Markdown para documentación

---

## 💡 Prompts Efectivos para Diseño

### Iconos
```
Create a minimalist icon set in flat design style.
Theme: {tema, ej: e-commerce}
Colors: {paleta, ej: #3B82F6, #10B981}
Style: rounded corners, 2px stroke
Icons needed: {lista de iconos}
Format: SVG, 24x24px
```

### UI Components
```
Design a modern card component for {propósito}.
Style: glassmorphism
Colors: gradient from {color1} to {color2}
Elements: title, body text, CTA button, icon
Spacing: 16px padding
Border: subtle shadow
```

### Ilustraciones
```
Create an illustration for {contexto}.
Style: {flat design / isometric / 3D / hand-drawn}
Color palette: {paleta}
Mood: {professional / playful / minimalist}
Elements: {lista de elementos}
Perspective: {frontal / isometric / 3/4 view}
```

---

## 💡 Ejemplo: Design System con ChatGPT

**Prompt**:
```
Actúa como un designer de sistemas de diseño.

Crea un design system completo para una app de {tipo}.

Incluye:
1. Paleta de colores (primarios, secundarios, grises, semánticos)
2. Tipografía (scale, weights, line-heights)
3. Spacing system (4px base)
4. Border radius values
5. Shadow elevations
6. Componentes base (button, card, input, etc.)

Genera el output en formato CSS custom properties.
```

**Output esperado**:
```css
:root {
  /* Colors */
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  
  /* Typography */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}
```

---

## 💡 Ejemplo: UX Copy

**Prompt para mensajes de error**:
```
Genera mensajes de error para una app de {tipo}.

Criterios:
- Tono: amigable pero profesional
- Estructura: Qué pasó + Por qué + Cómo solucionarlo
- Longitud: máximo 2 líneas
- Sin jerga técnica

Escenarios:
1. Error de conexión
2. Campo requerido vacío
3. Contraseña incorrecta
4. Email ya registrado
5. Archivo muy grande

Formato JSON.
```

---

## 💡 Ejemplo: User Personas

**Prompt**:
```
Genera 3 user personas para {producto/servicio}.

Para cada persona incluye:
1. Nombre y edad
2. Ocupación
3. Bio (3-4 líneas)
4. Goals (3 puntos)
5. Pain points (3 puntos)
6. Tech savviness (1-5)
7. Cita representativa

Formato: Markdown con secciones claras.
```

---

## 🎯 Checklist

- [ ] DS-01: Guía de prompts documentada
- [ ] DS-02: Design system en CSS
- [ ] DS-03: 20+ iconos cohesivos
- [ ] DS-04: Biblioteca de UX copy
- [ ] DS-05: Estructuras de wireframes
- [ ] DS-06: 3-5 user personas

---

## 📚 Tips para Mejores Prompts

1. **Sé específico con estilos**:
   - ❌ "diseño moderno"
   - ✅ "flat design, colores pastel, sombras sutiles, bordes redondeados 8px"

2. **Referencias visuales**:
   - Menciona marcas/apps con estilo similar
   - "Al estilo de Stripe, Google Material, Apple HIG"

3. **Itera**:
   - Primer prompt: concepto general
   - Refinamiento: ajustar detalles, colores, proporciones

4. **Formato de salida**:
   - Especifica: SVG, PNG, CSS, Markdown, JSON

---

**📖 Recursos**: [Midjourney Guide](https://docs.midjourney.com/) | [DALL-E Tips](https://platform.openai.com/docs/guides/images) | [Prompt Engineering](https://www.promptingguide.ai/)
