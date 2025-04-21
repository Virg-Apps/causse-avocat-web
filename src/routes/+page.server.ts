import type { Actions } from "@sveltejs/kit";
import Mailjet from "node-mailjet";
import { MJ_API_KEY, MJ_API_TOKEN } from "$env/static/private";

const mailjet = new Mailjet({
    apiKey: MJ_API_KEY,
    apiSecret: MJ_API_TOKEN
});

export const actions = {
    demanderRDV: async ({ request }) => {
        const data: FormData = await request.formData();
        await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: { Email: "noreply@causse-avocat.fr", Name: "Caussé Avocat" },
                    To: [{ Email: 'contact@causse-avocat.fr' }],
                    Subject: "Demande de RDV",
                    TextPart: `Nom: ${data.get('nom')}\nE-mail: ${data.get('email')}\nMessage: ${data.get("message")}`
                }
            ]
        });
    },
    demanderDevis: async ({ request }) => {
        const data: FormData = await request.formData();
        await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: { Email: "noreply@causse-avocat.fr", Name: "Caussé Avocat" },
                    To: [{ Email: 'contact@causse-avocat.fr' }],
                    Subject: "Demande de devis",
                    TextPart: `Nom: ${data.get('nom')}\nE-mail: ${data.get('email')}\nMessage: ${data.get("message")}`
                }
            ]
        });
    }
} satisfies Actions;