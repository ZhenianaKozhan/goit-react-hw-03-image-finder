import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './Searchbar';

export const App = () => {
  return (
    <>
      <Searchbar />
      <ImageGallery />
      <Button />
      <Loader />
    </>
  );
};
