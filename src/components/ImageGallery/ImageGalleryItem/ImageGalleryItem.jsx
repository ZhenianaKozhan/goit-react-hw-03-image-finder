import { ImageGelleryItemStyled } from '../ImageGallery.styled';

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <ImageGelleryItemStyled>
      <img src={webformatURL} alt={tags} />
    </ImageGelleryItemStyled>
  );
};

export default ImageGalleryItem;
