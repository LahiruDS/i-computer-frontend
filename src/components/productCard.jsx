export default function ProductCard(props){
    return(
        <div>
          <h1>{props.name}</h1>
          <img src={props.image} width="500px" hight="250px"/>
          <p>Price LKR:{props.price}/=</p>
        </div>

    )
}