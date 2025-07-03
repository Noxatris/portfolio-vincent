'use client'

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setStatus("Message envoyé !");
            e.currentTarget.reset();
        } else {
            setStatus("Erreur lors de l'envoi.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" required placeholder="Nom" />
            <input type="email" name="email" required placeholder="Email" />
            <textarea name="message" required placeholder="Message" />
            <button type="submit">Envoyer</button>
            {status && <p>{status}</p>}
        </form>
    );
}