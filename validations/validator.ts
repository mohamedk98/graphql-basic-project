
import { plainToInstance } from 'class-transformer'
import { ValidationError, validate } from 'class-validator'
import { ApolloServerErrorCode } from '@apollo/server/errors'
import { ApolloError } from 'apollo-server-express'

export const validateSchemaWithDto = async (dto,data)=>{
    const instanceDto = plainToInstance(dto,data)
    const errors:Array<ValidationError> = await validate(instanceDto) 

    if (errors.length > 0) {
      return {errors} 
    }
}
