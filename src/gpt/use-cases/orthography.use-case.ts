import OpenAI from "openai";

interface Options {
    prompt: string;
}

export const orthographyCheckUseCase = async(openai: OpenAI, options: Options) => {
    const { prompt } = options;

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { 
                role: "system", 
                content: `
                Tu recevras des textes en français avec de possibles fautes d’orthographe et de grammaire.
                Les mots utilisés doivent exister dans le dictionnaire officiel de la langue française (par exemple : Le Petit Robert ou Larousse).

	            Tu dois répondre au format JSON.
                Ta mission est de corriger les fautes et de retourner les corrections.
                Tu dois aussi donner un pourcentage de réussite de l’utilisateur.

	            S’il n’y a aucune faute, tu dois retourner un message de félicitations.

	            Exemple de sortie :

                Si no hay errores, debes de retornar un mensaje de felicitaciones.

                Ejemplo de salida:
                {
                userScore: number,
                errors: string[], // ['error -> solution']
                message: string, //  utilise des emojis pour feliciter le user
                }
        
        
        `
    },
            {
                role: "user",
                content: prompt,
            },
        ],
    });
    
    console.log(completion);
    return completion.choices[0];
}