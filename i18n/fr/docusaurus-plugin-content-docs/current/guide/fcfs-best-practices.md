---
id: fcfs-best-practices
title: Conseils & Bonnes pratiques
sidebar_position: 15
---

# Conseils & Bonnes pratiques

Quelques recommandations pour obtenir les meilleurs résultats sur les sites FCFS.

---

## Tout préparer avant le drop

Le pire moment pour configurer tes proxies ou remplir tes profils, c'est pendant le drop. Assure-toi que tout est prêt **à l'avance** :

- [ ] Comptes générés et profils remplis (adresse de livraison)
- [ ] Cartes de paiement configurées
- [ ] Proxies SOCKS5 importés
- [ ] Clé CapSolver configurée et solde rechargé
- [ ] Monitor configuré et connecté (token Discord, channels, filtres)
- [ ] Paramètres de tâches d'achat mémorisés (prêt à re-créer rapidement)

:::tip Mémorise tes paramètres de tâche
Une fois que tu as créé des tâches d'achat qui fonctionnent, note les paramètres. La structure (groupe de comptes, groupe de proxies, quantité) reste la même d'un drop à l'autre — seule l'URL ou le déclencheur change.
:::

---

## Garde les notifications Discord activées

Active les notifications pour les channels Discord que tu surveilles. Même avec le Monitor en marche, c'est utile de savoir quand un drop se produit pour suivre l'avancement de tes tâches.

---

## Teste avant un vrai drop

Crée une tâche d'achat test avec un produit non-limité pour vérifier :
- La connexion proxy fonctionne correctement
- Le compte se connecte
- Le flow de checkout se complète

Ça permet de détecter les problèmes de configuration avant qu'ils ne te coûtent un drop.

---

## Notes par site

**Fnac** — La sélection de point relais est supportée. Configure ton point relais préféré dans Settings à l'avance.

**Philibert** — Le remplissage du profil doit inclure l'adresse complète. Les tâches utilisent un checkout HTTP direct pour la vitesse.

**King Jouet** — Paiement par carte Adyen. CVV entré automatiquement. Assure-toi que ta carte est correctement configurée.

**Shopify** — Fonctionne avec n'importe quel store Shopify. L'URL doit être une URL directe de produit ou de variante.

---

## Besoin d'aide ?

Le **Discord Orbit** est le meilleur endroit pour poser des questions, partager ce qui marche, et recevoir des alertes sur les prochains drops. Reste actif — l'intelligence collective est un avantage majeur sur les drops compétitifs.
