import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="120"
      width="120"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: 'inline-block' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
