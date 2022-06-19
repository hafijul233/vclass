import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '@app/modules/user/user.repository';
import { UserSerializer } from '@app/modules/user/serializers/user.serializer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    return this.userRepository.transformMany(await this.userRepository.find());
  }

  async findOne(
    id: string,
    relations: string[] = [],
    throwsException = false,
  ): Promise<UserSerializer | null> {
    return await this.userRepository.showModel(id, relations, throwsException);
  }

  async create(createUserDto: CreateUserDto): Promise<UserSerializer> {
    return await this.userRepository.createModel(createUserDto);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserSerializer> {
    return await this.userRepository.updateModel(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.deleteModel(id);
  }
}
