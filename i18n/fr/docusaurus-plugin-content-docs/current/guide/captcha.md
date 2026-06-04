---
id: captcha
title: Étape 3 — Anti-Captcha (CapGuru)
sidebar_position: 4
---

# Étape 3 — Anti-Captcha

Amazon utilise des challenges CAPTCHA **Arkose Labs** pendant l'inscription. Sans résolveur automatique, chaque tâche se met en pause et attend que tu le résolves manuellement — ce qui rend l'automatisation à grande échelle impossible.

---

## Recommandé — CapGuru

**[cap.guru/en](https://cap.guru/en/)**

CapGuru est le résolveur de CAPTCHA intégré directement dans Orbit. Il est spécialisé dans les challenges Arkose et est de loin l'option la plus rentable disponible.

| Détail | Info |
|--------|------|
| Prix | ~$0.10 pour 1000+ comptes résolus |
| Bonus à l'inscription | **3 centimes offerts** dès la création du compte — suffisant pour commencer |
| Recharge minimum | $0.10 suffit pour des centaines de résolutions |
| Intégré dans Orbit | ✅ Oui (intégration native) |

:::tip Extrêmement peu cher
À ces prix, l'anti-captcha coûte pratiquement rien. $0.10 sur CapGuru couvrent confortablement tes 1000+ premières générations.
:::

---

## Comment récupérer ta clé API

1. **Crée un compte** sur [cap.guru/en](https://cap.guru/en/)
2. Une fois connecté, ta **clé API est affichée directement sur la page d'accueil du dashboard**
3. Copie-la
4. Dans Orbit → **Settings** → **CapGuru** → colle ta clé et clique sur **Enregistrer**

C'est tout. Aucune configuration supplémentaire nécessaire. Orbit utilisera automatiquement CapGuru dès qu'un CAPTCHA apparaît pendant la génération.

---

## Et si je n'ajoute pas CapGuru ?

Les tâches tourneront quand même, mais elles **s'arrêteront et attendront que tu résolves chaque CAPTCHA manuellement** dans la fenêtre du navigateur. C'est gérable pour 1–2 tâches, mais impossible à grande échelle. CapGuru est fortement recommandé pour toute génération sérieuse.
