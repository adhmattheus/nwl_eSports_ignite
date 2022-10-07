import './styles/main.css'
import logoImg from './assets/Logo.svg'

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">

      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-5'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a href="" className='relative'>
          <img src="/game1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'>
            <strong className=''>League of Legends</strong>
            <span>4 anúncios</span>
          </div>
        </a>
        
        <a href="" className='relative'>
          <img src="/game2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'></div>
        </a>
        <a href="" className='relative'>
          <img src="/game3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'></div>
        </a>
        <a href="" className='relative'>
          <img src="/game4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'></div>
        </a>
        <a href="" className='relative'>
          <img src="/game5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'></div>
        </a>
        <a href="" className='relative'>
          <img src="/game6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient'></div>
        </a>

      </div>

    </div>
  )
}

export default App