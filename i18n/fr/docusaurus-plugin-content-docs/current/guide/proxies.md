---
id: proxies
title: Étape 1 — Proxies
sidebar_position: 2
---

# Étape 1 — Proxies

## C'est quoi un proxy résidentiel ?

Un **proxy résidentiel** (ou "resi") fait transiter ton trafic par de vraies adresses IP de particuliers. Du point de vue d'Amazon, chaque requête ressemble à celle d'un utilisateur lambda chez lui — pas d'un datacenter. Ça réduit drastiquement le risque de ban.

:::info Pourquoi pas les proxies datacenter ?
Les proxies datacenter sont bon marché mais facilement détectés et bloqués par Amazon. Utilise toujours des proxies **résidentiels** pour la génération de comptes.
:::

---

## Fournisseurs recommandés

### Flames *(sites FCFS + gen Amazon)*
**[flameproxies.com/dashboard/new-proxies](https://flameproxies.com/dashboard/new-proxies)**

Le fournisseur de référence pour les **sites FCFS** (Fnac, Philibert, Shopify, King Jouet, KingDultes). Flames propose des **proxies SOCKS5**, indispensables pour que ces sites fonctionnent correctement dans Orbit. Fonctionne aussi très bien pour la gen Amazon.

:::tip SOCKS5 requis pour les sites FCFS
Fnac, Philibert, Shopify, King Jouet et KingDultes nécessitent tous des **proxies SOCKS5**. Utilise uniquement Flames (ou un autre fournisseur proposant du SOCKS5) pour ces tâches.
:::

### Proxy Baron *(meilleur pour Amazon)*
**[proxybaron.com](https://proxybaron.com)**

Des proxies résidentiels haut de gamme — le meilleur choix pour la **génération de comptes Amazon et les invitations**. Excellents taux de succès et fiabilité à grande échelle.

:::tip Tu ne sais pas lequel choisir ?
Pose la question sur le Discord Orbit — les membres partagent régulièrement leurs retours sur les différents fournisseurs.
:::

---

## Région des proxies — important

La région de tes proxies **doit correspondre** au marketplace Amazon sur lequel tu génères.

| Région | Pays du proxy requis |
|--------|----------------------|
| 🇫🇷 **FR** | France uniquement — utilise absolument des proxies français |
| 🇬🇧 **UK** | Royaume-Uni uniquement — utilise absolument des proxies UK |
| 🇯🇵 **JP** | Toutes les régions fonctionnent — aucune restriction |

:::warning FR & UK — mauvaise région = bans immédiats
Pour Amazon FR et UK, utiliser des proxies d'un autre pays augmente drastiquement le risque de blocages et de bans lors de la génération. Assure-toi que ton groupe de proxies contient uniquement des proxies du bon pays avant de lancer tes tâches.
:::

---

## Combien de bande passante faut-il ?

Estimation indicative : **~5 Go pour 100 comptes**.

Commence petit (1–2 Go) pendant la mise en place, puis augmente une fois que ton flow fonctionne bien.

---

## Comment importer ta liste de proxies dans Orbit

Une fois ton plan acheté sur le dashboard de ton fournisseur :

1. Trouve la section **"Export"** ou **"Download list"** (généralement sous "My Proxies" ou "Proxy List")
2. Exporte au format **`host:port:username:password`** (un proxy par ligne)
3. Dans Orbit → **Proxies** → **Créer un groupe** → colle ou importe ta liste

C'est tout. Orbit fera tourner tes proxies automatiquement pendant la génération.
