---
id: how-sites-work
title: Fonctionnement de chaque site
sidebar_position: 2
---

# Fonctionnement de chaque site

Comprendre comment chaque plateforme commercialise ses produits limités t'aidera à saisir pourquoi Orbit est construit comme il l'est — et pourquoi être rapide ne suffit pas toujours.

---

## Amazon — Système d'invitations

Amazon utilise un **système d'invitations** pour ses drops les plus limités (sets Pokémon 30 ans, jeux Nintendo en édition limitée, etc.).

**Comment ça marche :**

1. Amazon publie le produit sur son site avec un bouton **"Demander une invitation"**
2. Tu cliques — Amazon t'ajoute à un pool de candidats
3. Amazon sélectionne une partie des postulants (aléatoirement ou par priorité) et leur **envoie une invitation par mail**
4. Si tu es sélectionné, tu as **72 heures** pour finaliser ton achat au prix indiqué
5. Si tu n'es pas sélectionné, tu n'as rien

:::warning Le problème
Amazon reçoit **des dizaines de milliers de demandes d'invitations** pour les drops populaires. Le stock peut se limiter à quelques milliers d'unités. Avec un seul compte, tes chances sont infimes.

**C'est exactement pour ça qu'Orbit existe** : il te permet de demander des invitations sur des dizaines ou centaines de comptes simultanément — multipliant tes chances proportionnellement.
:::

**Ce qu'Orbit automatise :**
- Création de comptes Amazon en masse (avec vraies adresses mail et vérification téléphonique)
- Demande d'invitations sur tous les comptes dès que la page produit est disponible
- Surveillance des boîtes mail pour l'invitation, puis checkout automatique

---

## Fnac — Drops en temps réel

Fnac n'utilise pas de système d'invitations. Leurs drops limités fonctionnent comme une **course à l'ATC** (Ajout au Panier) classique :

1. Un produit est mis en ligne sur fnac.com à une date et heure précises
2. Au moment où il devient disponible, **des milliers de personnes essaient simultanément de l'ajouter à leur panier**
3. Premier arrivé, premier servi — celui qui ajoute au panier et finalise le checkout le plus vite gagne

**Ce qu'Orbit automatise :**
- Dès que l'URL produit est active, Orbit envoie une **requête HTTP directement à l'API panier Fnac** (plus rapide qu'un clic navigateur)
- Il détecte la confirmation panier et passe immédiatement au checkout
- Il gère la livraison, le paiement et la confirmation de commande

:::info Pourquoi HTTP et pas juste un clic ?
Un clic navigateur prend 200–500ms à traiter visuellement avant que quoi que ce soit soit envoyé au serveur. L'approche HTTP d'Orbit contourne le navigateur et contacte directement la base de données Fnac — c'est pourquoi c'est nettement plus rapide.
:::

---

## Philibert — Drops Click & Collect

Philibert est le plus grand revendeur de jeux de société en France. Ils droppent régulièrement des articles **limités ou de retour en stock** qui partent instantanément.

Leur système est similaire à Fnac — une course à l'ATC directe — mais ils proposent aussi le **click & collect** (retrait en magasin), qui dispose parfois d'un stock légèrement plus important.

**Ce qu'Orbit automatise :**
- ATC au moment du drop
- Checkout avec sélection de livraison ou point relais

---

## Shopify — Drops de marques

De nombreuses marques (streetwear, sneakers, collectibles) font tourner leur boutique en ligne sur **Shopify**, une plateforme e-commerce courante. Les drops sur ces boutiques fonctionnent généralement ainsi :

1. Annonce d'une date et heure de sortie à l'avance
2. Mise en ligne simultanée — tout le monde rafraîchit en même temps
3. Rupture de stock en quelques secondes (parfois millisecondes pour les drops très attendus)

Certaines boutiques Shopify ajoutent une **file d'attente virtuelle** — Orbit gère ça également.

**Ce qu'Orbit automatise :**
- Surveillance de la page produit pour détecter le stock
- ATC instantané et checkout dès que le stock est détecté

---

## Récapitulatif

| Site | Type de drop | Approche d'Orbit |
|------|-------------|-----------------|
| **Amazon** | Loterie d'invitations | Demande d'invitations sur plusieurs comptes |
| **Fnac** | Course ATC en temps réel | HTTP ATC direct, checkout instantané |
| **Philibert** | Course ATC en temps réel | HTTP ATC direct, sélection point relais |
| **Shopify** | Course ATC en temps réel | Surveillance stock + ATC instantané |

Maintenant que tu comprends comment fonctionnent ces sites, parlons de **pourquoi tu as besoin d'adresses IP différentes** — et ce qui se passe si tu n'en as pas.
