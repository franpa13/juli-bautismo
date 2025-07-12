import './App.css'
import lienzo from "/fondo-lienzo.jpg"
import { GiClick } from "react-icons/gi";
function App() {
  return (
    <>
      <img
        className='fixed top-0 left-0 h-screen object-cover lg:w-full lg:h-full -z-10'
        src={lienzo}
        alt="fondo lienzo"
      />

      <div className="relative ">
        {/* Todo tu contenido va aquí */}
        <div className='flex flex-col items-center justify-start mt-4  gap-0'>

          <img src="./panal.png" className='w-[180px]' alt="" />
          <img src="./miel-piso.png" className='w-[580px] h-[510px] absolute -top-8' alt="" />
          <h2 className='z-20 fuente-dulce absolute top-36'>Julieta</h2>
          <div className='flex w-full justify-between z-20 absolute top-32'>

            <img src="./flor.png" className='w-1/5' alt="" />
            <img src="./flor.png" className='w-1/5' alt="" />
          </div>
          <img src="./abeja.png" className='w-1/4 z-30 absolute top-14 animate-fly-circle' alt="" />


        </div>
        <div className='absolute w-full flex flex-col justify-center items-center top-72'>
          <h2 className='fuente-cochon text-sm'>Mi 2do añito</h2>
          <div className='flex justify-center gap-5 items-center w-full mt-2 px-8'>
            <h2 className='fuente-fecha text-xs px-4'>Sabado</h2>
            <img src="./date.png" className='w-1/5' alt="" />
            <h2 className='fuente-fecha text-xs'> 17 hs</h2>
          </div>
          <div className='flex justify-center gap-5 items-start w-full mt-0 px-8'>
            <img src="./palo.png" className='w-1/3' alt="" />
            <h2 className='fuente-cochon text-xs'>Agosto</h2>
            <img
              src="./palo.png"
              className='w-1/3'
              style={{ transform: 'rotateY(180deg)' }}
              alt=""
            />
          </div>
          <a className='flex justify-center items-center gap-1' href="https://maps.app.goo.gl/BD7Fad54diSEbqsf6">

            <h2 className='fuente-fechaDos '> Casino subof Gendarmeria Guatambu y Aguay</h2>
          </a>
          <div className='flex justify-center   items-start  '>
            <img className='w-1/4 animate-fly-circle-other' src="./abeja-abajo.png" alt="" />
          </div>

        </div>
        <div>
          <img
            src="./flor_amarilla.png"
            className='w-1/3 fixed -bottom-4 -left-5 z-20 animate-spin-slow'
            alt="flor amarilla"
          />
          <img
            src="./flor_amarilla.png"
            className='w-1/5 fixed -bottom-4 -right-5 z-20 animate-spin-slow'
            alt="flor amarilla"
          />

        </div>

        {/* <div className="fixed bottom-15 right-4 z-20 flex justify-center items-center">
          <div className="honey-circle">

          
            <div className="bees-container">
       
              <div className="bee bee-1">
                <div className="bee-body"></div>
                <div className="bee-wing"></div>
                <div className="bee-stripe"></div>
              </div>

  
              <div className="bee bee-2">
                <div className="bee-body"></div>
                <div className="bee-wing"></div>
                <div className="bee-stripe"></div>
              </div>


              <div className="honey-lines"></div>
            </div>


            <a href="">

              <h2 className="confirmation-text">
                Confirmar asistencia
                <GiClick className='text-xl'></GiClick>
              </h2>
            </a>

          </div>
        </div> */}

        {/* <div className=""> 
          <img
            src="./miel-piso.png"
            className='w-[150px] h-[250px] fixed -bottom-5 right-0 z-20'
            alt=""
          />
          <h2 className='w-[150px] h-[250px] fixed -bottom-25 right-0 z-20'>
            Confirmar asistencia
          </h2>
        </div> */}
      </div>

    </>
  )
}

export default App
