import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindUserDto } from '@app/modules/user/dto/find-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(findUserDto: FindUserDto): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number, relations: string[] = [], throwsException = false) {
    return await this.userRepository
      .findOne({
        where: { id },
        relations,
      })
      .then((entity) => {
        if (!entity && throwsException) {
          return Promise.reject(new NotFoundException('Entity not found.'));
        }

        return Promise.resolve(entity ? entity : null);
      })
      .catch((error) => Promise.reject(error));
  }

  async create(createUserDto: CreateUserDto, relations: string[] = []) {
    return await this.userRepository
      .save(createUserDto)
      .then(async (entity) => await this.findOne((entity as any).id, relations))
      .catch((error) => Promise.reject(error));
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    relations: string[] = [],
  ) {
    return await this.userRepository
      .update(id, updateUserDto)
      .then(async () => await this.findOne(id, relations))
      .catch((error) => Promise.reject(error));
  }

  async remove(id: number) {
    return await this.userRepository
      .softDelete(id)
      .then(async () => {
        return (await this.findOne(id)) == null;
      })
      .catch((error) => Promise.reject(error));
  }
}
