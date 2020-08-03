class GalleryView {
    initialized: boolean;
    onSelect: (id) => undefined;
    onNextImage: () => undefined;
    onPreviousImage: () => undefined;
    onNextPage: () => undefined;
    onPreviousPage: () => undefined;
    styleUrl: string;
    element: HTMLElement;

    constructor({ onSelect, onNextImage, onPreviousImage, onNextPage, onPreviousPage, styleUrl }) {
        this.onSelect = onSelect;
        this.onNextImage = onNextImage;
        this.onPreviousImage = onPreviousImage;
        this.onPreviousPage = onPreviousPage;
        this.onNextPage = onNextPage;
        this.styleUrl = styleUrl;
    }

    render = (selected, thumbnails) => {
        return;
    }

    renderMainImage = (image) => {
        return;
    }

    updateThumbnails = (images) => {
        return;
    }

    updateNextImage = (image, newThumbnail: GalleryImage) => {
        return;
    }

    updatePreviousImage = (image, newThumbnail: GalleryImage) => {
        return;
    }

    updateNextPage = (newThumbnails: GalleryImage[], lastPage: boolean) => {
        return;
    }

    updatePrevPage = (newThumbnails: GalleryImage[], firstPage: boolean) => {
        return;
    }
}