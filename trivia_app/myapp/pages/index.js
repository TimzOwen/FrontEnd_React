export default function Home() {

  function ListItems(){
    const ints = [1,2,3,4];
    return(
      <>
     {
      ints.map(id => {
        return(
          <li>{id}</li>
        )
      })
     }
      </>
    )
  }

  return (
    <ul>
      <ListItems/>
    </ul>
  )  
}
