import joi from 'joi'

import { plainToClass, plainToInstance } from "class-transformer"
import { IsBoolean, IsEmail, IsString, Length,} from "class-validator"

export const createUserValidation = joi.object({
  firstname: joi.string().min(3).max(30).required(),
  lastname: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
  repassword: joi.ref('password'),
  contactNumber: joi.number().min(8).required(),
  termsAccepted:joi.boolean().required()
}).options({abortEarly:false })

export class CreateUserDto {

    @IsString()
    @Length(3)
    firstname:string
    @IsString()
    @Length(3)
    lastname:string
    @IsEmail()
    email:string 
    @IsString()
    @Length(6,30)
    password:string 
    @IsString()
    repassword:string 
    @IsString()
    @Length(8)
    contactNumber: string
    @IsBoolean()
    termsAccepted:boolean 

   
}


