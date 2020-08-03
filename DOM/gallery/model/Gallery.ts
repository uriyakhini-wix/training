class Gallery {
    images: GalleryImage[];
    selectedIndex: number; // 

    constructor(images: GalleryImage[]) {
        this.images = images;
        this.selectedIndex = 0;
    }
}