import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  ForbiddenDto,
  ServerErrorDto,
  UnauthorizedDto,
  ValidationDto,
} from '@app/common/dtos/exception';

export const ApiHttpExceptionResponse = () => {
  return applyDecorators(
    //400
    ApiBadRequestResponse({
      description: 'Validation Error',
      type: ValidationDto,
    }),
    //401
    ApiUnauthorizedResponse({
      description: 'Unauthorized Access',
      type: UnauthorizedDto,
    }),
    //403
    ApiForbiddenResponse({
      description: 'Access Forbidden',
      type: ForbiddenDto,
    }),
    //500
    ApiInternalServerErrorResponse({
      description: 'Internal Server Error',
      type: ServerErrorDto,
    }),
  );
};
