import {
  PostTags,
  Review,
  skillCategory,
} from "@components/app/components/items/items/types";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, firestore, storage } from "../firebaseConfig";
// Fetch posts for a given user ID
export const fetchPostsByUserId = async (userId: string) => {
  try {
    // Reference to the "posts" collection
    const postsRef = collection(firestore, "posts");

    // Create a query to find posts by the user ID
    const q = query(postsRef, where("userId", "==", userId));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map the results into an array
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching posts by user ID:", error);
    throw error;
  }
};

// Save the user's profile to Firestore
export const saveProfileToFirestore = async (profile: {
  name: string;
  bio: string;
  generation: string;
  photoUri: string | null;
}) => {
  try {
    // Get the current authenticated user
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    let profilePictureUrl = "";

    // Upload profile photo if provided
    if (profile.photoUri) {
      const response = await fetch(profile.photoUri); // Fetch the file from the URI
      const blob = await response.blob(); // Convert the URI to a Blob

      // Reference to the profile picture in storage
      const storageRef = ref(storage, `profile_pictures/${user.uid}`);

      // Upload the Blob to Firebase Storage
      await uploadBytes(storageRef, blob);

      // Retrieve the download URL
      profilePictureUrl = await getDownloadURL(storageRef);
    }

    // Define the updated user profile
    const userProfile = {
      name: profile.name,
      bio: profile.bio,
      generation: profile.generation,
      profilePicture: profilePictureUrl,
    };

    // Reference to the user's document in Firestore
    const userDocRef = doc(firestore, "users", user.uid);

    // Update the user's document with the profile data
    await updateDoc(userDocRef, userProfile);
  } catch (error) {
    console.error("Error saving profile to Firestore:", error);
    throw error;
  }
};

export const updateRecentCategories = async (skillCategory: skillCategory) => {
  try {
    const user = auth.currentUser; // Get the authenticated user

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    const userDocRef = doc(collection(firestore, "users"), user.uid); // Reference to user's document

    // Fetch the current user's recentCategories array
    const userDocSnap = await getDoc(userDocRef);
    if (!userDocSnap.exists()) {
      throw new Error("User document does not exist.");
    }

    const userData = userDocSnap.data(); // Get the user's data
    const recentCategories = userData.recentCategories || []; // Fetch recentCategories or default to an empty array

    // Check if the skillCategory already exists in the array
    const categoryExists = recentCategories.some(
      (category: skillCategory) => category.id === skillCategory.id
    );

    if (categoryExists) {
      console.log("The skillCategory already exists in recentCategories.");
      return; // Exit without making any changes
    }

    // Add the new skillCategory to the array
    await updateDoc(userDocRef, {
      recentCategories: arrayUnion(skillCategory), // Add the skillCategory to Firestore
    });

    console.log("Updated recentCategories successfully!");
  } catch (error) {
    console.error("Error updating recentCategories:", error);
  }
};

export const fetchCategories = async (): Promise<skillCategory[]> => {
  try {
    const categoryCollection = collection(firestore, "categories");
    const categorySnapshot = await getDocs(categoryCollection);

    // Map Firestore data to the skillCategory structure
    return categorySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as skillCategory[];
  } catch (error) {
    console.error("Error fetching categories from Firestore:", error);
    return []; // Return an empty array if there's an error
  }
};
export const fetchCategoryByName = async (
  name: string
): Promise<skillCategory[]> => {
  try {
    const categoryCollection = collection(firestore, "categories");
    const categoryQuery = query(categoryCollection, where("name", "==", name));
    const categorySnapshot = await getDocs(categoryQuery);

    // Map Firestore data to the skillCategory structure
    return categorySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as skillCategory[];
  } catch (error) {
    console.error("Error fetching category by name from Firestore:", error);
    return []; // Return an empty array if there's an error
  }
};
export const fetchCategoryById = async (
  id: string
): Promise<skillCategory | null> => {
  try {
    if (!id || typeof id !== "string")
      throw new Error(`Invalid category ID: ${id}`);

    const categoryRef = doc(firestore, "categories", id);
    const categorySnap = await getDoc(categoryRef);

    if (!categorySnap.exists()) {
      console.error(`Category with ID ${id} not found.`);
      return null;
    }

    const categoryData = categorySnap.data();

    // Provide default colors if missing
    return {
      id: categorySnap.id,
      startColor: categoryData?.startColor || "#FFB6C1", // Default to LightPink
      endColor: categoryData?.endColor || "#FFA07A", // Default to LightSalmon
      ...categoryData,
    } as skillCategory;
  } catch (error) {
    console.error("Error fetching category by ID from Firestore:", error);
    return null;
  }
};
export const fetchPostTags = async (): Promise<PostTags[]> => {
  try {
    const postTagsCollection = collection(firestore, "postTags");
    const postTagsSnapshot = await getDocs(postTagsCollection);

    // Map Firestore data to the skillCategory structure
    return postTagsSnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as PostTags[];
  } catch (error) {
    console.error("Error fetching postTags  from Firestore:", error);
    return []; // Return an empty array if there's an error
  }
};

