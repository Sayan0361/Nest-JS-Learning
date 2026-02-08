import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { POSTS } from './data/posts.data';

@Injectable()
export class PostsService {
    private posts: Post[] = POSTS; // hardcoded data

    findAll(): Post[] {
        return this.posts;
    }

    findOne(id: number) : Post {
        const singlePost = this.posts.find(post => post.id === id);

        // NotFoundException() -> Nestjs built in exception
        if(!singlePost) throw new NotFoundException(`Post with this ID ${id} doesnt exist`);

        return singlePost;
    }

    // nextId is the highest id + 1 (not length of posts)
    private getNextId(): number {
        return this.posts.length > 0 ?
            Math.max(...this.posts.map(post => post.id)) + 1 : 1;
    }
    
    // From the PostData, omit id and createdAt fields as it is system generated
    create(createPostData: Omit<Post, 'id' | 'createdAt'>): Post {
        const newPost : Post = {
            id: this.getNextId(),
            ...createPostData,
            createdAt: new Date()
        }

        this.posts.push(newPost);
        return newPost;
    }

    update(id: number, updatePostData: Partial< Omit<Post, 'id' | 'createdAt'>>) : Post {
        const currIndex = this.posts.findIndex(post => post.id === id);
        if(currIndex === -1) {
            throw new NotFoundException(`Post with this ID ${id} doesnt exist`);
        }

        this.posts[currIndex] = {
            ...this.posts[currIndex],
            ...updatePostData,
            updatedAt: new Date()
        }

        return this.posts[currIndex];
    }

    delete(id: number) : { message: string} {
        const deleteIndex = this.posts.findIndex(post => post.id === id);
        if(deleteIndex === -1) {
            throw new NotFoundException(`Post with this ID ${id} doesnt exist`);
        }

        // Go to index deleteIndex. Remove exactly 1 element
        // array.splice(startIndex, deleteCount, ...itemsToInsert)
        this.posts.splice(deleteIndex, 1);
        return {
            message: `Post with ID ${id} has been deleted`
        };
    }
}
