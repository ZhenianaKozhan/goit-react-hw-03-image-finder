import Button from 'components/Button';
import Loader from 'components/Loader';
import { Component } from 'react';
import { getGallery } from 'services/getGallery';
import { ImageGalleryStyled } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { page } = this.state;
    if (prevState.page !== page || prevProps.searchText !== searchText) {
      this.setState({ isLoading: true });
      getGallery(searchText, page)
        .then(gallery =>
          gallery.data.hits.length === 0 ? Promise.reject('fack') : gallery
        )
        .then(gallery => {
          if (prevProps.searchText !== searchText) {
            this.setState({
              gallery: [...gallery.data.hits],
              error: null,
              page: 1,
              totalHits: gallery.data.totalHits,
            });
          }
          if (prevState.page < page) {
            this.setState({
              gallery: [...prevState.gallery, ...gallery.data.hits],
            });
          }
        })
        .catch(error => this.setState({ error, gallery: [] }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;
    return (
      <>
        {error && <div>{error}</div>}
        {isLoading && <Loader />}

        {gallery.length !== 0 && (
          <>
            <ImageGalleryStyled>
              {gallery.map(({ id, webformatURL, tags }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    alt={tags}
                  />
                );
              })}
            </ImageGalleryStyled>
            {isLoading && <Loader />}
            {gallery.length >= 12 && <Button onClick={this.onLoadMore} />}
          </>
        )}
      </>
    );
  }
}

export default ImageGallery;
