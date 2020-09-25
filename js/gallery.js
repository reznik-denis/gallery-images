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

const onGalleryEl = document.querySelector('ul.js-gallery');
onGalleryEl.innerHTML = makeGaleryElementMorkup;

onGalleryEl.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const ModalOnClick = document.querySelector('div.lightbox');
    ModalOnClick.classList.add('is-open');
    const imageItemGallery = document.querySelector('img.lightbox__image');
    imageItemGallery.src = `${evt.target.dataset.source}`;
    imageItemGallery.alt = `${evt.target.alt}`
}

// const imageOriginalSize = document.querySelector()
// const closeModalOnClick = document.querySelector('[data-action="close-lightbox]');
// closeModalOnClick.addEventListener('click', onCloseModal);
// function onCloseModal() {
//     ModalOnClick.classList.remove('is-open');
// }


