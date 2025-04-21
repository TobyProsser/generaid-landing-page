import { Post } from "@components/app/components/items/items/types";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebaseConfig";

const useFetchPosts = (skillCategoryId: string, userCity: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log(
          "use find has id:",
          skillCategoryId,
          " and city ",
          userCity
        );

        const postsRef = await collection(
          firestore,
          `posts/${userCity}/categories/${skillCategoryId}/posts`
        );
        const postDocs = await getDocs(postsRef);
        const postsData: Post[] = postDocs.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            userId: data.userId || "",
            city: data.city || "",
            title: data.title || "",
            description: data.description || "",

            createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
            price: data.price || 0,
            skillCategoryId: data.skillCategoryId || "",
            timestamp: data.timestamp || 0,
          } as Post;
        });
        console.log("post data: " + postsData.length);
        setPosts(postsData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch posts.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [skillCategoryId, userCity]);

  return { posts, loading, error };
};

export default useFetchPosts;
