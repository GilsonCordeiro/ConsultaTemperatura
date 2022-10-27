import { useState } from 'react'


function Jumbotron(){
    const [city, setCity] = useState("Brasília")
    const [weathForecast, setWeathForecast] = useState(null)

    const handleChang = (e)=>{
        setCity(e.target.value)
    }

    const handleSearch = () => {
       
        fetch(`http://api.weatherapi.com/v1/current.json?key=d5c87313143a42fea5a122841222610&q=${city}&lang=pt`)
        .then ((response ) =>{
            // console.log("response ===>", response)
            if(response.status === 200){
                return response.json()
            }
        })
        .then((data) => {
            // visualizar os dados da api
             console.log('data ===>', data)
            setWeathForecast(data)
        });
    }

    return(
        <div>         
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Verifique agora a previsão do tempo da sua cidade!</h1>
                    <p className="lead">Digite o nome de sua cidade abaixo e em seguida clique em pesquisar </p>
                    <div className= "row mb-4">
                        <div className="col-md-6">
                            <input
                             onChange={handleChang}
                             className="form-control" 
                             value={city}/>
                        </div>
                    </div>
                    <button onClick={handleSearch} className="btn btn-primary" >
                        Pesquisar
                    </button>
                    {
                        weathForecast ? (
                            <div>
                        <div className= "mt-4 d-flex ">
                            <div>
                                <img src= {weathForecast.current.condition.icon}/>
                            </div>
                            <div>
                                <h1>{weathForecast.location.name}</h1>
                                <p>{weathForecast.location.region}</p>
                                <h3>Hoje o dia está: {weathForecast.current.condition.text}</h3>
                                <p>Temperatura: {weathForecast.current.temp_c} º</p>
                            </div>
                        </div>
                    </div>
                        ): null
                    }
                </div>
                </div> 
        </div>

    )
}
export default Jumbotron