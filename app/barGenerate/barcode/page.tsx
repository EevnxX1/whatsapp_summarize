import Head from "next/head";
import Image from "next/image";
export default function page() {
    return(
        <>
        <Head>
            <title>Barcode Scan</title>
            <meta name="Scan Barcode" content="Scanner barcode whatsaap"/>
        </Head>
        <main className="m-auto ">
            <h1>Scan QR Code</h1>
            <Image
            src="/profile/user.png"
            alt=""
            width={200}
            height={200}
            />
        </main>
        </>
    );
}