type Props = {
    title: String;
    description: String;
    children: React.ReactNode;
    method: string;
    action: string;
}

export default function Form({title, description, children, method, action}:Props) {
    return(
        <main className="w-full h-screen bg-white/30 flex justify-center items-center">
            <form action={action} method={method} className="bg-black/90 p-5 rounded-lg">
                <div className="mb-6">
                    <h1 className="text-2xl">{title}</h1>
                    <p className="text-xs">{description}</p>
                </div>
                <div>
                    {children}
                </div>
            </form>
        </main>
    );
}