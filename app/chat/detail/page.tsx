'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from "next/image";
import ModalTriggerClient from "@/app/ui/modalTrigger";

interface Message {
  id: string
  message: string;
  created_at: string;
}

export default function page() {

  const searchParams = useSearchParams();
  const salesId = searchParams.get('sales_id');
  const name = searchParams.get('name'); // opsional: tampilkan di header

  const [message, setMessage] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('token');
    if (!userId || !salesId) return;

    fetch(`http://127.0.0.1:3000/api/chats/${userId}/${salesId}`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal ambil pesan:', err);
        setLoading(false);
      });
  }, [salesId]);

  if (loading) return <p>Loading chat...</p>;
  console.log(message)
    return(
        <main className="w-full h-full flex flex-col">
            <div className="w-full flex py-3 px-5 justify-between bg-gray-700">
                <div className="flex justify-center items-center gap-x-3">
                    <Image
                    className='rounded-full bg-gray-100 w-[35px] h-[35px]'
                    src='/profile/user.png'   // bisa di public/
                    alt="profile"
                    width={35}
                    height={0}
                    />
                    <div className="flex flex-col">
                        <h1 className="text-[10px] font-bold">{name}</h1>
                        <p className="text-[10px]">Terakhir pesan diterima pada pukul 03.45</p>
                    </div>
                </div>
                <ModalTriggerClient source="page">
                    Summarize
                </ModalTriggerClient>
            </div>
            {/* Chat */}
            <div className="overflow-y-scroll h-full flex flex-col gap-y-5 max-md:gap-y-5 p-2">
                {message.map((msg) => (
                <div 
                key={msg.id}
                className="flex items-start justify-start gap-x-2">
                    <Image
                    className='rounded-full bg-gray-100 w-[25px] h-[25px]'
                    src='/profile/user.png'   // bisa di public/
                    alt="profile"
                    width={25}
                    height={0}
                    />
                    <div className="w-[40%] bg-white/10 p-2 flex flex-col gap-y-2">
                        <p className="text-xs font-bold">{name}</p>
                        <div className='flex flex-col justify-between gap-y-3'>
                        <p className="text-xs white-space break-words w-full">{msg.message}</p>
                        <p className='text-[8px] self-end'>{new Date(msg.created_at).toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </main>
    );
} 
