let km = prompt ('Quanti chilometri devi percorrere?');

km = parseInt(km);

let year = prompt ('Quanti anni hai?');

year = parseInt(year);

let costTicket;

if(year >= 18 && year <= 64){
    costTicket = km * 0.21;
}

console.log(costTicket)