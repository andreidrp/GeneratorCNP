# Generator CNP v.1.0
Această unealtă 🔨 a fost dezvoltată pentru a-ți oferi posibilitatea de a genera un cod numeric personal în doar câteva secunde.

**Poți accesa generatorul apăsând click [aici](https://generatorcnp.github.io/).**

## Pentru ce să folosești generatorul?
⚠️ **Nu se recomandă folosirea CNP-urilor false**, și mai ales în situații în care se pot verifica. Toate CNP-urile generate sunt complet aleatoare, inexistente și, dacă sunt verificate de autorități, va fi evident că sunt false. Totuși, uneltele de verificare online, care presupun verificarea „existenței” unui cod numeric personal, le vor detecta ca fiind reale, cnp-urile generate având o structură identică cu cea a celor reale. Așadar, poți folosi cnp-urile false în situații în care consideri necesar acest lucru, dar reține că este ilegal. De aceea, evită să le folosești în situații oficiale, cum ar fi contracte sau documente, iar orice CNP generat poate fi deja existent într-un anumit loc, pentru că este posibil ca altcineva să-l fi folosit deja într-un anumit loc, deci poate exista de mai multe ori.
## Cum funcționează
Pentru început, se vor alege, pentru fiecare răspuns dat, automat, numerele corespunzătoare alegerilor, după cum se explică în ceea ce urmează. Fiecare parte a codului va corespunde informațiilor alese, iar apoi se va calcula, tot automat, cifra de control, aflată în relație cu toate celelate 12 cifre ale C.N.P.-ului. Cifra de control este calculată după cum urmează: fiecare cifră din C.N.P. este înmulțită cu cifra de pe aceeași poziție din numărul 279146358279; rezultatele sunt însumate, iar rezultatul final este împărțit cu rest la 11. Dacă restul este 10, atunci cifra de control este 1, altfel cifra de control este egală cu restul.

## Structura codurilor numerice personale
Codurile numerice personale sunt coduri numerice de 13 cifre, unice fiecărei persoane născute în România, de forma *S	AA	LL	ZZ	JJ	NNN	C*, unde:

S
S reprezintă sexul și secolul în care s-a născut persoana care posedă acel C.N.P. Persoanelor de sex masculin le sunt atribuite numerele impare iar persoanelor de sex feminin, numerele pare.

Prima cifră a C.N.P.-ului este: (sex bărbătesc / sex femeiesc)

1 / 2 - născuți între 1 ianuarie 1900 și 31 decembrie 1999
3 / 4 - născuți între 1 ianuarie 1800 și 31 decembrie 1899
5 / 6 - născuți între 1 ianuarie 2000 și 31 decembrie 2099
7 / 8 - pentru persoanele străine rezidente în România
AA
AA este un număr format din 2 cifre și reprezintă ultimele 2 cifre din anul nașterii. O persoană născută în anul 1970 va avea la AA 70. (SAA = 170, pentru o persoană de sex masculin)

Dacă o persoană va avea prima cifră cu una din valorile 7, 8 (rezidenți), atunci se va considera secolul 20. Ex. SAA = 77
, anul nașterii va fi 1971.

LL
LL este un număr format din 2 cifre și reprezintă luna nașterii persoanei.

ianuarie	februarie	martie	aprilie	mai	iunie	iulie	august	septembrie	octombrie	noiembrie	decembrie
01	02	03	04	05	06	07	08	09	10	11	12
ZZ
ZZ reprezintă ziua nașterii în format de 2 cifre. Pentru zilele de la 1 la 9 se adaugă 0 înaintea datei. Spre exemplificare, o persoană născută în prima zi a lunii va avea codul 01.

JJ
JJ este un număr format din două cifre și este reprezentat de codul județului sau sectorului (în cazul municipiului București) în care s-a născut persoana ori în care avea domiciliul sau reședința în momentul acordării C.N.P.-ului.

De exemplu, pentru Buzău acest număr este 10. Pentru București, codul este un număr din intervalul 41 și 46 și reprezintă sectorul în care s-a născut acea persoană.

Codurile județelor sunt în ordinea alfabetică a acestora, cu unele excepții.

Cod	Județ
01	Alba
02	Arad
03	Argeș
04	Bacău
05	Bihor
06	Bistrița-Năsăud
07	Botoșani
08	Brașov
09	Brăila
10	Buzău
11	Caraș-Severin
12	Cluj
13	Constanța
14	Covasna
15	Dâmbovița
16	Dolj
17	Galați
18	Gorj
19	Harghita
20	Hunedoara
21	Ialomița
22	Iași
23	Ilfov
24	Maramureș
25	Mehedinți
26	Mureș
27	Neamț
28	Olt
29	Prahova
30	Satu Mare
31	Sălaj
32	Sibiu
33	Suceava
34	Teleorman
35	Timiș
36	Tulcea
37	Vaslui
38	Vâlcea
39	Vrancea
40	București
41	București - Sector 1
42	București - Sector 2
43	București - Sector 3
44	București - Sector 4
45	București - Sector 5
46	București - Sector 6
51	Călărași
52	Giurgiu
NNN
NNN este un număr format din 3 cifre din intervalul 001 - 999. Numerele din acest interval se împart pe județe, birourilor de Evidență a Populației, astfel încât un anumit număr din acel interval să fie alocat unei singure persoane într-o anumită zi.

C
C este cifră de control (un cod autodetector) aflată în relație cu toate celelate 12 cifre ale C.N.P.-ului. Cifra de control este calculată după cum urmează: fiecare cifră din C.N.P. este înmulțită cu cifra de pe aceeași poziție din numărul 279146358279; rezultatele sunt însumate, iar rezultatul final este împărțit cu rest la 11. Dacă restul este 10, atunci cifra de control este 1, altfel cifra de control este egală cu restul. Sursă: [Wikipedia](https://ro.wikipedia.org/wiki/Cod_numeric_personal).
