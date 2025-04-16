import { skillCategory } from "@/components/types";
import { auth, firestore } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const fetchUserRecentCategories = async (): Promise<skillCategory[]> => {
  try {
    const user = auth.currentUser; // Get the currently signed-in user
    if (!user) {
      console.error("No user is signed in.");
      return [];
    }

    const usersRef = collection(firestore, "users");
    const userQuery = query(usersRef, where("id", "==", user.uid)); // Assuming "id" maps to "user.uid"
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return userData.recentCategories || [];
    } else {
      console.log("No matching user document found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching user recent categories:", error);
    return [];
  }
};
