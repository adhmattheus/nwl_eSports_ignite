import './styles/main.css'
import logoImg from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'
import { GammerBanner } from './components/GamerBanner'


function App() {

  return (
    <div className="max-w-[1024px] mx-auto flex flex-col items-center my-10">

      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-15'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <GammerBanner bannerUrl="/game1.png" title='League of Legends' adsCount={5} />
        <GammerBanner bannerUrl="/game2.png" title='Dota 2 ' adsCount={2} />
        <GammerBanner bannerUrl="/game3.png" title='CS GO' adsCount={1} />
        <GammerBanner bannerUrl="/game4.png" title='Apex Legend' adsCount={3} />
        <GammerBanner bannerUrl="/game5.png" title='Fortinite' adsCount={9} />
        <GammerBanner bannerUrl="/game6.png" title='World WarCraft' adsCount={3} />

      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch  mt-8 rounded-lg '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>

          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600  text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>

        </div>
      </div>

    </div>
  )
}

export default App