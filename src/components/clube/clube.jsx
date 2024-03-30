import './clube.css'

function clube({logo, nome, key, id, apelido}){
    return(
        <li id={id} className="lineClube" >
            <img  className="brasa" src={logo}/>
            <div className="infos"> 
            <h3>
                {nome}
            </h3>
            <span>
                {apelido}
            </span>
            </div>
        </li>
    )

}

export default clube;