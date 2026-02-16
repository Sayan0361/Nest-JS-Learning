import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities/post.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostEntity)
        private postsRepository: Repository<PostEntity>
    ){}


    async findAll(): Promise<PostEntity[]> {
        return this.postsRepository.find();
    }

    async findOne(id: number) : Promise<PostEntity> {
        const singlePost = await this.postsRepository.findOneBy({id});
        // NotFoundException() -> Nestjs built in exception
        if(!singlePost) throw new NotFoundException(`Post with this ID ${id} doesnt exist`);

        return singlePost;
    }

    async create(createPostData: CreatePostDto): Promise<PostEntity> {
        const newPost : PostEntity = this.postsRepository.create({
            title: createPostData.title,
            content: createPostData.content,
            authorName: createPostData.authorName
        });

        return this.postsRepository.save(newPost);
    }

    async update(id: number, updatePostData: UpdatePostDto) : Promise<PostEntity> {
        const findPostToUpdate = await this.findOne(id);

        if(updatePostData.title){
            findPostToUpdate.title = updatePostData.title;
        }
        if(updatePostData.content){
            findPostToUpdate.content = updatePostData.content;
        }
        if(updatePostData.authorName){
            findPostToUpdate.authorName = updatePostData.authorName;
        }
        
        return this.postsRepository.save(findPostToUpdate);
    }

    async delete(id: number) : Promise<void> {
        const findPostToDelete = await this.findOne(id);

        await this.postsRepository.remove(findPostToDelete);
    }
}
