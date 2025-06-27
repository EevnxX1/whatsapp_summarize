import Head from "next/head";
import Image from "next/image";
export default function page() {
    return(
        <>
        <Head>
            <title>Barcode</title>
        </Head>
        <main className="m-auto flex flex-col justify-center items-center w-screen h-screen">
            <h1 className="text-center mb-5">Scan QR Code</h1>
            <Image
            src="/barcode.png"
            alt=""
            width={200}
            height={200}
            />
        </main>
        </>
    );
}