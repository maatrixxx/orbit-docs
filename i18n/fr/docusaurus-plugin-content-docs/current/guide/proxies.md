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

### Resilab *(recommandé pour débuter)*
**[resilab.vip/dashboard](https://www.resilab.vip/dashboard)**

Un bon fournisseur resi avec un excellent rapport qualité/prix. Très adapté pour la gen Amazon.

### Mars Proxies *(qualité premium)*
**[dashboard.marsproxies.com](https://dashboard.marsproxies.com/products/ultra-residential-proxies)**

Plus cher, mais l'une des options les plus fiables du marché. Si tu comptes tourner un gros volume, l'investissement vaut le coup.

:::tip Autres options
Tu ne sais pas lequel choisir ? Pose la question sur le Discord Orbit — les membres partagent régulièrement leurs retours sur les différents fournisseurs.
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
