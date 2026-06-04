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
Utilise **⚡ Smart Start** plutôt que **▶ Start All** — ça décale les lancements de quelques secondes, ce qui est plus doux pour ta machine et évite d'envoyer un pic de requêtes à Amazon exactement au même moment.
:::

---

## Rotation des proxies

Assure-toi que ton groupe de proxies contient **suffisamment de proxies** pour le nombre de tâches que tu fais tourner. Orbit les fait tourner automatiquement, mais si tu n'as que 5 proxies pour 20 tâches, chaque proxy est surexploité — ce qui augmente le risque de ban.

Ratio recommandé : **au moins 1 proxy pour 2–3 tâches simultanées**.

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

Le meilleur endroit pour poser des questions, partager des tips ou savoir quels proxies fonctionnent le mieux en ce moment, c'est le **Discord Orbit**.

Rejoins ici → **[discord.gg/orbit](https://discord.gg/orbit)**

La communauté est active et les membres sont contents d'aider les nouveaux à faire fonctionner leur setup.
