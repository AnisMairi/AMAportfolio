# Deploiement Cloudflare

## Strategie retenue

Ce projet doit etre deploye avec Cloudflare Workers + OpenNext.

Il n'est pas un export statique pur car il contient une route API App Router:

- `src/app/(dark)/api/contact/route.js`, exposee en `/api/contact`

Le build Next marque cette route comme dynamique (`ƒ /api/contact`). Un deploiement Cloudflare Pages statique avec `output: 'export'` supprimerait cette API.

## Commandes locales

```bash
npm install
npm run lint
npm run build
npm run build:cloudflare
npm run preview
```

`npm run build` lance le build Next.js standard. Le build de production ignore les warnings ESLint existants pour ne pas bloquer le deploiement; gardez `npm run lint` comme verification separee.

## Commandes Cloudflare Workers

Depuis un workflow GitHub ou Cloudflare Workers Builds:

```bash
npm ci
npm run deploy
```

Le Worker est configure par `wrangler.jsonc`.

## Variables d'environnement

Ne pas mettre de secret dans le code. Configurer ces variables dans Cloudflare:

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_PRIVATE_KEY` si votre template EmailJS l'exige

Exemple local: copier `.env.example` vers `.env.local`, puis remplir les valeurs.

Exemple Cloudflare:

```bash
npx wrangler secret put EMAILJS_SERVICE_ID
npx wrangler secret put EMAILJS_TEMPLATE_ID
npx wrangler secret put EMAILJS_PUBLIC_KEY
npx wrangler secret put EMAILJS_PRIVATE_KEY
```

## Notes

- `nodejs_compat` est active dans `wrangler.jsonc`.
- `compatibility_date` est fixee a `2026-05-12`.
- Les pages applicatives restent prerendered/statics quand Next le permet; seule l'API contact necessite le Worker.
