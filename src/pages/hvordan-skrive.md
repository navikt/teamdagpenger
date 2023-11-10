# Hvordan skrive på denne siden

## Hva trenger du?

- [Tilgang til NAV Github](#få-tilgang-til-nav-organisasjonen)
- (valgfritt) et skriveprogram som kan lese .md filer, men du kan også skrive i nettleser

## Skrive et dokument

https://teamdagpenger.intern.nav.no bruker [Docusaurus](https://docusaurus.io/docs). Docusaurus gjør det enklet å kombinere enkel dokumentasjon med mer dynamiske elementer.

Dokumenter på https://teamdagpenger.intern.nav.no er markdown filer som legges under `docs/` mappen ([lenke](https://github.com/navikt/teamdagpenger/tree/main/docs)).

Markdown er et lettvekts-format som gjør det lett å lage nettsider ([Se her](https://www.markdownguide.org/cheat-sheet/)). Markdown er mye brukt dokumentasjons-format i NAV.

1. Du lager en \<navn\>.md fil som feks `hello.md` under `docs/` mappen:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

Det nye dokumentet vil bli tilgjengelig under `http://teamdagpenger.intern.nav.no/docs/hello`.

### Sidemenyen

Docusaurus **lager automatisk en en sidemeny** basert på `docs` mappen.

Om du vil så kan du legge til metadata for navn og posisjonering i sidemenyen.

```md title="docs/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

### Få tilgang til NAV-organisasjonen

NAV-organisasjonen på GitHub heter navikt, og for å få tilgang til denne må man installere GitHub.com applikasjonen på https://myapps.microsoft.com:

1. Logg på https://myapps.microsoft.com. 2) Klikk på de tre prikkene oppe til høyre (…) 3) Klikk på “Add app”. 4) Velg “GitHub.com”. 5) Gå tilbake til forsiden av myapps og vent til GitHub.com appen dukker opp, dette kan ta noen minutter. 6) Klikk på den installerte appen, eller gå direkte til https://github.com/orgs/navikt/sso, og følg SSO-flyten for å få tilgang til navikt på GitHub.
