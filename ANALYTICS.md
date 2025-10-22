# Sistema de Analytics Automático

## Resumen

Se ha implementado un sistema de tracking automático que captura todos los clicks en links y botones sin necesidad de agregar código manualmente a cada elemento.

## Características

### ✅ Tracking Automático
- **Todos los links** (internos y externos) se trackean automáticamente
- **Todos los botones** se trackean automáticamente
- **No requiere modificaciones** en links nuevos

### 🎯 Detección Inteligente

El sistema detecta automáticamente:

1. **Links Externos**: Identifica automáticamente links externos y extrae el dominio
2. **Redes Sociales**: Reconoce automáticamente Discord, Twitter, GitHub, YouTube, Telegram
3. **Navegación Interna**: Trackea navegación entre páginas
4. **Secciones**: Agrupa clicks por sección usando `data-section`
5. **CTAs**: Identifica botones de llamada a la acción

### 📊 Categorías de Eventos

Los eventos se categorizan automáticamente:

- `Social: Discord` - Links a Discord
- `Social: Twitter` - Links a Twitter/X
- `Social: GitHub` - Links a GitHub
- `Social: YouTube` - Links a YouTube
- `Social: Telegram` - Links a Telegram
- `External Link: [domain]` - Otros links externos
- `Internal: Hall of Fame` - Links al hall of fame
- `Internal Navigation` - Navegación interna
- `CTA Button` - Botones de llamada a la acción
- `Button` - Otros botones
- `Section: [name]` - Clicks dentro de secciones específicas
- `Theme` - Toggle de tema claro/oscuro

## Implementación

### Archivos Creados

1. **`lib/analytics.js`**
   - Funciones de tracking
   - Sistema de detección automática
   - Inicializador de auto-tracking

2. **`pages/_app.js`** (modificado)
   - Inicializa el auto-tracking al montar la app

3. **Componentes actualizados**
   - `components/darkmode.js` - Tracking de theme toggle
   - `components/Hero.js` - Sección marcada
   - `components/HallOfFameSection.js` - Sección marcada
   - `components/Resources.js` - Sección marcada
   - `components/JoinCommunity.js` - Sección marcada
   - `components/History.js` - Sección marcada
   - `pages/hall-of-fame.js` - Sección marcada

## Cómo Funciona

### 1. Auto-tracking Global

```javascript
// Se inicializa automáticamente en _app.js
initAutoTracking();
```

Esto captura todos los clicks en:
- `<a>` tags
- `<button>` tags
- Elementos con `role="button"`

### 2. Detección Automática

Cuando se hace click, el sistema:
1. Encuentra el elemento clickeable más cercano
2. Extrae información relevante (href, text, aria-label, etc.)
3. Determina la categoría automáticamente
4. Envía el evento a Google Analytics

### 3. Personalización Opcional

Aunque no es necesario, puedes agregar atributos opcionales para mejorar el tracking:

```jsx
// Agregar label personalizado
<a href="..." data-track-label="Custom Label">Link</a>

// Marcar una sección
<section data-section="Section Name">
  {/* Todos los clicks aquí se etiquetarán con esta sección */}
</section>
```

## Eventos Enviados a GA

Cada click envía:
- **action**: `'click'` (o `'toggle'` para theme)
- **event_category**: Categoría detectada automáticamente
- **event_label**: Texto del link/botón o label personalizado

Ejemplo de evento:
```javascript
{
  action: 'click',
  event_category: 'Social: Discord',
  event_label: 'Join Discord CTA'
}
```

## Consola de Desarrollo

En desarrollo, cada evento trackado se muestra en consola:
```
📊 Analytics: { action: 'click', category: 'Social: Discord', label: 'Join Discord CTA' }
```

## Agregar Nuevos Links

**No necesitas hacer nada especial**. Simplemente agrega tus links normalmente:

```jsx
// ✅ Esto se trackeará automáticamente
<a href="https://twitter.com/user">Síguenos</a>

// ✅ También se trackeará automáticamente
<button onClick={handleClick}>Click Me</button>

// ✅ Opcionalmente puedes personalizar
<a href="..." data-track-label="Special Link">Link</a>
```

## Variables de Entorno

Asegúrate de tener configurado:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

En el archivo `.env.local`

## Verificación

Para verificar que funciona:

1. Abre las DevTools del navegador
2. Ve a la pestaña Network
3. Filtra por "gtag" o "google-analytics"
4. Haz click en cualquier link o botón
5. Deberías ver requests a Google Analytics

También puedes ver los eventos en tiempo real en Google Analytics:
- Google Analytics → Realtime → Events

## Mantenimiento

El sistema es **zero-maintenance** para nuevos links. Solo necesitas:

1. ✅ Seguir agregando links normalmente
2. ✅ El sistema los detectará y trackeará automáticamente
3. ✅ Opcionalmente, agregar `data-section` a nuevas secciones principales

## Soporte

Si necesitas agregar nuevas categorías o personalizar la detección, edita:
- `lib/analytics.js` → función `autoTrackClick()`


