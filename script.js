const kirija = 36000;
const struja = 4500;
const infostan = 1200;
const internet = 2500;
const telefon = 1000;
const komunalije = struja + internet + infostan + telefon;
const plataZaposlenog = 36000;
const doprinosi = plataZaposlenog *0.6;
const ukupnoZaZaposlene = doprinosi*2 + plataZaposlenog;
const licencaZaPhotoshop = 2190;
const cenaSlike = 5000;
const stampaSlike = 1000;
const troskoviStampe = 100*stampaSlike;
const brutoPrihod = 100*cenaSlike;
const agencijaZaReklame = 24000;
const ostaliTroskovi = agencijaZaReklame + licencaZaPhotoshop + troskoviStampe;


const neto_prihod = brutoPrihod - ukupnoZaZaposlene - kirija - komunalije - ostaliTroskovi  ;


console.log("Zakup prostora iznosi",kirija,"dinara.")

console.log("Komunalije su",komunalije,"dinara.")

console.log("Plata i doprinosi za mene i zaposlenog iznose",ukupnoZaZaposlene,"dinara.")

console.log("Ostali troskovi iznose",ostaliTroskovi,"dinara.")

console.log("Bruto zarada je",brutoPrihod,"dinara.")

console.log("Ukupna mesecna zarada je",neto_prihod,"dinara.")
