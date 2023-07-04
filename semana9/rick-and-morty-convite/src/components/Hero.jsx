const Hero = () => {
    return (
        <section className="relative h-[75vh] flex items-center justify-center">
            <img
                src="https://images3.alphacoders.com/812/812062.png"
                alt="Fondo de Rick y Morty"
                width={1920}
                height={1080}
                className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
            />
            <div className="container mx-auto">
                <h1 className="text-4xl text-center font-black">Rick y Morty</h1>
            </div>
        </section>
    );
};

export default Hero;