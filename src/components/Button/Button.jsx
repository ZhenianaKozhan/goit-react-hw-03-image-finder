import { BtnLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BtnLoadMore type="button" onClick={onClick}>
        Load more
      </BtnLoadMore>
    </div>
  );
};

export default Button;
