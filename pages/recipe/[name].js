'use client'
import { useParams } from 'next/navigation'
export default function recipe() {
    const params = useParams()


    return (
     <div className='text-white'>
     {params?.name} Hello
     </div>
    );
  }
  