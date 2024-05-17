declare module 'jquery-ui/ui/widgets/autocomplete' {
    interface AutocompleteOptions {
        source: (request: { term: string }, response: (results: string[]) => void) => void;
        select: (event: Event, ui: { item: { value: string } }) => void;
    }

    interface Autocomplete {
        (options: AutocompleteOptions): JQuery;
    }

    interface JQuery {
        autocomplete: Autocomplete;
    }
}
