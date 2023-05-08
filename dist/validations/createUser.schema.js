var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import joi from 'joi';
import { IsBoolean, IsEmail, IsString, Length, } from "class-validator";
export const createUserValidation = joi.object({
    firstname: joi.string().min(3).max(30).required(),
    lastname: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    repassword: joi.ref('password'),
    contactNumber: joi.number().min(8).required(),
    termsAccepted: joi.boolean().required()
}).options({ abortEarly: false });
export class CreateUserDto {
}
__decorate([
    IsString(),
    Length(3)
], CreateUserDto.prototype, "firstname", void 0);
__decorate([
    IsString(),
    Length(3)
], CreateUserDto.prototype, "lastname", void 0);
__decorate([
    IsEmail()
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsString(),
    Length(6, 30)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString()
], CreateUserDto.prototype, "repassword", void 0);
__decorate([
    IsString(),
    Length(8)
], CreateUserDto.prototype, "contactNumber", void 0);
__decorate([
    IsBoolean()
], CreateUserDto.prototype, "termsAccepted", void 0);
