# Visualisierungen für Steel Cloud 3D
Dieses Repo stellt Visualisierungsfunktionen für das Projekt *Steel Cloud 3D* zur Verfügung.

## Verwendung dieses Projekts
Zur Verwendung des erstellten Codes genügt es, die Datei *bundle.js* aus dem Ordner */dist* herunterzuladen und im `<script>`-Tag einzubinden. Anschließend kann über die Variable `steelcloud3d_viz` auf die Funktionen zugegriffen werden.  


## Weiterentwicklung des Projekts
### GitHub-Basics
1. Um am Projekt mit zu arbeiten, muss zunächst ein [Account angelegt werden](https://github.com/join).
2. [Installation von Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Alternativ kann das komfortablere [GitHub Desktop](https://desktop.github.com/) mit grafischer Benutzeroberfläche heruntergeladen werden.
3. [Forken des Projekts](https://guides.github.com/activities/forking/).
4. Dateien bearbeiten, hinzufügen, etc.
5. [Änderungen pushen](https://guides.github.com/activities/forking/#making-changes).
6. [Pull-Request erstellen](https://guides.github.com/activities/forking/#making-a-pull-request).

### Mitarbeit am Code
Um den Code weiter bearbeiten oder nutzen zu können, muss [Node.js](https://nodejs.org/de/) installiert sein. Mit dem Terminal-Befehl `npm install` wird die Entwicklungsumgebung vorbereitet und alle notwendigen Tools installiert.

#### Struktur des Codes
Dieses Projekt ist modular aufgebaut. Es werden einzelne Klassen definiert, die jeweils einen Visualisierungstypen bereitstellen und einer gemeinsamen Schnittstelle entsprechen.

##### `src`Verzeichnis
Die Kernkomponenten sind im Verzeichnis `src` zu finden. 
###### `index.ts`
Die Datei `index.ts` ist der Einstiegspunkt in den Code. Hier werden die einzeln definierten Visualisierungsfunktionen gebündelt exportiert.

###### `common.ts`
In der Datei `common.ts` sind Anforderungen und Schnittstellen festgelegt, denen alle weiteren Klassen genügen sollten.

###### `inStock.ts`
Die Datei `inStock.ts` enthält eine beispielhafte Implementierung für die Visualisierung von Lagerbeständen.

#### Verwendete Sprachen, Bibliotheken und Frameworks
* [Typescript](https://www.typescriptlang.org/): Ein Überbau für JavaScript. Ermöglicht die Nutzung von Typen, Klassen und Modulen und wird zu nativem JavaScript kompiliert.
* [Webpack](https://webpack.js.org/): Bündelt mehrere JavaScript-Dateien in eine einzelne Datei, die im Browser eingebunden werden kann. Übersetzt gleichzeitig den *node.js*-"Dialekt" in browsertaugliches JS.
* [d3.js](https://d3js.org/): Eine JS-Bibliothek zur Datenvisualisierung.
* [plotly.js](https://github.com/plotly/plotly.js)?: Ebenfalls eine Bibliothek zur Datenvisualisierung. Setzt auf d3 auf und erlaubt zusätzlich die Erstellung von 3D-Grafiken.

Noch nicht installierte Frameworks und Bibliotheken können mit dem Befehl `npm install <name> --save` installiert und als Dependencies eingebunden werden.
