<p align = "center">
  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tnRaoanHTVGKvp69pJDH8DImeSAc81kSuAgNSCawv1cLGl7S"   
</p>

# Who Wants to Be a Millionaire?

Implementati jocul Who Wants to Be a Millionaire folosind Vue.js. Trebuie sa implementati 2 rute: /admin si /game (componentele sunt rutate deja). 

Pe /admin veti administra jocul si pe /game il veti juca. 

## Reguli

* din **ruta de administrare** trebuie sa pot seta

   **lista de intrebari**
   
   **raspunsurile** fiecare intrebari, si **indexul** raspunsului corect
   
   **indexul intrebarii curente**
   
   ce **variante ajutatoare** mai sunt disponibile
   
* trebuie sa am interfata clasica de joc, cu **intrebarea si variante**, **timp pentru a raspunde la intrebare** si **logica de a verifica raspunsul**

* trebuie sa am si o sectiune de unde jucatorul poate folosi variantele ajutatoare. Atunci cand se apasa pe o varianta, aceasta trebuie sa fie *disabled* pentru tot restul jocului

* scala cu premii trebuie sa corespunda cu numarul intrebarilor. Daca am 5 intrebari atunci trebuie sa am 5 premii pe scala. Trebuie sa aveti un indicator cu aceste premii care **afiseaza premiul la care ma aflu curent** si **creste odata cu fiecare intrebare noua**

* jocul trebuie sa fie **persistent**. Adica daca inchid aplicatia si ma intorc starea aplicatiei trebuie sa fie in mare parte aceeasi

Pentru acest lucru aveti la dispozitie un API unde veti trimite update-uri si de unde veti trage date. Domeniul API-ului este deja in proiect in fisierul API.js din src. Trebuie doar sa importati variabila, un exemplu ar arata astfel:

```javascript
import api from '@/API.js'

export default {
  created() {
    // concatenam domeniul API-ului cu ruta api-ului pe care o dorim
    this.$http.get(`${api}/game/round/${indexOfNextRound}`);
  }
}
```

## API routes

Puteti vizualiza ce returneaza fiecare API daca intrati pe linkuri in Firefox:

* [/admin](https://us-central1-imw-api.cloudfunctions.net/api/millionaire/admin) - **GET** pe acest api va returna setarile intregului joc, iar **POST** pe acest api va schimba setarile. Cand dati post trebuie sa trimiteti **un obiect de aceeasi forma cu campurile schimbate**.

* daca dati **POST** pe /admin cu un obiect gol de exemplu, atunci toate setarile voastre vor fi date peste cap. Pentru a le reseta veti da **POST** pe [/reset](https://us-central1-imw-api.cloudfunctions.net/api/millionaire/admin/reset)

* [/game/current-round](https://us-central1-imw-api.cloudfunctions.net/api/millionaire/game/current-round) **GET** pe acest api returneaza indexul intrebarii la care va aflati si numarul total de intrebari. Acesta este folosit pentru persistenta si sa stiti cand va opriti

* [/game/round/:roundNumber](https://us-central1-imw-api.cloudfunctions.net/api/millionaire/game/round/:roundNumber) **GET** pe acest api returneaza informatiile despre runda curenta (intrebarea curenta, cu variantele de raspuns si indexul raspunsului corect). *:round-number* este o variabila. AKA voi in cod veti trimite requesturi la /game/round/0, /game/round/1 etc.

* [/game/actions](https://us-central1-imw-api.cloudfunctions.net/api/millionaire/game/actions) **POST** pe acest api va schimba statusul variantelor ajutatoare. Cand cineva da click pe *call a friend* de exemplu, veti trimite un request aici cu obiectul *helperActions* cu proprietate *callFriend* pe false

## Dupa ce clonati
```
npm install
```

### Porneste serverul
```
npm run serve
```
