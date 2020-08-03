class ThumbnailView {
    onSelect: (id) => undefined;
    element: HTMLElement;

    constructor({ onSelect }) {
        this.onSelect = onSelect;
        this.element = undefined;

    }

    render = (selected: boolean) => {
        return;
    }

    unselect = () => {
        return;
    }

    delete = () => {
        return;
    }
}