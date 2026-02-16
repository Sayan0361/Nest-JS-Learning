import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { PostsService } from "../services/posts.service";


//A pipe is a function that runs before your controller method and can do only two things:
    // Transform data : change the incoming value or block incoming request
    // Validate data : validate incoming request
@Injectable()
export class PostExistsPipe implements PipeTransform{
    constructor(private readonly postsService: PostsService){}

    transform(value: any, metadata: ArgumentMetadata) {
        try{
            this.postsService.findOne(value);
        }
        catch(e){
            throw new NotFoundException(`Post with ID ${value} not found`)
        }
        return value;
    }
}