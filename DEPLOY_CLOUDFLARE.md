# Deploiement Cloudflare Pages

Ce projet est prepare pour Cloudflare Pages en site statique.

## Reglages Cloudflare Pages

Dans Cloudflare Pages, connecter le repository GitHub puis utiliser:

| Champ Cloudflare | Valeur |
| --- | --- |
| Framework preset | `Next.js` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Build output category | `Static assets` |
| Root directory | laisser vide |

## Pourquoi `out`

`next.config.js` utilise `output: 'export'`. Le build Next.js genere donc un dossier `out` que Cloudflare Pages peut servir directement.

L'ancienne route API `/api/contact` a ete retiree pour eviter un build hybride Pages/Functions. Les formulaires actuels du site n'utilisent pas cette route serveur.

## Variables d'environnement

Pour ce mode statique, aucune variable serveur Cloudflare n'est requise pour afficher le site.

Ajouter seulement si besoin:

- `NODE_VERSION` = `20`

## Commandes locales

```bash
npm install
npm run build
```

Apres le build, le dossier `out` doit contenir `index.html`.
