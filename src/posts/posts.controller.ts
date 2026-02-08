import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import type { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService) {
    }

    // localhost:3000/posts
    // localhost:3000/posts?search=getting
    @Get()
    findAll(@Query('search') search?: string): PostInterface[] {
        const getAllPosts = this.postsService.findAll();

        if(search) {
            return getAllPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
        }
        return getAllPosts;
    }

    // localhost:3000/posts/4
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) : PostInterface {
        return this.postsService.findOne(id);
    }

    // localhost:3000/posts : POST request 
    // createPostData = 
    // {
    //     "title": "Post data verification2",
    //     "content": "If your app is slow, users do not care how good your UI or logic is.",
    //     "authorName": "Sayan"
    // }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPostData: Omit<PostInterface, 'id' | 'createdAt'>) : PostInterface {
        return this.postsService.create(createPostData);
    }

    // localhost:3000/posts/1 : PUT request
    // updatePostData = 
    // {
    //     "title": "Update data verification2",
    //     "content": "If your app is slow, users do not care how good your UI or logic is.",
    //     "authorName": "Sayan"
    // }
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePostData:Partial< Omit<PostInterface, 'id' | 'createdAt'>>): PostInterface {
        return this.postsService.update(id, updatePostData);
    }

    // localhost:3000/posts/1 : DELETE request
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) : void {
        this.postsService.delete(id);
    }
}
