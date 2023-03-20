import { Formik } from 'formik';
import { Input, SearchbarStyled, SearchForm } from './Searchbar.styled';

const Searchbar = () => {
  return (
    <SearchbarStyled>
      <Formik initialValues={{ name: '' }}>
        <SearchForm>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <Input
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchbarStyled>
  );
};
export default Searchbar;
