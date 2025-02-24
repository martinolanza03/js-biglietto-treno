## Biglietto del treno


### Esercizio

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

---

### Soluzione

- Inizio il programma inizializzando la variabile km (chilometri), per sapere quanti chilometri deve percorrere il passeggero chiedendolo all'utente
- Richiamo la variabile km e la trasformo da stringa a numero con parseInt()
- Inizializzo anche l'età del passeggero (year) chiedendolo all'utente
- Richiamo la variabile year e la trasformo da stringa a numero con parseInt()
- Inizializzo la variabile costTicket (costo del biglietto) senza dargli nessun valore
- Inizio la condizione (if) scoprendo se il passeggero ha l'età compresa tra i 18 anni e i 64 if (year >= 18 && year <= 64). Perchè nelle altre condizioni si ha uno sconto del biglietto
    - Richiamo la variabile costTicket e gli applico una moltiplicazione di km * 0,21 che è una tassa fissa di costo per chilometri
        - Se non dovesse essere vera la prima condizione abbiamo un'altra condizione (else if) ed è per l'età inferiore ai 18 anni else if (year <= 17){ }
            - Richiamo la variabile costTicket e gli applico una moltiplicazione di km * 0,21 che è una tassa fissa di costo per chilometri ma gli applico uno sconto del 20% quindi moltiplico il risultato * 20 e lo divido /100
        - Se non dovesse essere vera la prima condizione abbiamo un'altra condizione (else if) ed è per l'età maggiore di 64 anni else if (year <= 65){ }
            - Richiamo la variabile costTicket e gli applico una moltiplicazione di km * 0,21 che è una tassa fissa di costo per chilometri ma gli applico uno sconto del 40% quindi moltiplico il risultato * 40 e lo divido /100
- Usciti dalla condizione richiamo la variabile costTicket e gli applico un valore di massimo 2 decimali costTicket = costTicket.toFixed(2)
- Mi stampo il risultato in console
