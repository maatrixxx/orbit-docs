---
id: proxies-beginner
title: Pourquoi des proxies ?
sidebar_position: 3
---

# Pourquoi des proxies ?

## C'est quoi une adresse IP ?

Chaque appareil connecté à internet a une **adresse IP** — un identifiant unique que les sites utilisent pour savoir *d'où* vient une requête. Pense à ça comme l'adresse de retour sur une lettre.

Quand tu visites Amazon, Amazon voit ton adresse IP. Quand tu demandes une invitation, cette demande est liée à ton IP.

---

## Le problème avec une seule IP

Si tu essaies de faire tourner **50 comptes Amazon depuis la même IP de chez toi**, Amazon sait immédiatement que quelque chose ne va pas :

- Aucune personne normale n'a 50 comptes Amazon
- Les 50 requêtes viennent de la même adresse
- Amazon signale ton IP → les 50 comptes sont bannis → tu as perdu ton temps

La même logique s'applique à Fnac, Philibert et Shopify — n'importe quel site détecte et bloque les comportements suspects liés à une seule IP.

:::danger Ne saute pas les proxies
Faire tourner Orbit sans proxies sur ton IP personnelle est le moyen le plus rapide de faire bannir tes comptes. Tu risques aussi de faire blacklister ton IP personnelle du site.
:::

---

## La solution : les proxies résidentiels

Un **proxy** est un serveur intermédiaire qui fait transiter ton trafic via une *autre* adresse IP. Un **proxy résidentiel** utilise spécifiquement des adresses IP attribuées à de vraies maisons par des fournisseurs d'accès internet — rendant ton trafic identique à celui d'un utilisateur lambda.

Avec des proxies résidentiels :
- Chaque compte peut utiliser une **adresse IP différente**
- Amazon voit 50 IP de domiciles différents au lieu d'une → aucun signal d'alarme
- Ton IP personnelle reste complètement propre et séparée

---

## Quel type de proxies faut-il ?

| Type | Adapté pour | Notes |
|------|------------|-------|
| **Résidentiel (rotatif)** | Amazon GEN, invitations Amazon | Doit être des **IPs françaises** pour Amazon FR |
| **Résidentiel (sticky)** | Fnac, Philibert, checkout Shopify | Même IP maintenue pendant toute la session |
| **Datacenter** | ❌ Déconseillé | Facilement détecté et bloqué |

:::tip La région des proxies est importante
Pour **Amazon France**, utilise toujours des **proxies résidentiels français**. Utiliser des proxies d'un autre pays augmente drastiquement le taux de bans. Pour Fnac et Philibert, les proxies français sont aussi recommandés mais moins stricts.
:::

---

## Combien ça coûte ?

La tarification est basée sur la **bande passante** (données transférées), pas sur le temps.

Estimations grossières :
- Amazon GEN : ~5 Go pour 100 comptes
- Invitations Amazon (par run) : ~0,5–1 Go
- Fnac/Philibert BUY : très peu de données (quelques secondes par tâche)

Pas besoin d'acheter un gros forfait pour commencer. 2–3 Go suffisent pour apprendre.

---

## Où acheter des proxies ?

Consulte la page **[Étape 1 — Proxies](../guide/proxies)** dans la section Guide pour les fournisseurs recommandés et la procédure de configuration pas à pas.

---

## Récapitulatif

- Chaque requête internet est liée à ton adresse IP
- Plusieurs comptes depuis une seule IP = détection et bans immédiats
- Les proxies résidentiels donnent à chaque compte une IP différente et légitime
- Proxies français obligatoires pour Amazon FR ; recommandés pour Fnac & Philibert

Ensuite : parlons des **adresses mail** — pourquoi tu en as besoin de plusieurs, et lesquelles utiliser.
