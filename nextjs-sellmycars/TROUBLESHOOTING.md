# Troubleshooting: ModernContactForm Error

## The Problem
You might see this error:
```
Module not found: Can't resolve '@/components/forms/ModernContactForm'
./app/locations/[id]/page.tsx
```

## The Solution

This error is from **cached build files**. The code is correct, but Next.js needs a fresh start.

### Steps to Fix:

1. **Stop the dev server** (Ctrl+C in terminal)

2. **Clear all caches:**
```bash
cd nextjs-sellmycars
rm -rf .next
rm -rf node_modules/.cache
```

3. **Restart the dev server:**
```bash
npm run dev
```

4. **Clear your browser cache:**
   - Chrome/Edge: Ctrl+Shift+Delete or Cmd+Shift+Delete
   - Or open DevTools (F12) → Network tab → Check "Disable cache"

5. **Hard refresh the page:**
   - Windows/Linux: Ctrl+Shift+R
   - Mac: Cmd+Shift+R

### Verify It Works:

1. Go to http://localhost:3000
2. Scroll to the "Locations" section
3. Click any location card (e.g., "Sydney CBD")
4. You should see the full location page with:
   - Google Maps
   - Suburb lists
   - Contact form
   - No errors!

## What Changed:

✅ **Old (causing error):**
- Looking for `@/components/forms/ModernContactForm` (doesn't exist)
- Location routes at `/locations/[id]`

✅ **New (correct):**
- Using `@/components/ContactForm` (exists)
- Location routes at `/locations/[slug]`
- All imports are correct

## Available Location Pages:

- http://localhost:3000/locations/sydney-cbd
- http://localhost:3000/locations/western-sydney
- http://localhost:3000/locations/northern-suburbs
- http://localhost:3000/locations/eastern-suburbs
- http://localhost:3000/locations/southern-sydney
- http://localhost:3000/locations/inner-west

All of these should load without errors after clearing the cache!
