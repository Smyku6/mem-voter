# Meme VOTER

## O projekcie słów kilka
+ Projekt aktualnie działa lokalnie. Aby uruchomić należy sklonować repo i odpalić w terminalu skrypt `npm start`.
+ Projekt został zbudowany przy pomocy Reactowego boilerplate'a czyli `create-react-app`.
+ Kod był formatowany przy użyciu `prettier`'a
+ Jeśli chodzi o backend to został on w uproszczony sposób zasymulowany przy użyciu fake data oraz fejkowego API postawionego przy pomocy `mirageJs`.
+ Zarządzanie stanem odbywa się przy pomocy `react-redux` w wersji toolkitowej do spółki z `localStorage`.
+ Strona została wstępnie ostylowana za pomocą `styled-components` wzorując się kolorystycznie na IDE czyli `Webstormie`. (niestety z uwagi na brak czasu powstała tylko wersja desktopowa, więc nie ma szału jeśli chodzi o responsywność).
+ Priorytetem było sprawne działanie logiki, następnie dopiero frontend. 
+ Do stworzenia nawigacji i routingu w serwisie wykorzystałem narzędzia dostarczone w paczce `react router v6`.
+ Na wstępie użytkownik dostaje kilkanaście 'memów' jako pliki źródłowe, ale ma możliwość dodawania własnych przez formularz (wklejająć url obrazu)
+ W razie problemów z aplikacją należy wyczyścić `localStorage` oraz uruchomić ponownie


## Założenia projektowe
Przy użyciu React zbuduj aplikację wg. poniższej specyfikacji.
Projekt należy wgrać na GitHub , a następnie wysłać prowadzącemu e-mail z
linkiem.
Zadaniem aplikacji jest wyświetlanie “memów*” i możliwość dawania upvote i downvote.

- [x] 1. Aplikacja ma zawierać route ‘/hot’ i ‘/regular’
- [x] 2. Memy z ilością (upvote - downvote > 5) mają trafiać na route ‘/hot’, pozostałe znajdują
się na ‘regualr’.
- [x] 3. Dodaj proste menu, które pozwoli przełączać się między sekcjami.
- [x] 4. Baza memów ma być stała. Zalecana tablica postaci:
```js
[
  {
    title: “Mem 1”,
    upvotes: 6,
    downvotes: 0,
    img: “path/to/image1.png”,
  },
  {
    title: “Mem 2”,
    upvotes: 1,
    downvotes: 2,
    img: “path/to/image2.png”,
  },
....
]
```
- [x] 5. Utwórz komponent Mem, który wyświetli tytuł, liczbę upvotes/downvotes i ew. obrazek,
oraz kontrolki do kliknięcia upvote, downvote.
- [x] 6. Wygeneruj listę z komponentu Mem i wyświetl w ‘/hot’ i ‘/regular’
- [x] 7. Na odpowiednich routach przefiltruj listę z bazą memów zgodnie z zasadami z pkt 2.
- [x] 8. Filtrowanie powinno działać “live”. Przykład: jeśli kliknę downvote i (upvote - downvote)
da 5, mem powinien znikniąć ze listy wyświetlanej na HOT.
- [x] 9. Jeśli jestem na route ‘/hot’ przycisk “HOT” powinien się odróżniać od “REGULAR” i
odwrotnie.
- [x] 10. Lista memów powinna być przewijalna
- [x] 11. Oznaczenie mema gwiazdką (wymagane nowe pole w bazie memów).
- [x] 12**. Dodaj dodatkowy route z formularzem do dodawania mema.
* może to być downolny obrazek (podawany przez link, lub zapisany na dysku i podany
jako ścieżka). Opcjonalnie zamiast obrazka można wyświetlić tylko tytuł mema.
** zadanie opcjonalne

Walory dodatkowe:
1. Opis aplikacji i instrukcja uruchomienia w README.md.
2. Kod jest czysty i jednolicie sformatowany.
3. Eleganckie ostylowanie aplikacji.
4. Zastosowanie Redux.

Przykładowy wygląd aplikacji

![image](https://user-images.githubusercontent.com/75560322/172272554-6a37dfd2-2b3a-4a3b-8c2d-96736a9bd970.png)




