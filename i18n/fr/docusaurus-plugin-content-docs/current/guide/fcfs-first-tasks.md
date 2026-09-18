---
id: fcfs-first-tasks
title: Étape 3 — Créer tes premières tâches
sidebar_position: 13
---

# Étape 3 — Créer tes premières tâches

Tu as configuré tes proxies et CapSolver. Voici comment préparer Orbit pour un drop sur les sites FCFS.

---

## 1. Configurer les paramètres

Ouvre Orbit → **Settings** et remplis :

### Clés API
- **Clé CapSolver** — colle la clé depuis [capsolver.com](https://www.capsolver.com/)

### Discord Webhook *(optionnel)*
Colle l'URL d'un webhook Discord pour recevoir une notification quand une tâche finalise un achat.

---

## 2. Importer tes proxies

Va dans **Proxies** → **Créer un groupe** :
1. Nomme ton groupe (ex : `Flames SOCKS5 FR`)
2. Colle ta liste de proxies SOCKS5 (format : `host:port:user:pass`, un par ligne)
3. Clique sur **Importer**

---

## 3. Configurer les comptes

Les sites FCFS nécessitent des comptes avec une **adresse de livraison pré-remplie**. Avant un drop, assure-toi que tes comptes sont prêts :

1. Va dans **Tasks** → **[Site] Generator** (ex : Fnac Generator, Philibert Generator)
2. Génère des comptes pour le site ciblé
3. Puis lance **[Site] Fill Profile** pour remplir l'adresse de livraison de chaque compte
4. Vérifie que les comptes affichent les infos de livraison dans l'onglet **Accounts**

:::warning Remplis les profils avant le drop
Les sites FCFS exigent que le flow de checkout se complète en quelques secondes. Un compte sans adresse de livraison échouera au checkout. Remplis toujours les profils à l'avance.
:::

---

## 4. Configurer les cartes de paiement

Va dans **Payment Cards** et assure-toi que tes cartes sont ajoutées et assignées aux comptes. Pendant une tâche d'achat, Orbit utilisera automatiquement la carte assignée à ce compte.

---

## 5. Créer les tâches d'achat

Lors d'un drop :

1. Va dans **Tasks** → **+ Créer** → sélectionne **[Site] Buy** (ex : Fnac Buy, Philibert Buy, King Jouet Buy, Shopify Buy)
2. Remplis le formulaire :

| Champ | Quoi entrer |
|-------|-------------|
| **URL** | L'URL du produit (depuis les annonces Discord) — ou sélectionne **Monitor** pour attendre un déclencheur |
| **Groupe de comptes** | Sélectionne le groupe avec les profils remplis |
| **Groupe de proxies** | Sélectionne ton groupe de proxies SOCKS5 |
| **Quantité** | 1 par tâche (une tâche = une tentative d'achat) |

3. Clique sur **Créer les tâches**
4. Clique sur **Start All**

---

## 6. Utiliser le Monitor comme déclencheur

Plutôt que de coller une URL manuellement, tu peux configurer le Discord Monitor pour lancer tes tâches automatiquement quand un lien de drop est publié. Voir la [section Monitor](/guide/fcfs-monitor) pour les détails de configuration.

:::tip Utilise le Monitor pour un démarrage simultané
Le Monitor garantit que toutes tes tâches démarrent **au même moment exact** que l'annonce Discord — crucial pour les drops FCFS où le stock s'écoule en quelques secondes.
:::

---

## 7. Points relais

Pour les sites qui nécessitent la sélection d'un point de retrait (Fnac, Philibert, King Jouet), Orbit peut sélectionner automatiquement un point relais. Configure ton point relais préféré dans **Settings → Relay Points** avant le drop.
