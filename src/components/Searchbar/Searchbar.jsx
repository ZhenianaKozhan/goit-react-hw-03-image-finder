import { Formik } from 'formik';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { Input, SearchbarStyled, SearchForm } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
        <SearchForm>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <button type="submit" className="button">
              <BsSearch />
              <span className="button-label">Search</span>
            </button>
          </IconContext.Provider>
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
