'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function UnsubscribePage() {
    const pathname = usePathname()
    const [validate, setValidate] = useState(false)
    const [email, setEmail] = useState<string | null>(null)

    useEffect(() => {
        const unsubscribe = async () => {
            try {
                const res = await fetch(`/api/unsubscribe`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ slug: pathname.split('/').pop() }),
                })
                if (res.ok) {
                    setValidate(true)
                    setEmail((await res.json()).email)
                } else {
                    console.error('Erreur lors de la désinscription')
                }
            } catch (error) {
                console.error('Erreur lors de la désinscription', error)
            }
        }
        unsubscribe()
    })

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-md w-full text-center">
                {validate ? (
                    <>  <h1 className="text-3xl font-bold mb-4">Désinscription réussie</h1>
                        <p className="mb-4">L&apos;adresse mail : {email} ne recevra plus nos démarches.</p>
                        <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
                            Retour à l&apos;accueil</Link>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold mb-4">Désinscription en cours...</h1>
                        <p className="mb-4">Veuillez patienter pendant que nous traitons votre demande.</p>
                    </>
                )}
            </div>
        </section>
    )
}