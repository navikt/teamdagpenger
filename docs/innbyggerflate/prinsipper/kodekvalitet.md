# Prinsipper

![Boy scout rule](/img/boy-scout-rule.png)

## Introduksjon

Kode lever. Det er ikke noe man skriver og glemmer. Brukere ønsker nye funksjoner. Feil må fikses. Koden skal være enkel å forstå, selv om du ikke har sett den før eller det har gått lang tid siden du sist så på koden. Dette er grunnen til at kodekvalitet er viktig. Programmering handler mer om å skrive kode som du og dine medarbeidere kan forstå, og mindre om å vise hvor flink du er med programmeringsspråket ditt.

> En forskjell mellom en dyktig programmerer og en profesjonell programmerer er at den profesjonelle programmereren forstår at klarhet er viktig.

Profesjonelle bruker sine ferdigheter til å skrive kode som andre kan forstå.

## Hvordan måle kodekvalitet

![wtf](/img/wtf.png)

> Vurder en bygning med noen ødelagte vinduer. Hvis vinduene ikke blir reparert, er tendensen at hærverkere ødelegger flere vinduer. Til slutt >kan de til og med bryte seg inn i bygningen, og hvis den står tom, kanskje til og med okkupere den eller tenne branner inni.
>
> [James Q. Wilson og George Kelling, 1982 - Broken windows theory](https://en.wikipedia.org/wiki/Broken_windows_theory)

## Clean code

> _Clean code_ ser ut som om den ble skrevet av noen som bryr seg.

`Clean code`

: Med _clean code_ mener vi lesbare kode eller _obvious code_

### Navngivning

Navnet på en variabel, funksjon eller klasse bør besvare alle de viktige spørsmålene. Det bør fortelle deg hvorfor det eksisterer, hva det gjør, og hvordan det brukes.

Hvis et navn krever en kommentar, avslører ikke navnet sin hensikt.

#### Kall det for det det er.

> Ikke kall en spade for en spade. Kall en _sandkassespade_ for en _sandkassespade_ og en _anleggsspade_ for en _anleggsspade_.

##### Eksempel på dårlig kode

```java
public String getOrgNr() {
    String[] split = description.split("-");

    return split[0].trim();
}
```

##### Eksempel på bedre kode

```java
public String getOrganisasjonsnummerFraBeskrivelse() {
    String[] split = description.split("-");

    return split[0].trim();
}
```

#### Unngå forkortelser

##### Eksempel på dårlig kode

```java
NIDPPrincipal up = resolveUserPrincipal();
UserAuthority ua = nidpPrincipal.getAuthority();
```

##### Eksempel på bedre kode

```java
NIDPPrincipal nidpPrincipal = resolveUserPrincipal();
UserAuthority userAuthority = nidpPrincipal.getAuthority();
```

#### Navngivning og omfang

##### Eksempel på dårlig kode

```java
class FakturaService {
  public static long nummer = 123456789;
...
}
```

##### Eksempel på bedre kode

```java
class FakturaService {
  public static long MAKS_FAKTURABELØP = 123456789;
}

```

```java
for(int i=0;i< 10;i++){

}
```

#### Prøv å gjøre koden menneskelesbar

```java
if (arbeidsforholdErAvsluttet())
```

// eller

```java
if (erArbeidsforholdAvsluttet())
```

### Struktur

#### Prinsipp om single responsibility

En klasse/metode skal kun ha én grunn til å bli endret.

[Prinsippet om single responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle)

#### Små biter

Små klasser og metoder er lettere å teste, gjenbruke og vedlikeholde. Det er også lettere å gi riktige navn til små biter av kode.

Det er i det minste følgende grunner til å trekke ut kode til en klasse eller metode:

- Lesbarhet
- Testing
- Gjenbruk

> Størrelsesregler:
>
> **Den første regelen** for klasser er at de skal være små.
>
> **Den andre regelen** for klasser er at de skal være mindre enn det.

#### Pakkestruktur

Pakkestrukturen bør organiseres etter funksjoner/forretningslogikk og ikke tekniske aspekter.

> Strukturen gjorde det også tyngre å resonere rundt endring, og hvordan endringen treffer kodebasen. Større deler av
> pakkestrukturen var stort sett alltid involvert.
>
> [Hver commit er en ny deploy til prod, del 3 - Terje Heen](https://www.linkedin.com/pulse/hver-commit-er-en-ny-deploy-til-prod-del-3-terje-heen/)

En pakke som inneholder koden til et deldomene bør kunne stå helt på egne bein. Den bør kunne taes ut av applikasjonen og legges inne
i en annen applikasjon uten store problemer.

##### Eksempel på dårlig pakkestruktur

![](/img/teksnisk-struktur.png)

##### Eksempel på bedre pakkestruktur

![](/img/feature-struktur.png)

#### Komponentstruktur

SKAL VI HA NOE HER?

### Kommentarer

Tommelfingerregel:

> Kodekommentarer er potensielle løgner!

Tommelfingerregelen er at kommentarer ikke bør brukes. Hvis du befinner deg i en situasjon der du ønsker å skrive en kommentar, er det sannsynligvis noe galt med koden din.

##### Eksempel på dårlig kode

```java
// Hvis salgsordregruppeBeskrivelse er tom
if (salgsordregruppeBeskrivelse == null || salgsordregruppeBeskrivelse.length() == 0) {
    return "";
}
```

##### Eksempel på bedre kode

```java
if (erSalgsordregruppeBeskrivelseTom()) return "";

privat boolean erSalgsordregruppeBeskrivelseTom() {
    return salgsordregruppeBeskrivelse == null
    || salgsordregruppeBeskrivelse.length() == 0;
}
```

#### Når kommentarer er nødvendige

> Kommentarer er, i beste fall, en nødvendig ondskap.

I noen tilfeller er kommentarer nødvendige:

##### For å forklare hvorfor løsningen er implementert på denne måten

For eksempel en midlertidig løsning for en feil i en ekstern avhengighet:

```java
FakturagrunnlagResource-faktura = fakturafabrikk.lagFaktura(claim);
// Visma Enterprise har et problem hvis mer enn én faktura opprettes med
// ett sekunds mellomrom. Derfor forsinkelse hvis nødvendig.
forsinkOrdreSending.forsinkHvisNødvendig();
URI plassering = restUtil.post(fakturaSluttPunkt, faktura);
```

##### Åpne API-er

Hvis vi har åpne API-er som:

- Kode som en delt bibliotek (KDoc/Javadoc)
- REST-API-er (OpenAPI-spesifikasjon (OAS))

kan det være en god idé å ha kommentarer.

Eksempel

```kotlin
/**
 * Representerer en aktivitet som er gjort i tilknytning til en hendelse.
 *
 * @property melding knyttet til aktiviteten
 * @property kontekst liste med [Kontekst] for aktiviteten
 * @property tidsstempel for når aktiviteten ble gjort. Blir automatisk satt til tidspunktet for når
 * Aktivitet blir laget hvis ikke annet er angitt
 */
class Aktivitet(
    private val melding: String,
    private val kontekst: List<Kontekst>,
    private val tidsstempel: LocalDateTime = LocalDateTime.now(),
) {

    /**
     * @return meldingen i aktiviteten
     */
    fun melding() = melding

    /**
     * @return tidsstempelet til aktiviteten
     */
    fun tidsstempel() = tidsstempel

    /**
     * @return liste over kontekster knyttet til aktiviteten
     */
    fun kontekst() = kontekst
}
```

[Document Kotlin code: KDoc](https://kotlinlang.org/docs/kotlin-doc.html)

### Testing

> Feilsøking er dobbelt så vanskelig som å skrive et program i utgangspunktet. Så hvis du er så smart som du kan være når du skriver det, hvordan vil du noensinne feilsøke det?

#### Hvorfor tester vi?

Vi tester fordi:

- Billigere / raskere å finne feilen tidlig i utviklingsprosessen
- Rask tilbakemelding
- For å kunne refaktorere
- Dokumentasjon
- Gjøre det enklere å håndtere komplekse problemer
- Raskere utvikling
- Bedre kode

#### Egenskapene til gode tester

En test er mer en spesifikasjon enn en test. Den skal spesifisere hvordan noe fungerer.

- Må være raske (vanligvis millisekunder)
- Tregere tester vil ofte være integrasjonstester
- Del testene inn i enhets- og integrasjonstester
- En test må teste et konsept
- Testen bør rydde opp etter seg
- Uavhengig av rekkefølge
- Hold testene enkle
- Unngå å bruke rammeverk hvis mulig (for eksempel Spring)
- Testene må alltid kjøres før koden sjekkes inn i versjonskontrollen

#### Hvor mye av en applikasjon skal testes

Det er ikke viktig å teste 100% av koden. Faktisk er det irrelevant hvor mange prosent av koden som er testet. Det viktige er å teste så mye av koden at du føler deg mindre stresset når du distribuerer og refaktorerer koden. Koden bør også være under kontinuerlig utvikling.

Ting å teste:

- Logikk
- Kode for kartlegging
- Kontrollører - kontrakten mellom koden og andre systemer
- Kode som trenger ekstra dokumentasjon

Ting å unngå å teste:

- Tredjepartsbiblioteker
- Hvis du ender opp med å mocking alt
