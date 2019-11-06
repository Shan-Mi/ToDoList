# ToDoList
To-do
Bakgrund
En av de mest klassiska programmeringsövningarna är att göra en “att göra”-lista. Den används ofta när man testar ett nytt programmeringsspråk, eller ett nytt ramverk. Anledningen till detta är att man för att kunna bygga en sådan lista behöver använda alla grundpelarna i ett språk eller ramverk, utan att projektet för den sakens skull behöver bli så stort. Det är också ett väldigt begripligt projekt. 

Den typiska todo-applikationen brukar se ut ungefär så här:

Det finns ett inmatningsfält där användaren kan lägga till något som måste göras. 
Alla tillagda saker att göra visas i en lista. 
Det går att antingen ta bort något ur listan, eller markera det som avslutat. 
Man kan också tänka sig annan funktionalitet som att bara visa en lista på de aktiva, eller bara på de avslutade, eller att man kan ändra på en todo. 

Din uppgift
Du skall med hjälp av HTML, CSS och Javascript göra en todo-applikation. 

I applikationen skall en användare kunna lägga till och ta bort ärenden från en “att göra”-lista. 
Du får göra precis som du vill med styling. 
Applikationen har olika krav beroende på betygsnivå. 

Krav för godkänt (G):
Applikationen skall ha ett inmatningsfält med tillhörande knapp där användaren kan fylla i en ny todo. 

När användaren klickar på en “lägg till”-knapp, eller trycker på Enter-tangenten på tangentbordet skall todo:n läggas till i en lista på todos. 
Inmatningsfältet skall tömmas när en todo lags till i listan. 

Applikationen skall även ha en lista över redan inmatade todos. 
I listan över inmatade todos skall det också finnas en knapp för varje todo, där användaren kan ta bort en todo ur listan. 
När användaren klickar på “ta bort”-knappen skall todo:n tas bort ur listan. 

Applikationen skall även ha ett fält som kan användas för att filtrera todos. 
När användaren skriver i fältet skall bara de todos som innehåller textsträngen användaren skriver in synas. 
Om fältet är tomt skall alla todos visas. 
Exempelskiss:

Krav för väl godkänt (VG):
Applikationen skall ha ett formulär där användaren kan fylla i sin todo. 
Det skall innehålla: 
ett textfält där själva ärendet kan skrivas in
ett datumfält där ett sista datum för ärendet skall väljas, fältet skall ha dagens datum som defaultvärde
en selectbox där användaren kan välja vilken kategori ärendet tillhör. Du kan själv välja vilka kategorier som skall finnas (t.ex. “hushållsarbete” eller “jobb”)
en “lägg till”-knapp
När användaren “skickar formuläret” (klickar på knappen) så skall ärendet läggas till i en todolista. 

Applikationen skall även ha en lista över redan inmatade todos. 
I listan skall man se själva ärendetexten, slutdatumet, kategorin för varje todo. 
Om slutdatumet är tidigare än dagens datum skall det finnas en grafisk varning som visar att slutdatumet är passerat. 
I listan över inmatade todos skall det också finnas en knapp för varje todo, där användaren kan ta bort en todo ur listan. 
När användaren klickar på “ta bort”-knappen skall todo:n tas bort ur listan. 

Applikationen skall även ha ett fält som kan användas för att filtrera todos. 
När användaren skriver i fältet skall bara de todos som innehåller textsträngen användaren skriver in synas. 
Om fältet är tomt skall alla todos visas. 

Applikationen skall även ha en lista med radiobuttons, en för varje kategori, och en för “alla”.
Om användaren klickar i en radiobutton skall bara ärenden för den kategorin visas.

Om både en radiobutton är iklickad och fritextfältet har text skall båda användas. 
Filtrera först fram allt som är i en viss kategori, och gör sedan fritextfiltreringen baserat på det. 

(Skiss på nästa sida) 
Exempelskiss:
