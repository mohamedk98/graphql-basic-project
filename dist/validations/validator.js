import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
export const validateSchemaWithDto = async (dto, data) => {
    const instanceDto = plainToInstance(dto, data);
    const errors = await validate(instanceDto);
    if (errors.length > 0) {
        return { errors };
    }
};
