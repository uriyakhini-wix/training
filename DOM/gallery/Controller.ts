class Controller {
    gallery: Gallery;
    galleryView: GalleryView
    thumbmnailPageSize: number;

    constructor(gallery: Gallery, galleryView: GalleryView, thumbnailPageSize: number) {
        this.gallery = gallery;
        this.galleryView = galleryView;
        this.thumbmnailPageSize = thumbnailPageSize;
    }

    initialize = () => {
        return;
    }

    onSelectImage = (id: number) => {
        return;
    }

    onNextImage = () => {
        return;
    }

    onPreviousImage = () => {
        return;
    }

    onNextPage = () => {
        return;
    }

    onPrevPage = () => {
        return;
    }

    onSelect = (id) => {
        return;
    }

    _getThumbnails = (id) => {
        return;
    }
}