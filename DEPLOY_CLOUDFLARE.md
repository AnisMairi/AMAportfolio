# Deploiement Cloudflare Pages

Ce projet est prepare pour Cloudflare Pages avec le flux GitHub depuis l'interface Cloudflare.

## Reglages Cloudflare Pages

Dans Cloudflare Pages, connecter le repository GitHub puis utiliser:

| Champ Cloudflare | Valeur |
| --- | --- |
| Framework preset | `Next.js` |
| Build command | `npm run pages:build` |
| Build output directory | `.vercel/output/static` |
| Root directory | laisser vide |

Le script `pages:build` utilise `@cloudflare/next-on-pages` pour generer la sortie Pages compatible avec les Functions Cloudflare.

## Pourquoi pas `out`

Le projet contient une route API App Router:

- `src/app/(dark)/api/contact/route.js`, exposee en `/api/contact`

Un export statique Next.js avec `output: 'export'` genererait un dossier `out`, mais supprimerait cette API. Pour garder le formulaire de contact fonctionnel sur Cloudflare Pages, il faut utiliser la sortie `.vercel/output/static` produite par `next-on-pages`.

## Variables d'environnement

Configurer ces variables dans Cloudflare Pages, dans **Settings > Environment variables**:

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_PRIVATE_KEY` si votre template EmailJS l'exige

Ajouter aussi:

- `NODE_VERSION` = `20`

Exemple local: copier `.env.example` vers `.env.local`, puis remplir les valeurs.

## Commandes locales

```bash
npm install
npm run build
npm run pages:build
```

Pour tester avec Wrangler Pages en local:

```bash
npm run pages:preview
```

## Notes

- `npm run build` lance le build Next.js standard.
- `npm run pages:build` lance le build Cloudflare Pages.
- Le package `@cloudflare/next-on-pages` est deprecie par Cloudflare au profit d'OpenNext Workers, mais il reste l'adapter adapte au flux Cloudflare Pages + GitHub demande ici.
