import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Post } from "../constants/types";
import { auth, firestore } from "../firebase/firebaseConfig";

export const useFetchUserPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Get the current user's UID
        const user = auth.currentUser;
        if (user) {
          const usersRef = collection(firestore, "users");
          const userQuery = query(usersRef, where("id", "==", user.uid)); // Assuming "id" is the correct field for userId
          const querySnapshot = await getDocs(userQuery);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0]; // Get the first matched document
            const userId = userDoc.id; // Firestore document ID for the user

            console.log("User found with ID:", userId);

            // Reference the 'posts' subcollection for the matched user
            const postsRef = collection(firestore, `users/${userId}/posts`);
            const postsSnapshot = await getDocs(postsRef);

            if (!postsSnapshot.empty) {
              const userPosts = postsSnapshot.docs.map((postDoc) => ({
                id: postDoc.id,
                ...(postDoc.data() as Omit<Post, "id">), // Assuming Post type exists
              }));

              //console.log("Fetched Posts:", userPosts);
              setPosts(userPosts); // Set state with fetched posts
            } else {
              console.log("No posts found for this user.");
            }
          } else {
            console.log("No matching user document found!");
          }
        } else {
          console.log("User not authenticated.");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
