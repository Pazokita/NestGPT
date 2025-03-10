import OpenAI from "openai";

interface Options {
    prompt: string;
}

export const orthographyCheckUseCase = async(openai: OpenAI, options: Options) => {
    const { prompt } = options;

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant specialized in orthography and grammar checking." },
            {
                role: "user",
                content: prompt,
            },
        ],
    });
    
    console.log(completion);
    return completion.choices[0];
}