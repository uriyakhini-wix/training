class ThumbnailsView {
    onSelect: (id: number) => undefined;
    onNextPage: () => undefined;
    onPreviousPage: () => undefined;
    selectedImage: number;
    images: GalleryImage[];
    initialized: boolean;
    element: HTMLElement;

    constructor({ onSelect, onNextPage, onPreviousPage, selectedImage, images }) {
        this.onSelect = onSelect;
        this.onNextPage = onNextPage;
        this.onPreviousPage = onPreviousPage;
        this.initialized = false;
    }

    render = (images) => {
        return;
    }

    clear = () => {
        return;
    }
}