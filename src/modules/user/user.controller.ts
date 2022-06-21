import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@app/modules/user/entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { FindUserDto } from '@app/modules/user/dto/find-user.dto';
import { HttpExceptionDto, ValidationDto } from '@app/common/dtos';
import { PaginatedDto } from '@app/common/dtos/paginate.dto';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiExtraModels(PaginatedDto)
  @ApiOkResponse({
    description: 'Return all users as list',
    schema: {
      allOf: [
        { $ref: getSchemaPath(PaginatedDto) },
        {
          properties: {
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(User) },
            },
          },
        },
      ],
    },
  })
  @ApiForbiddenResponse({
    description: 'Access Forbidden',
    type: HttpExceptionDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: HttpExceptionDto,
  })
  async findAll(@Query() findUserDto: FindUserDto): Promise<User[]> {
    return await this.userService.findAll(findUserDto);
  }

  @Post()
  @ApiBody({ description: 'Create new user', type: CreateUserDto })
  @ApiCreatedResponse({ description: 'Create new user', type: User })
  @ApiBadRequestResponse({
    description: 'Validation Error',
    type: ValidationDto,
  })
  @ApiForbiddenResponse({
    description: 'Access Forbidden',
    type: HttpExceptionDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: HttpExceptionDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'user id number',
    required: true,
  })
  @ApiBadRequestResponse({
    description: 'Validation Error',
    type: ValidationDto,
  })
  @ApiOkResponse({ description: 'User details', type: User })
  @ApiForbiddenResponse({
    description: 'Access Forbidden',
    type: HttpExceptionDto,
  })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: HttpExceptionDto,
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ description: 'Update user details', type: UpdateUserDto })
  @ApiBadRequestResponse({
    description: 'Validation Error',
    type: ValidationDto,
  })
  @ApiOkResponse({ description: 'Updated user details', type: User })
  @ApiForbiddenResponse({
    description: 'Access Forbidden',
    type: HttpExceptionDto,
  })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: HttpExceptionDto,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiBody({ description: 'Soft delete a user', type: UpdateUserDto })
  @ApiNoContentResponse({ description: 'item is deleted ' })
  @ApiBadRequestResponse({
    description: 'Validation Error',
    type: ValidationDto,
  })
  @ApiForbiddenResponse({
    description: 'Access Forbidden',
    type: HttpExceptionDto,
  })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
    type: HttpExceptionDto,
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
