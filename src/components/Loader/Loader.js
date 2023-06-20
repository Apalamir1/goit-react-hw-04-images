import { Blocks } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Blocks
      height="80"
      wrapperClass="loader"
      width="80"
      ariaLabel="blocks-loading"
    />
  );
}
