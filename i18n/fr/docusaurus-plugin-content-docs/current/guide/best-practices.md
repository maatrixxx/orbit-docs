---
id: best-practices
title: Conseils & Bonnes pratiques
sidebar_position: 6
---

# Conseils & Bonnes pratiques

Quelques recommandations pour obtenir les meilleurs résultats sans rencontrer de problèmes.

---

## Ne surcharge pas ta machine

Orbit ouvre une vraie fenêtre de navigateur par tâche. Chaque navigateur consomme de la RAM et du CPU.

**Maximum recommandé : 15–20 tâches simultanément.**

Faire tourner 50+ tâches en même temps sur une machine standard provoquera des ralentissements, des crashs et des comptes ratés. Mieux vaut lancer 15 tâches proprement et mettre le reste en attente.

:::tip
Utilise **Smart Start** plutôt que **Start All** — ça décale les lancements de quelques secondes, ce qui est plus doux pour ta machine et évite d'envoyer un pic de requêtes à Amazon exactement au même moment.
:::

---

## Rotation par procuration

Le nombre optimal de proxies dépend de leur utilisation :

**Rotation des proxys (tâches gen)** — l'adresse IP change à chaque requête, permettant ainsi à un seul point de terminaison proxy de gérer plusieurs tâches en parallèle. Un groupe de proxys composé de quelques points de terminaison suffit pour exécuter simultanément des dizaines de tâches gen.

**Proxies persistants (invitation/session/vérification de victoire)** — chaque compte doit utiliser son propre proxy dédié. Le ratio est **d'un proxy par compte** : si vous avez 500 comptes, il vous faut 500 emplacements de proxy persistants distincts. Le proxy n'est pas partagé entre les comptes ; c'est le principe même.

En pratique : achetez des proxys sticky pour gen (bande passante bon marché) et configurez-les avec une durée de session très longue (voir le [guide Sticky Proxy](/guide/sticky-proxy)) afin que l'adresse IP reste fixe suffisamment longtemps pour être enregistrée sur le compte et réutilisée pour toutes les tâches futures.

---

## Garde tes soldes rechargés

Les échecs en cours de route arrivent quand les crédits SMS ou CapGuru sont à zéro. Avant un gros run, vérifie :
- Ton **solde Hero SMS**
- Ton **solde CapGuru**

Les deux peuvent être vérifiés directement dans Orbit → **Settings**.

---

## Teste avant de scaler

Lance toujours **5 tâches en premier** pour vérifier que tout fonctionne (proxies connectés, SMS reçus, CAPTCHA résolu, IMAP qui attrape les OTP). Scale seulement une fois qu'un run complet de bout en bout est validé.

---

## Besoin d'aide ?

Le meilleur endroit pour poser des questions, partager des tips ou savoir quels proxies fonctionnent le mieux en ce moment, c'est le **Discord Orbit** — que tu as déjà !

La communauté est active et les membres sont là pour aider les nouveaux à faire fonctionner leur setup.
