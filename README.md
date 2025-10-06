# 🚨 SecureWave  
**Mobile Safety & Alert System with Family & Agency Integration**

SecureWave est une application mobile de sécurité intelligente reliée à une agence centrale.  
Elle permet d’envoyer automatiquement des alertes (enlèvements, incidents, maladies, disparitions…) avec géolocalisation, photo, et vidéo vers l’agence et/ou les proches selon le type d’urgence.  

---

## 🌍 Objectifs du projet

- Protéger les citoyens face aux risques d’enlèvements, d’accidents ou d’urgences médicales.  
- Faciliter l’intervention rapide des **forces de l’ordre** via une **agence de coordination**.  
- Fournir un système d’abonnement simple (Mobile Money) pour les familles et particuliers.  
- Offrir un **suivi en temps réel**, un historique des alertes, et une **messagerie sécurisée**.

---

## 🧠 Fonctionnalités principales

### 🔒 Application mobile (utilisateur)
- Déclenchement d’**alertes d’urgence** :
  - Enlèvement / mouvement suspect (agence)
  - Disparition / perte (agence + proches)
  - Urgence médicale / maladie (proches + agence)
- **Capture automatique** de la photo/vidéo en cas d’intrusion ou désactivation forcée.
- **Suivi GPS continu** (verrouillé après souscription).
- **Messagerie sécurisée** et appels rapides entre membres et agence.
- **Partage en temps réel** des données contextuelles (photos, vidéos, audio).
- **Souscriptions Mobile Money** :
  - Individuelle : 5 $ / mois  
  - Familiale (5 pers.) : 15 $ / mois  
  - Familiale+ (7 pers.) : 25 $ / mois

---

### 🖥️ Tableau de bord (Agence)
- Réception centralisée des alertes avec :
  - Localisation temps réel sur carte interactive  
  - Détails visuels (photo/vidéo/voix)  
  - Type d’urgence et statut d’intervention
- Historique complet et filtrage par type d’alerte ou région.
- Système de **notification instantanée** et **gestion des agents sur terrain**.
- **Statistiques et rapports** : alertes par type, par zone, par période.

---

### ⚙️ Backend
- API REST + WebSocket pour communication temps réel.
- Gestion sécurisée des utilisateurs et rôles (admin, agent, utilisateur).
- Cryptage des échanges et stockage sécurisé des médias.
- Module de **paiement Mobile Money intégré** (M-Pesa, Airtel, Orange, Africell).

---

## 📱 Stack technique recommandée

| Composant | Technologie |
|------------|--------------|
| **Mobile app** | Flutter (Dart) |
| **Dashboard** | React + Tailwind CSS |
| **Backend** | Node.js (Express) |
| **Base de données** | MongoDB |
| **Notifications** | Firebase Cloud Messaging |
| **Géolocalisation & cartes** | Google Maps API |
| **Stockage médias** | Firebase Storage ou AWS S3 |

---

## 💾 Installation (développement local)

### 1. Cloner le dépôt
```bash
git clone https://github.com/<ton-nom-utilisateur>/SecureWave.git
cd SecureWave
cd backend
npm install
npm start
cd ../dashboard
npm install
npm run dev
cd ../mobile-app
flutter pub get
flutter run
update: added full project documentation in README.md
