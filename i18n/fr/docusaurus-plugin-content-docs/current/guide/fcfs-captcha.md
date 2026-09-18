---
id: fcfs-captcha
title: Étape 2 — Anti-Captcha (CapSolver)
sidebar_position: 12
---

# Étape 2 — Anti-Captcha

Certains sites FCFS (notamment les boutiques Shopify et King Jouet) affichent des challenges CAPTCHA pendant le checkout. Sans résolveur automatique, tes tâches se mettent en pause et nécessitent une intervention manuelle — ce qui détruit ton avantage de vitesse lors d'un drop.

---

## Recommandé — CapSolver

**[capsolver.com](https://www.capsolver.com/)**

CapSolver est le service anti-captcha intégré dans Orbit pour les sites FCFS. Il supporte les types de challenges utilisés par Shopify, King Jouet et les sites similaires.

| Détail | Info |
|--------|------|
| Prix | Très faible — quelques dollars couvrent des milliers de résolutions |
| Challenges supportés | Cloudflare Turnstile, hCaptcha, reCAPTCHA |
| Intégration native | Oui — intégré dans Orbit |

:::tip
Même si ton site cible n'affiche pas toujours un CAPTCHA, avoir CapSolver configuré permet à tes tâches de le gérer automatiquement si un drop génère du trafic intense.
:::

---

## Comment récupérer ta clé API

1. **Crée un compte** sur [capsolver.com](https://www.capsolver.com/)
2. Recharge ton solde (quelques dollars suffisent largement pour commencer)
3. Va dans ton **dashboard** → trouve la section **API Key**
4. Copie ta clé API
5. Dans Orbit → **Settings** → **CapSolver** → colle ta clé et clique sur **Enregistrer**

Orbit utilisera automatiquement CapSolver dès qu'un CAPTCHA apparaît pendant une tâche d'achat.
