import { z } from "zod";

export const signUpSchema = z.object({
    name:
        z.string({ message: 'Campo de nome é obrigatorio' })
            .nonempty({ message: 'Esse campo não pode ser vazio' })
            .min(3, { message: 'Nome deve ter no minimo 2 caracteres' }),

    email:
        z.email({ message: 'Email é obrigatorio' })
            .nonempty({ message: 'Esse campo não pode ser vazio' }),

    password:
        z.string({ message: 'Senha é obrigatorio' })
            .nonempty({ message: 'Esse campo não pode ser vazio' })
            .min(5, "Senha muito curta"),

    confirmPassword:

        z.string({ message: "Campo obrigatorio" })
            .nonempty({ message: 'Esse campo não pode ser vazio' })
            .min(6, "Senha muito curta")

}).refine(data => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais ",
    path: ["confirmPassword"],
});

export type SignUpSchema = z.infer<typeof signUpSchema>;