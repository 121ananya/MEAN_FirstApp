import{ Component,Input, OnDestroy, OnInit }from "@angular/core";
import{ Post }from '../post.model';
import { Subscription } from "rxjs";
import { PostsService } from "../posts.service";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  @Input() posts: Post[]=[];
 // postsService:PostsService
 private postsSub!: Subscription;

  constructor(public postsService:PostsService){}

    ngOnInit()
    {
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[])=>
      {
        this.posts=posts;

      });
    }
  ngOnDestroy()
  {
    this.postsSub.unsubscribe();
  }

  onDelete(item:any){
const abc = item;
  }
}

