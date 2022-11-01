# DuA 22/23 - Übungsaufgabe "Meine erste Webseite 😉"

## Aufgaben

1. Richten Sie eine Entwicklungsumgebung ein. Verwenden Sie dafür eines der Templates aus dieser Kursseite
2. Erstellen Sie eine Webseite, indem Sie die Übung Erste Schritte mit CSS (Quelle :Coding Club Linz) abarbeiten
3. Erweitern Sie den Code um die unten stehenden Elemente
    1. Ersetzen Sie im HTML die ??? durch eine aussagekräftige ID
    2. Ersetzen Sie im CSS die ??? durch eine Definition, welche die Schriftfarbe verändert
    3. Ersetzen Sie im JS die ??? so, dass sie das <button>-Element selektieren
    4. Ersetzen Sie im JS die ?? durch einen Klassennamen, welcher bei Verwendung die Schriftfarbe ändert
    5. Bonus: Verwenden Sie im JS-Code eine Variable, um die Code-Wiederholung zu vermeiden

Speichern Sie alle bearbeiteten Dateien und Untersuchen Sie die Webseite. Beim Klick auf den Button sollte sich nun die Schriftfarbe der Überschrift ändern.

## Code Snippets

**HTML:**

```html
<button id="???" type="button">🎨 Wechsle Farbe</button>
```

**CSS:**

```css
.highlight { 
	??? !important;
}
```

**JavaScript:**

```js
document.getElementById('???').addEventListener('click', function() {
	if (document.querySelector('h1').hasAttribute('class', '??')) {
		document.querySelector('h1').removeAttribute('class', '??');
	} else {
		document.querySelector('h1').setAttribute('class', '??');
	}
});
```