export const fetchExampleInterests = async (): Promise<
  { category: string; items: string[] }[]
> => {
  try {
    const interestCollection = collection(firestore, "interests"); // Reference to Firestore collection
    const interestSnapshot = await getDocs(interestCollection); // Fetch snapshot of the collection

    // Structure the data
    const categoryData: { [key: string]: string[] } = {};

    // Iterate through documents in the collection
    interestSnapshot.docs.forEach((doc) => {
      const data = doc.data();
      Object.keys(data).forEach((category) => {
        if (!categoryData[category]) {
          categoryData[category] = []; // Initialize array if it doesn't exist
        }
        if (data[category]) {
          categoryData[category].push(data[category]); // Push items into the respective category
        }
      });
    });

    // Transform the categoryData into the desired format
    return Object.keys(categoryData).map((category) => ({
      category,
      items: categoryData[category],
    }));
  } catch (error) {
    console.error("Error fetching interests from Firestore:", error);
    return []; // Return an empty array if there's an error
  }
};

export const saveUserInterests = async (interests: string[]) => {
  try {
    const user = auth.currentUser; // Get the authenticated user

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    const userDocRef = doc(collection(firestore, "users"), user.uid); // Reference to the user's document

    // Fetch the current user's interests array
    const userDocSnap = await getDoc(userDocRef);
    if (!userDocSnap.exists()) {
      throw new Error("User document does not exist.");
    }

    const userData = userDocSnap.data(); // Get the user's data
    const currentInterests = userData.interests || []; // Fetch interests or default to an empty array

    // Filter out interests already in Firestore
    const newInterests = interests.filter(
      (interest) => !currentInterests.includes(interest)
    );

    if (newInterests.length === 0) {
      console.log("No new interests to add.");
      return; // Exit if there are no new interests to add
    }

    // Add new interests to the array
    await updateDoc(userDocRef, {
      interests: arrayUnion(...newInterests), // Use arrayUnion to avoid duplicates
    });

    console.log("Interests updated successfully!");
  } catch (error) {
    console.error("Error updating interests:", error);
  }
};

export const getUserInterests = async () => {
  try {
    const user = auth.currentUser; // Get the authenticated user

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    const userDocRef = doc(collection(firestore, "users"), user.uid); // Reference to the user's document

    // Fetch the current user's document
    const userDocSnap = await getDoc(userDocRef);
    if (!userDocSnap.exists()) {
      throw new Error("User document does not exist.");
    }

    const userData = userDocSnap.data(); // Retrieve the user's data
    const interests = userData.interests || []; // Get interests or return an empty array

    console.log("User interests retrieved successfully:", interests);
    return interests;
  } catch (error) {
    console.error("Error retrieving user interests:", error);
    return [];
  }
};

export const addSelectedCategoriesToUser = async (
  categories: skillCategory[]
) => {
  try {
    const user = auth.currentUser; // Get the authenticated user

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    const userDocRef = doc(firestore, "users", user.uid); // Reference to the user's document

    // Add categories to Firestore
    await updateDoc(userDocRef, {
      categories: arrayUnion(
        ...categories.map((category) => ({
          id: category.id,
          name: category.name,
          description: category.description,
          icon: category.icon,
          relatedSkills: category.relatedSkills,
          startColor: category.startColor,
          endColor: category.endColor,
        }))
      ), // Spread to avoid nested arrays
    });

    console.log(
      "Selected categories successfully added to the user's profile."
    );
  } catch (error) {
    console.error("Error adding selected categories to user:", error);
  }
};

export const getSelectedCategoriesFromUser = async () => {
  try {
    const user = auth.currentUser; // Get the authenticated user

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    const userDocRef = doc(firestore, "users", user.uid); // Reference to the user's document
    const userDoc = await getDoc(userDocRef); // Retrieve the user's document

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const categories = userData.categories || []; // Get the selected categories or return an empty array

      console.log("Selected categories retrieved successfully:", categories);
      return categories;
    } else {
      console.log("No user profile found.");
      return [];
    }
  } catch (error) {
    console.error("Error retrieving selected categories from user:", error);
    return [];
  }
};

export const addReviewToUser = async (
  userId: string,
  review: Review
): Promise<void> => {
  try {
    // Reference to the user's document in Firestore
    const userDocRef = doc(firestore, "users", userId);

    // Fetch existing user data
    const userSnap = await getDoc(userDocRef);
    if (!userSnap.exists()) {
      throw new Error("User does not exist");
    }

    const userData = userSnap.data();
    const reviews = userData.reviews || [];

    // Add the new review
    const updatedReviews = [...reviews, review];

    // Calculate the new average rating
    const totalRating = updatedReviews.reduce(
      (sum, rev) => sum + rev.rating,
      0
    );
    const averageRating = totalRating / updatedReviews.length;

    // Update the user's review list and rating in Firestore
    await updateDoc(userDocRef, {
      reviews: arrayUnion(review), // Add the review
      rating: averageRating, // Update the rating
    });

    console.log("Review added and rating updated successfully!");
  } catch (error) {
    console.error("Error updating user rating:", error);
    throw error;
  }
};
