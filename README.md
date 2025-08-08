# Mon Plan Auto

Site statique Jekyll avec Tailwind CSS

## Installer et lancer en local

1. Installer Ruby et Bundler si nécessaire.
2. Installer les dépendances Ruby : `bundle install`
3. Installer NodeJS, puis installer les dépendances JS : `npm install`
4. Générer le CSS Tailwind : `npm run build:css`
5. Lancer le serveur Jekyll : `bundle exec jekyll serve`
6. Accéder à [http://localhost:4000](http://localhost:4000)

## Déploiement GitHub Pages

- Pousser la branche sur GitHub, activer Pages.
- Utiliser le CSS généré dans `assets/css/main.css`.

## Intégrations

- Remplacer le code Google Analytics (`G-XXXXXXX`) par votre propre identifiant dans `_includes/footer.html`.
- Ajouter le code d'intégration Mailchimp dans `index.md` à l'endroit indiqué.

---


