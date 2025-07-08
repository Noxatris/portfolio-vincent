"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus("Message envoyé avec succès !");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Erreur lors de l’envoi. Réessayez plus tard.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-blue-900/50 to-gray-900/30 border border-blue-800 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:scale-[1.01] transition-transform w-full max-w-xl mx-auto space-y-4"
        >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Me contacter</h2>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Nom
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre adresse email"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre message"
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Envoyer
            </button>

            {status && (
                <p className="text-center text-sm text-white/70 mt-2">{status}</p>
            )}
        </form>
    );
}
