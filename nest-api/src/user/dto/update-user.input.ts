import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsString()
    @IsNotEmpty({message: "Este campo não pode estar vazio."})
    @IsOptional()
    name?: string;

    @Field()
    @IsEmail()
    @IsNotEmpty({message: "Este campo não pode estar vazio."})
    @IsOptional()
    email?: string;
}