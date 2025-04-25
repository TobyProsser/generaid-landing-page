import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../src/app/components/items/types";
import { auth, firestore } from "../src/firebase/firebaseConfig";

const useUsersInCity = () => {
  const [users, setUsers] = useState<User[]>([]); // Specify the type for `users`
  const [interests, setInterests] = useState<string[]>([]); // Store first interests
  const [userCity, setUserCity] = useState<string | null>(null); // Store the current user's city
  const [loading, setLoading] = useState(true); // Track the loading state
  const [error, setError] = useState<string | null>(null); // Store any error encountered

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get the current user
        const currentUser = auth.currentUser;
        if (!currentUser) {
          throw new Error("No user is logged in.");
        }

        // Fetch the current user's city
        const userDocRef = collection(firestore, "users");
        const currentUserQuery = query(
          userDocRef,
          where("id", "==", currentUser.uid) // Fetch the logged-in user's data
        );
        const currentUserSnapshot = await getDocs(currentUserQuery);

        if (currentUserSnapshot.empty) {
          throw new Error("User document not found.");
        }

        const currentUserData = currentUserSnapshot.docs[0].data();
        const city = currentUserData.city;

        if (!city) {
          throw new Error("User's city information is missing.");
        }

        // Set the current user's city
        setUserCity(city);

        // Fetch users in the same city
        const usersQuery = query(
          userDocRef,
          where("city", "==", city) // Filter users by city
        );
        const userSnapshots = await getDocs(usersQuery);

        // Map the results into a usable array
        const fetchedUsers = userSnapshots.docs.map((doc) => {
          const userData = doc.data();
          const firstInterest = userData.interests?.[0]; // Extract first interest if it exists

          if (firstInterest) {
            setInterests((prev) => [...prev, firstInterest]); // Update interests state
          }

          return {
            id: doc.id,
            ...userData, // Preserve other user properties
          } as User; // Ensure correct typing
        });

        setUsers(fetchedUsers);
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

    fetchUsers();
  }, []); // Dependency array is empty to run the hook once on mount

  return { users, interests, userCity, loading, error }; // Return users, interests, current user's city, and loading/error states
};

export default useUsersInCity;
