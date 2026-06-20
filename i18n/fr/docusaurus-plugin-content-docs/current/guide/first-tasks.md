---
id: first-tasks
title: Étape 4 — Créer tes premières tâches
sidebar_position: 5
---

# Étape 4 — Créer tes premières tâches

Proxies, SMS et CapGuru sont configurés. On va maintenant paramétrer Orbit et lancer ta première génération.

---

## 1. Configurer les Settings

Ouvre Orbit → **Settings** et remplis chaque section :

### API Keys
- **Clé CapGuru** — colle la clé récupérée sur [cap.guru](https://cap.guru/en/)

### SMS
- **Fournisseur** → sélectionne **Hero SMS**
- **Clé API** → colle ta clé Hero SMS
- Clique sur **Test connection** — ton solde doit apparaître

### IMAP *(optionnel mais recommandé)*
Une boîte IMAP permet à Orbit de récupérer automatiquement le code de vérification email qu'Amazon envoie pendant l'inscription. Sans ça, tu devras entrer les codes manuellement.

- Clique sur **Ajouter un compte IMAP**
- Sélectionne **Gmail** comme fournisseur (recommandé — plus rapide et fiable que l'IMAP iCloud)
- Entre ton adresse Gmail et un **mot de passe d'application** (génère-en un sur [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords))
- Clique sur **Test connection** → Enregistrer

:::tip Utilise Gmail
Même si tes emails sont des alias iCloud, configure-les pour qu'ils soient redirigés vers une adresse Gmail. Utilise ensuite ce Gmail comme compte IMAP. C'est plus rapide et plus fiable.
:::

### Webhook Discord *(optionnel)*
Si tu veux recevoir une notification à chaque compte créé avec succès, colle une URL de webhook Discord ici.

---

## 2. Importer tes proxies

Va dans **Proxies** → **Créer un groupe** :
1. Donne un nom au groupe (ex. `Resilab FR`)
2. Colle ta liste de proxies (format : `host:port:user:pass`, un par ligne)
3. Clique sur **Importer** → tes proxies sont sauvegardés

---

## 3. Configurer les profils *(optionnel mais recommandé)*

Les profils donnent à chaque compte un vrai nom, une vraie adresse et une vraie date de naissance. Sans profils, Orbit génère des données aléatoires — les profils donnent des comptes de meilleure qualité.

Va dans **Profiles** → **Import** → colle une liste de profils ou utilise le générateur en masse.

---

## 4. Créer une liste d'emails

Va dans **Email Lists** → **Créer un groupe** :
1. Nomme ton groupe (ex. `Amazon FR`)
2. Colle ta liste d'adresses email (une par ligne)
3. Clique sur **Importer**

Chaque email sera utilisé pour un compte.

---

## 5. Créer les tâches Amazon Gen

Va dans **Tasks** → clique sur **+ Créer** → sélectionne **Amazon Gen**.

Remplis le formulaire :

| Champ | Quoi mettre |
|-------|-------------|
| **Région** | FR (France), UK, ou JP (Japon) |
| **Nombre de tâches** | Commence par 5–10 pour tester |
| **Groupe de proxies** | Sélectionne le groupe créé |
| **Groupe de profils** | Sélectionne ton groupe (ou laisse sur "Random") |
| **Liste d'emails** | Sélectionne ton groupe d'emails |
| **Boîte IMAP pour OTP** | Sélectionne ton compte IMAP |
| **Pays SMS** | France (FR) ou UK |
| **Groupe de comptes** | Crée un nouveau groupe — les comptes créés y seront sauvegardés |

Clique sur **Créer les tâches** — elles apparaissent dans la liste.

---

## 6. Lancer

Clique sur **Start All** (ou **Smart Start** pour décaler les lancements et éviter les pics).

Chaque carte de tâche affiche l'étape en cours en temps réel. Un flow typique :
1. Ouverture du navigateur
2. Remplissage du formulaire d'inscription
3. Résolution du CAPTCHA (CapGuru)
4. Vérification téléphonique (Hero SMS — automatique)
5. Code OTP par email (IMAP — automatique)
6. Compte créé et sauvegardé

---

## 7. Retrouver tes comptes créés

Va dans **Accounts** → sélectionne le groupe que tu as spécifié → tous les comptes créés avec succès sont listés avec leurs identifiants et cookies.
