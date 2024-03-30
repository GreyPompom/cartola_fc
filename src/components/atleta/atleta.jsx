import './atleta.css'

function atleta({ foto, nome, posicao }) {

    return (
        <div className="player-card">

            <img class='icon' src={foto} width="100%"/>
            <h3>
                {nome}
                <span>
                    {posicao}
                </span>
            </h3>
        </div>
    );
}
export default atleta
