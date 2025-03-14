import OpenAI from 'openai';

interface Options {
  prompt: string;
}



export const prosConsDicusserStreamUseCase = async (openai: OpenAI, { prompt }: Options) => {

  return await openai.chat.completions.create({
    stream: true,
    model: "gpt-4o-mini",
    temperature: 0.8,
    max_tokens: 500,
    messages: [
      {
        role: 'system',
        content: `
        Une question te sera posée et ta tâche sera de donner une réponse avec des avantages et des inconvénients.
        La réponse devra être au format Markdown.
        Les avantages et les inconvénients devront être présentés sous forme de liste.
        `
      },
      {
        role: 'user',
        content: prompt
      }
    ],
   
  })

}