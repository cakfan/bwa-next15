import AddPostForm from "./form";

export default function AddPostPage() {
  return (
    <div className="mx-auto my-5 flex w-1/2 flex-col">
      <h2 className="text-3xl font-bold">Add New Post</h2>
      <AddPostForm />
    </div>
  );
}
