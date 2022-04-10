const list: React.ReactElement[] = [...Array(9)];

function Library (): React.ReactElement {
  return (
    <>
      <div className='grid'>
        {list.map(() =>
          <div className='grid-item' key={Math.random()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        )}
      </div>
    </>
  )
}

export default Library