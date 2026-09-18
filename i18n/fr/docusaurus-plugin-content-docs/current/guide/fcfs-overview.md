---
id: fcfs-overview
title: Guide Sites FCFS — Vue d'ensemble
sidebar_position: 10
---

# Guide Sites FCFS

Ce guide est destiné aux **sites FCFS (First-Come, First-Served)** — Fnac, Philibert, King Jouet, Shopify, et similaires. Ces sites vendent des articles en quantité limitée qui sont mis en vente à un moment précis et s'écoulent en quelques secondes.

Contrairement à Amazon (qui nécessite la génération de comptes et des demandes d'invitation), les sites FCFS exigent d'être **le premier** au moment où le produit drop. Orbit automatise le processus d'achat — mais il faut quand même être informé en temps réel.

---

## Ce dont tu as besoin

Pour acheter sur les sites FCFS avec Orbit, tu as besoin de **deux services externes** en plus du bot :

| # | Quoi | Pourquoi | Coût |
|---|------|----------|------|
| 1 | **Proxies SOCKS5** | Éviter les blocages IP et accélérer le checkout | Variable |
| 2 | **CapSolver** | Résoudre les CAPTCHAs sur les sites FCFS | Très faible |

:::tip Pas d'API SMS nécessaire
Les sites FCFS ne nécessitent pas de vérification par numéro de téléphone lors du checkout. Tu n'as pas besoin d'un service SMS pour ces sites.
:::

:::info Reste connecté — Discord est essentiel
La chose la plus importante pour le FCFS est de **savoir quand le drop a lieu**. Tu dois être membre du serveur Discord privé de chaque site, ainsi que du **serveur Discord Orbit**, où les drops et les liens produits sont partagés en temps réel. Sans le bon lien au bon moment, aucun bot ne peut t'aider.
:::

Continue avec les pages suivantes pour configurer chaque service étape par étape.
