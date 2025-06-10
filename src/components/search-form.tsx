'use client'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { FormEvent } from 'react'

export default function SearchForm() {
    const router = useRouter(),
        searchParams = useSearchParams()

    const query = searchParams.get('q')
    
    function handleSubmit (e:FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget),
            data = Object.fromEntries(formData),
            query = data.q
        if (!query) return null

        router.push(`/search?q=${query}`)
    }

    return (
        <form 
            className='flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'
            onSubmit={handleSubmit}
        >
            
            <Search className='w-5 h-5 text-zinc-500'/>

            <input
                name='q'
                type='text'
                defaultValue={query ?? ""}
                placeholder='Buscar Produtos'
                className='flex-1 bg-transparent text-sm outline-none placeholder: text-zinc-500'
                required
            />
        </form>
    )
}
