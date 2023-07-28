// import { z, ZodTypeAny, ObjectSchema, AnyObject } from "zod";

// export const schemaUpdate = z.object({
//   fullname: z
//     .string()
//     .min(2, "O nome deve conter pelo menos 2 caracteres")
//     .max(100, "O nome deve conter no máximo 100 caracteres")
//     .nullable(),
//   email: z.string().email("Deve ser um e-mail").nullable(),
//   password: z
//     .string()
//     .nonempty("Senha é obrigatória")
//     .min(6, "A senha deve conter pelo menos 6 caracteres")
//     .max(100, "A senha deve conter no máximo 100 caracteres")
//     .regex(/^(?=.*[A-Z])/, "A senha deve conter pelo menos uma letra maiúscula")
//     .nullable(),
//   telephone: z
//     .string()
//     .min(8, "O telefone deve conter pelo menos 8 caracteres")
//     .max(20, "O telefone deve conter no máximo 20 caracteres"),
//   admin: z.boolean().default(false).nullable(),
// });
// //const typedSchema: ObjectSchema<TupdateClient, AnyObject, any, ""> = schemaUpdate.as(ObjectSchema);
// export type TupdateClient = z.infer<typeof schemaUpdate>;
