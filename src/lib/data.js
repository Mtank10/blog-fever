import { connectDB } from "./utils"
import { Post, User } from "./models";
import { unstable_noStore } from "next/cache";
export const getPosts = async () =>{
    try {
        connectDB();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch data.")
    } 
}

export const getPost = async (slug) =>{
    try {
        connectDB();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch data.")
    } 
}

export const getUser = async (id) =>{
    unstable_noStore();
    try {
        connectDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch data.")
    } 
}

export const getUsers = async () =>{
    try {
        connectDB();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch data.")
    } 
}
