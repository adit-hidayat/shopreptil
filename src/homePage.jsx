import './homepage.css'
import reptilWord from './assets/repworld.png'
import content from './assets/homepage.jpg'

function Homepage(){
    return(
    <>
    <div className="flex">
        <div className="titlehome flex justify-center items-center ">
            <img className='h-screen w-80 object-cover' src={reptilWord} alt="" />
        </div>
        <div className="content h-screen flex items-center mx-28">
            <div>
                <h1 className='titlehome text-3xl tracking-tight sm:text-5xl mb-5'>Kenali Reptilmu Lebih Dekat</h1>
                <p className='subhome text-2xl tracking-tight sm:text-2xl'>Pahami perilaku, kebutuhan, dan kebiasaan unik reptil Anda untuk menciptakan hubungan yang harmonis.</p>
            </div> 
            <div className="image  mr-40">
                <img className='relative top-60' src={content} alt="" />
                <img className='relative bottom-40 left-36' src={content} alt="" />
            </div>
        </div>
    </div>
    </>
    )
}


export default Homepage;