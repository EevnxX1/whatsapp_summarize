
import NavLinks from "../ui/navlink";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-4/5 max-lg:w-full h-[96vh] max-lg:h-screen bg-gray-700/35 m-auto mt-[2vh] max-lg:mt-0 flex">
        <section className="w-[35%] max-xl:w-[43%] flex flex-col py-5 overflow-y-scroll">
        <div className="text-3xl font-bold mb-[5px] mx-auto">Chat</div>
        <span className="border-2 w-[30%] mx-auto mb-5"></span>
        <NavLinks/>
        </section>
        <div className="w-[65%] max-xl:w-[57%] h-full bg-black/30 flex">
            {children}
        </div>
    </div>
  );
}