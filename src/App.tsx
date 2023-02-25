import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodItems from "./pages/FoodItems";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthProvider from "./providers/AuthProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp, { db } from "./firebase";
import { useDispatch } from "react-redux";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { setUser } from "./store/slices/userSlice";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <AuthProvider />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/food-items", element: <FoodItems /> },
        ],
    },
]);

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            getAuth(firebaseApp),
            async (user) => {
                if (user) {
                    let userDoc = await getDoc(doc(db, "users", user.uid));
                    let userData = userDoc.data();
                    if (!userDoc.exists()) {
                        userData = {
                            id: user.uid,
                            name: user.displayName,
                            email: user.email,
                            height: null,
                            weight: null,
                            dob: null,
                        };
                        try {
                            await setDoc(
                                doc(collection(db, "users"), user.uid),
                                userData
                            );
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    dispatch(
                        setUser({
                            id: user.uid,
                            ...userData,
                            photoURL: user.photoURL,
                        })
                    );
                } else {
                    dispatch(setUser(null));
                }
            }
        );
        return () => unsubscribe();
    }, []);
    return <RouterProvider router={router} />;
};

export default App;
