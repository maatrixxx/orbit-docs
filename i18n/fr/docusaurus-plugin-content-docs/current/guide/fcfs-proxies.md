---
id: fcfs-proxies
title: Étape 1 — Proxies (SOCKS5)
sidebar_position: 11
---

# Étape 1 — Proxies

## Pourquoi SOCKS5 ?

Les sites FCFS (Fnac, Philibert, King Jouet, Shopify) nécessitent des **proxies SOCKS5** — pas des proxies HTTP/HTTPS standard. Le protocole SOCKS5 permet à Orbit de gérer le trafic réseau complexe utilisé par ces sites, et est obligatoire pour que le flow d'achat fonctionne correctement.

:::danger SOCKS5 uniquement
Utiliser des proxies HTTP/HTTPS avec les sites FCFS causera des échecs. Utilise toujours des proxies SOCKS5 d'un fournisseur qui les propose explicitement.
:::

---

## Fournisseur recommandé

### Flames *(recommandé pour les sites FCFS)*
**[flameproxies.com/dashboard/new-proxies](https://flameproxies.com/dashboard/new-proxies)**

Flames est le fournisseur de référence pour les sites FCFS. Ils proposent des **proxies résidentiels SOCKS5** qui fonctionnent nativement avec le flow d'achat d'Orbit pour Fnac, Philibert, King Jouet et Shopify.

:::tip Demande sur Discord
Tu ne sais pas quel plan choisir ? Pose la question sur le Discord Orbit — les membres partagent régulièrement leurs résultats avec différents plans Flames pour chaque site.
:::

---

## Région des proxies

Pour les sites FCFS français (Fnac, Philibert, King Jouet), utilise toujours des **proxies français**. Les IPs étrangères peuvent déclencher des vérifications de sécurité ou ralentir le checkout.

---

## Comment importer tes proxies dans Orbit

1. Achète un plan de proxies SOCKS5 chez Flames (ou un autre fournisseur SOCKS5)
2. Exporte au format **`host:port:username:password`** (un proxy par ligne)
3. Dans Orbit → **Proxies** → **Créer un groupe** → colle ou importe ta liste
4. Orbit détecte automatiquement le format SOCKS5 depuis la configuration du proxy

C'est tout. Orbit assignera les proxies à tes tâches d'achat automatiquement.
