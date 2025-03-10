# Orthography Check API

## Description
API de vérification orthographique basée sur OpenAI. Ce service permet de vérifier la grammaire et l'orthographe d'un texte en utilisant les modèles d'IA d'OpenAI.

## Structure du projet
- `/src` : Code source principal
  - `/gpt` : Modules liés à l'intégration avec GPT
    - `/use-cases` : Cas d'utilisation spécifiques
      - `orthography.use-case.ts` : Implémentation du cas d'utilisation pour la vérification orthographique

## Technologie utilisée
- TypeScript
- OpenAI API
- Architecture propre (Clean Architecture)

## Installation
```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.exemple .env
# Ajouter votre clé API OpenAI dans le fichier .env