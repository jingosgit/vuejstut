<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default border-0 shadow-sm">
              <h2 class="card-header">View Posts</h2>

              <div class="card-body">
                   <div class="row">
                        <div class="col-md-10"></div>
                        <div class="col-md-2">
                            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
                        </div>
                        </div><br />

                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Post Title</th>
                                <th>Post Content</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="post in posts" :key="post.id">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.body }}</td>
                                    <td>
                                        <router-link :to="{name: 'edit', params: { id: post.id }}" 
                                            class="btn btn-primary">Edit
                                        </router-link>
                                    <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {

        data(){
            return {
                posts:[]
            }
        },
        created() {
            //console.log('Component mounted.')
            let uri = 'http://localhost:8000/api/posts';
            this.axios.get(uri).then(response => {
                this.posts = response.data.data;
            });
        },
        methods:{
            deletePost(id){
               let uri = `http://localhost:8000/api/post/delete/${id}`;  
               this.axios.delete(uri)
               .then(response =>{
                   this.posts.splice(this.posts.indexOf(id),1);
               });
            }
        }
    }
</script>

