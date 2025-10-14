import { z } from "zod";

export const signInSchema = z.object({
    email: z.email({ message: "Email inválido" })
        .nonempty({ message: 'Esse campo não pode ser vazio' }),
    password: z.string({ message: 'Senha é obrigatorio' })
        .nonempty({ message: 'Esse campo não pode ser vazio' })
        .min(5, "Senha muito curta"),
})


export type SignInSchema = z.infer<typeof signInSchema>;
