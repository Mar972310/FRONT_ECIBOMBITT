import "../style/GeneralStatistics.css";
import Info from "../components/Info";
import Winner from "../components/Winner";

function GeneralStatistics({game, winner}) {
    return (
        <div className="general-statistics">
            <div className="title-s">
                <h2>Resumen General</h2>
            </div>
            <div className="es">
                <Info img={"/assets/bombas.webp"}
                  value={game.totalBombsPlaced}/>
                <Info img={"/assets/naveEspacialFinal.png"} 
                    value={game.totalBlocksDestroyed}/>
                <Winner img={winner} />
                <Info img={"/assets/Move.png"} 
                    value={game.totalMoves}/>
                <Info img={"/assets/MUERTE.png"} 
                    value={game.kills}/>
            </div>
        </div>
    );
}

export default GeneralStatistics;