import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const Imagen1="https://rossellimac.es/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__ESES.jpg?v=1727253392"
	const Imagen2="https://tiendaselectron.com/128603-large_default/televisor-lg-serie-76-de-2184cm--86--86ur76006lc-4k-uhd---smart-tv.jpg"
	const Imagen3="https://dlcdnwebimgs.asus.com/gain/c8b07262-6a62-4419-aa33-df8a6d0414d2/"
	const Imagen4="https://m.media-amazon.com/images/I/61J74Dzz8YL.jpg"
	const Title1="Apple iPhone 16 Pro MAX de 256 GB:"
	const Title2="LG 86UR78006LB 86 Pulgadas:"
	const Title3="ASUS TUF Gaming A15 FA507NV-LP031:"
	const Title4="Samsung Galaxy Buds3 Pro + Cargador:"
	const Description1="Smartphone 5G con Control de Cámara, grabación en 4K a 120 f/s con Dolby Vision y un Gran Salto en autonomía. Compatible con los AirPods; Titanio Color Desierto"
	const Description2="4K UHD, Smart TV, HDR10, webOS23, Procesador Alta Potencia, Dolby Digital Plus, Alexa/Google Assistant [Clase de eficiencia energética F]"
	const Description3="Ordenador Portátil Gaming de 15.6 Pulgadas Full HD 144Hz (AMD Ryzen 7 7735HS, 16GB RAM, 512GB SSD, NVIDIA RTX4060 8GB, Sin Sistema Operativo) Color Gris - Teclado QWERTY ES"
	const Description4="Auriculares Inalámbricos, Cancelación de Ruido, Bluetooth, Audio 361, Sonido Hi-Fi, Gris (Versión Española)"
	const ButtonLabel="Buy Now"

	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row justify-content-between">
					<Card imageUrl={Imagen1} title={Title1} description={Description1} buttonLabel={ButtonLabel} />
					<Card imageUrl={Imagen2} title={Title2} description={Description2} buttonLabel={ButtonLabel} />
					<Card imageUrl={Imagen3} title={Title3} description={Description3} buttonLabel={ButtonLabel} />
					<Card imageUrl={Imagen4} title={Title4} description={Description4} buttonLabel={ButtonLabel} />
				</div>
			</div>
			<div className="container-fluid bg-dark d-flex justify-content-center p-3">
				<h7 className="text-white">copyright &copy; by High-Tech Company 2024</h7>
			</div>
		</>
	);
};

export default Home;
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

