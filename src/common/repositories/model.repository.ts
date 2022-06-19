import { plainToClass } from 'class-transformer';
import { DeepPartial, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { ModelSerializer } from '@app/common/serializers/model.serializer';

export class ModelRepository<
  T,
  K extends ModelSerializer,
> extends Repository<T> {
  async showModel(
    id: string,
    relations: string[] = [],
    throwsException = false,
  ): Promise<K | null> {
    return await this.findOne({
      where: {
        id,
      },
      relations,
    })
      .then((model) => {
        if (!model && throwsException) {
          return Promise.reject(new NotFoundException('Data not found.'));
        }

        return Promise.resolve(model ? this.transform(model) : null);
      })
      .catch((error) => Promise.reject(error));
  }

  async createModel(
    inputs: DeepPartial<T>,
    relations: string[] = [],
  ): Promise<K> {
    return this.save(inputs)
      .then(async (model) => await this.showModel((model as any).id, relations))
      .catch((error) => Promise.reject(error));
  }

  async updateModel(
    id: string,
    inputs: QueryDeepPartialEntity<T>,
    relations: string[] = [],
  ): Promise<K> {
    return this.update(id, inputs)
      .then(async () => await this.showModel(id, relations))
      .catch((error) => Promise.reject(error));
  }

  async deleteModel(id: string): Promise<boolean> {
    return this.softDelete(id)
      .then(async () => {
        return (await this.findOne(id)) == null;
      })
      .catch((error) => Promise.reject(error));
  }

  transform(model: T, transformOptions = {}): K {
    return plainToClass(ModelSerializer, model, transformOptions) as K;
  }

  transformMany(entities: T[], transformOptions = {}): K[] {
    return entities.map((model) => this.transform(model, transformOptions));
  }
}
