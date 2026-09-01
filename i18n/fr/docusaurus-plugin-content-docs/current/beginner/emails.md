---
id: emails-beginner
title: Pourquoi plusieurs adresses mail ?
sidebar_position: 4
---

# Pourquoi plusieurs adresses mail ?

## Un compte = un mail

Chaque compte Amazon, Fnac ou Philibert nécessite une **adresse mail unique**. Tu ne peux pas créer 50 comptes avec la même adresse — chacun a besoin de la sienne.

Ça veut dire que si tu veux demander 50 invitations Amazon, tu as besoin de **50 adresses mail différentes**.

---

## Option 1 : iCloud (intégré dans Orbit)

Orbit dispose d'un **générateur d'adresses iCloud** intégré qui crée de vraies adresses `@icloud.com` automatiquement.

Ce sont de véritables comptes Apple iCloud — pas de faux mails jetables. Amazon et Fnac les acceptent sans problème.

**Comment ça marche :**
- Orbit se connecte à l'infrastructure Apple et crée des comptes iCloud un par un
- Chaque compte reçoit une vraie adresse `@icloud.com`
- Orbit les stocke et les utilise automatiquement lors de la création des comptes sur les sites
- La surveillance IMAP des boîtes est intégrée — Orbit lit les codes OTP et les mails de confirmation directement

:::tip Meilleure option pour les débutants
Si tu débutes, iCloud est le chemin le plus simple. Aucune configuration supplémentaire, aucun service externe nécessaire — il faut juste un abonnement iCloud+ (2€/mois, requis pour générer des adresses).

→ Voir **[Emails — Générateur iCloud](../emails/icloud-generator)** dans la section Docs pour la configuration.
:::

---

## Option 2 : Catchall

Un **catchall** est une configuration de domaine mail où *n'importe quelle* adresse se terminant par `@tondomaine.com` est valide et arrive dans la même boîte. Par exemple :

- `abc123@tondomaine.com` ✓
- `xyz789@tondomaine.com` ✓
- `nimporte@tondomaine.com` ✓

Tu peux générer des milliers d'adresses uniques instantanément sans coût supplémentaire par adresse — tant que tu possèdes le domaine.

**Pourquoi c'est puissant :**
- Adresses illimitées depuis un seul domaine
- Coût très faible à grande échelle (un domaine, c'est ~10€/an)
- Compatible Amazon, Fnac et Philibert

**Le bémol :**
- Nécessite de posséder un domaine et de le configurer (DNS, routage mail)
- Un peu plus technique à mettre en place qu'iCloud

:::info Tutoriel catchall — Discord privé
Un tutoriel complet étape par étape pour configurer un catchall est disponible sur le **serveur Discord privé Orbit** (membres uniquement).

Si tu n'es pas encore sur le serveur, vérifie le lien dans ton mail de confirmation de licence.
:::

---

## Que choisir ?

| | iCloud | Catchall |
|--|--------|----------|
| **Difficulté de mise en place** | Facile (intégré) | Moyen (nécessite un domaine) |
| **Coût** | ~2€/mois (iCloud+ requis, 750 adresses) | ~10€/an pour un domaine |
| **Volume** | Limité (Apple limite la création) | Illimité |
| **Idéal pour** | Démarrer, petits runs | Opérations à grande échelle |

Pour la plupart des débutants : **commence avec iCloud**, passe au catchall quand tu es à l'aise et que tu veux monter en volume.

---

## Récapitulatif

- Chaque compte sur un site nécessite une adresse mail unique
- iCloud : le plus simple, intégré dans Orbit, parfait pour démarrer
- Catchall : volume illimité, coût faible, nécessite un domaine (tuto sur Discord)
- Orbit gère la surveillance des mails (codes OTP, invitations) automatiquement via IMAP

Tu comprends maintenant les trois piliers : **sites, proxies et mails**. Il est temps de tout mettre en pratique.
