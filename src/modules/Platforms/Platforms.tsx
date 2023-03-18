import { PlatformProps } from '../../interfaces/PlatformProps';

const Platforms = ({ platform: { name } }: PlatformProps) => {
  return <span className='platform-item'>{name}</span>;
};

export default Platforms;
