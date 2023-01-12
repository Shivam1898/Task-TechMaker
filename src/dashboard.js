import React,{useState} from 'react';
import "./dashboard.css"
import Adminheader from './adminheader';
import Footer from './Footer';

const Dashboard = () => {
    return(
        <>
        <Adminheader/>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1 className='text-center text-primary'> Dashboard </h1>
                </div>
                <div className='col-lg-4 mb-4 text-center mt-5'>
                    <div className='border p-4 rounded shadow'>
                    <img
                        src="https://media.istockphoto.com/id/1310384629/es/foto/c%C3%A9lula-del-panel-solar-sobre-el-espectacular-fondo-del-cielo-de-la-puesta-del-sol-concepto-de.jpg?s=612x612&w=is&k=20&c=2VjCESQycJBAgPT6jBo2psZYueRwY1pdGfx8MXE2cLw="
                        alt="solar-panel"
                    />
                        <h3 className='mt-3'>Solar panel</h3>
                    </div>
                    <button className='m-3'>add to card</button>
                </div>
                <div className='col-lg-4 mb-4 text-center mt-5'>
                    <div className='border p-4 rounded shadow'>
                    <img
                        src="https://media.istockphoto.com/id/1267044898/photo/photo-of-a-laptop-on-a-white-desk-with-a-green-plant.jpg?s=612x612&w=is&k=20&c=cfQZMAsNWsqYxncwATazUjSapUI156ammiAvPWuE3fE="
                        alt="laptop"
                    />
                        <h3 className='mt-3'>Laptop</h3>
                    </div>
                    <button className='m-3'>add to card</button>
                </div>
                <div className='col-lg-4 mb-4 text-center mt-5'>
                    <div className='border p-4 rounded shadow'>
                        <img src="https://media.istockphoto.com/id/1208661048/photo/cricket-bat-and-ball-on-green-grass.jpg?s=612x612&w=is&k=20&c=Hi6K_FnbTInHSepRVSpC32S0yFmpDAR8KobQ2bRruQ8="
                            alt="bat-ball"
                        />
                        <h3 className='mt-3'> Bat-Ball </h3>
                    </div>
                    <button className='m-3'>add to card</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Dashboard;