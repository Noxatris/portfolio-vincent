import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "Champs manquants" }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: "ssl0.ovh.net",
            port: 587,
            secure: false, // port 587 = STARTTLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            requireTLS: true,
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `Nouveau message de ${name} via formulaire portfolio`,
            text: message,
            html: `<p>${message}</p><p>Contact : ${email}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email envoyé" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }), { status: 500 });
    }
}
