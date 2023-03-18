import { PlatformProps } from '../../interfaces/PlatformProps';

const Platforms = ({ platform: { name } }: PlatformProps) => {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

export default Platforms;
