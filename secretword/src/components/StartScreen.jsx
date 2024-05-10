import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Artist</h1>
        <h4>Clique no botão para jogar!</h4>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen