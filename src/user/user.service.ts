import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async createUser(data: {name: string; email: string; password: string; start_time: string; end_time: string; status: number}): Promise<User> {
    return this.prisma.user.create({
        data:{
            name:data.name,
            email:data.email,
            password:data.password,
            start_time:data.start_time,
            end_time:data.end_time,
            status:data.status,
        },
    }); 
}   
}
