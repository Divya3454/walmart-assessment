import React, { FC } from 'react';
import Image from 'next/image'

interface Props {
  results: Array<String>;
}

const Main: FC<Props> = ({ results }) => {
  return (
    <div>
      {results.map((d: any) => {
        return <div>
          <div className="card mx-auto mt-5" style={{ width: '18rem' }} >
            <div className="card-body">
              <h2 className="d-flex justify-content-center">{d.name}</h2>
              <div className="card-img-top">    <Image
                src={d.image}
                width={250}
                height={200}
                alt="Picture of the author"
              /> </div>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};

export default Main;