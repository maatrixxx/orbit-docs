---
id: classic-monitor
title: Monitor Classique
sidebar_position: 2
---

# Monitor Classique

Le **Monitor Classique** vérifie directement les pages produits sur les sites FCFS et t'alerte (ou déclenche tes tâches) dès qu'un produit revient en stock. Il fonctionne indépendamment de Discord — il interroge les pages des sites selon un calendrier et détecte les changements de disponibilité automatiquement.

C'est utile pour les **restocks** sans annonce Discord, ou comme couche de sécurité supplémentaire aux côtés du Discord Monitor.

---

## Sites supportés

| Site | Statut |
|------|--------|
| Fnac | ✅ Supporté |
| King Jouet | ✅ Supporté |
| Philibert | ✅ Supporté |

---

## Comment ça fonctionne

```
Monitor vérifie l'URL produit → détecte "en stock" → notifie / déclenche les tâches
```

1. Tu ajoutes une URL produit à surveiller avec son site associé.
2. Orbit vérifie la page périodiquement via son système de détection de stock.
3. Quand le produit devient disponible, le monitor se déclenche — soit en envoyant une notification, soit en lançant tes tâches d'achat en attente.

---

## Ajouter une entrée de monitoring

Va dans **Tasks → onglet Monitor**.

Clique sur **+ Ajouter** et remplis :

| Champ | Description |
|-------|-------------|
| **Site** | Sélectionne le site (Fnac, King Jouet, Philibert) |
| **URL** | L'URL de la page produit à surveiller |
| **Nom** | Un label pour identifier cette entrée |

Clique sur **Enregistrer** puis **Start** sur la ligne du monitor pour démarrer.

---

## Statuts du monitor

| Statut | Signification |
|--------|--------------|
| **MONITORING** | En train de vérifier — en attente de stock |
| **IN STOCK** | Produit détecté comme disponible — déclencheur activé |
| **Stopped** | Monitor mis en pause |
| **Error** | Impossible d'accéder à la page produit |

---

## Relier le Monitor aux tâches d'achat

Lors de la création d'une tâche d'achat, sélectionne **Stock Monitor** comme déclencheur et choisis l'entrée de monitoring correspondante. Les tâches d'achat démarreront automatiquement dès que le monitor détecte de la disponibilité.

---

## Notes

- Le Monitor Classique ne nécessite pas de compte Discord.
- Utilise-le pour des produits qui reviennent en stock sans annonce, ou en parallèle du Discord Monitor pour une couverture maximale.
- L'intervalle de vérification est configuré automatiquement selon le site.
