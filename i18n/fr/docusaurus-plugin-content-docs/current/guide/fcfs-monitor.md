---
id: fcfs-monitor
title: Étape 4 — Monitor
sidebar_position: 14
---

# Étape 4 — Monitor

Le **Monitor** est l'une des fonctionnalités les plus importantes pour les drops FCFS. L'avoir configuré et prêt avant un drop fait la différence entre acheter et rater.

---

## Pourquoi le Monitor est crucial

Sur les drops FCFS, le stock s'écoule en **2 à 10 secondes**. L'ordre des opérations compte :

1. Une annonce de drop est publiée dans un channel Discord (avec l'URL du produit)
2. Chaque acheteur qui la voit copie l'URL manuellement et la colle dans son bot
3. **Avec le Monitor** : Orbit détecte l'annonce automatiquement et lance toutes tes tâches simultanément — sans délai de copier-coller

Sans Monitor, tu auras toujours quelques secondes de retard sur ceux qui l'ont configuré. Pour les drops très compétitifs, ces secondes font tout.

---

## Où trouver les liens de drop

:::tip Reste informé
Les liens de drop FCFS sont partagés dans des serveurs Discord privés — généralement la communauté revendeurs officielle du site ou des serveurs partenaires. Tu dois :

- Rejoindre le **serveur Discord officiel d'Orbit** — les alertes de drop et les liens testés y sont partagés en temps réel
- Rejoindre les communautés Discord privées pour tes sites cibles (Fnac, Philibert, King Jouet, boutiques Shopify...)
- Rester actif dans la communauté — les restocks et drops sont souvent signalés par les membres avant d'être largement connus

Sans accès aux bons channels Discord, même le meilleur setup de bot ne servira à rien.
:::

---

## Comment configurer le Monitor

Le guide complet de configuration du Monitor — comment obtenir ton token Discord, configurer les channels et les filtres — est disponible ici :

**[→ Guide de configuration du Monitor](/monitor/overview)**

Une fois configuré, le Monitor apparaît comme option de déclencheur lors de la création de tâches d'achat. Sélectionne-le à la place d'une URL, et tes tâches se lanceront automatiquement à la réception du message Discord configuré.
