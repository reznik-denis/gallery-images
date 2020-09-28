import gallerysItems from './gallery-items.js'

const galerysEl = ({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`;
};

const makeGaleryElementMorkup = gallerysItems.map(galerysEl).join('');

const GalleryEl = document.querySelector('ul.js-gallery');
const modalOnClick = document.querySelector('div.lightbox');
const imageItemGallery = document.querySelector('img.lightbox__image');
const overleyClickByCloseImg = document.querySelector('div.lightbox__overlay');
const CloseModal = document.querySelector('.lightbox__button');



GalleryEl.innerHTML = makeGaleryElementMorkup;
const imageItemGalleryAll = document.querySelectorAll('.gallery__item');
GalleryEl.addEventListener('click', onClickOpenImg);
CloseModal.addEventListener('click', onClickCloseModal);
overleyClickByCloseImg.addEventListener('click', onClickOverlayCloseModal);

function onClickOpenImg(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    window.addEventListener('keydown', onKeydownCloseModal);
    
    modalOnClick.classList.add('is-open');
    imageItemGallery.src = `${evt.target.dataset.source}`;
    imageItemGallery.alt = `${evt.target.alt}`;

    document.addEventListener('keydown', onKeydowmSibling);
};

function onClickCloseModal() {
    window.removeEventListener("keydown", onKeydownCloseModal);
    modalOnClick.classList.remove('is-open');
    imageItemGallery.src = "";
};

function onClickOverlayCloseModal(evt) {
    if (evt.currentTarget !== evt.target) {
        return;
    };
    onClickCloseModal();
};

function onKeydownCloseModal(evt) {
    if (evt.code !== 'Escape') {
        return
    };
    onClickCloseModal();
};

function onKeydowmSibling(evt) {
    if (evt.code === 'ArrowRight') {
        const CurrentEl = gallerysItems.findIndex(({ original }) => original === imageItemGallery.src);
        imageItemGallery.src = `${gallerysItems[(CurrentEl + 1) % gallerysItems.length].original}`;
    } else if (evt.code === 'ArrowLeft') {
        const CurrentEl = gallerysItems.findIndex(({ original }) => original === imageItemGallery.src);
        imageItemGallery.src = `${gallerysItems[(CurrentEl - 1) % gallerysItems.length].original}`;
    }
    return
    
};