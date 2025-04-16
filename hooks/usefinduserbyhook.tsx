import { User } from "@/components/types";
import { firestore } from "@/firebaseConfig"; // Adjust the path to your Firebase config
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

/**
 * Custom hook to find a user by their ID in Firestore.
 * @param userId - The ID of the user to search for.
 * @returns {object} Contains user data, loading state, and error state.
 */
const useFindUserByID = (userId: string) => {
  const [user, setUser] = useState<User | null>(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to handle errors

  useEffect(() => {
    const fetchUserByID = async () => {
      try {
        setLoading(true);
        setError(null);

        // Reference to the "users" collection in Firestore
        const userDocRef = collection(firestore, "users");

        // Query to find user by ID
        const userQuery = query(userDocRef, where("id", "==", userId));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
          throw new Error("User not found.");
        }

        // Map the user data from the Firestore document
        const userData = userSnapshot.docs[0].data();
        setUser({
          id: userSnapshot.docs[0].id,
          ...userData, // Spread other user properties
        } as User);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching the user.");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserByID();
    }
  }, [userId]); // Run the effect whenever userId changes

  return { user, loading, error }; // Return user data, loading state, and error
};

export default useFindUserByID;
