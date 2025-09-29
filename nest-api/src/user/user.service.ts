import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/createUserInput';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAllUsers() : Promise<User[]> {
        const users = await this.userRepository.find();
        return users;
    }

    async createUser(data: CreateUserInput): Promise<User> {
        const user = this.userRepository.create()
        const userSaved = await this.userRepository.save(user);

        if (!userSaved) {
            throw new InternalServerErrorException('Problema para criar usuário.')
        }

        return userSaved;
    }
}
