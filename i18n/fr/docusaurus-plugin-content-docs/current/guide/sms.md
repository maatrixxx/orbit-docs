---
id: sms
title: Étape 2 — API SMS
sidebar_position: 3
---

# Étape 2 — API SMS

Amazon exige un **numéro de téléphone** pour finaliser l'inscription d'un compte. Orbit gère ça à **100% automatiquement** — il te suffit de connecter une API SMS et le bot fait le reste.

---

## Fournisseur recommandé — Hero SMS

**[hero-sms.com](https://hero-sms.com/fr)**

Hero SMS est le service que l'on recommande. Il fonctionne nativement avec Orbit et propose une très bonne disponibilité de numéros pour Amazon FR et UK à des tarifs très compétitifs.

| Détail | Info |
|--------|------|
| Prix par numéro | $0.05 – $0.30 selon le pays |
| Intégré dans Orbit | ✅ Oui (intégration native) |
| Dépôt minimum | Quelques dollars suffisent pour commencer |

---

## Comment récupérer ta clé API

1. **Crée un compte** sur [hero-sms.com](https://hero-sms.com/fr)
2. **Recharge ton solde** — même $1–2 suffisent pour tester
3. Va dans ton **dashboard** → cherche la section **"API"** ou **"Clé API"** dans le menu
4. Copie ta clé API (une longue chaîne de caractères)
5. Dans Orbit → **Settings** → **SMS** → colle ta clé et clique sur **Enregistrer**

:::tip Orbit fait tout automatiquement
Une fois ta clé enregistrée, tu n'y touches plus. Quand une tâche arrive à l'étape de vérification téléphonique, Orbit loue un numéro, reçoit le SMS, entre le code et libère le numéro — sans aucune action de ta part.
:::

---

## Coût estimé

Pour 100 comptes à ~$0.15 par numéro en moyenne → **~15$ en crédits SMS**.

Garde toujours un petit solde rechargé pour éviter les échecs en plein milieu d'une session.
