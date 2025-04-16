import { Post } from "@/components/types";
import { firestore } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const fetchCityPosts = async (city: string) => {
  try {
    let allPosts: Post[] = [];

    // Get all category IDs inside `posts/${city}/categories`
    const categoriesRef = collection(firestore, `posts/${city}/categories`);
    const categoryDocs = await getDocs(categoriesRef);
    const categoryIDs = categoryDocs.docs.map((doc) => doc.id);

    console.log(`Found ${categoryIDs.length} categories in posts/${city}`);

    // Fetch posts from each category subcollection
    const categoryPromises = categoryIDs.map(async (categoryId) => {
      const postsRef = collection(
        firestore,
        `posts/${city}/categories/${categoryId}/posts`
      );
      const postDocs = await getDocs(postsRef);

      postDocs.docs.forEach((doc) => {
        const data = doc.data();
        allPosts.push({
          id: doc.id,
          userId: data.userId || "",
          city: city,
          title: data.title || "",
          description: data.description || "",
          createdAt:
            data.createdAt && data.createdAt.toDate
              ? data.createdAt.toDate()
              : new Date(),
          price: data.price || 0,
          skillCategoryId: categoryId,
          timestamp:
            data.timestamp && data.timestamp.toDate ? data.timestamp : 0,
        });
      });
    });

    await Promise.all(categoryPromises);

    // Sort posts from most recent to oldest
    allPosts.sort((a, b) => {
      const timeA =
        typeof a.timestamp === "number"
          ? a.timestamp
          : a.timestamp?.toMillis() || 0;
      const timeB =
        typeof b.timestamp === "number"
          ? b.timestamp
          : b.timestamp?.toMillis() || 0;
      return timeB - timeA;
    });

    return allPosts;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Failed to fetch posts for ${city}:`, error.message);
      return [];
    } else {
      console.error(`Unexpected error fetching posts for ${city}:`, error);
    }
  }
};

export default fetchCityPosts;
