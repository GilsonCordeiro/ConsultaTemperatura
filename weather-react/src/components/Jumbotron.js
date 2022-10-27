function Jumbotron(){
    return(
        <div>         
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Verifique agora a previsão do tempo da sua cidade!</h1>
                    <p className="lead">Digite o nome de sua cidade abaixo e em seguida clique em pesquisar </p>
                    <div className= "row mb-4">
                        <div className="col-md-6">
                            <input className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-primary" >
                        Pesquisar
                    </button>
                </div>
                </div> 
        </div>

    )
}
export default Jumbotron