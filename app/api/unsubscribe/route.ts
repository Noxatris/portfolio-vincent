import { google } from "googleapis"
import jwt from "jsonwebtoken"

export async function POST(request: Request) {
    try {
        const { slug } = await request.json()
        if (!slug) {
            return new Response(JSON.stringify({ message: "Token manquant" }), { status: 400 })
        }

        // Vérification + décodage du token
        let email: string
        try {
            const decoded = jwt.verify(slug, process.env.UNSUBSCRIBE_SECRET as string) as { email: string }
            email = decoded.email
        } catch {
            return new Response(JSON.stringify({ message: "Token invalide ou expiré" }), { status: 400 })
        }

        // Auth Google
        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: process.env.GOOGLE_TYPE,
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        const sheets = google.sheets({ version: "v4", auth })
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "A:A",
            valueInputOption: "RAW",
            requestBody: { values: [[email]] },
        })

        return new Response(JSON.stringify({ message: "Désinscription réussie", email: email }), { status: 200 })
    } catch (error) {
        console.error("Erreur API /unsubscribe :", error)
        return new Response(JSON.stringify({ message: "Erreur serveur" }), { status: 500 })
    }
}
