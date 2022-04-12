import { createHash } from 'crypto';
import { useRouter } from 'next/router';

function Game (): React.ReactElement {
  const router = useRouter();
  let { id } = router.query;

  // transform id into a string
  if (Array.isArray(id)) {
    id = id[0];
  } else if (id === undefined) {
    id = '42';
  }

  return (
    <div className='w-full h-96 bg-gradient-to-br from-black' style={{backgroundColor: '#' + createHash('md5').update(id).digest('hex').substring(0, 6)}}>
      <h1 className='text-4xl font-bold'>Game ID: {id}</h1>
      <h3 className='text-2xl'>Uhh... somehow this game couldn't be found... sorry about that</h3>
      <h4 className='text-lg pt-2 opacity-5'>¯\_(ツ)_/¯</h4>
    </div>
  );
}

export default Game;