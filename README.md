# Currency Calculator

Dies ist ein React-basiertes Währungsumrechnungsprojekt, das im Rahmen eines React-Unterrichtskurses erstellt wurde. Die Anwendung ermöglicht es dem Benutzer, Beträge zwischen verschiedenen Währungen umzurechnen, indem sie aktuelle Wechselkurse von einer API abruft.

## Features

- Umrechnung von Beträgen zwischen verschiedenen Währungen
- Automatische Aktualisierung der Wechselkurse über eine API
- Einfache und intuitive Benutzeroberfläche

## Voraussetzungen

Stelle sicher, dass Node.js und npm auf dem System installiert sind.

## Installation

1. Klonen des Repository auf das lokale System:

    ```bash
    git clone https://github.com/cesc-33/repository.git
    cd repository
    ```

2. Installieren der notwendigen Abhängigkeiten:

    ```bash
    npm install
    ```

## Verwendung

1. Starten der Entwicklungsumgebung:

    ```bash
    npm start
    ```

2. Im Browser zu dieser Adresse navigieren: `http://localhost:3000`, um die Anwendung zu sehen.

## Komponenten

### `CurrencyCalculator`

Dies ist die Hauptkomponente der Anwendung, die den Umrechnungsprozess steuert und die `CurrencyFields`- und `ExchangeRateDisplay`-Komponenten einbindet.

### `CurrencyFields`

Diese Komponente stellt Eingabefelder für den Betrag und die Auswahl der Währung zur Verfügung.

### `ExchangeRateDisplay`

Diese Komponente zeigt den aktuellen Wechselkurs und den umgerechneten Betrag an.

## API

Die Anwendung verwendet die [Open Exchange Rates API](https://openexchangerates.org/) zum Abrufen der aktuellen Wechselkurse. Sie müssen sich für einen API-Schlüssel registrieren und ihn in der URL in der `CurrencyCalculator`-Komponente ersetzen:

```javascript
fetch('https://openexchangerates.org/api/latest.json?app_id=YOUR_API_KEY')
