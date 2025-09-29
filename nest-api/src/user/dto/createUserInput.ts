import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    @IsString()
    @IsNotEmpty({message: "Este campo não pode estar vazio."})
    name: string;

    @Field()
    @IsEmail()
    @IsNotEmpty({message: "Este campo não pode estar vazio."})
    email: string;
}