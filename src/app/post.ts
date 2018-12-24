import { Category } from "./category";
import { Tag } from "./tag";

export class Post{
    postId ? :number;
    postTitle ? :string;
    postTitleUrl ? :string;
    postContent ? :string;
    postImage ? :String;
    postCategory ? :Category;
    tags ? :Tag[];
    postView ? :number;
    postDate ? :Date;
}