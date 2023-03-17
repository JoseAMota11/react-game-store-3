import Card from '../../components/Card/Card';
import { MainProps } from '../../interfaces/MainProps';

const Main = ({ data }: MainProps) => {
  return (
    <div className='grid'>
      {data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Main;
