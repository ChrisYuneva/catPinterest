import { Cat } from '../../api';
import Card from '../card/card';

interface SectionProps {
  list: Cat[];
}

function Section({ list }: SectionProps) {
  return (
    <>
      {
        list.map((item) => {
          return (
            <Card imgSrc={item.url} id={item.id} item={item} key={item.id} />
          );
        })
      }
    </>
  );
}

export default Section;
