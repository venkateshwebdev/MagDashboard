import Image from "next/image";

export default function GamesList(){
    return(
        <main className=" py-10 px-14 pb-28 w-full h-[100vh] flex flex-col gap-5">
            <h1 className="title text-4xl mb-5 font-semibold">Games Available</h1>

            {/* ////corousel */}
            
            <section className="w-full h-full">
                <div className="game h-full relative ">
                    <div className="absolute left-0 bg-[#03222261] rounded-xl  h-full w-full text-white flex flex-col justify-between px-10 pt-10">
                        <div className=" pt-[5%] flex flex-col gap-5">
                            <h1 className={`text-4xl font-lexend_Exa font-semibold`}>Jungle Run</h1>
                            <p className="w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="p-5 w-full">
                            <button className="bg-black border-2 border-white w-full py-2 rounded-lg">Get Stats</button>
                        </div>
                    </div>
                    <img className="h-full w-full rounded-xl"  src="/img/jungle (1).png" alt="Game_Image"/>
                </div>
            </section>
        </main>
    )
}