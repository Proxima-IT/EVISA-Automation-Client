import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    return (
        <div className="mt-30 max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-6">
        <div className="flex flex-col items-center">
            {/* Profile Image */}
            <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="profile"
            className="w-32 h-32 p-2 rounded-full object-cover border-4 border-[#1a3c4c] shadow-md"
            />
            <h2 className="mt-4 text-2xl font-bold">{user.displayName || "No Name"}</h2>
            <p className="text-gray-600">{user.email}</p>
        </div>

        <div className="divider my-4"></div>

        {/* Extra Info */}
        <div className="space-y-2">
            <p className="text-lg">
                <span className="font-semibold">UID:</span> {user.uid}
            </p>
            <p className="text-lg">
                <span className="font-semibold">Email Verified:</span>{" "}
                {user.emailVerified ? "✅ Yes" : "❌ No"}
            </p>
            <p className="text-lg">
                <span className="font-semibold">Provider:</span>{" "}
                {user.providerData[0]?.providerId}
            </p>
            <p className="text-lg">
                <span className="font-semibold">Account Created on:</span>{" "}
                {new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </p>
        </div>
        </div>
    );
};

export default Profile;
